import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { mockSchemes } from '../../data/schemes';
import type { Scheme } from '../../types';
import { SchemeCard } from './SchemeCard';
import { SchemeDetailsDrawer } from './SchemeDetailsDrawer';
import { Search, Filter, Layers, ArrowUpDown, ShieldCheck, RefreshCw } from 'lucide-react';

interface SchemeHubProps {
  onSelectScheme?: (scheme: Scheme) => void;
  onCheckEligibility?: (scheme: Scheme) => void;
}

export const SchemeHub: React.FC<SchemeHubProps> = ({ onCheckEligibility }) => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'relevant' | 'deadline'>('recommended');
  const [drawerScheme, setDrawerScheme] = useState<Scheme | null>(null);

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: t('filterAllCategories') },
    { id: 'education', label: 'Education & Scholarships' },
    { id: 'agriculture', label: 'Agriculture & Farmers' },
    { id: 'women_child', label: 'Women & Child Development' },
    { id: 'employment', label: 'Employment & Skills' },
    { id: 'revenue', label: 'Revenue & Certificates' },
    { id: 'social_welfare', label: 'Social Welfare' },
  ];

  const departments = useMemo(() => {
    const depts = new Set<string>();
    mockSchemes.forEach((s) => {
      depts.add(s.department.en);
    });
    return Array.from(depts);
  }, []);

  const filteredAndSortedSchemes = useMemo(() => {
    let result = mockSchemes.filter((scheme) => {
      const titleText = scheme.title[language as 'en' | 'mr' | 'hi'] || scheme.title.en;
      const descText = scheme.description[language as 'en' | 'mr' | 'hi'] || scheme.description.en;

      const matchesSearch =
        titleText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descText.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
      const matchesDept = selectedDepartment === 'all' || scheme.department.en === selectedDepartment;

      return matchesSearch && matchesCategory && matchesDept;
    });

    if (sortBy === 'recommended') {
      result.sort((a, b) => (b.matchScore || 90) - (a.matchScore || 90));
    } else if (sortBy === 'deadline') {
      result.sort((a, b) => (a.deadline || 'Z').localeCompare(b.deadline || 'Z'));
    }

    return result;
  }, [language, searchTerm, selectedCategory, selectedDepartment, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedDepartment('all');
    setSortBy('recommended');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#123B8F] via-[#1D4ED8] to-[#5B3FD3] text-white p-6 sm:p-8 rounded-3xl shadow-xl mb-8 border border-purple-300/30">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#6D4AFF] text-white font-black text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider border border-purple-300/30">
                Official Scheme Directory
              </span>
              <span className="text-emerald-300 text-xs font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Canonically Verified Data
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mt-1 text-white">{t('schemeHubTitle')}</h1>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">{t('schemeHubSub')}</p>
          </div>
          <Layers className="w-12 h-12 text-purple-200 opacity-80 hidden sm:block" />
        </div>
      </div>

      {/* Search & Multi-Filter Control Bar */}
      <div className="bg-white rounded-2xl p-5 border border-[#D8E6F7] shadow-xs mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full flex items-center gap-2.5 bg-[#F8FBFF] px-3.5 py-2.5 rounded-xl border border-[#D8E6F7] focus-within:border-[#2563EB] focus-within:bg-white transition-all">
            <Search className="w-4 h-4 text-[#48658F] shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-transparent text-sm text-[#123B8F] focus:outline-none placeholder:text-[#48658F] font-medium"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs text-[#48658F] hover:text-[#123B8F] font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Department Filter */}
          <div className="w-full sm:w-auto">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FBFF] border border-[#D8E6F7] text-xs font-semibold text-[#123B8F] focus:outline-none focus:border-[#2563EB]"
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Sorting Dropdown */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-[#48658F] shrink-0 hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'recommended' | 'relevant' | 'deadline')}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FBFF] border border-[#D8E6F7] text-xs font-semibold text-[#123B8F] focus:outline-none focus:border-[#2563EB]"
            >
              <option value="recommended">Sort by Indicative Match</option>
              <option value="relevant">Sort by Name</option>
              <option value="deadline">Sort by Deadline</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-2 border-t border-[#EEF6FF]">
          <Filter className="w-4 h-4 text-[#48658F] shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#123B8F] text-white shadow-sm ring-2 ring-[#6D4AFF]/40'
                  : 'bg-[#F8FBFF] text-[#294A78] hover:bg-[#EEF6FF] border border-[#D8E6F7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scheme Cards Grid */}
      {filteredAndSortedSchemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAndSortedSchemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              onSelect={(sc) => setDrawerScheme(sc)}
            />
          ))}
        </div>
      ) : (
        /* Smart Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#D8E6F7] shadow-xs max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F0ECFF] border border-[#EDE9FE] flex items-center justify-center text-[#6D4AFF] mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#123B8F]">No schemes found</h3>
            <p className="text-xs text-[#48658F] mt-1 font-medium">
              Try adjusting your search criteria or category filters to discover relevant services.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors inline-flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Side Drawer for Details */}
      <SchemeDetailsDrawer
        scheme={drawerScheme}
        isOpen={!!drawerScheme}
        onClose={() => setDrawerScheme(null)}
        onCheckEligibility={(scheme) => {
          if (onCheckEligibility) {
            onCheckEligibility(scheme);
          }
        }}
      />
    </div>
  );
};
