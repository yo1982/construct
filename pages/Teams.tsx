
import React from 'react';
import { TEAM_DATA } from '../constants';
import { TeamMember } from '../types';

const getStatusColor = (status: TeamMember['status']) => {
  switch (status) {
    case 'Assigned': return 'text-blue-400';
    case 'Available': return 'text-green-400';
    case 'On Leave': return 'text-yellow-400';
  }
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-secondary p-6 rounded-lg border border-border flex flex-col items-center text-center transition-transform transform hover:-translate-y-1">
    <img src={member.avatarUrl} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-2 border-accent" />
    <h3 className="text-lg font-semibold text-text-primary">{member.name}</h3>
    <p className="text-accent font-medium">{member.role}</p>
    <p className="text-sm text-text-secondary mt-2">Project: {member.currentProject}</p>
    <p className={`text-sm font-bold mt-1 ${getStatusColor(member.status)}`}>{member.status}</p>
  </div>
);

const Teams: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {TEAM_DATA.map(member => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default Teams;
