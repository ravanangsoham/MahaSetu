import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { ChatMessage as ChatMessageType, Scheme } from '../../types';
import { Bot, User, AlertTriangle, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';

interface ChatMessageProps {
  message: ChatMessageType;
  onSelectScheme?: (scheme: Scheme) => void;
  onAnswerQuestion?: (field: string, answer: string) => void;
  onStartPrerequisite?: (serviceId: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  onSelectScheme,
  onAnswerQuestion,
  onStartPrerequisite,
}) => {
  const { language, t } = useLanguage();
  const isAi = message.sender === 'ai';

  const textContent =
    typeof message.text === 'string'
      ? message.text
      : message.text[language] || message.text['en'];

  return (
    <div className={`flex gap-3 mb-4 ${isAi ? 'justify-start' : 'justify-end'}`}>
      {isAi && (
        <div className="w-8 h-8 rounded-full bg-[#6D4AFF] text-white flex items-center justify-center flex-shrink-0 shadow-md">
          <Bot className="w-5 h-5" />
        </div>
      )}

      <div className={`max-w-2xl rounded-2xl p-4 shadow-xs text-sm leading-relaxed ${
        isAi
          ? 'bg-white border border-[#D8E6F7] text-[#123B8F] rounded-tl-none'
          : 'bg-[#E8F1FF] border border-[#C9DCF5] text-[#123B8F] rounded-tr-none font-semibold'
      }`}>
        <p className="whitespace-pre-line">{textContent}</p>

        {/* Asking minimal follow up questions */}
        {isAi && message.askingQuestions && message.askingQuestions.length > 0 && (
          <div className="mt-4 p-3 bg-[#F0ECFF]/80 rounded-xl border border-[#EDE9FE]">
            <p className="text-xs font-bold text-[#5B3FD3] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#6D4AFF]" />
              Minimum required verification details:
            </p>
            {message.askingQuestions.map((q) => (
              <div key={q.field} className="mb-3 last:mb-0">
                <p className="text-xs text-[#294A78] font-semibold mb-1.5">{q.question[language]}</p>
                {q.options && (
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => onAnswerQuestion && onAnswerQuestion(q.field, opt)}
                        className="px-2.5 py-1 bg-white hover:bg-[#6D4AFF] hover:text-white border border-[#D8E6F7] text-[#123B8F] rounded-lg text-xs font-medium transition-all shadow-2xs"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Recommended Scheme Cards */}
        {isAi && message.suggestedSchemes && message.suggestedSchemes.length > 0 && (
          <div className="mt-4 space-y-3">
            {message.suggestedSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="p-4 bg-[#F8FBFF] rounded-xl border border-[#D8E6F7] hover:border-[#3B82F6] transition-all shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="bg-[#F0ECFF] text-[#5B3FD3] font-bold px-2 py-0.5 rounded text-xs inline-flex items-center gap-1 border border-[#EDE9FE]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6D4AFF]" />
                    {t('indicativeMatch')} ({scheme.matchScore || 92}%)
                  </span>
                  <StatusBadge status={scheme.integrationStatus} size="sm" />
                </div>

                <h4 className="font-bold text-[#123B8F] text-base mb-1">
                  {scheme.title[language]}
                </h4>
                <p className="text-xs text-[#48658F] mb-2 font-medium">
                  🏛️ {scheme.department[language]}
                </p>

                <p className="text-xs text-[#294A78] mb-3 bg-white p-2 rounded border border-[#D8E6F7]">
                  <span className="font-bold text-[#123B8F]">Eligibility: </span>
                  {scheme.eligibilitySummary[language]}
                </p>

                {/* Important Disclaimer */}
                <div className="mb-3 p-2 bg-[#F0ECFF]/60 rounded border border-[#EDE9FE] text-[11px] text-[#5B3FD3] flex items-start gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#6D4AFF] flex-shrink-0 mt-0.5" />
                  <span>{t('disclaimerEligibility')}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#D8E6F7]">
                  <span className="text-[11px] text-[#48658F] font-mono">
                    Source: {scheme.officialSource}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectScheme && onSelectScheme(scheme)}
                      className="px-3 py-1.5 bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-semibold text-xs rounded-lg transition-colors"
                    >
                      {t('viewDetails')}
                    </button>

                    <a
                      href={scheme.officialPortalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-[#6D4AFF] hover:bg-[#5B3FD3] text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>{t('applyOnOfficialPortal')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Prerequisite Alert */}
        {isAi && message.journeyAction && (
          <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-300 text-[#123B8F] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>{t('docPrerequisiteAlert')} {t('docPrerequisiteDesc')}</span>
            </div>
            <button
              onClick={() => onStartPrerequisite && onStartPrerequisite('service-income-cert')}
              className="px-3 py-1 bg-[#6D4AFF] hover:bg-[#5B3FD3] text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-2xs"
            >
              {t('btnStartPrerequisite')}
            </button>
          </div>
        )}
      </div>

      {!isAi && (
        <div className="w-8 h-8 rounded-full bg-[#E8F1FF] text-[#123B8F] border border-[#C9DCF5] flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};
