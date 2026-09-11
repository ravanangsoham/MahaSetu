import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Scheme } from '../../types';
import { StatusBadge } from '../common/StatusBadge';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  onSelect: (scheme: Scheme) => void;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, onSelect }) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#D8E6F7] shadow-xs hover:shadow-md hover:border-[#3B82F6] transition-all flex flex-col justify-between group">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="bg-[#F0ECFF] text-[#5B3FD3] font-bold px-2.5 py-0.5 rounded-full text-xs inline-flex items-center gap-1 border border-[#EDE9FE]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#6D4AFF]" />
            {t('indicativeMatch')} ({scheme.matchScore || 90}%)
          </span>
          <StatusBadge status={scheme.integrationStatus} size="sm" />
        </div>

        <h3 className="font-bold text-[#123B8F] text-lg mb-1 group-hover:text-[#2563EB] transition-colors">
          {scheme.title[language]}
        </h3>

        <p className="text-xs text-[#48658F] font-semibold mb-3">
          🏛️ {scheme.department[language]}
        </p>

        <p className="text-xs text-[#294A78] line-clamp-2 mb-4 leading-relaxed font-medium">
          {scheme.description[language]}
        </p>

        <div className="bg-[#F8FBFF] p-3 rounded-xl border border-[#D8E6F7] mb-4 text-xs space-y-1.5">
          <p className="text-[#294A78]">
            <strong className="text-[#123B8F]">Target: </strong>
            {scheme.targetBeneficiaries[language]}
          </p>
          <p className="text-[#294A78]">
            <strong className="text-[#123B8F]">Benefits: </strong>
            {scheme.benefits[language]}
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-[11px] text-[#48658F] mb-3 font-mono">
          <span>Source: {scheme.officialSource}</span>
          <span>Verified: {scheme.lastVerifiedDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelect(scheme)}
            className="flex-1 py-2 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl transition-colors text-center"
          >
            {t('viewDetails')}
          </button>

          <a
            href={scheme.officialPortalUrl}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-3.5 bg-[#6D4AFF] hover:bg-[#5B3FD3] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1 shadow-2xs"
            title="Official Portal Handoff"
          >
            <span>Apply</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
