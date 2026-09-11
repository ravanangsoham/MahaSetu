import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Activity,
  Sparkles,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  details: string[];
  actionLabel: string;
}

export const HowItWorks: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const stages: Stage[] = [
    {
      id: 1,
      title: '1. DISCOVER',
      subtitle: 'Find relevant schemes & services',
      icon: Search,
      description:
        'Citizens search for government benefits using plain natural language or voice in English, Marathi, or Hindi without needing to know specific department names or form numbers.',
      details: [
        'Natural query understanding (Voice & Text)',
        'Cross-departmental scheme aggregation',
        'Category filters (Education, Agriculture, Housing, etc.)',
      ],
      actionLabel: 'Try Natural Scheme Search',
    },
    {
      id: 2,
      title: '2. UNDERSTAND',
      subtitle: 'Get scheme details & requirements',
      icon: BookOpen,
      description:
        'MahaSetu AI breaks down complex government gazettes and notifications into clear, easy-to-understand summaries with required document lists and official deadlines.',
      details: [
        'Plain language scheme explanations',
        'Mandatory vs optional document checklists',
        'Key financial & subsidy benefits breakdown',
      ],
      actionLabel: 'Inspect Scheme Breakdown',
    },
    {
      id: 3,
      title: '3. CHECK ELIGIBILITY',
      subtitle: 'AI verifies criteria before applying',
      icon: CheckCircle2,
      description:
        'Citizens answer a quick 4-step wizard (age, education, domicile, income) to get an instant indicative match score and see exactly why they qualify.',
      details: [
        'Indicative percentage match score (e.g. 92% Match)',
        'Identifies missing prerequisite documents',
        'Prevents rejected applications on official portals',
      ],
      actionLabel: 'Check Your Eligibility',
    },
    {
      id: 4,
      title: '4. APPLY',
      subtitle: 'Step-by-step guidance & portal link',
      icon: ExternalLink,
      description:
        'MahaSetu provides pre-verified document checklists and seamlessly hands over citizen execution to official state department portals (e.g. MahaDBT, Aaple Sarkar).',
      details: [
        'Connects, does not replace official portals',
        'Pre-fills application guidance sequence',
        'Direct links to canonical government sites',
      ],
      actionLabel: 'View Application Guidance',
    },
    {
      id: 5,
      title: '5. TRACK',
      subtitle: 'Monitor status & receive alerts',
      icon: Activity,
      description:
        'Citizens monitor real-time application movement across department desk review milestones in one unified dashboard with automated SMS/WhatsApp alerts.',
      details: [
        'Single tracking reference (e.g. DEMO-EDU-2026-001)',
        'Stage-by-stage verification progress bar',
        'Deadline & document renewal reminders',
      ],
      actionLabel: 'Track Application Status',
    },
    {
      id: 6,
      title: '6. RECOMMEND',
      subtitle: 'Receive relevant new opportunities',
      icon: Sparkles,
      description:
        'MahaSetu proactively notifies citizens when new state or central welfare schemes matching their profile, trade, or education level become available.',
      details: [
        'Personalized profile matching',
        'Proactive welfare opportunity notifications',
        'Prerequisite document reuse across schemes',
      ],
      actionLabel: 'View Personal Recommendations',
    },
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#F8FBFF] to-[#EEF6FF]/50 border-b border-[#D8E6F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D4AFF] bg-[#F0ECFF] border border-[#EDE9FE] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Simple 6-Stage Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B8F] mt-3">
            How MahaSetu AI Works
          </h2>
          <p className="text-xs sm:text-sm text-[#48658F] mt-2 font-medium leading-relaxed">
            From discovering schemes to tracking official approval — MahaSetu guides citizens through every step of their government service journey.
          </p>
        </div>

        {/* 6 Clickable Stage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          {stages.map((stg) => {
            const Icon = stg.icon;
            const isActive = stg.id === activeStageId;

            return (
              <button
                key={stg.id}
                onClick={() => setActiveStageId(stg.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-xl scale-102 ring-4 ring-[#F0ECFF]'
                    : 'bg-white text-[#123B8F] border-[#D8E6F7] hover:bg-[#F8FBFF] hover:border-[#6D4AFF] hover:shadow-md'
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${
                      isActive
                        ? 'bg-white text-[#123B8F] shadow-sm'
                        : 'bg-[#EEF6FF] text-[#6D4AFF] border border-[#C9DCF5]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider font-mono block ${isActive ? 'text-blue-200' : 'text-[#6D4AFF]'}`}>
                    Stage {stg.id}
                  </span>
                  <h3 className={`font-extrabold text-sm mt-0.5 leading-tight ${isActive ? 'text-white' : 'text-[#123B8F]'}`}>
                    {stg.title.replace(`${stg.id}. `, '')}
                  </h3>
                  <p className={`text-[11px] mt-1 line-clamp-2 leading-snug ${isActive ? 'text-blue-100' : 'text-[#48658F]'}`}>
                    {stg.subtitle}
                  </p>
                </div>

                <div className={`mt-3 pt-2 border-t text-[10px] font-bold flex items-center justify-between ${isActive ? 'border-blue-400/40 text-amber-300' : 'border-[#EEF6FF] text-[#2563EB]'}`}>
                  <span>Inspect</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Detail Display Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F7] shadow-xl max-w-4xl mx-auto animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D8E6F7] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] border border-[#C9DCF5] flex items-center justify-center text-[#123B8F] shrink-0 shadow-xs">
                <activeStage.icon className="w-6 h-6 text-[#6D4AFF]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6D4AFF] bg-[#F0ECFF] px-2.5 py-0.5 rounded border border-[#EDE9FE]">
                  Active Stage Breakdown • {activeStage.title}
                </span>
                <h3 className="text-xl font-extrabold text-[#123B8F] mt-1">
                  {activeStage.subtitle}
                </h3>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono text-[#2563EB] bg-[#F8FBFF] px-3 py-1 rounded-xl border border-[#D8E6F7] font-semibold">
                Step {activeStage.id} of 6
              </span>
            </div>
          </div>

          <p className="text-sm text-[#294A78] leading-relaxed mb-6 font-medium">
            {activeStage.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {activeStage.details.map((detail, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FBFF] border border-[#D8E6F7] text-xs font-semibold text-[#123B8F] flex items-start gap-2 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#16A36A] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-[#D8E6F7]">
            <button
              onClick={() => setActiveStageId((prev) => (prev % 6) + 1)}
              className="px-4 py-2 rounded-xl bg-[#EEF6FF] hover:bg-[#D8E6F7] text-[#123B8F] text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <span>Next Stage ({((activeStageId % 6) + 1)})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
