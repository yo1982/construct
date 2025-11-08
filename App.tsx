
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Inventory from './pages/Inventory';
import Calculator from './pages/Calculator';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Dashboard);

  const renderPage = () => {
    switch (activePage) {
      case Page.Dashboard:
        return <Dashboard />;
      case Page.Projects:
        return <Projects />;
      case Page.Teams:
        return <Teams />;
      case Page.Inventory:
        return <Inventory />;
      case Page.Calculator:
        return <Calculator />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-primary">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 ml-16 md:ml-64">
        <Header title={activePage} />
        <div className="p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;
