
import React from 'react';
import { Page } from '../types';
import { DashboardIcon, ProjectsIcon, TeamsIcon, InventoryIcon, CalculatorIcon } from './icons';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const navItems = [
  { page: Page.Dashboard, icon: DashboardIcon },
  { page: Page.Projects, icon: ProjectsIcon },
  { page: Page.Teams, icon: TeamsIcon },
  { page: Page.Inventory, icon: InventoryIcon },
  { page: Page.Calculator, icon: CalculatorIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <aside className="w-16 md:w-64 bg-secondary flex flex-col h-screen fixed top-0 left-0 border-r border-border">
      <div className="flex items-center justify-center md:justify-start md:pl-6 h-20 border-b border-border">
        <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center font-bold text-white">C</div>
        <h1 className="hidden md:block ml-3 text-xl font-bold text-text-primary">ConstructElec</h1>
      </div>
      <nav className="flex-grow pt-6">
        <ul>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.page;
            return (
              <li key={item.page} className="px-3 md:px-6 mb-2">
                <button
                  onClick={() => setActivePage(item.page)}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-text-secondary hover:bg-gray-800 hover:text-text-primary'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="hidden md:block ml-4 font-semibold">{item.page}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-6 border-t border-border">
        <div className="flex items-center">
            <img src="https://picsum.photos/seed/admin/40" alt="Admin" className="w-10 h-10 rounded-full"/>
            <div className="hidden md:block ml-4">
                <p className="font-semibold text-text-primary">Admin User</p>
                <p className="text-sm text-text-secondary">admin@constructelec.pro</p>
            </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
