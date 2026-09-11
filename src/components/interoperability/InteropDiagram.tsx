import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { StatusBadge } from '../common/StatusBadge';
import { Database, ArrowDown, ShieldCheck, Cpu } from 'lucide-react';

export const InteropDiagram: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F7] shadow-xl max-w-4xl mx-auto text-[#123B8F]">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="bg-[#F0ECFF] text-[#5B3FD3] font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-[#EDE9FE]">
          System Interoperability Architecture
        </span>
        <h2 className="text-2xl font-extrabold text-[#123B8F] mt-2">{t('interopTitle')}</h2>
        <p className="text-xs sm:text-sm text-[#48658F] mt-1 font-medium">{t('interopSub')}</p>
      </div>

      {/* Visual Architectural Stack Flow */}
      <div className="space-y-4 relative">
        {/* Layer 1: MahaSetu AI */}
        <div className="bg-gradient-to-r from-[#123B8F] via-[#1D4ED8] to-[#5B3FD3] text-white p-5 rounded-2xl shadow-lg border border-purple-300/30 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Cpu className="w-5 h-5 text-amber-300" />
            <h3 className="font-extrabold text-lg">MAHASETU AI (Orchestration & Interoperability Layer)</h3>
          </div>
          <p className="text-xs text-blue-100 font-medium">
            Citizen Intent Understanding • Multilingual NLP • Rules & Eligibility Engine • Workflow Orchestrator
          </p>
        </div>

        <div className="flex justify-center my-2">
          <ArrowDown className="w-6 h-6 text-[#6D4AFF] animate-bounce" />
        </div>

        {/* Layer 2: Secure API / Connector Gateway */}
        <div className="bg-[#EEF6FF] p-4 rounded-2xl border border-[#C9DCF5] text-center">
          <h4 className="font-bold text-[#123B8F] text-sm mb-1 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16A36A]" />
            Consent-Based API & Connector Gateway
          </h4>
          <p className="text-xs text-[#48658F] font-medium">Zero Data Retention • Tokenized JWT Handshake • Audit Logging</p>
        </div>

        <div className="flex justify-center my-2">
          <ArrowDown className="w-6 h-6 text-[#2563EB]" />
        </div>

        {/* Layer 3: Integration Connectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Node 1: API Setu */}
          <div className="p-4 bg-white rounded-2xl border border-[#D8E6F7] text-center flex flex-col justify-between shadow-xs">
            <div>
              <StatusBadge status="DEMO" size="sm" />
              <h5 className="font-bold text-[#123B8F] text-sm mt-2">API Setu Gateway</h5>
              <p className="text-xs text-[#48658F] mt-1 font-medium">National Data Exchange framework for Caste & Land verification.</p>
            </div>
            <span className="text-[10px] text-[#2563EB] font-mono mt-3 font-semibold">Connection: REST / OAuth2</span>
          </div>

          {/* Node 2: DigiLocker */}
          <div className="p-4 bg-white rounded-2xl border border-[#D8E6F7] text-center flex flex-col justify-between shadow-xs">
            <div>
              <StatusBadge status="REAL" size="sm" />
              <h5 className="font-bold text-[#123B8F] text-sm mt-2">DigiLocker Vault</h5>
              <p className="text-xs text-[#48658F] mt-1 font-medium">Direct e-KYC & XML certificate fetch with citizen consent.</p>
            </div>
            <span className="text-[10px] text-[#16A36A] font-mono mt-3 font-semibold">Connection: Live e-KYC API</span>
          </div>

          {/* Node 3: State APIs */}
          <div className="p-4 bg-white rounded-2xl border border-[#D8E6F7] text-center flex flex-col justify-between shadow-xs">
            <div>
              <StatusBadge status="OFFICIAL_HANDOFF" size="sm" />
              <h5 className="font-bold text-[#123B8F] text-sm mt-2">State Dept APIs</h5>
              <p className="text-xs text-[#48658F] mt-1 font-medium">MahaDBT, Aaple Sarkar Revenue & Agriculture portals.</p>
            </div>
            <span className="text-[10px] text-[#6D4AFF] font-mono mt-3 font-semibold">Connection: Handoff & Adapters</span>
          </div>
        </div>

        <div className="flex justify-center my-2">
          <ArrowDown className="w-6 h-6 text-[#48658F]" />
        </div>

        {/* Layer 4: Authoritative Systems */}
        <div className="bg-[#123B8F] text-white p-4 rounded-2xl border border-[#2563EB] text-center shadow-md">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Database className="w-4 h-4 text-amber-300" />
            <h4 className="font-bold text-sm">Authoritative Government Databases & Portals</h4>
          </div>
          <p className="text-xs text-blue-100 font-medium">
            Government of Maharashtra Departmental Portals (Remain 100% Authoritative)
          </p>
        </div>
      </div>
    </div>
  );
};
