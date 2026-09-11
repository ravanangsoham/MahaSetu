import React, { useState } from 'react';
import {
  Layers,
  ShieldCheck,
  Cpu,
  User,
  Brain,
  SearchCode,
  CheckCircle2,
  Server,
  Info,
} from 'lucide-react';

interface ArchBlock {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  explanation: string;
}

export const ConnectNotReplaceSection: React.FC = () => {
  const [activeArchBlock, setActiveArchBlock] = useState<ArchBlock | null>(null);

  const archBlocks: ArchBlock[] = [
    {
      id: 'input',
      title: 'Citizen Input',
      subtitle: 'Voice / Text Interface',
      icon: User,
      explanation:
        'Citizens state their query in natural language (voice or text in English, Marathi, or Hindi) without knowing official jargon.',
    },
    {
      id: 'ai_assistant',
      title: 'AI Assistant',
      subtitle: 'Multilingual NLU Engine',
      icon: Cpu,
      explanation:
        'Translates multi-dialect queries, extracts key citizen entities, and handles conversational dialog state.',
    },
    {
      id: 'intent',
      title: 'Intent Engine',
      subtitle: 'Service Classification',
      icon: Brain,
      explanation:
        'Maps natural queries to standardized government service categories (e.g. Higher Education Scholarship, Land Record, Farmers Subsidy).',
    },
    {
      id: 'knowledge',
      title: 'Govt Service Knowledge',
      subtitle: 'Canonical Rules DB',
      icon: SearchCode,
      explanation:
        'Contains indexed, up-to-date eligibility rules, required document lists, and official department gazette notifications.',
    },
    {
      id: 'orchestrator',
      title: 'Workflow Orchestrator',
      subtitle: 'Interoperability Engine',
      icon: Layers,
      explanation:
        'Sequences prerequisite dependencies (e.g. Income Cert required before Scholarship application) across department silos.',
    },
    {
      id: 'platforms',
      title: 'Government Platforms',
      subtitle: 'Canonical Connectors',
      icon: Server,
      explanation:
        'Integrates with API Setu, DigiLocker, MahaDBT, Aaple Sarkar, and state department APIs without taking over their backend logic.',
    },
    {
      id: 'response',
      title: 'Unified Response',
      subtitle: 'Actionable Guidance',
      icon: CheckCircle2,
      explanation:
        'Presents the citizen with a clear match score, required document checklist, and direct handoff links to official portals.',
    },
  ];

  const integrationExamples = [
    { name: 'API Setu', type: 'National API Gateway', desc: 'Secure data exchange across state & central ministries' },
    { name: 'DigiLocker', type: 'Document Wallet', desc: 'Verifiable digital certificates (Aadhaar, Marksheets, Ration Card)' },
    { name: 'UMANG', type: 'Unified Mobile App', desc: 'Centralized mobile access to government services' },
    { name: 'MahaDBT', type: 'Direct Benefit Transfer', desc: 'Maharashtra state scholarship & subsidy disbursement portal' },
    { name: 'Aaple Sarkar', type: 'Public Services Portal', desc: 'Revenue certificates & citizen grievance redressal system' },
    { name: 'Department APIs', type: 'State Microservices', desc: 'Authorized endpoints for Agriculture, Health, & Housing' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#EEF6FF]/60 via-[#F8FBFF] to-white border-b border-[#D8E6F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Banner Concept Badge */}
        <div className="bg-[#123B8F] text-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-14 relative overflow-hidden border border-[#2563EB]">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#6D4AFF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/20 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Core Interoperability Principle
            </div>

            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white mb-3">
              Connect, Don't Replace
            </h2>

            <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed mb-6">
              "MahaSetu AI integrates with existing government portals and systems instead of replacing them. It operates as an intelligent citizen-facing orchestration layer that respects official department ownership and authoritative data."
            </p>

            {/* Visual Flow Pipeline */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-bold text-white">
              <div className="p-3 rounded-xl bg-white text-[#123B8F] shadow-xs">
                1. CITIZEN
              </div>
              <div className="p-3 rounded-xl bg-[#6D4AFF] text-white shadow-xs">
                2. MAHASETU AI
              </div>
              <div className="p-3 rounded-xl bg-[#2563EB] text-white shadow-xs">
                3. INTEGRATION LAYER
              </div>
              <div className="p-3 rounded-xl bg-[#16A36A] text-white shadow-xs">
                4. EXISTING GOVT SYSTEMS
              </div>
            </div>
          </div>
        </div>

        {/* Integration Platforms Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-[#2563EB] bg-white px-3 py-1 rounded-full border border-[#D8E6F7]">
              Conceptual Government Integration Ecosystem
            </span>
            <h3 className="text-2xl font-extrabold text-[#123B8F] mt-2">
              Existing Government Digital Platforms
            </h3>
            <p className="text-xs text-[#48658F] mt-1">
              Demonstrating how MahaSetu AI connects citizens to authoritative government systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrationExamples.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#D8E6F7] shadow-xs hover:border-[#6D4AFF] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-extrabold text-[#123B8F] text-base">{item.name}</h4>
                  <span className="text-[10px] font-mono font-bold bg-[#F0ECFF] text-[#5B3FD3] px-2 py-0.5 rounded border border-[#EDE9FE]">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-[#48658F] leading-relaxed font-medium">{item.desc}</p>
                <div className="mt-3 text-[10px] font-semibold text-[#16A36A] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Demo / Conceptual Integration Point
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 7-Step Architecture Pipeline */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#6D4AFF] bg-[#F0ECFF] border border-[#EDE9FE] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              System Architecture
            </span>
            <h3 className="text-2xl font-extrabold text-[#123B8F] mt-2">
              MahaSetu Integration & Orchestration Pipeline
            </h3>
            <p className="text-xs text-[#48658F] mt-1 font-medium">
              Click or hover over any component to view detailed architecture mechanics.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
            {archBlocks.map((block) => {
              const Icon = block.icon;
              const isSelected = activeArchBlock?.id === block.id;

              return (
                <button
                  key={block.id}
                  onClick={() => setActiveArchBlock(isSelected ? null : block)}
                  onMouseEnter={() => setActiveArchBlock(block)}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between group ${
                    isSelected
                      ? 'bg-[#123B8F] text-white border-[#2563EB] shadow-lg scale-102 ring-2 ring-[#F0ECFF]'
                      : 'bg-white text-[#123B8F] border-[#D8E6F7] hover:bg-[#F8FBFF]'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110 ${
                      isSelected
                        ? 'bg-white text-[#123B8F]'
                        : 'bg-[#EEF6FF] text-[#6D4AFF] border border-[#C9DCF5]'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h4 className={`font-extrabold text-xs leading-tight mb-0.5 ${isSelected ? 'text-white' : 'text-[#123B8F]'}`}>
                    {block.title}
                  </h4>
                  <span className={`text-[9px] line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-[#48658F]'}`}>
                    {block.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {activeArchBlock ? (
            <div className="bg-white p-5 rounded-2xl border border-[#6D4AFF]/40 shadow-lg max-w-3xl mx-auto flex items-start gap-4 animate-fade-in">
              <Info className="w-6 h-6 text-[#6D4AFF] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-[#123B8F] text-sm">{activeArchBlock.title} ({activeArchBlock.subtitle})</h4>
                <p className="text-xs text-[#294A78] leading-relaxed mt-1 font-medium">{activeArchBlock.explanation}</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-xs text-[#48658F] italic font-medium">
              💡 Hover or click any block above to inspect component mechanics
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
