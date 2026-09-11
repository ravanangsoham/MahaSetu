import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Scheme } from '../../types';
import { StatusBadge } from '../common/StatusBadge';
import { X, ExternalLink, ShieldAlert, CheckCircle2, FileText, Building2, Cpu } from 'lucide-react';

interface SchemeDetailsModalProps {
  scheme: Scheme | null;
  onClose: () => void;
  onCheckEligibility: () => void;
  onPrepareDocuments: () => void;
}

export const SchemeDetailsModal: React.FC<SchemeDetailsModalProps> = ({
  scheme,
  onClose,
  onCheckEligibility,
  onPrepareDocuments,
}) => {
  const { language, t } = useLanguage();
  if (!scheme) return null;

  return (
    <div className="fixed inset-0 bg-[#123B8F]/30 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-[#D8E6F7] my-8">
        {/* Header */}
        <div className="bg-[#123B8F] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-[#6D4AFF] text-white font-bold px-2.5 py-0.5 rounded text-xs border border-purple-300/30">
              {scheme.category.toUpperCase()}
            </span>
            <StatusBadge status={scheme.integrationStatus} size="sm" />
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight pr-8 mb-1">
            {scheme.title[language]}
          </h2>

          <p className="text-xs text-blue-100 font-medium flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-purple-300" />
            {scheme.department[language]}
          </p>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-xs sm:text-sm">
          {/* Government Decision Boundary Banner */}
          <div className="bg-[#EEF6FF] p-4 rounded-2xl border border-[#C9DCF5]">
            <h4 className="font-extrabold text-[#123B8F] text-xs uppercase tracking-wider mb-2 text-center font-mono">
              {t('boundaryTitle')}
            </h4>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white p-2 rounded-xl shadow-2xs border border-[#D8E6F7]">
                <Cpu className="w-5 h-5 text-[#6D4AFF] mx-auto mb-1" />
                <p className="font-bold text-[#123B8F] text-xs">{t('boundaryAssist')}</p>
                <p className="text-[10px] text-[#48658F]">MahaSetu AI</p>
              </div>
              <div className="bg-white p-2 rounded-xl shadow-2xs border border-[#D8E6F7]">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] mx-auto mb-1" />
                <p className="font-bold text-[#123B8F] text-xs">{t('boundaryValidate')}</p>
                <p className="text-[10px] text-[#48658F]">Eligibility Engine</p>
              </div>
              <div className="bg-white p-2 rounded-xl shadow-2xs border border-[#D8E6F7]">
                <Building2 className="w-5 h-5 text-[#16A36A] mx-auto mb-1" />
                <p className="font-bold text-[#123B8F] text-xs">{t('boundaryDecide')}</p>
                <p className="text-[10px] text-[#48658F]">Govt Department</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-bold text-[#123B8F] text-sm mb-1.5 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#6D4AFF]" />
              Scheme Overview
            </h3>
            <p className="text-[#294A78] leading-relaxed bg-[#F8FBFF] p-3 rounded-xl border border-[#D8E6F7] font-medium">
              {scheme.description[language]}
            </p>
          </div>

          {/* Eligibility Rules & Target */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#D8E6F7] shadow-2xs">
              <h4 className="font-bold text-[#123B8F] text-xs mb-1">Target Beneficiaries</h4>
              <p className="text-[#294A78] text-xs font-medium">{scheme.targetBeneficiaries[language]}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#D8E6F7] shadow-2xs">
              <h4 className="font-bold text-[#123B8F] text-xs mb-1">Benefits</h4>
              <p className="text-[#16A36A] text-xs font-bold">{scheme.benefits[language]}</p>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div>
            <h3 className="font-bold text-[#123B8F] text-sm mb-2">Required Documents</h3>
            <div className="space-y-2">
              {scheme.documents.map((doc) => (
                <div key={doc.id} className="p-2.5 bg-[#F8FBFF] rounded-xl border border-[#D8E6F7] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-[#123B8F]">{doc.name[language]}</p>
                    <p className="text-[10px] text-[#48658F]">Issuer: {doc.issuingAuthority}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${doc.isMandatory ? 'bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE]' : 'bg-slate-100 text-[#48658F]'
                    }`}>
                    {doc.isMandatory ? 'Mandatory' : 'Optional'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Steps */}
          <div>
            <h3 className="font-bold text-[#123B8F] text-sm mb-2">Application Steps</h3>
            <ol className="list-decimal list-inside space-y-1.5 text-[#294A78] bg-[#F8FBFF] p-4 rounded-xl border border-[#D8E6F7] font-medium">
              {scheme.applicationSteps.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step[language]}
                </li>
              ))}
            </ol>
          </div>

          {/* Official Verification Disclaimer */}
          <div className="p-3 bg-[#F0ECFF]/60 rounded-xl border border-[#EDE9FE] text-xs text-[#5B3FD3] flex items-start gap-2">
            <ShieldAlert className="w-5 h-5 text-[#6D4AFF] flex-shrink-0 mt-0.5" />
            <p>{t('disclaimerEligibility')}</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#EEF6FF] p-4 border-t border-[#D8E6F7] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onCheckEligibility();
              }}
              className="px-3.5 py-2 bg-[#6D4AFF] hover:bg-[#5B3FD3] text-white text-xs font-bold rounded-xl transition-colors shadow-2xs"
            >
              {t('checkEligibility')}
            </button>

            <button
              onClick={() => {
                onClose();
                onPrepareDocuments();
              }}
              className="px-3.5 py-2 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl transition-colors shadow-2xs"
            >
              {t('prepareDocuments')}
            </button>
          </div>

          <a
            href={scheme.officialPortalUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-[#123B8F] to-[#6D4AFF] hover:from-[#1D4ED8] hover:to-[#5B3FD3] text-white text-xs font-extrabold rounded-xl transition-colors flex items-center gap-1.5 shadow-md"
          >
            <span>{t('applyOnOfficialPortal')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
