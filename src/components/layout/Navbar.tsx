import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { NotificationCenter } from '../common/NotificationCenter';
import { ProfileMenu } from './ProfileMenu';
import {
  Compass,
  MessageSquare,
  Search,
  UserCheck,
  Activity,
  Layers,
  HelpCircle,
  BarChart3,
  ShieldCheck,
  Menu,
  X,
  Eye,
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onStartDemo: () => void;
  onOpenAccessibility?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenAccessibility }) => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('navHome'), icon: Compass },
    { id: 'ask-ai', label: t('navAskAI'), icon: MessageSquare },
    { id: 'schemes', label: t('navSchemes'), icon: Search },
    { id: 'journey', label: t('navJourney'), icon: UserCheck },
    { id: 'track', label: t('navTrack'), icon: Activity },
    { id: 'interop', label: t('navInterop'), icon: Layers },
    { id: 'grievance', label: t('navGrievance'), icon: HelpCircle },
    { id: 'analytics', label: t('navAnalytics'), icon: BarChart3 },
    { id: 'trust', label: t('navTrust'), icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#D8E6F7] shadow-xs">
      {/* Top Emblem Bar */}
      <div className="bg-[#123B8F] text-white py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Government Emblem Symbol */}
            <div className="w-5 h-5 rounded-full bg-[#6D4AFF] text-white flex items-center justify-center font-bold text-[10px] shadow-xs border border-purple-300/40">
              MH
            </div>
            <span className="font-semibold tracking-wide text-blue-50">{t('govtName')}</span>
            <span className="hidden md:inline text-blue-300/60">|</span>
            <span className="hidden md:inline text-[#EDE9FE] font-mono text-[11px] font-semibold">{t('platformTag')}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenAccessibility?.()}
              className="flex items-center gap-1 text-blue-100 hover:text-white transition-colors text-[11px]"
              title="Open Accessibility Controls"
            >
              <Eye className="w-3.5 h-3.5 text-[#EDE9FE]" />
              <span className="hidden sm:inline">Accessibility</span>
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Branding */}
        <div
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#123B8F] via-[#2563EB] to-[#6D4AFF] text-white flex items-center justify-center shadow-md border border-[#C9DCF5] group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-lg text-white font-mono">M</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-[#123B8F]">MAHASETU</span>
              <span className="bg-[#6D4AFF] text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-xs">AI</span>
            </div>
            <p className="text-[10px] text-[#48658F] font-medium hidden sm:block">
              {t('appTagline')}
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-[#123B8F] text-white shadow-sm font-bold'
                    : 'text-[#294A78] hover:bg-[#EEF6FF] hover:text-[#123B8F]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#EDE9FE]' : 'text-[#48658F]'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          <NotificationCenter onNavigateTab={setActiveTab} />
          
          <ProfileMenu onNavigate={setActiveTab} onOpenAccessibility={() => onOpenAccessibility?.()} />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#123B8F] hover:bg-[#EEF6FF] rounded-xl"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#D8E6F7] px-4 py-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-[#123B8F] text-white font-bold'
                      : 'bg-[#F8FBFF] text-[#294A78] hover:bg-[#EEF6FF]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#EDE9FE]' : 'text-[#48658F]'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
