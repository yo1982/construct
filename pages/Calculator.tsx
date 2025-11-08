
import React, { useState } from 'react';
import { calculateEquipment } from '../services/geminiService';
import { CalculatedEquipment } from '../types';

const Calculator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<CalculatedEquipment[] | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError("Please enter a project description.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const equipmentList = await calculateEquipment(prompt);
      setResults(equipmentList);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const examplePrompt = "Calculate the materials for a standard 200 sq ft bedroom electrical rough-in. It needs 4 outlets, one ceiling fan box, and a single-pole switch by the door. The circuit run is about 50 feet from the panel.";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-secondary p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold mb-1">AI Equipment Calculator</h2>
        <p className="text-text-secondary mb-6">Describe your project, and our AI will generate a bill of materials.</p>
        
        <form onSubmit={handleSubmit}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Calculate materials for a small kitchen remodel..."
            className="w-full h-40 p-4 bg-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition-shadow text-text-primary resize-none"
            disabled={isLoading}
          />
          <div className="flex justify-between items-center mt-4">
            <button type="button" onClick={() => setPrompt(examplePrompt)} className="text-sm text-accent hover:underline" disabled={isLoading}>
              Use example
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calculating...
                </div>
              ) : 'Calculate'}
            </button>
          </div>
        </form>
      </div>

      {error && (
        <div className="mt-6 bg-red-500/20 border border-red-500/50 text-red-300 p-4 rounded-lg">
          <p><span className="font-bold">Error:</span> {error}</p>
        </div>
      )}

      {results && (
        <div className="mt-8 bg-secondary rounded-lg border border-border overflow-hidden">
          <h3 className="p-4 text-lg font-semibold border-b border-border">Calculation Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-primary/50">
                <tr>
                  <th className="p-4 font-semibold">Equipment/Material</th>
                  <th className="p-4 font-semibold">Quantity</th>
                  <th className="p-4 font-semibold">Unit</th>
                  <th className="p-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {results.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4">{item.quantity}</td>
                    <td className="p-4 text-text-secondary">{item.unit}</td>
                    <td className="p-4 text-text-secondary">{item.notes || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
