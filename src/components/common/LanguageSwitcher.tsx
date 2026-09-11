import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Language } from '../../types';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'mr', label: 'मराठी' },
    { code: 'hi', label: 'हिंदी' },
  ];

  return (
    <div className="flex items-center gap-1 bg-blue-950/40 p-1 rounded-xl border border-blue-400/30">
      <Globe className="w-3.5 h-3.5 text-blue-200 ml-1.5 hidden sm:inline-block" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
            language === lang.code
              ? 'bg-[#6D4AFF] text-white shadow-xs font-bold border border-purple-300/30'
              : 'text-blue-100 hover:text-white hover:bg-white/10'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
