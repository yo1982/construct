
import { Project, TeamMember, InventoryItem } from './types';

export const PROJECTS_DATA: Project[] = [
  { id: 'PROJ-001', name: 'Downtown High-Rise', client: 'Skyline Builders', status: 'In Progress', progress: 65, startDate: '2023-08-01', endDate: '2024-12-15' },
  { id: 'PROJ-002', name: 'Westwood Mall Electrical', client: 'Oakridge Properties', status: 'Completed', progress: 100, startDate: '2023-05-10', endDate: '2023-11-20' },
  { id: 'PROJ-003', name: 'Green Valley Substation', client: 'City Power Corp', status: 'Planning', progress: 10, startDate: '2024-03-01', endDate: '2025-01-30' },
  { id: 'PROJ-004', name: 'Northbridge Hospital Wing', client: 'Healthcare Solutions', status: 'On Hold', progress: 40, startDate: '2023-09-15', endDate: '2024-08-01' },
];

export const TEAM_DATA: TeamMember[] = [
  { id: 'TM-01', name: 'Alice Johnson', role: 'Project Manager', avatarUrl: 'https://picsum.photos/seed/alice/100', currentProject: 'Downtown High-Rise', status: 'Assigned' },
  { id: 'TM-02', name: 'Bob Williams', role: 'Lead Engineer', avatarUrl: 'https://picsum.photos/seed/bob/100', currentProject: 'Downtown High-Rise', status: 'Assigned' },
  { id: 'TM-03', name: 'Charlie Brown', role: 'Electrician', avatarUrl: 'https://picsum.photos/seed/charlie/100', currentProject: 'Westwood Mall Electrical', status: 'Available' },
  { id: 'TM-04', name: 'Diana Miller', role: 'Electrician', avatarUrl: 'https://picsum.photos/seed/diana/100', currentProject: 'Downtown High-Rise', status: 'Assigned' },
  { id: 'TM-05', name: 'Ethan Davis', role: 'Apprentice', avatarUrl: 'https://picsum.photos/seed/ethan/100', currentProject: 'Downtown High-Rise', status: 'Assigned' },
  { id: 'TM-06', name: 'Fiona Garcia', role: 'Lead Engineer', avatarUrl: 'https://picsum.photos/seed/fiona/100', currentProject: 'Green Valley Substation', status: 'Assigned' },
];

export const INVENTORY_DATA: InventoryItem[] = [
  { id: 'INV-1001', name: '12/2 NM-B Wire', sku: 'WIR-122-NMB', quantity: 5000, unit: 'feet', location: 'Warehouse A', lastUpdated: '2024-07-20' },
  { id: 'INV-1002', name: '14/2 NM-B Wire', sku: 'WIR-142-NMB', quantity: 8500, unit: 'feet', location: 'Warehouse A', lastUpdated: '2024-07-18' },
  { id: 'INV-2015', name: 'Single-Gang Outlet Box', sku: 'BOX-SGL-01', quantity: 850, unit: 'pieces', location: 'Warehouse B', lastUpdated: '2024-07-21' },
  { id: 'INV-3005', name: '20A Circuit Breaker', sku: 'BRK-20A-SP', quantity: 150, unit: 'pieces', location: 'Warehouse C', lastUpdated: '2024-07-15' },
  { id: 'INV-3010', name: 'GFCI Outlet', sku: 'OUT-GFC-WH', quantity: 400, unit: 'pieces', location: 'Warehouse B', lastUpdated: '2024-07-20' },
  { id: 'INV-4022', name: '1-inch EMT Conduit', sku: 'CON-100-EMT', quantity: 2000, unit: 'feet', location: 'Warehouse A', lastUpdated: '2024-07-19' },
];
