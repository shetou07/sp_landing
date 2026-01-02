
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HelpCenter from './pages/HelpCenter';
import TicketStatus from './pages/TicketStatus';
import CreateTicket from './pages/CreateTicket';
import TicketDetails from './pages/TicketDetails';
import Contact from './pages/Contact';

// Placeholder Login Component
const LoginPlaceholder: React.FC<{ type: string }> = ({ type }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] p-10 text-center animate-in fade-in zoom-in duration-300">
    <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
      <span className="material-symbols-outlined text-4xl">login</span>
    </div>
    <h2 className="text-3xl font-black mb-2 capitalize">{type} Login</h2>
    <p className="text-text-secondary dark:text-gray-400 max-w-md mb-8">
      Welcome back to Student Pesa. This is a placeholder for the {type} authentication portal.
    </p>
    <div className="w-full max-w-sm space-y-4">
      <div className="h-12 bg-gray-100 dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-white/10"></div>
      <div className="h-12 bg-gray-100 dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-white/10"></div>
      <button className="w-full h-12 bg-primary text-black font-bold rounded-lg opacity-50 cursor-not-allowed">Sign In</button>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/tickets" element={<TicketStatus />} />
            <Route path="/tickets/new" element={<CreateTicket />} />
            <Route path="/tickets/:id" element={<TicketDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<div className="p-10 text-center">Dashboard Placeholder</div>} />
            
            {/* Login Routes */}
            <Route path="/login/parent" element={<LoginPlaceholder type="parent" />} />
            <Route path="/login/agent" element={<LoginPlaceholder type="agent" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
