import React, { useState } from 'react';
import type { Scheme } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { showToast } from '../../hooks/useToast';
import {
  X,
  ShieldCheck,
  Building2,
  ExternalLink,
  FileText,
  Clock,
  ArrowRight,
  Info,
  Bookmark,
} from 'lucide-react';

interface SchemeDetailsDrawerProps {
  scheme: Scheme | null;
  isOpen: boolean;
  onClose: () => void;
  onCheckEligibility: (scheme: Scheme) => void;
}

export const SchemeDetailsDrawer: React.FC<SchemeDetailsDrawerProps> = ({
  scheme,
  isOpen,
  onClose,
  onCheckEligibility,
}) => {
  const { language } = useLanguage();
  const [showTrustInfo, setShowTrustInfo] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen || !scheme) return null;

  const lang = language as 'en' | 'mr' | 'hi';

  const getLocalized = (obj: { en: string; mr: string; hi: string } | string | undefined): string => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj['en'] || '';
  };

  const handleToggleSave = () => {
    setIsSaved(!isSaved);
    showToast(
      !isSaved
        ? `Saved "${getLocalized(scheme.title)}" to your profile!`
        : `Removed scheme from saved list`,
      !isSaved ? 'success' : 'info'
    );
  };

  return (
    <div className="fixed inset-0 z-[9990] flex justify-end bg-[#123B8F]/30 backdrop-blur-xs animate-fade-in">
      {/* Backdrop overlay clickable to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide Drawer (Desktop right side, Mobile bottom sheet) */}
      <div className="relative w-full max-w-xl bg-white border-l border-[#D8E6F7] text-[#123B8F] shadow-2xl h-full flex flex-col overflow-hidden animate-slide-left z-10">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#D8E6F7] bg-[#EEF6FF] flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE] text-[10px] font-mono font-bold uppercase">
                {scheme.category.replace('_', ' ')}
              </span>
              <button
                onClick={() => setShowTrustInfo(!showTrustInfo)}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16A36A] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Source
              </button>
            </div>
            <h2 className="text-xl font-black text-[#123B8F] leading-tight">
              {getLocalized(scheme.title)}
            </h2>
            <p className="text-xs text-[#48658F] flex items-center gap-1.5 font-medium">
              <Building2 className="w-3.5 h-3.5 text-[#294A78]" />
              {getLocalized(scheme.department)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSave}
              className={`p-2.5 rounded-xl border transition-colors ${
                isSaved
                  ? 'bg-[#6D4AFF] text-white border-[#5B3FD3]'
                  : 'bg-white text-[#123B8F] border-[#D8E6F7] hover:text-[#6D4AFF] hover:bg-[#F8FBFF]'
              }`}
              title="Save Scheme"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white hover:bg-[#EEF6FF] text-[#48658F] hover:text-[#123B8F] border border-[#D8E6F7] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Verified Source Trust Info Card Popup */}
        {showTrustInfo && (
          <div className="p-4 bg-emerald-50 border-b border-emerald-200 text-xs text-emerald-900 animate-fade-in flex items-start gap-3">
            <Info className="w-5 h-5 text-[#16A36A] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#16A36A]">Verified Official Government Source</p>
              <p className="text-[11px] text-emerald-800 mt-0.5">
                Official Source: <strong className="text-emerald-950">{scheme.officialSource}</strong>
                <br />
                Last synchronized & verified: {scheme.lastVerifiedDate}
              </p>
            </div>
          </div>
        )}

        {/* Drawer Body Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F8FBFF]">
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#6D4AFF] font-bold">Overview</h3>
            <p className="text-sm text-[#294A78] leading-relaxed bg-white p-4 rounded-2xl border border-[#D8E6F7] shadow-xs">
              {getLocalized(scheme.description)}
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#16A36A] font-bold">Key Benefits</h3>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-sm font-semibold text-emerald-900 shadow-xs">
              {getLocalized(scheme.benefits)}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#123B8F] font-bold">Target Eligibility</h3>
            <p className="text-xs text-[#294A78] bg-white p-3.5 rounded-xl border border-[#D8E6F7] leading-relaxed shadow-xs">
              {getLocalized(scheme.eligibilitySummary)}
            </p>
          </div>

          {/* Required Documents */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#5B3FD3] font-bold">Required Documents</h3>
            <div className="grid grid-cols-1 gap-2">
              {scheme.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#D8E6F7] text-xs shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                    <span className="font-semibold text-[#123B8F]">{getLocalized(doc.name)}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      doc.isMandatory
                        ? 'bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE]'
                        : 'bg-slate-100 text-[#48658F]'
                    }`}
                  >
                    {doc.isMandatory ? 'Mandatory' : 'Optional'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Steps */}
          {scheme.applicationSteps && scheme.applicationSteps.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#123B8F] font-bold">Process & Workflow</h3>
              <div className="space-y-2 text-xs">
                {scheme.applicationSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#D8E6F7] shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-[#EEF6FF] text-[#123B8F] border border-[#C9DCF5] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-[#294A78] leading-snug">{getLocalized(step)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deadline & Meta */}
          <div className="p-4 rounded-2xl bg-white border border-[#D8E6F7] grid grid-cols-2 gap-4 text-xs shadow-xs">
            <div>
              <span className="text-[#48658F] block text-[10px]">Deadline / Timeline</span>
              <span className="font-bold text-[#123B8F] flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#6D4AFF]" />
                {scheme.deadline || 'Open All Year Round'}
              </span>
            </div>
            <div>
              <span className="text-[#48658F] block text-[10px]">Official Portal</span>
              <span className="font-bold text-[#16A36A] truncate block mt-0.5">
                {scheme.officialPortalUrl.replace('https://', '')}
              </span>
            </div>
          </div>
        </div>

        {/* Drawer Sticky Footer Actions */}
        <div className="p-4 border-t border-[#D8E6F7] bg-[#EEF6FF] flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onCheckEligibility(scheme);
            }}
            className="flex-1 py-3 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#123B8F]/20"
          >
            <span>Check Eligibility Wizard</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={scheme.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => showToast('Redirecting to Official Government Portal...', 'info')}
            className="px-4 py-3 rounded-xl bg-white hover:bg-[#F8FBFF] text-[#123B8F] font-bold text-xs border border-[#D8E6F7] transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Apply Officially</span>
            <ExternalLink className="w-4 h-4 text-[#6D4AFF]" />
          </a>
        </div>
      </div>
    </div>
  );
};
