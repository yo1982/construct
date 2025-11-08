
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-20 flex items-center px-8 border-b border-border bg-secondary">
      <h1 className="text-2xl font-bold text-text-primary">{title}</h1>
    </header>
  );
};

export default Header;
