import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { TrackingService } from '../../api/trackingService';
import type { ApplicationRecord } from '../../types';
import { Search, Activity, ExternalLink, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export const ApplicationTracker: React.FC = () => {
  const { t } = useLanguage();
  const [inputRef, setInputRef] = useState('DEMO-EDU-2026-001');
  const [result, setResult] = useState<ApplicationRecord | null>(null);

  const handleTrack = async () => {
    if (!inputRef.trim()) return;
    const data = await TrackingService.trackApplication(inputRef);
    setResult(data);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-[#123B8F] via-[#1D4ED8] to-[#5B3FD3] text-white p-6 sm:p-8 rounded-3xl shadow-xl mb-8 border border-purple-300/30">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-6 h-6 text-purple-200" />
          <h2 className="text-2xl font-extrabold">{t('trackTitle')}</h2>
        </div>
        <p className="text-xs sm:text-sm text-blue-100 mb-6 max-w-xl font-medium">{t('trackSub')}</p>

        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-lg border border-[#D8E6F7]">
          <input
            type="text"
            value={inputRef}
            onChange={(e) => setInputRef(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
            placeholder={t('trackInputPlaceholder')}
            className="flex-1 px-3 py-2 text-sm text-[#123B8F] focus:outline-none font-mono uppercase font-bold"
          />
          <button
            onClick={handleTrack}
            className="px-5 py-2.5 bg-[#6D4AFF] hover:bg-[#5B3FD3] text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            <Search className="w-4 h-4" />
            <span>{t('trackBtn')}</span>
          </button>
        </div>
        <p className="text-[11px] text-blue-200 mt-2 font-mono">Try demo IDs: DEMO-EDU-2026-001 or DEMO-AGRI-2026-088</p>
      </div>

      {/* Result Card */}
      {result && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F7] shadow-xl space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8E6F7] pb-6">
            <div>
              <span className="text-xs font-bold text-[#5B3FD3] bg-[#F0ECFF] border border-[#EDE9FE] px-3 py-1 rounded-full">
                Ref ID: {result.referenceId}
              </span>
              <h3 className="text-xl font-extrabold text-[#123B8F] mt-2">{result.schemeTitle}</h3>
              <p className="text-xs text-[#48658F] font-semibold mt-0.5">🏛️ {result.department}</p>
            </div>

            <div className="text-right">
              <span className="inline-block bg-[#F0ECFF] text-[#5B3FD3] text-xs font-bold px-3 py-1 rounded-full border border-[#EDE9FE]">
                {result.currentStatus}
              </span>
              <p className="text-[10px] text-[#48658F] mt-1 font-mono">Last Sync: {result.lastUpdated}</p>
            </div>
          </div>

          {/* Fallback Warning for Live API Status */}
          {!result.isLiveApiAvailable && (
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300 text-amber-900 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{t('trackLiveUnavailable')}</p>
                <p className="mt-0.5">{t('trackLastVerified')} <strong>{result.currentStatus}</strong></p>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold mb-1 text-[#123B8F]">
              <span>Application Progress</span>
              <span>{result.progressPercent}%</span>
            </div>
            <div className="w-full bg-[#EEF6FF] h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#123B8F] via-[#2563EB] to-[#6D4AFF] h-full transition-all duration-500"
                style={{ width: `${result.progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Lifecycle Timeline */}
          <div>
            <h4 className="font-bold text-[#123B8F] text-sm mb-4">Verification Steps</h4>
            <div className="space-y-3">
              {result.timeline.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                const isCurrent = step.status === 'current';

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border flex items-start justify-between gap-3 ${
                      isCompleted
                        ? 'bg-emerald-50/60 border-emerald-200'
                        : isCurrent
                        ? 'bg-[#EEF6FF] border-[#C9DCF5]'
                        : 'bg-[#F8FBFF] border-[#D8E6F7] opacity-70'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-[#16A36A]" />
                        ) : isCurrent ? (
                          <Clock className="w-5 h-5 text-[#6D4AFF] animate-spin" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-[#D8E6F7] text-[10px] flex items-center justify-center font-bold text-[#48658F]">
                            {idx + 1}
                          </div>
                        )}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#123B8F] text-xs">{step.title}</h5>
                        {step.notes && <p className="text-[11px] text-[#294A78] mt-0.5 font-medium">{step.notes}</p>}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#48658F] whitespace-nowrap">{step.date}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Official Handoff Link */}
          <div className="pt-4 border-t border-[#D8E6F7] flex justify-end">
            <a
              href={result.officialPortalUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md transition-colors"
            >
              <span>{t('btnOpenOfficialPortal')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
