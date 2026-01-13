
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';


const PARENT_LOGIN_PATH = "https://sp-parent.vercel.app/"; 
const AGENT_LOGIN_PATH = "https://sp-agent-lyart.vercel.app/";

const Home: React.FC = () => {
  // Helper to determine if a path is an external URL
  const renderLoginButton = (path: string, label: string, isPrimary: boolean) => {
    const isExternal = path.startsWith('http');
    const baseStyles = "flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-8 text-sm font-bold transition-colors shadow-sm";
    const variantStyles = isPrimary 
      ? "bg-primary hover:bg-green-400 text-[#0d1b0d]" 
      : "bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900";

    if (isExternal) {
      return (
        <a 
          href={path} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${baseStyles} ${variantStyles}`}
        >
          <span className="truncate">{label}</span>
        </a>
      );
    }

    return (
      <Link 
        to={path}
        className={`${baseStyles} ${variantStyles}`}
      >
        <span className="truncate">{label}</span>
      </Link>
    );
  };

  return (
    <div className="px-4 sm:px-10 md:px-40 flex flex-1 justify-center py-5 fade-in">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-6">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <h1 className="text-neutral-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Welcome to Student Pesa
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg font-normal leading-normal max-w-2xl">
              Secure digital spending for schools in Uganda. Monitor spending, top up wallets, and manage student transactions.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Parent Card */}
          <div className="p-4">
            <div className="flex flex-col md:flex-row items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700 overflow-hidden transition-all hover:shadow-xl hover:border-primary/50 group">
              <div 
                className="w-full md:w-1/2 aspect-video md:aspect-[4/3] bg-cover bg-center" 
                style={{backgroundImage: `url(${IMAGES.PARENT_HERO})`}}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 py-6 px-6 md:px-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">family_star</span>
                  <p className="text-neutral-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">For Parents</p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-base font-normal leading-normal">
                  Monitor spending, top up student wallets via MoMo, and manage limits for your children in Uganda.
                </p>
                <div className="pt-2">
                  {renderLoginButton(PARENT_LOGIN_PATH, "Parent Login", true)}
                </div>
              </div>
            </div>
          </div>

          {/* Agent Card */}
          <div className="p-4">
            <div className="flex flex-col md:flex-row items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700 overflow-hidden transition-all hover:shadow-xl hover:border-primary/50 group">
              <div 
                className="w-full md:w-1/2 aspect-video md:aspect-[4/3] bg-cover bg-center" 
                style={{backgroundImage: `url(${IMAGES.AGENT_HERO})`}}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 py-6 px-6 md:px-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
                  <p className="text-neutral-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">For Agents</p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-base font-normal leading-normal">
                  Process cash-ins, manage student transactions at the canteen, and handle top-ups securely.
                </p>
                <div className="pt-2">
                  {renderLoginButton(AGENT_LOGIN_PATH, "Agent Login", false)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <span className="material-symbols-outlined text-lg">lock</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
