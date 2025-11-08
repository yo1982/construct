
import { GoogleGenAI, Type } from "@google/genai";
import { EquipmentAPIResponse, CalculatedEquipment } from '../types';

const equipmentSchema = {
  type: Type.OBJECT,
  properties: {
    equipment: {
      type: Type.ARRAY,
      description: "A list of required equipment for the project.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
            description: "Name of the equipment or material (e.g., '12/2 NM-B Wire').",
          },
          quantity: {
            type: Type.NUMBER,
            description: "The total quantity required.",
          },
          unit: {
            type: Type.STRING,
            description: "The unit of measurement for the quantity (e.g., 'feet', 'pieces', 'boxes').",
          },
          notes: {
            type: Type.STRING,
            description: "Optional notes, specifications, or reasoning for the calculation.",
          },
        },
        required: ['name', 'quantity', 'unit'],
      },
    },
  },
  required: ['equipment'],
};

export const calculateEquipment = async (prompt: string): Promise<CalculatedEquipment[]> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        systemInstruction: "You are an AI assistant for a construction and electrical company named ConstructElec Pro. Your role is to act as an expert electrical engineer. Given a project description, you must calculate the required equipment, quantities, and dimensions. You must provide your response in the specified JSON format. Do not include any explanatory text or markdown formatting, just the raw JSON object.",
        responseMimeType: "application/json",
        responseSchema: equipmentSchema,
      },
    });
    
    const responseText = response.text.trim();
    const parsedJson: EquipmentAPIResponse = JSON.parse(responseText);

    return parsedJson.equipment;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to get calculation from AI: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the AI.");
  }
};
