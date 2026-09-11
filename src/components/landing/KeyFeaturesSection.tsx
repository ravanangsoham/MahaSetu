import React, { useState } from 'react';
import {
  Layers,
  Smartphone,
  UserCheck,
  Mic,
  Sparkles,
  CheckCircle2,
  Activity,
  Lock,
  Bell,
  Users,
  GraduationCap,
  Sprout,
  Building2,
  Briefcase,
} from 'lucide-react';

interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ElementType;
  tag: string;
}

interface TargetAudience {
  id: string;
  label: string;
  icon: React.ElementType;
  title: string;
  impacts: string[];
}

export const KeyFeaturesSection: React.FC = () => {
  const [activeAudienceId, setActiveAudienceId] = useState<string>('citizens');

  const features: FeatureCard[] = [
    {
      title: 'Zero-Replacement Integration Layer',
      desc: 'Connects citizens with existing department portals without taking over or replacing underlying state databases.',
      icon: Layers,
      tag: 'Architecture',
    },
    {
      title: 'Omnichannel Gateway',
      desc: 'Seamless user access across desktop web, responsive mobile web, and voice assistant interfaces.',
      icon: Smartphone,
      tag: 'Access',
    },
    {
      title: 'Unified Profile Hub',
      desc: 'Consolidates citizen eligibility parameters (age, income, domicile) for one-time reuse across multiple applications.',
      icon: UserCheck,
      tag: 'Citizen Centric',
    },
    {
      title: 'Multilingual Voice Engine',
      desc: 'Native speech and text support for English, Marathi, and Hindi allowing natural dialect interaction.',
      icon: Mic,
      tag: 'Inclusion',
    },
    {
      title: 'Personalized Recommendations',
      desc: 'AI proactively suggests matching state & central welfare schemes based on citizen profile parameters.',
      icon: Sparkles,
      tag: 'AI Intelligence',
    },
    {
      title: 'Eligibility Guidance Engine',
      desc: 'Provides indicative percentage match scores and highlights missing prerequisite documents before submission.',
      icon: CheckCircle2,
      tag: 'Verification',
    },
    {
      title: 'Application Tracking',
      desc: 'Unified stage-by-stage monitoring across departmental review milestones in one single dashboard.',
      icon: Activity,
      tag: 'Transparency',
    },
    {
      title: 'Secure Data Exchange',
      desc: 'Adheres to strict government privacy standards with HTTPS/TLS encryption and zero unnecessary central data storage.',
      icon: Lock,
      tag: 'Security',
    },
    {
      title: 'Notifications & Reminders',
      desc: 'Automated SMS, WhatsApp, and portal alerts for upcoming scheme deadlines and document renewal dates.',
      icon: Bell,
      tag: 'Alerts',
    },
  ];

  const audiences: TargetAudience[] = [
    {
      id: 'citizens',
      label: 'Citizens',
      icon: Users,
      title: 'Impact on Every Citizen',
      impacts: [
        'Single portal access for all state welfare schemes',
        'No need to search multiple department websites',
        'Transparent application status tracking in one dashboard',
        'Reduced visits to government offices for basic scheme information',
      ],
    },
    {
      id: 'students',
      label: 'Students',
      icon: GraduationCap,
      title: 'Impact on Students',
      impacts: [
        'Instant discovery of Post-Matric and Higher Education scholarships',
        'Clear guidance on income & domicile eligibility limits',
        'Step-by-step document preparation checklist',
        'Direct application handoff to MahaDBT portal',
      ],
    },
    {
      id: 'rural',
      label: 'Rural & Farmers',
      icon: Sprout,
      title: 'Impact on Rural Citizens & Farmers',
      impacts: [
        'Native Marathi voice interface for non-technical users',
        'Simplified access to agricultural subsidies & crop insurance',
        'Guidance on Tahsildar revenue certificates',
        'Reduced dependence on third-party intermediaries',
      ],
    },
    {
      id: 'depts',
      label: 'Government Departments',
      icon: Building2,
      title: 'Impact on Government Departments',
      impacts: [
        'Preserves existing IT infrastructure & portal investments',
        'API Setu and DigiLocker standards adoption',
        'Reduced duplicate and incomplete application submissions',
        'Higher visibility and uptake of published welfare schemes',
      ],
    },
    {
      id: 'officers',
      label: 'Government Officers',
      icon: Briefcase,
      title: 'Impact on Government Officers',
      impacts: [
        'Pre-verified applicant checklists reduce manual desk review burden',
        'Centralized monitoring of application processing SLA SLAs',
        'Streamlined grievance escalation via Aaple Sarkar integration',
        'Better data insights into regional scheme demand',
      ],
    },
  ];

  const activeAudience = audiences.find((a) => a.id === activeAudienceId) || audiences[0];

  return (
    <section className="py-16 bg-white border-b border-[#D8E6F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section 1 Header: Key Features */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D4AFF] bg-[#F0ECFF] border border-[#EDE9FE] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B8F] mt-3">
            Key Features of MahaSetu AI
          </h2>
          <p className="text-xs sm:text-sm text-[#48658F] mt-2 font-medium leading-relaxed">
            Built for government-grade reliability, citizen accessibility, and seamless interoperability.
          </p>
        </div>

        {/* 9 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FBFF] p-6 rounded-3xl border border-[#D8E6F7] shadow-xs hover:shadow-md hover:border-[#2563EB] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#EEF6FF] text-[#123B8F] flex items-center justify-center border border-[#C9DCF5] group-hover:scale-110 transition-transform shadow-2xs">
                      <Icon className="w-5 h-5 text-[#6D4AFF]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white text-[#123B8F] px-2.5 py-0.5 rounded-md border border-[#D8E6F7]">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-[#123B8F] text-base mb-1.5 group-hover:text-[#2563EB] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#48658F] leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 2: Impact on Target Audience */}
        <div className="bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-white rounded-3xl p-6 sm:p-10 border border-[#D8E6F7] shadow-xl max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#123B8F] bg-white border border-[#D8E6F7] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Citizen & Administrative Value
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123B8F] mt-2">
              Impact on Target Audience
            </h3>
            <p className="text-xs sm:text-sm text-[#48658F] mt-1 font-medium">
              Click a stakeholder group to view specific benefits delivered by MahaSetu.
            </p>
          </div>

          {/* 5 Stakeholder Navigation Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar mb-8">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              const isActive = aud.id === activeAudienceId;

              return (
                <button
                  key={aud.id}
                  onClick={() => setActiveAudienceId(aud.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md scale-105 ring-2 ring-[#F0ECFF]'
                      : 'bg-white text-[#123B8F] border-[#D8E6F7] hover:bg-[#F8FBFF]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{aud.label}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Audience Impact Box */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D8E6F7] shadow-md animate-fade-in">
            <div className="flex items-center gap-3 border-b border-[#D8E6F7] pb-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] border border-[#C9DCF5] flex items-center justify-center text-[#123B8F] shrink-0 shadow-xs">
                <activeAudience.icon className="w-6 h-6 text-[#6D4AFF]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6D4AFF] bg-[#F0ECFF] px-2 py-0.5 rounded border border-[#EDE9FE]">
                  Stakeholder Impact • {activeAudience.label}
                </span>
                <h4 className="text-xl font-extrabold text-[#123B8F] mt-1">
                  {activeAudience.title}
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeAudience.impacts.map((imp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FBFF] border border-[#D8E6F7] text-xs font-semibold text-[#123B8F] flex items-start gap-3 shadow-2xs"
                >
                  <div className="w-5 h-5 rounded-full bg-[#16A36A] text-white flex items-center justify-center font-extrabold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="leading-snug">{imp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
