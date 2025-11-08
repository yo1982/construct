
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'Completed': return 'bg-green-500/20 text-green-400';
    case 'In Progress': return 'bg-blue-500/20 text-blue-400';
    case 'On Hold': return 'bg-yellow-500/20 text-yellow-400';
    case 'Planning': return 'bg-purple-500/20 text-purple-400';
  }
};

const Projects: React.FC = () => {
  return (
    <div className="bg-secondary rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-secondary border-b border-border">
            <tr>
              <th className="p-4 font-semibold">Project Name</th>
              <th className="p-4 font-semibold">Client</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Progress</th>
              <th className="p-4 font-semibold">End Date</th>
            </tr>
          </thead>
          <tbody>
            {PROJECTS_DATA.map((project, index) => (
              <tr key={project.id} className={`border-b border-border ${index === PROJECTS_DATA.length - 1 ? 'border-b-0' : ''}`}>
                <td className="p-4 font-medium">{project.name}</td>
                <td className="p-4 text-text-secondary">{project.client}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
                      <div className="bg-accent h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                </td>
                <td className="p-4 text-text-secondary">{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
