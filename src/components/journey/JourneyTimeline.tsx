import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { CitizenJourney, JourneyStage } from '../../types';
import { CheckCircle2, Clock, AlertTriangle, ExternalLink } from 'lucide-react';

interface JourneyTimelineProps {
  journey: CitizenJourney;
  onSelectPrerequisite: (serviceId: string) => void;
  onOpenOfficialPortal: (url: string) => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({
  journey,
  onSelectPrerequisite,
  onOpenOfficialPortal,
}) => {
  const { language } = useLanguage();

  const stages: JourneyStage[] = [
    'DISCOVER',
    'UNDERSTAND',
    'QUALIFY',
    'PREPARE',
    'APPLY',
    'TRACK',
    'RESOLVE',
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F7] shadow-xl max-w-4xl mx-auto">
      {/* Journey Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8E6F7] pb-6 mb-8">
        <div>
          <span className="text-xs font-bold text-[#6D4AFF] uppercase tracking-widest bg-[#F0ECFF] border border-[#EDE9FE] px-3 py-1 rounded-full">
            Your MahaSetu Journey
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#123B8F] mt-2">
            {journey.goal[language]}
          </h2>
          <p className="text-xs text-[#48658F] font-medium mt-1">
            Target Scheme: {journey.schemeName[language]}
          </p>
        </div>

        <div className="text-right">
          <div className="inline-flex items-center gap-2 bg-[#F8FBFF] px-3 py-1.5 rounded-xl border border-[#D8E6F7]">
            <span className="text-xs text-[#48658F] font-medium">Progress:</span>
            <span className="text-sm font-extrabold text-[#123B8F]">{journey.progressPercent}%</span>
          </div>
          <p className="text-[10px] text-[#48658F] mt-1 font-mono">Ref: {journey.applicationRef}</p>
        </div>
      </div>

      {/* Stage Timeline Navigation Bar */}
      <div className="mb-8 overflow-x-auto pb-4 no-scrollbar">
        <div className="flex items-center justify-between min-w-[650px] relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#EEF6FF] -translate-y-1/2 z-0"></div>

          {stages.map((stg, idx) => {
            const stepObj = journey.steps.find((s) => s.stage === stg);
            const isCompleted = stepObj?.status === 'completed';
            const isCurrent = stepObj?.status === 'current';
            const isActionReq = stepObj?.status === 'action_required';

            return (
              <div key={stg} className="relative z-10 flex flex-col items-center group">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all ${
                    isCompleted
                      ? 'bg-[#16A36A] text-white ring-4 ring-emerald-100'
                      : isActionReq
                      ? 'bg-[#F59E0B] text-white ring-4 ring-amber-100 animate-pulse'
                      : isCurrent
                      ? 'bg-[#6D4AFF] text-white ring-4 ring-[#F0ECFF]'
                      : 'bg-white text-[#48658F] border-2 border-[#D8E6F7]'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                </div>
                <span className="text-[10px] font-extrabold mt-2 tracking-wider text-[#123B8F]">
                  {stg}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Breakdown Cards */}
      <div className="space-y-4">
        {journey.steps.map((step, index) => {
          const isCompleted = step.status === 'completed';
          const isCurrent = step.status === 'current';
          const isActionRequired = step.status === 'action_required';

          return (
            <div
              key={index}
              className={`p-5 rounded-2xl border transition-all ${
                isCompleted
                  ? 'bg-emerald-50/60 border-emerald-200'
                  : isActionRequired
                  ? 'bg-amber-50 border-amber-200'
                  : isCurrent
                  ? 'bg-[#EEF6FF] border-[#C9DCF5]'
                  : 'bg-[#F8FBFF] border-[#D8E6F7] opacity-80'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-[#16A36A]" />
                    ) : isActionRequired ? (
                      <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
                    ) : isCurrent ? (
                      <Clock className="w-5 h-5 text-[#6D4AFF]" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-[#D8E6F7] flex items-center justify-center text-[10px] font-bold text-[#48658F]">
                        {index + 1}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#48658F] font-mono">
                        Stage {index + 1}: {step.stage}
                      </span>
                      {step.department && (
                        <span className="text-[10px] bg-[#F0ECFF] text-[#5B3FD3] font-semibold px-2 py-0.5 rounded border border-[#EDE9FE]">
                          {step.department}
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-[#123B8F] text-base mt-0.5">
                      {step.title[language]}
                    </h4>
                    <p className="text-xs text-[#294A78] mt-1 leading-relaxed font-medium">
                      {step.description[language]}
                    </p>
                  </div>
                </div>

                {/* Status Badge Pill */}
                <span
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${
                    isCompleted
                      ? 'bg-emerald-100 text-[#16A36A]'
                      : isActionRequired
                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                      : isCurrent
                      ? 'bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE]'
                      : 'bg-slate-100 text-[#48658F]'
                  }`}
                >
                  {isCompleted ? '✓ Completed' : isActionRequired ? '⚠️ Action Required' : isCurrent ? '→ Current Step' : 'Pending'}
                </span>
              </div>

              {/* Dependency Prerequisite Callout */}
              {step.prerequisiteAlert && (
                <div className="mt-4 p-4 bg-white rounded-xl border border-amber-300 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Prerequisite Service Recommended:
                    </p>
                    <p className="text-xs text-[#294A78] mt-0.5 font-medium">
                      Missing document: <strong>{step.prerequisiteAlert.missingDoc}</strong>. Obtain it before applying.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectPrerequisite(step.prerequisiteAlert!.serviceId)}
                    className="px-3.5 py-2 bg-[#6D4AFF] hover:bg-[#5B3FD3] text-white text-xs font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap"
                  >
                    Start Income Cert Service
                  </button>
                </div>
              )}

              {/* Action Buttons for Current/Apply Step */}
              {step.officialUrl && isCurrent && (
                <div className="mt-3 text-right">
                  <button
                    onClick={() => onOpenOfficialPortal(step.officialUrl!)}
                    className="px-4 py-2 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 ml-auto"
                  >
                    <span>Apply on Official MahaDBT Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
