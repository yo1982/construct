
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { PROJECTS_DATA, TEAM_DATA, INVENTORY_DATA } from '../constants';
import { ProjectsIcon, TeamsIcon, InventoryIcon } from '../components/icons';

const Dashboard: React.FC = () => {
  const projectStatusData = PROJECTS_DATA.reduce((acc, project) => {
    const status = project.status;
    const existing = acc.find(item => item.name === status);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ name: status, count: 1 });
    }
    return acc;
  }, [] as { name: string; count: number }[]);

  const lowStockItems = INVENTORY_DATA.filter(item => item.quantity < 200).length;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-secondary p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <div className="p-3 bg-blue-500/20 rounded-lg">
                <ProjectsIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-text-secondary">Active Projects</p>
              <p className="text-2xl font-bold text-text-primary">{PROJECTS_DATA.filter(p => p.status === 'In Progress').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <div className="p-3 bg-green-500/20 rounded-lg">
                <TeamsIcon className="w-6 h-6 text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-text-secondary">Available Team Members</p>
              <p className="text-2xl font-bold text-text-primary">{TEAM_DATA.filter(t => t.status === 'Available').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <div className="p-3 bg-red-500/20 rounded-lg">
                <InventoryIcon className="w-6 h-6 text-red-400" />
            </div>
            <div className="ml-4">
              <p className="text-text-secondary">Low Stock Items</p>
              <p className="text-2xl font-bold text-text-primary">{lowStockItems}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-4 text-text-primary">Project Status Overview</h2>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={projectStatusData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="name" stroke="#a0a0a0" />
              <YAxis stroke="#a0a0a0" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  borderColor: '#2a2a2a',
                  color: '#f0f0f0'
                }}
                cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
              />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
