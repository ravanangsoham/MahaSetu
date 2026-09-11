import React from 'react';
import { ShieldCheck, Lock, EyeOff, Layers, Building2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#123B8F] via-[#1D4ED8] to-[#5B3FD3] text-white p-6 sm:p-8 rounded-3xl shadow-xl mb-8 border border-purple-300/30">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-8 h-8 text-emerald-300" />
          <h2 className="text-2xl font-extrabold">Trust, Governance & Privacy Manifesto</h2>
        </div>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-medium">
          MahaSetu AI adheres strictly to data minimization, explicit citizen consent, and official departmental authority.
        </p>
      </div>

      {/* Security Principles Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-[#D8E6F7] shadow-xs space-y-2">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#16A36A]" />
            <h3 className="font-bold text-[#123B8F] text-base">Consent-Based Data Exchange</h3>
          </div>
          <p className="text-xs text-[#48658F] leading-relaxed font-medium">
            Data is retrieved from DigiLocker or state registries only when explicitly authorized by the citizen during an active journey.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#D8E6F7] shadow-xs space-y-2">
          <div className="flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-[#16A36A]" />
            <h3 className="font-bold text-[#123B8F] text-base">Data Minimization</h3>
          </div>
          <p className="text-xs text-[#48658F] leading-relaxed font-medium">
            MahaSetu AI never retains permanent copies of personal identity records. Information is processed temporarily for journey matching.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#D8E6F7] shadow-xs space-y-2">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#6D4AFF]" />
            <h3 className="font-bold text-[#123B8F] text-base">Secure API Communication</h3>
          </div>
          <p className="text-xs text-[#48658F] leading-relaxed font-medium">
            All data exchanges use API Setu national standards, HTTPS/TLS 1.3 encryption, and signed JWT authentication tokens.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#D8E6F7] shadow-xs space-y-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#2563EB]" />
            <h3 className="font-bold text-[#123B8F] text-base">Government Authoritative Rule</h3>
          </div>
          <p className="text-xs text-[#48658F] leading-relaxed font-medium">
            Existing departmental web portals remain 100% authoritative for final application submission, scrutiny, and decision making.
          </p>
        </div>
      </div>

      {/* Prominent Commitment Statement */}
      <div className="bg-[#F0ECFF] rounded-2xl p-5 border border-[#EDE9FE] text-[#123B8F] text-xs sm:text-sm font-semibold text-center shadow-2xs">
        "Your data is only used where required for the requested service journey. MahaSetu AI connects government platforms without replacing official portals."
      </div>
    </div>
  );
};
