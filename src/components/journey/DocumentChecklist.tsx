import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { DocumentRequirement } from '../../types';
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

interface DocumentChecklistProps {
  documents: DocumentRequirement[];
  onOpenPrerequisite: (serviceId: string) => void;
}

export const DocumentChecklist: React.FC<DocumentChecklistProps> = ({
  documents,
  onOpenPrerequisite,
}) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F7] shadow-xl max-w-3xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#D8E6F7] pb-4 mb-6">
        <div>
          <h3 className="text-xl font-extrabold text-[#123B8F]">{t('docReadinessTitle')}</h3>
          <p className="text-xs text-[#48658F] font-medium">
            Verify DigiLocker & Tahsildar document readiness before submitting official application.
          </p>
        </div>
        <ShieldCheck className="w-8 h-8 text-[#123B8F]" />
      </div>

      <div className="space-y-4">
        {documents.map((doc) => {
          const isMissing = doc.status === 'missing';
          const isReady = doc.status === 'ready';

          return (
            <div
              key={doc.id}
              className={`p-4 rounded-2xl border transition-all ${
                isMissing
                  ? 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-400/20'
                  : isReady
                  ? 'bg-emerald-50/60 border-emerald-200'
                  : 'bg-[#F8FBFF] border-[#D8E6F7]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {isReady ? (
                    <CheckCircle2 className="w-5 h-5 text-[#16A36A] flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                  )}

                  <div>
                    <h4 className="font-bold text-[#123B8F] text-sm">{doc.name[language]}</h4>
                    <p className="text-xs text-[#48658F] font-mono">Issuer: {doc.issuingAuthority}</p>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    isReady
                      ? 'bg-emerald-100 text-[#16A36A]'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}
                >
                  {isReady ? t('docStatusReady') : t('docStatusMissing')}
                </span>
              </div>

              {/* Dependency Intelligence Recommendation */}
              {isMissing && doc.prerequisiteServiceId && (
                <div className="mt-3 p-3 bg-white rounded-xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
                  <div>
                    <span className="text-[10px] font-extrabold text-amber-800 uppercase tracking-widest bg-amber-100 px-2 py-0.5 rounded">
                      Dependency Recommendation
                    </span>
                    <p className="text-xs text-[#123B8F] font-semibold mt-1">
                      {doc.prerequisiteServiceName ? doc.prerequisiteServiceName[language] : t('docPrerequisiteDesc')}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenPrerequisite(doc.prerequisiteServiceId!)}
                    className="px-3.5 py-1.5 bg-[#6D4AFF] hover:bg-[#5B3FD3] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 shadow-2xs whitespace-nowrap"
                  >
                    <span>{t('btnStartPrerequisite')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
