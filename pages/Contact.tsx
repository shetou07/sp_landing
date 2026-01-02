
import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 fade-in">
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">Contact Support</h1>
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl">
          How can we help you today? We're here to assist parents, agents, and school admins across Uganda with your Student Pesa account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: 'call', title: 'Phone Support', desc: 'Talk to an agent in Kampala. Mon-Fri, 8am-5pm.', action: 'Call +256 770 000 000', link: 'tel:+256770000000' },
          { icon: 'mail', title: 'Email Support', desc: 'Best for non-urgent inquiries. Response within 24h.', action: 'support@studentpesa.ug', link: '#' },
          { icon: 'chat', title: 'Live Chat', desc: 'Instant answers from our team. ● Online', isButton: true },
        ].map((item, i) => (
          <div key={i} className="group flex flex-col gap-4 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-surface-dark shadow-sm hover:shadow-md transition-all hover:border-primary/50">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.desc}</p>
              {item.isButton ? (
                <button className="w-full bg-primary text-black font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-opacity">
                  Start Chat
                </button>
              ) : (
                <a className="inline-flex items-center text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4" href={item.link}>
                  {item.action}
                  <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <span className="material-symbols-outlined text-primary text-3xl">help</span>
            <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: 'How do I reset my PIN?', a: 'To reset your PIN, go to the "Security" tab in your profile settings. Select "Change PIN" and follow the SMS verification steps sent to your registered Ugandan phone number.' },
              { q: "How can I check my student's balance?", a: 'You can check balances in real-time on your Dashboard. Select the specific student card to view detailed transaction history and remaining UGX funds.' },
              { q: 'What are the transaction fees?', a: 'Deposits via MTN MoMo or Airtel Money incur standard network charges. Transfers to student cards within the platform are completely free. Withdrawals attract a processing fee of 1.5%.' },
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-surface-dark transition-colors">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 focus-visible:outline-none">
                  <span className="text-base font-bold">{faq.q}</span>
                  <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180 group-open:text-primary">expand_more</span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-surface-dark border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Send us a Message</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Can't find the answer? Fill out the form below and we'll get back to you.</p>
            </div>
            <form className="flex flex-col gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">I am a</label>
                <select className="w-full rounded-lg border-neutral-200 dark:border-neutral-800 bg-background-light dark:bg-background-dark py-3 px-4 text-sm font-medium focus:ring-primary focus:border-primary">
                  <option>Parent</option>
                  <option>School Admin</option>
                  <option>Agent</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Full Name</label>
                <input className="w-full rounded-lg border-neutral-200 dark:border-neutral-800 bg-background-light dark:bg-background-dark py-3 px-4 text-sm font-medium" placeholder="e.g. Sarah Mukasa" type="text" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Subject</label>
                <input className="w-full rounded-lg border-neutral-200 dark:border-neutral-800 bg-background-light dark:bg-background-dark py-3 px-4 text-sm font-medium" placeholder="Brief description" type="text" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Message</label>
                <textarea className="w-full rounded-lg border-neutral-200 dark:border-neutral-800 bg-background-light dark:bg-background-dark py-3 px-4 text-sm font-medium h-32 resize-none" placeholder="Describe your issue..."></textarea>
              </div>
              <button className="mt-2 w-full bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-sm flex justify-center items-center gap-2" type="button">
                <span>Send Message</span>
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
