import React, { useState } from 'react';
import {
  MessageSquareText,
  Search,
  CheckCircle2,
  FileCheck2,
  ExternalLink,
  Activity,
  BellRing,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface JourneyStep {
  id: number;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  fullDesc: string;
  badge: string;
  uiExampleTitle: string;
  uiExampleItems: string[];
}

export const CitizenJourneySection: React.FC<{
  onStartDemo: () => void;
  onNavigateTab: (tab: string) => void;
}> = ({ onStartDemo, onNavigateTab }) => {
  const [selectedStepId, setSelectedStepId] = useState<number>(1);

  const steps: JourneyStep[] = [
    {
      id: 1,
      title: '1. Tell Us Your Need',
      shortDesc: 'Natural language input via text or voice',
      icon: MessageSquareText,
      fullDesc:
        'Citizens communicate their service requirement in plain natural language (voice or text in English, Marathi, or Hindi) without knowing government department terminology.',
      badge: 'Step 1 of 7',
      uiExampleTitle: 'Natural Input Visualizer',
      uiExampleItems: [
        'Input: "मला माझ्या मुलीच्या कॉलेजच्या फीसाठी स्कॉलरशिप हवी आहे."',
        'Parsed Intent: Education / Girl Child / Fee Reimbursement',
        'Language Detected: Marathi (auto-translated to query engine)',
      ],
    },
    {
      id: 2,
      title: '2. Discover Schemes & Services',
      shortDesc: 'Automated scheme search & matching',
      icon: Search,
      fullDesc:
        'MahaSetu searches canonical Maharashtra state gazettes, department portals (MahaDBT, Aaple Sarkar), and central schemes to locate exact service matches.',
      badge: 'Step 2 of 7',
      uiExampleTitle: 'Scheme Discovery Results',
      uiExampleItems: [
        'Match Found: Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Yojna',
        'Department: Higher & Technical Education Dept',
        'Benefit: 50% to 100% tuition & exam fee reimbursement',
      ],
    },
    {
      id: 3,
      title: '3. Check Eligibility with AI',
      shortDesc: 'Indicative criteria verification',
      icon: CheckCircle2,
      fullDesc:
        'AI evaluates citizen parameters (age, education level, domicile, annual income) against official published rules to calculate an indicative match percentage.',
      badge: 'Step 3 of 7',
      uiExampleTitle: 'AI Match Calculation',
      uiExampleItems: [
        'Indicative Match Score: 92%',
        'Criteria Met: Undergraduate Student, Maharashtra Resident',
        'Requirement Pending: Tahsildar Income Certificate (< ₹8 Lakh)',
      ],
    },
    {
      id: 4,
      title: '4. Get Detailed Guidance',
      shortDesc: 'Prerequisite document roadmap',
      icon: FileCheck2,
      fullDesc:
        'MahaSetu builds an ordered document preparation sequence and alerts the citizen if a missing prerequisite certificate must be obtained first.',
      badge: 'Step 4 of 7',
      uiExampleTitle: 'Document Sequence Checklist',
      uiExampleItems: [
        'Prerequisite Service: Tahsildar Income Certificate (Aaple Sarkar)',
        'Mandatory Checklist: Aadhaar Card, Previous Marksheet, Domicile Cert',
        'Estimated Resolution Time: 3 to 5 business days',
      ],
    },
    {
      id: 5,
      title: '5. Apply on Official Portal',
      shortDesc: 'Seamless official portal handoff',
      icon: ExternalLink,
      fullDesc: 'Redirects citizen to canonical state department portal with pre-verified document checklists ("Connect, Don\'t Replace").',
      badge: 'Step 5 of 7',
      uiExampleTitle: 'Official Government Handoff',
      uiExampleItems: [
        'Canonical Portal: https://mahadbt.maharashtra.gov.in',
        'Pre-verified Checklist Transferred',
        'Zero Data Lock-in: Application executed on official state system',
      ],
    },
    {
      id: 6,
      title: '6. Track Your Application',
      shortDesc: 'Unified real-time status monitoring',
      icon: Activity,
      fullDesc:
        'Citizens monitor application progress across desk verification levels in one single dashboard without visiting multiple office portals.',
      badge: 'Step 6 of 7',
      uiExampleTitle: 'Live Tracking Milestone',
      uiExampleItems: [
        'Reference ID: DEMO-EDU-2026-001',
        'Status: Desk 2 Verification by Tahsildar Officer',
        'Completion Rate: 60% Progress',
      ],
    },
    {
      id: 7,
      title: '7. New Schemes & Reminders',
      shortDesc: 'Proactive alerts & renewal reminders',
      icon: BellRing,
      fullDesc:
        'MahaSetu sends proactive alerts for upcoming scholarship deadlines, document renewal dates, and newly launched government schemes matching the profile.',
      badge: 'Step 7 of 7',
      uiExampleTitle: 'Proactive Alert Feed',
      uiExampleItems: [
        'Alert: Post-Matric Scholarship deadline in 5 days',
        'Notification: Income Certificate renewal due next month',
        'Opportunity: PM Kisan Samman Nidhi open for registration',
      ],
    },
  ];

  const activeStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  return (
    <section className="py-16 bg-[#F8FBFF] border-b border-[#D8E6F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#123B8F] bg-[#EEF6FF] border border-[#C9DCF5] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Citizen Journey Map
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B8F] mt-3">
            Your Journey With MahaSetu
          </h2>
          <p className="text-xs sm:text-sm text-[#48658F] mt-2 font-medium leading-relaxed">
            Experience how MahaSetu AI simplifies government interaction into a single, guided citizen roadmap.
          </p>
        </div>

        {/* 7 Horizontal Interactive Step Pills */}
        <div className="mb-10 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center justify-between min-w-[900px] relative px-4">
            {/* Animated Connection Line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-[#EEF6FF] -translate-y-1/2 -z-0">
              <div
                className="h-full bg-gradient-to-r from-[#123B8F] via-[#2563EB] to-[#6D4AFF] transition-all duration-500"
                style={{ width: `${((selectedStepId - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((stg) => {
              const Icon = stg.icon;
              const isSelected = stg.id === selectedStepId;
              const isPast = stg.id < selectedStepId;

              return (
                <button
                  key={stg.id}
                  onClick={() => setSelectedStepId(stg.id)}
                  className={`relative z-10 flex flex-col items-center group transition-transform ${
                    isSelected ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-xs shadow-md transition-all ${
                      isSelected
                        ? 'bg-[#123B8F] text-white ring-4 ring-[#F0ECFF] border-2 border-[#2563EB]'
                        : isPast
                        ? 'bg-[#16A36A] text-white'
                        : 'bg-white text-[#123B8F] border-2 border-[#D8E6F7] hover:border-[#6D4AFF]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-bold mt-2 tracking-tight whitespace-nowrap px-2 py-0.5 rounded-md ${
                      isSelected
                        ? 'bg-[#123B8F] text-white font-extrabold'
                        : 'text-[#294A78] bg-white border border-[#D8E6F7]'
                    }`}
                  >
                    Step {stg.id}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F7] shadow-xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0ECFF] border border-[#EDE9FE] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> {activeStep.badge}
            </div>
            <h3 className="text-2xl font-black text-[#123B8F] leading-tight mb-2">
              {activeStep.title}
            </h3>
            <p className="text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-3">
              {activeStep.shortDesc}
            </p>
            <p className="text-sm text-[#294A78] leading-relaxed mb-6 font-medium">
              {activeStep.fullDesc}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onStartDemo}
                className="px-5 py-2.5 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center gap-2"
              >
                <span>Simulate Step in Guided Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateTab('journey')}
                className="px-4 py-2.5 bg-white hover:bg-[#EEF6FF] text-[#123B8F] text-xs font-bold rounded-xl border border-[#D8E6F7] shadow-xs transition-colors"
              >
                Go to Journey Dashboard
              </button>
            </div>
          </div>

          {/* Interactive UI Preview Mockup */}
          <div className="bg-[#F8FBFF] p-6 rounded-2xl border border-[#D8E6F7] space-y-4 shadow-inner">
            <div className="flex items-center justify-between border-b border-[#D8E6F7] pb-3">
              <span className="text-xs font-bold text-[#123B8F] uppercase tracking-wider font-mono">
                {activeStep.uiExampleTitle}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#16A36A] animate-ping" />
            </div>

            <div className="space-y-2.5">
              {activeStep.uiExampleItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-[#D8E6F7] text-xs text-[#123B8F] font-medium leading-relaxed shadow-2xs flex items-start gap-2"
                >
                  <span className="text-[#6D4AFF] font-bold">›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
