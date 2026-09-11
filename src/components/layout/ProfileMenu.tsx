import React, { useState, useRef, useEffect } from 'react';
import {
  Compass,
  FileText,
  Bookmark,
  Bell,
  Languages,
  SlidersHorizontal,
  RotateCcw,
  AlertTriangle,
  ChevronDown,
} from 'lucide-react';
import { showToast } from '../../hooks/useToast';
import { useLanguage } from '../../hooks/useLanguage';

interface ProfileMenuProps {
  onNavigate: (tab: string) => void;
  onOpenAccessibility: () => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onNavigate, onOpenAccessibility }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResetDemo = () => {
    // Clear demo localStorage items
    localStorage.removeItem('mahasetu_journey');
    localStorage.removeItem('mahasetu_saved_schemes');
    localStorage.removeItem('mahasetu_font_size');
    localStorage.removeItem('mahasetu_high_contrast');
    localStorage.removeItem('mahasetu_reduce_motion');

    document.documentElement.style.fontSize = '100%';
    document.documentElement.classList.remove('high-contrast', 'reduce-motion');

    setShowResetConfirm(false);
    setIsOpen(false);
    showToast('Demo state reset to clean baseline', 'success');

    // Reload window after short delay so clean state takes effect across components
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#EEF6FF] hover:bg-[#D8E6F7] border border-[#C9DCF5] text-[#123B8F] text-xs font-semibold transition-all"
      >
        <div className="w-6 h-6 rounded-lg bg-[#6D4AFF] text-white flex items-center justify-center font-bold text-[10px]">
          MH
        </div>
        <span className="hidden sm:inline">Citizen Profile</span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#48658F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-[#D8E6F7] shadow-2xl p-2 z-[9990] animate-fade-in text-[#123B8F]">
          <div className="px-3 py-2.5 mb-1 border-b border-[#EEF6FF]">
            <p className="text-[10px] font-bold text-[#6D4AFF] tracking-wider uppercase font-mono">Citizen Portal</p>
            <p className="text-sm font-extrabold text-[#123B8F]">Rajesh Kumar</p>
            <p className="text-xs text-[#48658F] font-medium">Aadhaar Verified (Demo)</p>
          </div>

          <div className="space-y-0.5">
            <button
              onClick={() => {
                onNavigate('journey');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl hover:bg-[#EEF6FF] text-[#294A78] hover:text-[#123B8F] transition-colors"
            >
              <Compass className="w-4 h-4 text-[#6D4AFF]" />
              <span>My Journey</span>
            </button>

            <button
              onClick={() => {
                onNavigate('tracking');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl hover:bg-[#EEF6FF] text-[#294A78] hover:text-[#123B8F] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#16A36A]" />
              <span>My Applications</span>
            </button>

            <button
              onClick={() => {
                onNavigate('schemes');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl hover:bg-[#EEF6FF] text-[#294A78] hover:text-[#123B8F] transition-colors"
            >
              <Bookmark className="w-4 h-4 text-[#2563EB]" />
              <span>Saved Schemes</span>
            </button>

            <button
              onClick={() => {
                onNavigate('journey');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl hover:bg-[#EEF6FF] text-[#294A78] hover:text-[#123B8F] transition-colors"
            >
              <Bell className="w-4 h-4 text-[#6D4AFF]" />
              <span>Notifications</span>
            </button>
          </div>

          <div className="my-1 border-t border-[#EEF6FF]" />

          {/* Quick Settings */}
          <div className="space-y-0.5">
            <button
              onClick={() => {
                const nextLang = language === 'en' ? 'mr' : language === 'mr' ? 'hi' : 'en';
                setLanguage(nextLang);
                showToast(`Language switched to ${nextLang === 'en' ? 'English' : nextLang === 'mr' ? 'मराठी' : 'हिंदी'}`, 'info');
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl hover:bg-[#EEF6FF] text-[#294A78] hover:text-[#123B8F] transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <Languages className="w-4 h-4 text-[#48658F]" /> Language
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE] text-[10px] uppercase font-bold">
                {language}
              </span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAccessibility();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl hover:bg-[#EEF6FF] text-[#294A78] hover:text-[#123B8F] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#48658F]" />
              <span>Accessibility Controls</span>
            </button>
          </div>

          <div className="my-1 border-t border-[#EEF6FF]" />

          {/* Reset Demo Option */}
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors border border-rose-200"
          >
            <RotateCcw className="w-4 h-4 text-rose-600" />
            <span>Reset Demo Journey</span>
          </button>
        </div>
      )}

      {/* Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#123B8F]/30 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-rose-200 rounded-2xl max-w-sm w-full p-6 shadow-2xl text-[#123B8F]">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mx-auto mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-extrabold text-center text-[#123B8F] mb-2">Reset Demo Journey?</h3>
            <p className="text-xs text-center text-[#48658F] mb-6 font-medium">
              This will restore all prototype data, journey progress, and saved documents to their initial clean state.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#EEF6FF] hover:bg-[#D8E6F7] text-[#123B8F] text-xs font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleResetDemo}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors shadow-md"
              >
                Yes, Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
