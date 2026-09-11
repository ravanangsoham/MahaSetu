import React, { useState } from 'react';
import {
  HeartHandshake,
  Layers,
  Clock,
  Globe2,
  Eye,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Database,
  Briefcase,
  DollarSign,
  Users,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

export const BenefitsFeasibilitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'feasibility' | 'challenges' | 'research'>('benefits');

  const benefits = [
    { title: 'Social Benefit', desc: 'Ensures targeted welfare benefits reach eligible citizens without leakage or administrative delays.', icon: HeartHandshake, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { title: 'Interoperability', desc: 'Bridges fragmented state department portals into one seamless, unified citizen workflow.', icon: Layers, color: 'text-[#123B8F] bg-[#EEF6FF] border-[#C9DCF5]' },
    { title: 'Time & Cost Saving', desc: 'Reduces manual searching time and office visits for citizens and speeds up processing for officers.', icon: Clock, color: 'text-[#16A36A] bg-emerald-50 border-emerald-200' },
    { title: 'Digital Inclusion', desc: 'Multilingual text and voice support breaks literacy and language barriers for rural populations.', icon: Globe2, color: 'text-[#6D4AFF] bg-[#F0ECFF] border-[#EDE9FE]' },
    { title: 'Transparency', desc: 'Provides clear status milestones and indicative qualification criteria to build public trust.', icon: Eye, color: 'text-[#2563EB] bg-[#EEF6FF] border-[#C9DCF5]' },
    { title: 'Security & Privacy', desc: 'Adheres to government security guidelines with HTTPS/TLS and zero central storage of personal data.', icon: ShieldCheck, color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { title: 'Scalability', desc: 'Modular microservice architecture built to support millions of citizens across Maharashtra.', icon: TrendingUp, color: 'text-purple-700 bg-[#F0ECFF] border-[#EDE9FE]' },
  ];

  const feasibilityDimensions = [
    { title: 'Technical Feasibility', desc: 'Built using established web standards (React + TypeScript), modular APIs, and proven LLM/RAG intent engines.', icon: Cpu },
    { title: 'Integration Feasibility', desc: 'Designed to connect directly via API Setu, DigiLocker gateways, and canonical state department endpoints.', icon: Layers },
    { title: 'Data Feasibility', desc: 'Utilizes authorized open data schemas and public scheme gazettes without duplicating state databases.', icon: Database },
    { title: 'Operational Feasibility', desc: 'Preserves existing department authority and workflows — officers continue using authoritative portals.', icon: Briefcase },
    { title: 'Economic Viability', desc: 'Reuses existing government IT infrastructure; low incremental cost with high citizen productivity gains.', icon: DollarSign },
    { title: 'Social Viability', desc: 'Citizen-centric design prioritizing local languages (Marathi, Hindi, English) and voice accessibility.', icon: Users },
  ];

  const challengesSolutions = [
    { challenge: 'Legacy Systems', problem: 'Older department portals lacking standardized REST APIs.', solution: 'Adapter-Based Integration using lightweight gateway microservices.' },
    { challenge: 'Data Variation', problem: 'Inconsistent data formats across different department databases.', solution: 'Schema Standardization layer mapping parameters into unified JSON schemas.' },
    { challenge: 'User Adoption', problem: 'Rural citizens hesitant to navigate complex digital forms.', solution: 'Multilingual Voice Guidance and simplified 4-step eligibility wizards.' },
    { challenge: 'Scalability', problem: 'High concurrent query traffic during scholarship application season.', solution: 'Scalable cloud architecture with cached scheme rules and CDN assets.' },
    { challenge: 'Security Risks', problem: 'Potential unauthorized access to citizen application data.', solution: 'End-to-End Encryption (TLS) and strict zero-retention data privacy controls.' },
  ];

  const researchReferences = [
    { name: 'API Setu Platform', organization: 'Ministry of Electronics & IT (MeitY)', note: 'Canonical API gateway facilitating seamless inter-departmental data exchange across India.', portalUrl: 'https://apisetu.gov.in' },
    { name: 'UMANG Platform', organization: 'NeGD & MeitY', note: 'National unified mobile platform providing single-point access to 1,200+ government services.', portalUrl: 'https://web.umang.gov.in' },
    { name: 'Aaple Sarkar Portal', organization: 'Government of Maharashtra', note: 'Authoritative state portal for revenue certificates, public services, and citizen grievance redressal.', portalUrl: 'https://aaplesarkar.mahaonline.gov.in' },
    { name: 'MahaDBT Portal', organization: 'Government of Maharashtra', note: 'State direct benefit transfer portal disbursing scholarships, agricultural subsidies, and social welfare.', portalUrl: 'https://mahadbt.maharashtra.gov.in' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#F8FBFF] via-white to-[#EEF6FF]/60 border-b border-[#D8E6F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#123B8F] bg-[#EEF6FF] border border-[#C9DCF5] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Framework & Validation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B8F] mt-3">
            Benefits, Feasibility & Key Research
          </h2>
          <p className="text-xs sm:text-sm text-[#48658F] mt-2 font-medium leading-relaxed">
            Examine the social impact, technical viability, risk mitigation strategies, and canonical references grounding MahaSetu AI.
          </p>
        </div>

        {/* 4 Interactive Tab Switches */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar mb-10">
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${
              activeTab === 'benefits'
                ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md scale-105 ring-2 ring-[#F0ECFF]'
                : 'bg-white text-[#123B8F] border-[#D8E6F7] hover:bg-[#F8FBFF]'
            }`}
          >
            1. Benefits of MahaSetu
          </button>
          <button
            onClick={() => setActiveTab('feasibility')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${
              activeTab === 'feasibility'
                ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md scale-105 ring-2 ring-[#F0ECFF]'
                : 'bg-white text-[#123B8F] border-[#D8E6F7] hover:bg-[#F8FBFF]'
            }`}
          >
            2. Technical Feasibility
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${
              activeTab === 'challenges'
                ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md scale-105 ring-2 ring-[#F0ECFF]'
                : 'bg-white text-[#123B8F] border-[#D8E6F7] hover:bg-[#F8FBFF]'
            }`}
          >
            3. Challenges & Solutions
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${
              activeTab === 'research'
                ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md scale-105 ring-2 ring-[#F0ECFF]'
                : 'bg-white text-[#123B8F] border-[#D8E6F7] hover:bg-[#F8FBFF]'
            }`}
          >
            4. Research & References
          </button>
        </div>

        {/* TAB 1: BENEFITS */}
        {activeTab === 'benefits' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-[#D8E6F7] shadow-xs hover:shadow-md hover:border-[#2563EB] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 border ${b.color} group-hover:scale-110 transition-transform shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-[#123B8F] text-base mb-2">{b.title}</h3>
                    <p className="text-xs text-[#48658F] leading-relaxed font-medium">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: FEASIBILITY */}
        {activeTab === 'feasibility' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {feasibilityDimensions.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-[#D8E6F7] shadow-xs hover:shadow-md hover:border-[#6D4AFF] transition-all"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#EEF6FF] text-[#6D4AFF] border border-[#C9DCF5] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-[#123B8F] text-base mb-1.5">{f.title}</h3>
                  <p className="text-xs text-[#48658F] leading-relaxed font-medium">{f.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: CHALLENGES & SOLUTIONS */}
        {activeTab === 'challenges' && (
          <div className="space-y-4 max-w-4xl mx-auto animate-fade-in">
            {challengesSolutions.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#D8E6F7] shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
              >
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-1">
                    <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>Challenge: {cs.challenge}</span>
                  </div>
                  <p className="text-xs text-amber-950 font-medium leading-relaxed">{cs.problem}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#16A36A] shrink-0" />
                    <span>MahaSetu Solution</span>
                  </div>
                  <p className="text-xs text-emerald-900 font-medium leading-relaxed">{cs.solution}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: RESEARCH & REFERENCES */}
        {activeTab === 'research' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-in">
            {researchReferences.map((ref, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#D8E6F7] shadow-xs hover:border-[#123B8F] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EEF6FF] text-[#123B8F] px-2.5 py-0.5 rounded border border-[#C9DCF5]">
                      Reference Platform
                    </span>
                    <BookOpen className="w-4 h-4 text-[#6D4AFF]" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#123B8F] mb-1">{ref.name}</h3>
                  <p className="text-xs font-bold text-[#6D4AFF] mb-3">{ref.organization}</p>
                  <p className="text-xs text-[#48658F] leading-relaxed font-medium mb-4">{ref.note}</p>
                </div>

                <div className="pt-3 border-t border-[#D8E6F7] flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#16A36A] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Conceptual Integration Architecture
                  </span>
                  <a
                    href={ref.portalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#123B8F] hover:text-[#2563EB] flex items-center gap-1"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
