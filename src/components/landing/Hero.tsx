import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import {
  MessageSquare,
  Search,
  Sparkles,
  User,
  Cpu,
  Brain,
  SearchCode,
  CheckCircle2,
  FileCheck,
  ExternalLink,
  Activity,
  ShieldCheck,
  ChevronRight,
  X,
  Play,
} from 'lucide-react';

interface HeroProps {
  onAskAI: () => void;
  onExploreSchemes: () => void;
  onStartDemo: () => void;
}

interface JourneyStage {
  id: string;
  label: string;
  icon: React.ElementType;
  tagline: string;
  explanation: string;
  badge: string;
}

export const Hero: React.FC<HeroProps> = ({ onAskAI, onExploreSchemes, onStartDemo }) => {
  const { t } = useLanguage();
  const [selectedStage, setSelectedStage] = useState<JourneyStage | null>(null);
  const [hoveredStageId, setHoveredStageId] = useState<string | null>(null);

  const stages: JourneyStage[] = [
    {
      id: 'citizen',
      label: 'CITIZEN',
      icon: User,
      tagline: 'Natural Input',
      explanation: 'Citizens communicate their intent using plain voice or multi-lingual text without needing to know specific department names or form numbers.',
      badge: 'Step 1',
    },
    {
      id: 'mahasetu',
      label: 'MAHASETU AI',
      icon: Cpu,
      tagline: 'Orchestration Layer',
      explanation: 'The intelligent citizen-facing bridge connecting user query to government backend services without storing unnecessary private data.',
      badge: 'Step 2',
    },
    {
      id: 'understand',
      label: 'UNDERSTAND',
      icon: Brain,
      tagline: 'Intent Parsing',
      explanation: 'MahaSetu extracts key context (education level, income bracket, land holding, district) to identify citizen service objectives.',
      badge: 'Step 3',
    },
    {
      id: 'find',
      label: 'FIND',
      icon: SearchCode,
      tagline: 'Scheme Discovery',
      explanation: 'Scans canonical Maharashtra state portals & central schemes to fetch latest rules, criteria, and deadline information.',
      badge: 'Step 4',
    },
    {
      id: 'qualify',
      label: 'QUALIFY',
      icon: CheckCircle2,
      tagline: 'Indicative Match',
      explanation: 'MahaSetu compares citizen-provided information with published scheme criteria to provide an indicative match before applying.',
      badge: 'Step 5',
    },
    {
      id: 'prepare',
      label: 'PREPARE',
      icon: FileCheck,
      tagline: 'Document & Prerequisite',
      explanation: 'Identifies missing prerequisite documents (e.g. Income Certificate) and builds an ordered sequence for document readiness.',
      badge: 'Step 6',
    },
    {
      id: 'apply',
      label: 'APPLY',
      icon: ExternalLink,
      tagline: 'Official Handoff',
      explanation: 'Handoff to official government portals (e.g. MahaDBT, Aaple Sarkar) with pre-verified document checklists for seamless application.',
      badge: 'Step 7',
    },
    {
      id: 'track',
      label: 'TRACK',
      icon: Activity,
      tagline: 'Unified Progress',
      explanation: 'Tracks real-time application movement across departmental review milestones in one single dashboard.',
      badge: 'Step 8',
    },
    {
      id: 'resolve',
      label: 'RESOLVE',
      icon: ShieldCheck,
      tagline: 'Service Fulfillment',
      explanation: 'Assists citizens upon approval or guides them through official grievance pathways (Aaple Sarkar Grievance) if delays occur.',
      badge: 'Step 9',
    },
  ];

  return (
    <section className="relative pt-8 pb-16 overflow-hidden bg-gradient-to-b from-[#EEF6FF]/60 via-[#F8FBFF] to-white">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#E8F1FF] via-[#F0ECFF]/40 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Core Brand Tagline & Principle Badge */}
        <div className="flex flex-col items-center gap-2 mb-6 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#123B8F] via-[#2563EB] to-[#6D4AFF] text-white px-5 py-1.5 rounded-full shadow-md text-xs font-bold tracking-wide border border-purple-300/40">
            <span className="bg-white text-[#123B8F] px-2.5 py-0.5 rounded text-[10px] font-black uppercase shadow-2xs">
              MahaSetu AI
            </span>
            <span>Connect • Guide • Empower</span>
          </div>

          <span className="text-xs font-extrabold text-[#6D4AFF] uppercase tracking-widest bg-[#F0ECFF] border border-[#EDE9FE] px-3.5 py-1 rounded-full">
            "One Platform. Many Government Services."
          </span>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#123B8F] tracking-tight leading-tight mb-4">
            Your Government Services.{' '}
            <span className="bg-gradient-to-r from-[#123B8F] via-[#2563EB] to-[#6D4AFF] bg-clip-text text-transparent">
              One Intelligent Journey.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#294A78] font-medium leading-relaxed mb-4">
            MahaSetu AI does NOT replace government portals. It connects citizens with existing government systems through an intelligent integration layer.
          </p>

          <p className="text-xs sm:text-sm text-[#48658F] leading-relaxed bg-white/90 p-4 rounded-2xl border border-[#D8E6F7] shadow-xs max-w-2xl mx-auto">
            {t('heroSupport')}
          </p>

          {/* Search / Ask MahaSetu AI Quick Interactive Bar */}
          <div className="mt-8 max-w-2xl mx-auto bg-white p-2.5 rounded-2xl border border-[#D8E6F7] shadow-lg flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#EEF6FF] text-[#123B8F] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#6D4AFF]" />
            </div>
            <input
              type="text"
              readOnly
              onClick={onAskAI}
              placeholder='Ask MahaSetu: "Am I eligible for a scholarship or farmer subsidy?"'
              className="w-full bg-transparent text-xs sm:text-sm text-[#123B8F] cursor-pointer focus:outline-none font-medium placeholder:text-[#48658F]"
            />
            <button
              onClick={onAskAI}
              className="px-4 py-2.5 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-md transition-colors shrink-0 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask AI</span>
            </button>
          </div>

          {/* Primary Interactive CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <button
              onClick={onStartDemo}
              className="group px-7 py-4 bg-gradient-to-r from-[#123B8F] via-[#2563EB] to-[#6D4AFF] hover:from-[#1D4ED8] hover:to-[#5B3FD3] text-white text-base font-extrabold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 border border-blue-400/40 ring-4 ring-[#F0ECFF]"
            >
              <div className="w-8 h-8 rounded-xl bg-white text-[#123B8F] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <div className="text-left">
                <div className="leading-none text-xs uppercase tracking-wider text-blue-100 font-bold">Interactive Demo</div>
                <div className="text-base font-extrabold text-white leading-tight">Try MahaSetu Journey</div>
              </div>
            </button>

            <button
              onClick={onExploreSchemes}
              className="px-6 py-4 bg-white hover:bg-[#EEF6FF] text-[#123B8F] text-sm font-bold rounded-2xl shadow-sm border border-[#D8E6F7] transition-all flex items-center gap-2"
            >
              <Search className="w-4 h-4 text-[#2563EB]" />
              <span>{t('ctaExploreSchemes')}</span>
            </button>
          </div>
        </div>

        {/* SECTION 2: INTERACTIVE MINI JOURNEY VISUALIZATION */}
        <div className="my-10 bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-white rounded-3xl p-6 sm:p-8 text-[#123B8F] shadow-xl border border-[#D8E6F7] max-w-6xl mx-auto relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[#D8E6F7] pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0ECFF] border border-[#EDE9FE] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Interactive Journey Map
              </div>
              <h3 className="text-xl font-bold text-[#123B8F]">
                Explore the 9-Stage MahaSetu Intelligence Pipeline
              </h3>
              <p className="text-xs text-[#48658F]">Click any stage below to inspect how MahaSetu processes citizen queries</p>
            </div>
            <div className="text-xs font-mono text-[#2563EB] bg-white px-3 py-1.5 rounded-xl border border-[#D8E6F7] font-semibold">
              Interactive • Click to inspect stage details
            </div>
          </div>

          {/* Stage Cards Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 relative">
            {stages.map((stg, idx) => {
              const Icon = stg.icon;
              const isSelected = selectedStage?.id === stg.id;
              const isHovered = hoveredStageId === stg.id;

              return (
                <div key={stg.id} className="relative flex flex-col items-center">
                  <button
                    onClick={() => setSelectedStage(isSelected ? null : stg)}
                    onMouseEnter={() => setHoveredStageId(stg.id)}
                    onMouseLeave={() => setHoveredStageId(null)}
                    className={`w-full p-2.5 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border text-center group ${
                      isSelected
                        ? 'bg-[#123B8F] text-white border-[#2563EB] ring-4 ring-[#F0ECFF] scale-105 shadow-md'
                        : isHovered
                        ? 'bg-[#EEF6FF] text-[#123B8F] border-[#6D4AFF] scale-102 shadow-xs'
                        : 'bg-white text-[#294A78] border-[#D8E6F7] hover:bg-[#F8FBFF]'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110 ${
                        isSelected
                          ? 'bg-white text-[#123B8F]'
                          : 'bg-[#F0ECFF] text-[#6D4AFF] border border-[#EDE9FE]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-extrabold text-[10px] tracking-tight leading-tight uppercase font-mono">
                      {stg.label}
                    </span>
                    <span
                      className={`text-[9px] mt-0.5 line-clamp-1 opacity-80 ${
                        isSelected ? 'text-blue-100 font-semibold' : 'text-[#48658F]'
                      }`}
                    >
                      {stg.tagline}
                    </span>
                  </button>

                  {/* Connecting Arrow for desktop */}
                  {idx < stages.length - 1 && (
                    <div
                      className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 transition-colors ${
                        isHovered || isSelected ? 'text-[#6D4AFF] font-extrabold' : 'text-[#C9DCF5]'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Popover Panel for Selected Stage */}
          {selectedStage ? (
            <div className="mt-6 p-5 rounded-2xl bg-white border border-[#6D4AFF]/40 shadow-xl animate-fade-in relative">
              <button
                onClick={() => setSelectedStage(null)}
                className="absolute top-4 right-4 p-1.5 text-[#48658F] hover:text-[#123B8F] rounded-lg bg-[#EEF6FF] hover:bg-[#D8E6F7] transition-colors"
                aria-label="Close detail panel"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0ECFF] border border-[#EDE9FE] flex items-center justify-center text-[#6D4AFF] shrink-0">
                  <selectedStage.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#123B8F] text-white text-[10px] font-bold uppercase font-mono">
                      {selectedStage.badge}
                    </span>
                    <h4 className="text-lg font-extrabold text-[#123B8F]">{selectedStage.label} — {selectedStage.tagline}</h4>
                  </div>
                  <p className="text-sm text-[#294A78] leading-relaxed max-w-3xl">
                    {selectedStage.explanation}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={onStartDemo}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#123B8F] to-[#6D4AFF] hover:from-[#1D4ED8] hover:to-[#5B3FD3] text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Try This In Live Demo</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 text-center py-2">
              <p className="text-xs text-[#48658F] italic font-medium">
                💡 Click any stage above to reveal detailed orchestration mechanics
              </p>
            </div>
          )}
        </div>

        {/* Hero Quick Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          <div className="bg-white p-3.5 rounded-2xl border border-[#D8E6F7] shadow-xs text-center">
            <p className="text-lg font-extrabold text-[#123B8F]">100+</p>
            <p className="text-[11px] text-[#48658F] font-medium">Govt Services</p>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-[#D8E6F7] shadow-xs text-center">
            <p className="text-lg font-extrabold text-[#6D4AFF]">3</p>
            <p className="text-[11px] text-[#48658F] font-medium">Languages (EN/MR/HI)</p>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-[#D8E6F7] shadow-xs text-center">
            <p className="text-lg font-extrabold text-[#16A36A]">AI Match</p>
            <p className="text-[11px] text-[#48658F] font-medium">Indicative Engine</p>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-[#D8E6F7] shadow-xs text-center">
            <p className="text-lg font-extrabold text-[#2563EB]">Handoff</p>
            <p className="text-[11px] text-[#48658F] font-medium">Official Portals</p>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-[#D8E6F7] shadow-xs text-center">
            <p className="text-lg font-extrabold text-[#123B8F]">Unified</p>
            <p className="text-[11px] text-[#48658F] font-medium">Status Tracking</p>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-[#D8E6F7] shadow-xs text-center">
            <p className="text-lg font-extrabold text-[#6D4AFF]">Grievance</p>
            <p className="text-[11px] text-[#48658F] font-medium">Official Guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
};
