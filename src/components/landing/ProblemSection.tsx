import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { ArrowDown, AlertOctagon, Layers, FileX, HelpCircle, Activity, Frown, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  const problemCards = [
    {
      title: t('probCard1Title'),
      desc: t('probCard1Desc'),
      icon: Layers,
    },
    {
      title: t('probCard2Title'),
      desc: t('probCard2Desc'),
      icon: HelpCircle,
    },
    {
      title: t('probCard3Title'),
      desc: t('probCard3Desc'),
      icon: FileX,
    },
    {
      title: t('probCard4Title'),
      desc: t('probCard4Desc'),
      icon: AlertOctagon,
    },
    {
      title: t('probCard5Title'),
      desc: t('probCard5Desc'),
      icon: Activity,
    },
    {
      title: t('probCard6Title'),
      desc: t('probCard6Desc'),
      icon: Frown,
    },
  ];

  return (
    <section className="py-16 bg-[#F8FBFF] border-y border-[#D8E6F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D4AFF] bg-[#F0ECFF] border border-[#EDE9FE] px-3 py-1 rounded-full uppercase tracking-wider">
            Interoperability Context
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B8F] mt-3">
            {t('problemHeaderTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-[#48658F] mt-2 leading-relaxed font-medium">
            {t('problemHeaderSub')}
          </p>
        </div>

        {/* Before vs After Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Before Card */}
          <div className="bg-rose-50/60 rounded-3xl p-6 border border-rose-200 shadow-xs relative">
            <span className="bg-rose-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
              {t('beforeTitle')}
            </span>

            <div className="mt-6 space-y-2 text-center text-xs font-bold text-[#294A78]">
              <div className="p-2.5 bg-white rounded-xl border border-rose-200 shadow-xs">Citizen</div>
              <ArrowDown className="w-4 h-4 text-rose-500 mx-auto" />
              <div className="p-2.5 bg-white rounded-xl border border-rose-200 text-rose-900">Search Portal</div>
              <ArrowDown className="w-4 h-4 text-rose-500 mx-auto" />
              <div className="p-2.5 bg-white rounded-xl border border-rose-200 text-rose-900">Department Website</div>
              <ArrowDown className="w-4 h-4 text-rose-500 mx-auto" />
              <div className="p-2.5 bg-white rounded-xl border border-rose-200 text-rose-900">Different Login</div>
              <ArrowDown className="w-4 h-4 text-rose-500 mx-auto" />
              <div className="p-2.5 bg-white rounded-xl border border-rose-200 text-rose-900">Duplicate Documents</div>
              <ArrowDown className="w-4 h-4 text-rose-500 mx-auto" />
              <div className="p-2.5 bg-rose-100 text-rose-950 rounded-xl font-extrabold border border-rose-300">
                Status Confusion & Missed Deadline ❌
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="bg-[#EEF6FF] rounded-3xl p-6 border border-[#C9DCF5] shadow-md relative">
            <span className="bg-[#123B8F] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1 w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              {t('afterTitle')}
            </span>

            <div className="mt-6 space-y-2 text-center text-xs font-bold text-[#123B8F]">
              <div className="p-2.5 bg-white rounded-xl border border-[#D8E6F7] shadow-xs">Citizen</div>
              <ArrowDown className="w-4 h-4 text-[#2563EB] mx-auto" />
              <div className="p-2.5 bg-[#123B8F] text-white rounded-xl shadow-xs font-black">MahaSetu AI</div>
              <ArrowDown className="w-4 h-4 text-[#2563EB] mx-auto" />
              <div className="p-2.5 bg-white text-[#123B8F] rounded-xl border border-[#D8E6F7]">Understand & Find</div>
              <ArrowDown className="w-4 h-4 text-[#2563EB] mx-auto" />
              <div className="p-2.5 bg-white text-[#123B8F] rounded-xl border border-[#D8E6F7]">Qualify & Prepare</div>
              <ArrowDown className="w-4 h-4 text-[#2563EB] mx-auto" />
              <div className="p-2.5 bg-white text-[#123B8F] rounded-xl border border-[#D8E6F7]">Apply on Official Portal</div>
              <ArrowDown className="w-4 h-4 text-[#2563EB] mx-auto" />
              <div className="p-2.5 bg-[#16A36A] text-white rounded-xl font-extrabold shadow-md flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Track & Resolve Unified Journey ✔️
              </div>
            </div>
          </div>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#D8E6F7] shadow-xs hover:shadow-md hover:border-[#3B82F6] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0ECFF] text-[#6D4AFF] flex items-center justify-center mb-3 border border-[#EDE9FE]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#123B8F] text-base mb-1">{card.title}</h3>
                <p className="text-xs text-[#48658F] leading-relaxed font-medium">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
