
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_TICKETS } from '../constants';

const TicketStatus: React.FC = () => {
  return (
    <div className="flex-grow px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full fade-in">
      <nav aria-label="Breadcrumb" className="flex mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link to="/" className="text-slate-500 hover:text-primary text-sm font-medium">Home</Link></li>
          <li><span className="text-slate-400 text-sm">/</span></li>
          <li><Link to="/help" className="text-slate-500 hover:text-primary text-sm font-medium">Support</Link></li>
          <li><span className="text-slate-400 text-sm">/</span></li>
          <li><span className="text-slate-900 dark:text-white text-sm font-medium">Ticket Status</span></li>
        </ol>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Support Ticket Tracking</h2>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Monitor the progress of your helpdesk inquiries and requests.</p>
        </div>
        <Link to="/tickets/new" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#0fdc0f] text-slate-900 font-semibold py-2.5 px-5 rounded-lg transition-all shadow-sm">
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          <span>Create New Ticket</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Tickets', val: '24', icon: 'inventory_2', sub: '+3 new this month', color: 'slate' },
          { label: 'Pending Action', val: '5', icon: 'pending', sub: 'Requires your attention', color: 'amber' },
          { label: 'Resolved', val: '19', icon: 'check_circle', sub: 'Successfully closed', color: 'primary' },
        ].map((stat, i) => (
          <div key={i} className={`bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1 ${stat.color === 'amber' ? 'border-l-4 border-l-amber-400' : stat.color === 'primary' ? 'border-l-4 border-l-primary' : ''}`}>
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
              <span className={`material-symbols-outlined ${stat.color === 'amber' ? 'text-amber-500' : stat.color === 'primary' ? 'text-primary' : 'text-slate-400'}`}>{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.val}</p>
            <p className={`text-xs mt-2 ${stat.color === 'amber' ? 'text-amber-600' : stat.color === 'primary' ? 'text-primary' : 'text-slate-400'}`}>{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-white/5">
              <tr>
                {['Ticket ID', 'Subject', 'Category', 'Last Updated', 'Priority', 'Status', ''].map((h, i) => (
                  <th key={i} className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-surface-dark divide-y divide-slate-200 dark:divide-slate-800">
              {MOCK_TICKETS.map((ticket, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">{ticket.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">{ticket.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{ticket.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{ticket.lastUpdated}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${ticket.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' : ticket.priority === 'Medium' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30' : 'bg-slate-100 text-slate-800'}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${ticket.status === 'Resolved' ? 'bg-primary/20 text-green-800 border-primary/30' : ticket.status === 'In Progress' ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>
                      <span className={`size-1.5 rounded-full mr-1.5 ${ticket.status === 'Resolved' ? 'bg-primary' : ticket.status === 'In Progress' ? 'bg-amber-500' : 'bg-blue-500'}`}></span>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/tickets/SP-8829`} className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">visibility</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketStatus;
