import React from 'react';
import { Sparkles, Building2, Clock, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import type { Scheme } from '../../types';
import { mockSchemes } from '../../data/schemes';

interface RecommendedSchemesSectionProps {
  onSelectScheme: (scheme: Scheme) => void;
  onExploreSchemes: () => void;
}

export const RecommendedSchemesSection: React.FC<RecommendedSchemesSectionProps> = ({
  onSelectScheme,
  onExploreSchemes,
}) => {
  const recommendations = [
    {
      id: 'rec-1',
      schemeId: 'scheme-edu-001',
      title: 'Post-Matric Scholarship for Girl Students',
      department: 'Higher Education Department, Maharashtra',
      matchScore: 92,
      category: 'Education',
      benefit: '50% to 100% tuition & exam fee reimbursement',
      eligibility: 'Undergraduate student, Income < ₹8,00,000/year',
      deadline: '31st March 2026',
      portal: 'mahadbt.maharashtra.gov.in',
    },
    {
      id: 'rec-2',
      schemeId: 'scheme-agri-001',
      title: 'PM-KISAN Samman Nidhi & Shetkari Sanman Yojana',
      department: 'Agriculture Department, Maharashtra',
      matchScore: 87,
      category: 'Agriculture',
      benefit: '₹12,000 annual direct income support for farmers',
      eligibility: 'Landholding farmer family in Maharashtra',
      deadline: 'Open All Year',
      portal: 'krishi.maharashtra.gov.in',
    },
    {
      id: 'rec-3',
      schemeId: 'scheme-emp-001',
      title: 'Pramod Mahajan Skill & Employment Support Scheme',
      department: 'Skill Development & Entrepreneurship Dept',
      matchScore: 81,
      category: 'Employment',
      benefit: 'Free job-linked vocational training + ₹3,000/month stipend',
      eligibility: 'Age 18-35, 10th/12th/Diploma pass',
      deadline: '15th April 2026',
      portal: 'kaushalya.mahasarkar.in',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-[#D8E6F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0ECFF] border border-[#EDE9FE] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> AI Profile Matching
            </div>
            <h2 className="text-3xl font-black text-[#123B8F]">
              Recommended For You
            </h2>
            <p className="text-xs sm:text-sm text-[#48658F] font-medium mt-1">
              Personalized government schemes based on indicative citizen eligibility profile matching.
            </p>
          </div>

          <button
            onClick={onExploreSchemes}
            className="px-4 py-2.5 rounded-xl bg-[#EEF6FF] hover:bg-[#D8E6F7] text-[#123B8F] text-xs font-bold transition-colors flex items-center gap-2 shrink-0 border border-[#C9DCF5]"
          >
            <span>View All Schemes in Scheme Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Recommendation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="bg-[#F8FBFF] p-6 rounded-3xl border border-[#D8E6F7] shadow-md hover:shadow-xl hover:border-[#6D4AFF] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE] text-[10px] font-mono font-bold uppercase">
                    {rec.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-black text-[#16A36A] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {rec.matchScore}% Match
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#123B8F] group-hover:text-[#6D4AFF] transition-colors leading-snug mb-2">
                  {rec.title}
                </h3>

                <p className="text-xs text-[#48658F] flex items-center gap-1.5 font-medium mb-4">
                  <Building2 className="w-3.5 h-3.5 text-[#294A78] shrink-0" />
                  <span>{rec.department}</span>
                </p>

                <div className="space-y-2 mb-4 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-[#D8E6F7]">
                    <span className="text-[#48658F] text-[10px] uppercase tracking-wider block font-mono">Key Benefit</span>
                    <span className="font-bold text-[#123B8F]">{rec.benefit}</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#D8E6F7]">
                    <span className="text-[#48658F] text-[10px] uppercase tracking-wider block font-mono">Target Eligibility</span>
                    <span className="font-semibold text-[#294A78]">{rec.eligibility}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D8E6F7] flex items-center justify-between text-xs">
                <span className="text-[#48658F] flex items-center gap-1 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  {rec.deadline}
                </span>

                <button
                  onClick={() => {
                    const schemeToSelect = mockSchemes.find((s) => s.id === rec.schemeId) || mockSchemes[0];
                    onSelectScheme(schemeToSelect);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
