
import React from 'react';
import { Link } from 'react-router-dom';

const CreateTicket: React.FC = () => {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 fade-in">
      <nav className="flex items-center gap-2 mb-6 text-sm">
        <Link to="/help" className="text-gray-500 hover:text-primary transition-colors">Support Dashboard</Link>
        <span className="text-gray-300">/</span>
        <Link to="/tickets" className="text-gray-500 hover:text-primary transition-colors">Tickets</Link>
        <span className="text-gray-300">/</span>
        <span className="font-medium text-gray-900 dark:text-white">Create New</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Submit a Request</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">We are here to help with your Student Pesa account.</p>
      </div>

      <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-[#e7f3e7] dark:border-[#2a4e2a] p-6 sm:p-10">
        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Subject</span>
              <input className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:bg-[#102210] dark:border-[#2a4e2a] dark:text-white" placeholder="Brief summary of the issue" type="text"/>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Department</span>
              <select className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:bg-[#102210] dark:border-[#2a4e2a] dark:text-white">
                <option disabled selected value="">Select a department</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing & Payments</option>
                <option value="account">Account Management</option>
              </select>
            </label>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Urgency Level</span>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Low', color: 'bg-blue-400' },
                { label: 'Medium', color: 'bg-yellow-400', checked: true },
                { label: 'High', color: 'bg-red-400' }
              ].map((opt, i) => (
                <label key={i} className="cursor-pointer group">
                  <input className="peer sr-only" name="urgency" type="radio" defaultChecked={opt.checked} value={opt.label.toLowerCase()}/>
                  <div className="px-5 py-2.5 rounded-lg border border-gray-200 dark:border-[#2a4e2a] bg-white dark:bg-[#102210] text-gray-600 dark:text-gray-300 peer-checked:bg-primary peer-checked:border-primary peer-checked:text-black font-medium transition-all group-hover:border-primary/50 flex items-center gap-2">
                    <span className={`size-2 rounded-full ${opt.color} peer-checked:bg-black/20`}></span>
                    {opt.label}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Description</span>
            <textarea className="w-full min-h-[160px] p-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y transition-all dark:bg-[#102210] dark:border-[#2a4e2a] dark:text-white" placeholder="Please provide details about your issue. Include any relevant transaction IDs."></textarea>
          </label>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Attachments (Optional)</span>
            <div className="relative w-full h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-[#2a4e2a] bg-gray-50 dark:bg-[#102210]/50 hover:bg-gray-100 dark:hover:bg-[#102210] transition-colors flex flex-col items-center justify-center cursor-pointer group">
              <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file"/>
              <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary mb-2 transition-colors">cloud_upload</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-primary">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-4 border-t border-gray-100 dark:border-[#2a4e2a] mt-2">
            <Link to="/tickets" className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white transition-all text-center">
              Cancel
            </Link>
            <button className="w-full sm:w-auto px-8 py-3 rounded-lg text-sm font-bold bg-primary text-black hover:bg-opacity-90 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2" type="submit">
              <span>Submit Ticket</span>
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-surface-dark px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-[#2a4e2a]">
          <span className="material-symbols-outlined text-primary text-lg">info</span>
          <span>Need immediate assistance? Call our helpline at <a className="text-gray-900 dark:text-white font-medium hover:underline" href="#">0800-123-456</a></span>
        </div>
      </div>
    </main>
  );
};

export default CreateTicket;
