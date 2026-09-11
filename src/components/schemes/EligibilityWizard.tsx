import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Scheme } from '../../types';
import { CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, RefreshCw, ShieldAlert } from 'lucide-react';

interface EligibilityWizardProps {
  scheme?: Scheme;
  onComplete: () => void;
}

export const EligibilityWizard: React.FC<EligibilityWizardProps> = ({ scheme, onComplete }) => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    userCategory: 'Student',
    age: '18 - 25 years',
    education: 'Undergraduate (Degree)',
    isDomicile: 'yes',
    incomeCategory: 'Below ₹8.00 Lakh',
    hasDisability: 'no',
  });

  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setIsFinished(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F7] shadow-xl max-w-3xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#D8E6F7] pb-4 mb-6">
        <div>
          <h2 className="text-xl font-extrabold text-[#123B8F]">{t('eligibilityTitle')}</h2>
          <p className="text-xs text-[#48658F] font-medium">
            {scheme ? scheme.title['en'] : 'General Scheme Eligibility Engine'}
          </p>
        </div>
        <span className="bg-[#F0ECFF] text-[#5B3FD3] text-xs font-bold px-3 py-1 rounded-full border border-[#EDE9FE]">
          Step {currentStep} of 5
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#EEF6FF] h-2.5 rounded-full mb-6 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#123B8F] via-[#2563EB] to-[#6D4AFF] h-full transition-all duration-300"
          style={{ width: `${(currentStep / 5) * 100}%` }}
        ></div>
      </div>

      {!isFinished ? (
        <div className="space-y-6 min-h-[250px]">
          {/* Step 1: Who Are You? */}
          {currentStep === 1 && (
            <div>
              <h3 className="font-bold text-[#123B8F] text-base mb-2">Step 1: Who are you?</h3>
              <p className="text-xs text-[#48658F] mb-4 font-medium">Select your primary applicant profile category.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Student', 'Farmer', 'Worker', 'Senior Citizen', 'Woman', 'Other'].map((catOpt) => (
                  <button
                    key={catOpt}
                    onClick={() => setFormData({ ...formData, userCategory: catOpt })}
                    className={`p-3.5 rounded-xl text-xs font-extrabold border text-left transition-all ${
                      formData.userCategory === catOpt
                        ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md scale-102'
                        : 'bg-[#F8FBFF] text-[#294A78] hover:bg-[#EEF6FF] border-[#D8E6F7]'
                    }`}
                  >
                    {catOpt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Education */}
          {currentStep === 2 && (
            <div>
              <h3 className="font-bold text-[#123B8F] text-base mb-2">{t('stepEducation')}</h3>
              <p className="text-xs text-[#48658F] mb-4 font-medium">Select highest educational qualification achieved.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['10th / SSC', '12th / HSC Pass', 'Diploma Student', 'Undergraduate (Degree)', 'Postgraduate'].map((eduOpt) => (
                  <button
                    key={eduOpt}
                    onClick={() => setFormData({ ...formData, education: eduOpt })}
                    className={`p-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      formData.education === eduOpt
                        ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md'
                        : 'bg-[#F8FBFF] text-[#294A78] hover:bg-[#EEF6FF] border-[#D8E6F7]'
                    }`}
                  >
                    {eduOpt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div>
              <h3 className="font-bold text-[#123B8F] text-base mb-2">{t('stepLocation')}</h3>
              <p className="text-xs text-[#48658F] mb-4 font-medium">Are you a permanent resident (Domicile) of Maharashtra?</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setFormData({ ...formData, isDomicile: 'yes' })}
                  className={`flex-1 p-4 rounded-xl text-xs font-bold border transition-all ${
                    formData.isDomicile === 'yes'
                      ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md'
                      : 'bg-[#F8FBFF] text-[#294A78] hover:bg-[#EEF6FF] border-[#D8E6F7]'
                  }`}
                >
                  Yes (Maharashtra Resident)
                </button>
                <button
                  onClick={() => setFormData({ ...formData, isDomicile: 'no' })}
                  className={`flex-1 p-4 rounded-xl text-xs font-bold border transition-all ${
                    formData.isDomicile === 'no'
                      ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md'
                      : 'bg-[#F8FBFF] text-[#294A78] hover:bg-[#EEF6FF] border-[#D8E6F7]'
                  }`}
                >
                  No (Other State)
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Income */}
          {currentStep === 4 && (
            <div>
              <h3 className="font-bold text-[#123B8F] text-base mb-2">{t('stepIncome')}</h3>
              <p className="text-xs text-[#48658F] mb-4 font-medium">Select annual family gross income bracket.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Below ₹2.50 Lakh', 'Below ₹8.00 Lakh', '₹8.00 Lakh to ₹15 Lakh', 'Above ₹15 Lakh'].map((incOpt) => (
                  <button
                    key={incOpt}
                    onClick={() => setFormData({ ...formData, incomeCategory: incOpt })}
                    className={`p-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      formData.incomeCategory === incOpt
                        ? 'bg-[#123B8F] text-white border-[#123B8F] shadow-md'
                        : 'bg-[#F8FBFF] text-[#294A78] hover:bg-[#EEF6FF] border-[#D8E6F7]'
                    }`}
                  >
                    {incOpt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Specific Criteria */}
          {currentStep === 5 && (
            <div>
              <h3 className="font-bold text-[#123B8F] text-base mb-2">{t('stepCriteria')}</h3>
              <p className="text-xs text-[#48658F] mb-4 font-medium">Do you meet institution / CET quota requirements?</p>
              <div className="p-4 bg-[#F0ECFF]/60 rounded-2xl border border-[#EDE9FE] text-xs text-[#123B8F] space-y-2 font-medium">
                <p>✓ Minimum 50% attendance requirement in previous course.</p>
                <p>✓ Maximum 2 gap years permitted for higher education scholarship.</p>
              </div>
            </div>
          )}

          {/* Wizard Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-[#D8E6F7]">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-4 py-2 bg-[#EEF6FF] hover:bg-[#D8E6F7] disabled:opacity-40 text-[#123B8F] text-xs font-bold rounded-xl flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2 bg-[#6D4AFF] hover:bg-[#5B3FD3] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md transition-colors"
            >
              <span>{currentStep === 5 ? 'View Indicative Match' : 'Next Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Wizard Finished Result Screen */
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-center">
            <CheckCircle2 className="w-12 h-12 text-[#16A36A] mx-auto mb-2" />
            <h3 className="text-xl font-extrabold text-emerald-950 mb-1">
              {t('wizardResultTitle')}
            </h3>
            <span className="inline-block bg-[#16A36A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs mb-3">
              Potentially Eligible (94% Indicative Match)
            </span>
            <p className="text-xs text-emerald-900 max-w-md mx-auto font-medium">
              Based on your age ({formData.age}), education ({formData.education}), and income bracket ({formData.incomeCategory}), you appear eligible for Rajarshi Shahu Maharaj Scholarship.
            </p>
          </div>

          <div className="bg-[#F8FBFF] p-4 rounded-2xl border border-[#D8E6F7] space-y-2 text-xs">
            <h4 className="font-bold text-[#123B8F] uppercase tracking-wider text-[11px] mb-2">{t('whyBreakdown')}</h4>
            <div className="flex items-center gap-2 text-emerald-900 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#16A36A] flex-shrink-0" />
              <span>Education level matches undergraduate scholarship criteria.</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-900 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#16A36A] flex-shrink-0" />
              <span>Maharashtra domicile requirement appears satisfied.</span>
            </div>
            <div className="flex items-center gap-2 text-amber-900 font-medium">
              <AlertTriangle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              <span>Income certificate required for final verification by Tahsildar.</span>
            </div>
          </div>

          <div className="p-3 bg-[#F0ECFF]/70 rounded-xl border border-[#EDE9FE] text-xs text-[#5B3FD3] flex items-start gap-2">
            <ShieldAlert className="w-5 h-5 text-[#6D4AFF] flex-shrink-0" />
            <p>{t('disclaimerEligibility')}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#D8E6F7]">
            <button
              onClick={resetWizard}
              className="px-4 py-2 bg-[#EEF6FF] hover:bg-[#D8E6F7] text-[#123B8F] text-xs font-bold rounded-xl flex items-center gap-1"
            >
              <RefreshCw className="w-4 h-4" />
              Recalculate
            </button>

            <button
              onClick={onComplete}
              className="px-5 py-2.5 bg-[#123B8F] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5"
            >
              <span>Build My Citizen Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
