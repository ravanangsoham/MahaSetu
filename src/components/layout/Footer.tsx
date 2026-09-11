import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Shield, Lock, Layers, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#123B8F] text-white pt-12 pb-8 border-t-4 border-[#6D4AFF] mt-16 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs sm:text-sm">
        {/* Col 1: Brand & Principle */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#6D4AFF] text-white font-black flex items-center justify-center font-mono text-base shadow-sm border border-purple-300/40">
              M
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white">MAHASETU AI</span>
          </div>
          <p className="text-[#EDE9FE] font-bold text-sm tracking-wide">
            "{t('footerTag')}"
          </p>
          <p className="text-blue-100/90 text-xs leading-relaxed font-medium">
            {t('connectExplanation')}
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider text-[#EDE9FE]">
            Navigation
          </h4>
          <ul className="space-y-2 text-blue-100/90 text-xs font-medium">
            <li>
              <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('ask-ai')} className="hover:text-white transition-colors">
                Ask MahaSetu AI
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('schemes')} className="hover:text-white transition-colors">
                Scheme & Service Hub
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('journey')} className="hover:text-white transition-colors">
                My Citizen Journey
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('track')} className="hover:text-white transition-colors">
                Track Application
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('grievance')} className="hover:text-white transition-colors">
                Grievance Guidance
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Governance & Security */}
        <div>
          <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider text-[#EDE9FE]">
            Trust & Architecture
          </h4>
          <ul className="space-y-2 text-blue-100/90 text-xs font-medium">
            <li className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-300" />
              <span>Consent-Based Data Exchange</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-300" />
              <span>Data Minimization Architecture</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#EDE9FE]" />
              <span>API Setu & DigiLocker Interop</span>
            </li>
            <li>
              <button onClick={() => setActiveTab('trust')} className="hover:text-white text-[#EDE9FE] underline font-medium">
                View Privacy & Governance Manifesto
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Official Portals Handoff Links */}
        <div>
          <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider text-[#EDE9FE]">
            Authoritative Portals
          </h4>
          <ul className="space-y-2 text-blue-100/90 text-xs font-medium">
            <li>
              <a
                href="https://maharashtra.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1"
              >
                <span>maharashtra.gov.in</span>
                <ExternalLink className="w-3 h-3 text-blue-200" />
              </a>
            </li>
            <li>
              <a
                href="https://mahadbt.maharashtra.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1"
              >
                <span>MahaDBT Scholarship Portal</span>
                <ExternalLink className="w-3 h-3 text-blue-200" />
              </a>
            </li>
            <li>
              <a
                href="https://aaplesarkar.mahaonline.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1"
              >
                <span>Aaple Sarkar Services</span>
                <ExternalLink className="w-3 h-3 text-blue-200" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-blue-800/60 text-center text-blue-200/80 text-xs leading-relaxed font-medium">
        <p className="mb-2 text-blue-100">{t('footerLegal')}</p>
        <p className="text-blue-300/60 text-[11px]">
          MahaSetu AI • AI-powered citizen service orchestration platform.
        </p>
      </div>
    </footer>
  );
};
