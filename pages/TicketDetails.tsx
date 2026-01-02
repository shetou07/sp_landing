
import React, { useState } from 'react';
import { IMAGES } from '../constants';

const TicketDetails: React.FC = () => {
  const [reply, setReply] = useState('');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 fade-in">
      <div className="flex flex-wrap gap-2 py-2 mb-4 text-sm">
        <span className="text-gray-500 dark:text-gray-400">Home</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-500 dark:text-gray-400">Support</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 dark:text-white font-medium">Ticket #SP-8829</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight">Unable to top up student card via MTN MoMo</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Ticket #SP-8829 • Created on Oct 24, 2023 at 10:30 AM</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 text-gray-900 dark:text-white text-sm font-medium transition-colors">
            <span className="material-symbols-outlined text-[20px]">more_horiz</span>
          </button>
          <button className="flex items-center justify-center px-4 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 text-red-600 dark:text-red-400 text-sm font-medium transition-colors">
            <span className="truncate">Close Ticket</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
            <h3 className="text-gray-900 dark:text-white text-lg font-bold">Conversation History</h3>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">3 Messages</span>
          </div>

          <div className="flex flex-col gap-6">
            {/* Parent Message */}
            <div className="flex gap-4">
              <div className="size-10 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: `url(${IMAGES.USER_AVATAR})`}}></div>
              <div className="flex flex-col gap-1 max-w-[85%]">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Sarah Mukasa</span>
                  <span className="text-xs text-gray-500">Parent • Oct 24, 10:30 AM</span>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  <p>Hi, I tried sending 10,000 UGX to Ivan's account but it hasn't reflected yet. Transaction ID is QH82938J. It usually works instantly. Can you check?</p>
                </div>
              </div>
            </div>

            {/* Support Message */}
            <div className="flex gap-4 flex-row-reverse">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-green-700 dark:text-green-400 shrink-0">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div className="flex flex-col gap-1 items-end max-w-[85%]">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Support Agent • Oct 24, 10:45 AM</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Student Pesa Support</span>
                </div>
                <div className="bg-primary/10 dark:bg-green-900/20 border border-primary/10 p-4 rounded-xl rounded-tr-none text-sm text-gray-900 dark:text-white leading-relaxed">
                  <p>Hello Sarah, thanks for reaching out. We are looking into transaction ID <strong>QH82938J</strong>. Please hold on while we query the MTN MoMo integration status for you.</p>
                </div>
              </div>
            </div>

            {/* Parent Message with Attachment */}
            <div className="flex gap-4">
              <div className="size-10 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: `url(${IMAGES.USER_AVATAR})`}}></div>
              <div className="flex flex-col gap-1 max-w-[85%]">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Sarah Mukasa</span>
                  <span className="text-xs text-gray-500">Parent • Oct 24, 10:52 AM</span>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  <p className="mb-3">Here is the screenshot of the confirmation message I received from MTN.</p>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 max-w-sm cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="size-10 rounded bg-red-100 flex items-center justify-center text-red-600">
                      <span className="material-symbols-outlined">image</span>
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-medium truncate text-gray-900 dark:text-white">momo_receipt_screenshot.jpg</span>
                      <span className="text-xs text-gray-500">245 KB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="flex items-center gap-1 p-2 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              {['format_bold', 'format_italic', 'format_list_bulleted', 'attach_file'].map((icon, i) => (
                <button key={i} className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors">
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </button>
              ))}
            </div>
            <div className="p-4">
              <textarea 
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-900 dark:text-white placeholder:text-gray-400 min-h-[120px] resize-none" 
                placeholder="Type your reply here... Use @ to mention other agents."
              ></textarea>
            </div>
            <div className="p-4 pt-0 flex justify-between items-center">
              <div className="text-xs text-gray-400">Press Cmd+Enter to send</div>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Save as Draft</button>
                <button className="px-6 py-2 rounded-lg text-sm font-bold bg-primary text-black hover:bg-green-400 transition-colors shadow-sm flex items-center gap-2">
                  <span>Send Reply</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-4">Ticket Details</h4>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Status</label>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                  <span className="size-2 rounded-full bg-green-500"></span>
                  Open
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Priority</label>
                  <span className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1">
                    <span className="material-symbols-outlined text-orange-500 text-[16px]">priority_high</span>
                    High
                  </span>
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Category</label>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Transactions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-4">Requester Profile</h4>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: `url(${IMAGES.USER_AVATAR})`}}></div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">Sarah Mukasa</div>
                <div className="text-xs text-gray-500">sarah.m@example.ug</div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-4">
              <label className="text-xs text-gray-400 block mb-2">Student</label>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <div className="size-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">IK</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">Ivan Katumba</div>
                  <div className="text-xs text-gray-500">Grade 4 • Class B</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
