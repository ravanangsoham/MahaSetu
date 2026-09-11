import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { BarChart3, TrendingUp, AlertCircle } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#123B8F] via-[#1D4ED8] to-[#5B3FD3] text-white p-6 sm:p-8 rounded-3xl shadow-xl mb-8 border border-purple-300/30">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-purple-200" />
              <h2 className="text-2xl font-extrabold">{t('analyticsTitle')}</h2>
            </div>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">{t('analyticsSub')}</p>
          </div>
          <span className="bg-[#6D4AFF] text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-sm border border-purple-300/30">
            PLATFORM ANALYTICS
          </span>
        </div>
      </div>

      {/* Stats Counter Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-2xl border border-[#D8E6F7] shadow-xs">
          <p className="text-[11px] font-bold text-[#48658F] uppercase tracking-wider">Total Queries</p>
          <p className="text-2xl font-extrabold text-[#123B8F] mt-1">14,280</p>
          <span className="text-[10px] text-[#16A36A] font-semibold">+18% this week</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#D8E6F7] shadow-xs">
          <p className="text-[11px] font-bold text-[#48658F] uppercase tracking-wider">Top Missing Doc</p>
          <p className="text-sm font-bold text-amber-700 mt-1">Income Certificate</p>
          <span className="text-[10px] text-[#48658F]">62% of education drop-offs</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#D8E6F7] shadow-xs">
          <p className="text-[11px] font-bold text-[#48658F] uppercase tracking-wider">Most Requested</p>
          <p className="text-sm font-bold text-[#123B8F] mt-1">Shahu Maharaj Scheme</p>
          <span className="text-[10px] text-[#48658F]">4,890 citizen searches</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#D8E6F7] shadow-xs">
          <p className="text-[11px] font-bold text-[#48658F] uppercase tracking-wider">Handoff Success</p>
          <p className="text-2xl font-extrabold text-[#16A36A] mt-1">94.2%</p>
          <span className="text-[10px] text-[#48658F]">Redirected to official portals</span>
        </div>
      </div>

      {/* Analytics Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Department-wise Demand */}
        <div className="bg-white p-6 rounded-3xl border border-[#D8E6F7] shadow-xs space-y-4">
          <h3 className="font-bold text-[#123B8F] text-base flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#6D4AFF]" />
            Department-wise Demand Trends
          </h3>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between font-semibold mb-1 text-[#294A78]">
                <span>Higher & Technical Education</span>
                <span>42%</span>
              </div>
              <div className="w-full bg-[#EEF6FF] h-2 rounded-full overflow-hidden">
                <div className="bg-[#123B8F] h-full" style={{ width: '42%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1 text-[#294A78]">
                <span>Women & Child Development</span>
                <span>28%</span>
              </div>
              <div className="w-full bg-[#EEF6FF] h-2 rounded-full overflow-hidden">
                <div className="bg-[#6D4AFF] h-full" style={{ width: '28%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1 text-[#294A78]">
                <span>Agriculture Department</span>
                <span>18%</span>
              </div>
              <div className="w-full bg-[#EEF6FF] h-2 rounded-full overflow-hidden">
                <div className="bg-[#16A36A] h-full" style={{ width: '18%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1 text-[#294A78]">
                <span>Skill Development & Employment</span>
                <span>12%</span>
              </div>
              <div className="w-full bg-[#EEF6FF] h-2 rounded-full overflow-hidden">
                <div className="bg-[#2563EB] h-full" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Missing Document Bottlenecks */}
        <div className="bg-white p-6 rounded-3xl border border-[#D8E6F7] shadow-xs space-y-4">
          <h3 className="font-bold text-[#123B8F] text-base flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#F59E0B]" />
            Common Missing Document Bottlenecks
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
              <p className="font-bold text-amber-900">1. Tahsildar Income Certificate (Revenue)</p>
              <p className="text-[#48658F] mt-0.5 font-medium">Missing in 62% of higher education scholarship applications.</p>
            </div>

            <div className="p-3 bg-[#F8FBFF] rounded-xl border border-[#D8E6F7]">
              <p className="font-bold text-[#123B8F]">2. Non-Creamy Layer Certificate</p>
              <p className="text-[#48658F] mt-0.5 font-medium">Missing in 24% of OBC/SEBC quota submissions.</p>
            </div>

            <div className="p-3 bg-[#F8FBFF] rounded-xl border border-[#D8E6F7]">
              <p className="font-bold text-[#123B8F]">3. Bank Account e-KYC Seeding</p>
              <p className="text-[#48658F] mt-0.5 font-medium">Aadhaar seeding unverified in 14% of DBT disbursements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
