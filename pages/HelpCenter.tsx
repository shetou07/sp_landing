
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getSupportAnswer } from '../services/geminiService';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setAiAnswer(null);
    const answer = await getSupportAnswer(searchQuery);
    setAiAnswer(answer || null);
    setIsSearching(false);
  };

  return (
    <div className="w-full flex flex-col items-center fade-in">
      {/* Hero Section */}
      <section className="w-full bg-background-light dark:bg-background-dark pt-8 pb-12 lg:pt-16 lg:pb-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-text-main dark:text-white">
              How can we help you today?
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl">
              Search our knowledge base for answers regarding your Student Pesa account, transactions, and card management in Uganda.
            </p>
          </div>
          
          <form onSubmit={handleSearch} className="w-full max-w-xl relative">
            <div className="relative flex items-center w-full h-14 rounded-lg shadow-lg dark:shadow-none bg-surface-light dark:bg-surface-dark overflow-hidden ring-1 ring-black/5 dark:ring-white/10 focus-within:ring-2 focus-within:ring-primary transition-all">
              <div className="grid place-items-center h-full w-12 text-gray-400">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="peer h-full w-full outline-none text-sm text-gray-700 dark:text-gray-200 bg-transparent pr-2 border-none focus:ring-0" 
                placeholder="Ask me about MoMo top-ups, cards, and more..." 
                type="text"
              />
              <div className="pr-2">
                <button type="submit" disabled={isSearching} className="h-10 px-6 bg-primary hover:bg-green-400 text-text-main text-sm font-bold rounded-md transition-colors disabled:opacity-50">
                  {isSearching ? 'Thinking...' : 'Search'}
                </button>
              </div>
            </div>
          </form>

          {aiAnswer && (
            <div className="w-full max-w-xl bg-white dark:bg-surface-dark p-6 rounded-xl border-l-4 border-primary text-left shadow-md mt-4 animate-in fade-in duration-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">AI Assistant</span>
              </div>
              <div className="text-sm leading-relaxed prose dark:prose-invert max-w-none">
                {aiAnswer}
              </div>
              <button onClick={() => setAiAnswer(null)} className="mt-4 text-xs text-text-secondary hover:text-primary transition-colors">Clear result</button>
            </div>
          )}
        </div>
      </section>

      {/* Role Selector */}
      <section className="w-full px-4 -mt-6">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="inline-flex p-1 bg-[#e7f3e7] dark:bg-surface-dark rounded-xl shadow-sm border border-black/5 dark:border-white/5">
            <button className="px-6 py-2.5 rounded-lg text-sm font-bold bg-surface-light dark:bg-white/10 text-text-main dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/5 transition-all">
              Parents
            </button>
            <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-text-main dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5 transition-all">
              Agents
            </button>
            <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-text-secondary dark:text-gray-400 hover:text-text-main dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5 transition-all">
              Admins
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12 lg:px-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-text-main dark:text-white mb-6">Browse by Topic</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'rocket_launch', title: 'Getting Started', desc: 'Account setup, NIN verification, and first login guide for Ugandans.' },
                { icon: 'account_balance_wallet', title: 'Wallet & Payments', desc: 'Deposits via MTN/Airtel, withdrawal limits, and UGX transaction history.' },
                { icon: 'badge', title: 'Student Cards', desc: 'Ordering new NFC cards, blocking lost cards, and PIN resets.' },
                { icon: 'build', title: 'Troubleshooting', desc: 'Common network errors, app login issues, and bug reporting.' },
              ].map((topic, i) => (
                <Link key={i} to="/help" className="group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-surface-light dark:bg-surface-dark hover:shadow-md hover:border-primary/50 transition-all">
                  <div className="mb-4 size-10 rounded-lg bg-green-50 dark:bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">{topic.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">{topic.title}</h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400">{topic.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-xl font-bold text-text-main dark:text-white mb-4">Featured Articles</h2>
            <div className="space-y-3">
              {[
                { title: 'Complete guide to setting spending limits for students', updated: '2 days ago', readTime: '5 min' },
                { title: 'How to link multiple student accounts to one parent wallet', updated: '1 week ago', readTime: '3 min' },
                { title: 'Understanding transaction fees for MoMo and Airtel Money', updated: '2 weeks ago', readTime: '2 min' },
              ].map((article, i) => (
                <Link key={i} to="/help" className="flex items-start gap-3 p-4 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-green-50 dark:hover:bg-white/5 transition-colors group">
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mt-0.5">article</span>
                  <div>
                    <h4 className="text-sm font-semibold text-text-main dark:text-white group-hover:text-primary transition-colors">{article.title}</h4>
                    <p className="text-xs text-text-secondary dark:text-gray-500 mt-1">Updated {article.updated} • {article.readTime} read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-white/10 shadow-sm">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">Popular Questions</h3>
            <ul className="space-y-4">
              {['How to top up via MTN MoMo?', 'What are the transaction fees?', 'Blocking a lost NFC card', 'Resetting your PIN via SMS'].map((q, i) => (
                <li key={i}>
                  <Link to="/help" className="flex justify-between items-center group">
                    <span className="text-sm font-medium text-text-secondary dark:text-gray-300 group-hover:text-primary transition-colors">{q}</span>
                    <span className="material-symbols-outlined text-sm text-gray-400 group-hover:text-primary">arrow_forward_ios</span>
                  </Link>
                  {i < 3 && <div className="h-px bg-gray-100 dark:bg-white/5 w-full mt-4"></div>}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/20">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">Still need help?</h3>
            <p className="text-sm text-text-secondary dark:text-gray-400 mb-6">Our Kampala-based support team is available 24/7 to assist you.</p>
            <div className="space-y-3">
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-green-400 text-text-main font-bold py-2.5 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Start Live Chat</span>
              </Link>
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-text-main dark:text-white font-bold py-2.5 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-lg">mail</span>
                <span>Email Support</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
