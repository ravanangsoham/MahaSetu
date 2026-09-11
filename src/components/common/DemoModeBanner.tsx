import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Zap, Info, CheckCircle2 } from 'lucide-react';

interface DemoModeBannerProps {
  onStartDemo: () => void;
  isDemoActive?: boolean;
}

export const DemoModeBanner: React.FC<DemoModeBannerProps> = ({ onStartDemo, isDemoActive }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-[#123B8F] via-[#1D4ED8] to-[#5B3FD3] text-white py-2.5 px-4 shadow-md border-b border-[#6D4AFF]/40 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="bg-[#6D4AFF] text-white font-bold px-2 py-0.5 rounded text-xs flex items-center gap-1 shadow-sm border border-[#7C5CFC]/40">
            <Info className="w-3.5 h-3.5" />
            MAHASETU AI
          </span>
          <span className="font-medium text-blue-50">
            {t('connectNotReplace')}: {t('connectExplanation')}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onStartDemo}
            className="group bg-gradient-to-r from-[#6D4AFF] to-[#5B3FD3] hover:from-[#5B3FD3] hover:to-[#123B8F] text-white font-extrabold px-3.5 py-1.5 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all flex items-center gap-1.5 transform active:scale-95 text-xs sm:text-sm border border-purple-300/30"
          >
            <Zap className="w-4 h-4 fill-white animate-bounce text-amber-300" />
            <span>{t('tryDemoBtn')}</span>
          </button>
          {isDemoActive && (
            <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold text-xs bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/40">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {t('demoActiveBadge')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
