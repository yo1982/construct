
export enum Page {
  Dashboard = 'Dashboard',
  Projects = 'Projects',
  Teams = 'Teams',
  Inventory = 'Inventory',
  Calculator = 'Calculator'
}

export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
  progress: number;
  startDate: string;
  endDate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'Project Manager' | 'Lead Engineer' | 'Electrician' | 'Apprentice';
  avatarUrl: string;
  currentProject: string;
  status: 'Available' | 'Assigned' | 'On Leave';
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  unit: string;
  location: string;
  lastUpdated: string;
}

export interface CalculatedEquipment {
  name: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface EquipmentAPIResponse {
  equipment: CalculatedEquipment[];
}
