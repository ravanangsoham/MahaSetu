import React, { useState, useEffect } from 'react';
import {
  X,
  GraduationCap,
  Sprout,
  User,
  Briefcase,
  Home,
  HeartPulse,
  FileText,
  Coins,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Info,
  Clock,
  Building,
  Check,
} from 'lucide-react';
import { showToast } from '../../hooks/useToast';

interface GuidedJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: string) => void;
}

type StepKey =
  | 'category_select'
  | 'ai_thinking'
  | 'scheme_found'
  | 'eligibility_wizard'
  | 'match_result'
  | 'document_checklist'
  | 'prerequisite_detected'
  | 'journey_updated'
  | 'official_handoff'
  | 'tracking_view';

export const GuidedJourneyModal: React.FC<GuidedJourneyModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
}) => {
  const [currentStep, setCurrentStep] = useState<StepKey>('category_select');
  const [, setSelectedCategory] = useState<string>('Education');
  const [thinkingStep, setThinkingStep] = useState<number>(0);
  const [wizAge, setWizAge] = useState<string>('18');
  const [wizEdu, setWizEdu] = useState<string>('Undergraduate');
  const [wizDomicile, setWizDomicile] = useState<string>('Yes');
  const [wizIncome, setWizIncome] = useState<string>('₹1,80,000 / year');
  const [wizStepIndex, setWizStepIndex] = useState<number>(1);
  const [showWhyMatch, setShowWhyMatch] = useState<boolean>(false);
  const [, setAddedPrereq] = useState<boolean>(false);

  const categories = [
    { id: 'Education', label: 'Education', icon: GraduationCap, color: 'from-blue-600 to-indigo-600' },
    { id: 'Agriculture', label: 'Agriculture', icon: Sprout, color: 'from-emerald-600 to-teal-600' },
    { id: 'Women & Child', label: 'Women & Child', icon: User, color: 'from-rose-600 to-pink-600' },
    { id: 'Employment', label: 'Employment', icon: Briefcase, color: 'from-amber-600 to-orange-600' },
    { id: 'Housing', label: 'Housing', icon: Home, color: 'from-cyan-600 to-blue-600' },
    { id: 'Health', label: 'Health', icon: HeartPulse, color: 'from-red-600 to-rose-600' },
    { id: 'Certificates', label: 'Certificates', icon: FileText, color: 'from-purple-600 to-indigo-600' },
    { id: 'Social Welfare', label: 'Social Welfare', icon: Coins, color: 'from-amber-600 to-yellow-600' },
  ];

  const thinkingMessages = [
    'Understanding your request...',
    'Identifying service category: Education / Girl Child...',
    'Checking verified scheme information from MahaDBT...',
    'Matching eligibility rules & income criteria...',
    'Preparing your customized citizen journey...',
  ];

  // Handle AI thinking timer
  useEffect(() => {
    if (currentStep === 'ai_thinking') {
      const interval = setInterval(() => {
        setThinkingStep((prev) => {
          if (prev < thinkingMessages.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setTimeout(() => setCurrentStep('scheme_found'), 800);
            return prev;
          }
        });
      }, 700);

      return () => clearInterval(interval);
    }
  }, [currentStep]);

  if (!isOpen) return null;

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setThinkingStep(0);
    setCurrentStep('ai_thinking');
  };

  const handleCompleteHandoff = () => {
    // Save active journey into localStorage
    const demoJourney = {
      id: 'EDU-2026-001',
      title: 'Girl Child Education Assistance',
      status: 'Application Submitted',
      department: 'Higher Education Department',
      applicationId: 'DEMO-EDU-2026-001',
      lastUpdated: 'Just Now',
      step: 4,
    };
    localStorage.setItem('mahasetu_journey', JSON.stringify(demoJourney));

    showToast('Journey updated & Demo Application Submitted!', 'success');
    setCurrentStep('tracking_view');
  };

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 bg-[#123B8F]/30 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white border border-[#D8E6F7] rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-[#123B8F] relative my-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D8E6F7] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EEF6FF] border border-[#C9DCF5] flex items-center justify-center text-[#123B8F] font-black text-sm">
              MH
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6D4AFF]">Interactive Guided Demo</span>
                <span className="px-2 py-0.5 rounded bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE] text-[10px] font-mono">Prototype Mode</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#123B8F]">MahaSetu Intelligent Citizen Journey</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-[#EEF6FF] text-[#48658F] hover:text-[#123B8F] border border-[#D8E6F7] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: CATEGORY SELECTION */}
        {currentStep === 'category_select' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-lg mx-auto">
              <span className="px-3 py-1 rounded-full bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE] text-xs font-bold uppercase tracking-wider">
                Step 1 of 6
              </span>
              <h3 className="text-2xl font-black text-[#123B8F] mt-2">What do you need help with?</h3>
              <p className="text-sm text-[#48658F] mt-1">Select a service area to simulate the MahaSetu AI journey</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className="p-4 rounded-2xl bg-[#F8FBFF] hover:bg-[#EEF6FF] border border-[#D8E6F7] hover:border-[#6D4AFF] flex flex-col items-center justify-center text-center transition-all duration-300 group hover:scale-102 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] border border-[#C9DCF5] flex items-center justify-center text-[#123B8F] mb-2 shadow-xs group-hover:scale-110 group-hover:bg-[#6D4AFF] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#123B8F] group-hover:text-[#6D4AFF]">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#EEF6FF] border border-[#C9DCF5] flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#6D4AFF] shrink-0" />
              <p className="text-xs text-[#294A78]">
                Or type natural query: <span className="text-[#123B8F] italic font-semibold">"Am I eligible for Post-Matric Education Scholarship for my daughter?"</span>
              </p>
              <button
                onClick={() => handleSelectCategory('Education')}
                className="ml-auto px-3 py-1.5 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs shrink-0 shadow-xs"
              >
                Run Query
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: AI THINKING VISUALIZATION */}
        {currentStep === 'ai_thinking' && (
          <div className="py-12 text-center max-w-md mx-auto space-y-6 animate-fade-in">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-[#6D4AFF]/20 animate-ping" />
              <div className="absolute inset-0 rounded-full border-4 border-[#6D4AFF] border-t-transparent animate-spin" />
              <div className="w-20 h-20 rounded-full bg-[#EEF6FF] border border-[#C9DCF5] flex items-center justify-center text-[#6D4AFF] shadow-xl">
                <Sparkles className="w-8 h-8 animate-bounce text-[#6D4AFF]" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#123B8F] mb-1">MahaSetu AI Intelligence Layer</h3>
              <p className="text-xs text-[#48658F]">Processing citizen request against Maharashtra state policy rules</p>
            </div>

            {/* Step Progress List */}
            <div className="bg-[#F8FBFF] rounded-2xl p-4 border border-[#D8E6F7] text-left space-y-2.5">
              {thinkingMessages.map((msg, index) => {
                const isCompleted = index < thinkingStep;
                const isCurrent = index === thinkingStep;

                return (
                  <div key={index} className="flex items-center gap-3 text-xs">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-[#16A36A] shrink-0" />
                    ) : isCurrent ? (
                      <div className="w-4 h-4 rounded-full border-2 border-[#6D4AFF] border-t-transparent animate-spin shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-[#D8E6F7] shrink-0" />
                    )}
                    <span className={isCompleted ? 'text-[#294A78] font-medium' : isCurrent ? 'text-[#6D4AFF] font-bold' : 'text-[#48658F]'}>
                      {msg}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: SCHEME FOUND */}
        {currentStep === 'scheme_found' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#16A36A] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  Step 2 of 6 • Service Identified
                </span>
                <h3 className="text-xl font-extrabold text-[#123B8F] mt-1">Recommended Scheme Found</h3>
              </div>
              <span className="px-3 py-1 rounded-xl bg-[#F0ECFF] text-[#5B3FD3] text-xs font-bold border border-[#EDE9FE]">
                Indicative Match: 92%
              </span>
            </div>

            {/* Scheme Details Card */}
            <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#D8E6F7] shadow-md space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6D4AFF] bg-[#F0ECFF] px-2 py-0.5 rounded border border-[#EDE9FE]">
                    Higher Education Dept • Maharashtra
                  </span>
                  <h4 className="text-lg font-bold text-[#123B8F] mt-1">
                    Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (Girl Child Education)
                  </h4>
                  <p className="text-xs text-[#294A78] mt-1">
                    Provides 50% to 100% tuition fee reimbursement for eligible girl students pursuing higher education degrees.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 text-xs border-t border-[#D8E6F7]">
                <div className="bg-white p-2.5 rounded-xl border border-[#D8E6F7]">
                  <span className="text-[#48658F] text-[10px] block">Eligibility Limit</span>
                  <span className="font-semibold text-[#123B8F]">Income &lt; ₹8,00,000</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#D8E6F7]">
                  <span className="text-[#48658F] text-[10px] block">Official Source</span>
                  <span className="font-semibold text-[#16A36A]">MahaDBT Verified</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#D8E6F7]">
                  <span className="text-[#48658F] text-[10px] block">Required Docs</span>
                  <span className="font-semibold text-[#123B8F]">Aadhaar, Income, Marksheet</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setCurrentStep('eligibility_wizard')}
                  className="flex-1 py-3 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#123B8F]/20"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: MULTI-STEP ELIGIBILITY WIZARD */}
        {currentStep === 'eligibility_wizard' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#F0ECFF] text-[#5B3FD3] border border-[#EDE9FE] text-xs font-bold uppercase tracking-wider">
                  Step 3 of 6 • Eligibility Wizard ({wizStepIndex}/4)
                </span>
                <h3 className="text-xl font-extrabold text-[#123B8F] mt-1">Indicative Criterion Verification</h3>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#EEF6FF] h-2 rounded-full overflow-hidden border border-[#C9DCF5]">
              <div
                className="bg-gradient-to-r from-[#123B8F] to-[#6D4AFF] h-full transition-all duration-300"
                style={{ width: `${(wizStepIndex / 4) * 100}%` }}
              />
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#D8E6F7] shadow-md space-y-5">
              {wizStepIndex === 1 && (
                <div className="space-y-3">
                  <label className="text-sm font-bold text-[#123B8F]">What is the applicant's age?</label>
                  <input
                    type="number"
                    value={wizAge}
                    onChange={(e) => setWizAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E6F7] text-[#123B8F] font-medium focus:border-[#6D4AFF] focus:outline-none"
                  />
                  <p className="text-xs text-[#48658F]">Must be pursuing post-matric / undergraduate degree in Maharashtra.</p>
                </div>
              )}

              {wizStepIndex === 2 && (
                <div className="space-y-3">
                  <label className="text-sm font-bold text-[#123B8F]">Current Education Standard</label>
                  <select
                    value={wizEdu}
                    onChange={(e) => setWizEdu(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E6F7] text-[#123B8F] font-medium focus:border-[#6D4AFF] focus:outline-none"
                  >
                    <option value="Standard 11-12">Standard 11th / 12th</option>
                    <option value="Undergraduate">Undergraduate Degree (BA/BSc/BTech/BCom)</option>
                    <option value="Postgraduate">Postgraduate Degree</option>
                  </select>
                </div>
              )}

              {wizStepIndex === 3 && (
                <div className="space-y-3">
                  <label className="text-sm font-bold text-[#123B8F]">Is the applicant a Maharashtra Domicile Resident?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setWizDomicile('Yes')}
                      className={`p-3 rounded-xl border text-sm font-bold transition-colors ${
                        wizDomicile === 'Yes' ? 'bg-[#EEF6FF] border-[#123B8F] text-[#123B8F]' : 'bg-white border-[#D8E6F7] text-[#48658F]'
                      }`}
                    >
                      Yes (Maharashtra State)
                    </button>
                    <button
                      onClick={() => setWizDomicile('No')}
                      className={`p-3 rounded-xl border text-sm font-bold transition-colors ${
                        wizDomicile === 'No' ? 'bg-[#EEF6FF] border-[#123B8F] text-[#123B8F]' : 'bg-white border-[#D8E6F7] text-[#48658F]'
                      }`}
                    >
                      Other State
                    </button>
                  </div>
                </div>
              )}

              {wizStepIndex === 4 && (
                <div className="space-y-3">
                  <label className="text-sm font-bold text-[#123B8F]">Annual Household Income</label>
                  <input
                    type="text"
                    value={wizIncome}
                    onChange={(e) => setWizIncome(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E6F7] text-[#123B8F] font-medium focus:border-[#6D4AFF] focus:outline-none"
                  />
                  <p className="text-xs text-[#48658F]">Scheme requirement: Annual income less than ₹8,00,000.</p>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t border-[#D8E6F7]">
                <button
                  disabled={wizStepIndex === 1}
                  onClick={() => setWizStepIndex((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-[#EEF6FF] text-[#294A78] border border-[#D8E6F7] text-xs font-semibold disabled:opacity-50"
                >
                  Back
                </button>

                {wizStepIndex < 4 ? (
                  <button
                    onClick={() => setWizStepIndex((prev) => prev + 1)}
                    className="px-5 py-2.5 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-md"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentStep('match_result')}
                    className="px-5 py-2.5 rounded-xl bg-[#16A36A] hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                  >
                    <span>View Indicative Match</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: MATCH RESULT & PREREQUISITE ALERT */}
        {currentStep === 'match_result' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#16A36A]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#16A36A]">Potential Match Identified</h3>
                    <p className="text-xs text-emerald-800">Indicative match based on published government criteria</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#16A36A]">92%</span>
                  <span className="text-[10px] text-emerald-700 block">Indicative Score</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-900 font-medium">
                  <Check className="w-4 h-4 text-[#16A36A]" /> Education standard matched ({wizEdu})
                </div>
                <div className="flex items-center gap-2 text-emerald-900 font-medium">
                  <Check className="w-4 h-4 text-[#16A36A]" /> Maharashtra Domicile verified ({wizDomicile})
                </div>
                <div className="flex items-center gap-2 text-amber-800 font-semibold">
                  <AlertTriangle className="w-4 h-4 text-[#F59E0B]" /> Income certificate document missing for application
                </div>
              </div>

              <button
                onClick={() => setShowWhyMatch(!showWhyMatch)}
                className="text-xs text-[#6D4AFF] hover:underline flex items-center gap-1 font-semibold"
              >
                <Info className="w-3.5 h-3.5" /> Why did MahaSetu show this result?
              </button>

              {showWhyMatch && (
                <div className="p-3 rounded-xl bg-white border border-[#D8E6F7] text-xs text-[#294A78] leading-relaxed animate-fade-in shadow-xs">
                  MahaSetu compares user inputs with official Gazette criteria. Final decision rests with Tahsildar / Department Officer upon submission.
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentStep('prerequisite_detected')}
                className="flex-1 py-3 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#123B8F]/20"
              >
                <span>Prepare Documents & Resolve Missing Prerequisite</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: DEPENDENCY DETECTION & PREREQUISITE DETECTED */}
        {currentStep === 'prerequisite_detected' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-md mx-auto">
              <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold uppercase tracking-wider">
                Step 4 of 6 • Dependency Detected
              </span>
              <h3 className="text-xl font-extrabold text-[#123B8F] mt-1">Prerequisite Document Required</h3>
            </div>

            {/* Dependency Visualizer */}
            <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#D8E6F7] space-y-4 shadow-md">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#D8E6F7] w-full sm:w-auto shadow-xs">
                  <span className="font-bold text-[#123B8F] block">Scholarship Application</span>
                  <span className="text-[10px] text-[#6D4AFF]">Higher Education</span>
                </div>
                <div className="text-[#6D4AFF] font-bold">↓ Missing Prerequisite</div>
                <div className="p-3 rounded-xl bg-[#F0ECFF] border border-[#EDE9FE] text-[#5B3FD3] font-bold w-full sm:w-auto">
                  Income Certificate (Tahsildar)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D8E6F7] text-xs text-[#294A78] leading-relaxed shadow-xs">
                MahaSetu detected that you cannot finalize your Scholarship Application until an updated <strong className="text-[#123B8F]">Income Certificate</strong> is issued by Aaple Sarkar revenue services.
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setAddedPrereq(true);
                    showToast('Prerequisite Income Certificate added to My Journey!', 'success');
                    setCurrentStep('journey_updated');
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#123B8F]/20"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Add Prerequisite to My Journey Timeline</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: DYNAMIC JOURNEY UPDATED */}
        {currentStep === 'journey_updated' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-md mx-auto">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#16A36A] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                Step 5 of 6 • Journey Synchronized
              </span>
              <h3 className="text-xl font-extrabold text-[#123B8F] mt-1">Journey Sequence Updated</h3>
            </div>

            {/* Active Journey Stage Timeline */}
            <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#D8E6F7] space-y-4 shadow-md">
              <h4 className="text-sm font-bold text-[#123B8F]">Active Roadmap for Rajesh Kumar</h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-[#16A36A] shrink-0" />
                  <div>
                    <span className="font-bold block text-emerald-950">1. Prerequisite Service: Income Certificate</span>
                    <span className="text-[10px] text-emerald-800">Issued by Revenue Department • Auto-linked</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EEF6FF] border border-[#C9DCF5] text-[#123B8F]">
                  <Clock className="w-4 h-4 text-[#6D4AFF] shrink-0 animate-pulse" />
                  <div>
                    <span className="font-bold block">2. Primary Service: Girl Child Post-Matric Scholarship</span>
                    <span className="text-[10px] text-[#48658F]">Ready for official portal handoff</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep('official_handoff')}
                className="w-full py-3.5 rounded-xl bg-[#16A36A] hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Proceed to Official Government Portal Handoff</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 8: OFFICIAL PORTAL HANDOFF */}
        {currentStep === 'official_handoff' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-md mx-auto">
              <span className="px-3 py-1 rounded-full bg-[#EEF6FF] text-[#123B8F] border border-[#C9DCF5] text-xs font-bold uppercase tracking-wider">
                Step 6 of 6 • Official Handoff
              </span>
              <h3 className="text-xl font-extrabold text-[#123B8F] mt-1">Connect, Don't Replace</h3>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FBFF] border border-[#D8E6F7] text-center space-y-4 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-[#EEF6FF] border border-[#C9DCF5] flex items-center justify-center text-[#123B8F] mx-auto">
                <Building className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#123B8F]">Redirecting to MahaDBT Official Portal</h4>
                <p className="text-xs text-[#48658F] mt-1 max-w-md mx-auto">
                  MahaSetu pre-configures your verified checklist and hands over execution to the authoritative state department portal.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#D8E6F7] text-xs text-[#294A78] font-mono shadow-xs">
                Target URL: https://mahadbt.maharashtra.gov.in/scholarship/apply
              </div>

              <button
                onClick={handleCompleteHandoff}
                className="w-full py-3.5 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#123B8F]/20"
              >
                <span>Simulate Official Portal Submission</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 9: LIVE TRACKING VIEW */}
        {currentStep === 'tracking_view' && (
          <div className="space-y-6 animate-fade-in text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#16A36A] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#123B8F]">Demo Journey Complete!</h3>
              <p className="text-xs text-[#48658F] mt-1">Application Reference: <span className="font-mono text-[#6D4AFF] font-bold">DEMO-EDU-2026-001</span></p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#D8E6F7] text-xs text-[#294A78] space-y-2 text-left shadow-xs">
              <div className="flex justify-between border-b border-[#D8E6F7] pb-2">
                <span className="text-[#48658F]">Current Status:</span>
                <span className="font-bold text-[#123B8F]">Verification in Progress (60%)</span>
              </div>
              <div className="flex justify-between border-b border-[#D8E6F7] pb-2">
                <span className="text-[#48658F]">Department:</span>
                <span className="font-semibold text-[#123B8F]">Higher Education Dept</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#48658F]">Next Action:</span>
                <span className="font-semibold text-[#123B8F]">Desk 2 Verification by Tahsildar</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onNavigateTab('track');
                }}
                className="flex-1 py-3 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-bold text-xs transition-colors shadow-md shadow-[#123B8F]/20"
              >
                Go to Application Tracker Page
              </button>
              <button
                onClick={() => {
                  onClose();
                  onNavigateTab('journey');
                }}
                className="flex-1 py-3 rounded-xl bg-white hover:bg-[#EEF6FF] text-[#123B8F] font-bold text-xs border border-[#D8E6F7] shadow-xs"
              >
                View My Journey Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
