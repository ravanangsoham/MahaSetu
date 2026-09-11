import React from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PrerequisiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrerequisiteModal: React.FC<PrerequisiteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#123B8F]/30 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-[#D8E6F7] my-8">
        <div className="bg-gradient-to-r from-[#123B8F] to-[#5B3FD3] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <span className="bg-white/15 text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/20">
            PREREQUISITE SERVICE GUIDANCE
          </span>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-2">
            Obtain Tahsildar Income Certificate
          </h2>
          <p className="text-xs text-blue-100 mt-1">
            Revenue Department, Government of Maharashtra (Aaple Sarkar Portal)
          </p>
        </div>

        <div className="p-6 space-y-6 text-xs sm:text-sm">
          {/* Journey Flow Chain */}
          <div className="p-4 bg-[#EEF6FF] rounded-2xl border border-[#C9DCF5] text-center">
            <p className="font-bold text-[#123B8F] text-xs uppercase tracking-wider mb-2">
              Prerequisite Journey Sequence
            </p>
            <div className="flex items-center justify-center gap-2 font-bold text-xs text-[#123B8F]">
              <span className="bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE] px-2.5 py-1 rounded-lg">
                1. Income Certificate
              </span>
              <ArrowRight className="w-4 h-4 text-[#6D4AFF]" />
              <span className="bg-white border border-[#D8E6F7] px-2.5 py-1 rounded-lg">
                2. Document Ready
              </span>
              <ArrowRight className="w-4 h-4 text-[#6D4AFF]" />
              <span className="bg-white border border-[#D8E6F7] px-2.5 py-1 rounded-lg">
                3. Scholarship Application
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#123B8F] text-sm mb-2">Why is this required?</h3>
            <p className="text-[#294A78] leading-relaxed bg-[#F8FBFF] p-3 rounded-xl border border-[#D8E6F7]">
              Higher Education scholarship schemes require a valid Tahsildar Income Certificate for the current financial year to confirm annual family income &lt;= ₹8.00 Lakh.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#123B8F] text-sm mb-2">Documents Needed for Income Certificate</h3>
            <ul className="space-y-1.5 text-[#294A78] bg-[#F8FBFF] p-4 rounded-xl border border-[#D8E6F7]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A36A] flex-shrink-0" />
                <span>Aadhaar Card of Applicant / Parent</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A36A] flex-shrink-0" />
                <span>Talathi Income Verification Report or Self-Declaration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A36A] flex-shrink-0" />
                <span>Ration Card (Yellow/Orange) or Tax Receipt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#EEF6FF] p-4 border-t border-[#D8E6F7] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-[#48658F] text-xs font-bold rounded-xl border border-[#D8E6F7]"
          >
            Close Guide
          </button>

          <a
            href="https://aaplesarkar.mahaonline.gov.in"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-extrabold rounded-xl transition-colors flex items-center gap-1.5 shadow-md shadow-[#123B8F]/20"
          >
            <span>Apply on Aaple Sarkar Revenue Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
