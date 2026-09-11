import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { mockGrievances } from '../../data/grievances';
import { HelpCircle, ExternalLink, ShieldAlert, Bot, CheckCircle2 } from 'lucide-react';

export const GrievanceAssistant: React.FC = () => {
  const { t } = useLanguage();
  const [selectedGrievance] = useState(mockGrievances[0]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#123B8F] via-[#1D4ED8] to-[#5B3FD3] text-white p-6 sm:p-8 rounded-3xl shadow-xl mb-8 border border-purple-300/30">
        <div className="flex items-center gap-3 mb-2">
          <HelpCircle className="w-6 h-6 text-purple-200" />
          <h2 className="text-2xl font-extrabold">{t('grievanceTitle')}</h2>
        </div>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-medium">{t('grievanceSub')}</p>
      </div>

      {/* AI Assistant Guidance Panel */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F7] shadow-xl space-y-6">
        <div className="flex items-start gap-3 p-4 bg-[#F0ECFF]/80 rounded-2xl border border-[#EDE9FE]">
          <Bot className="w-6 h-6 text-[#6D4AFF] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed text-[#123B8F]">
            <p className="font-bold text-[#123B8F] mb-1">MahaSetu Grievance Routing Intelligence:</p>
            <p className="mb-2 font-medium">
              Based on the information provided, your application <strong>({selectedGrievance.applicationRef})</strong> may require follow-up with the concerned department.
            </p>
            <p className="font-semibold text-[#5B3FD3] bg-white p-2.5 rounded-xl border border-[#EDE9FE]">
              "{t('grievanceNotice')}"
            </p>
          </div>
        </div>

        {/* Issue Details Card */}
        <div className="bg-[#F8FBFF] p-5 rounded-2xl border border-[#D8E6F7] space-y-3 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8E6F7] pb-3">
            <div>
              <span className="text-[10px] font-bold text-[#48658F] font-mono">REF: {selectedGrievance.applicationRef}</span>
              <h4 className="font-bold text-[#123B8F] text-base">{selectedGrievance.serviceName}</h4>
            </div>
            <span className="bg-[#F0ECFF] text-[#5B3FD3] text-xs font-bold px-3 py-1 rounded-full border border-[#EDE9FE]">
              Guidance Active
            </span>
          </div>

          <p className="text-[#294A78]">
            <strong className="text-[#123B8F]">Department: </strong>
            {selectedGrievance.department}
          </p>

          <p className="text-[#294A78]">
            <strong className="text-[#123B8F]">Identified Bottleneck: </strong>
            {selectedGrievance.issueType}
          </p>

          {/* Official Escalation Path */}
          <div>
            <h5 className="font-bold text-[#123B8F] text-xs uppercase tracking-wider mb-2 mt-4">
              Official Departmental Escalation Path
            </h5>
            <div className="space-y-2">
              {selectedGrievance.escalationPath.map((path, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-[#D8E6F7] flex items-center gap-2 text-xs font-medium text-[#123B8F] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#16A36A] flex-shrink-0" />
                  <span>{path}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D8E6F7]">
          <div className="flex items-center gap-2 text-xs text-[#48658F] font-medium">
            <ShieldAlert className="w-4 h-4 text-[#6D4AFF] flex-shrink-0" />
            <span>Redirects directly to official Aaple Sarkar Grievance Portal</span>
          </div>

          <a
            href={selectedGrievance.officialGrievancePortal}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-extrabold rounded-xl shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>{t('btnOpenOfficialGrievance')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
