import React, { useState, useEffect } from 'react';
import { X, Type, Eye, Activity, RotateCcw } from 'lucide-react';
import { showToast } from '../../hooks/useToast';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  const [fontSize, setFontSize] = useState<number>(() => {
    return parseInt(localStorage.getItem('mahasetu_font_size') || '100', 10);
  });
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('mahasetu_high_contrast') === 'true';
  });
  const [reduceMotion, setReduceMotion] = useState<boolean>(() => {
    return localStorage.getItem('mahasetu_reduce_motion') === 'true';
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem('mahasetu_font_size', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('mahasetu_high_contrast', highContrast.toString());
  }, [highContrast]);

  useEffect(() => {
    if (reduceMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    localStorage.setItem('mahasetu_reduce_motion', reduceMotion.toString());
  }, [reduceMotion]);

  if (!isOpen) return null;

  const handleReset = () => {
    setFontSize(100);
    setHighContrast(false);
    setReduceMotion(false);
    showToast('Accessibility settings reset to default', 'info');
  };

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-[#123B8F]/30 backdrop-blur-xs animate-fade-in">
      <div className="bg-white border border-[#D8E6F7] rounded-2xl max-w-md w-full p-6 shadow-2xl text-[#123B8F] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#48658F] hover:text-[#123B8F] hover:bg-[#EEF6FF] rounded-xl transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#F0ECFF] border border-[#EDE9FE] flex items-center justify-center text-[#6D4AFF]">
            <Type className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-[#123B8F]">Accessibility Preferences</h3>
            <p className="text-xs text-[#48658F] font-medium">Customize display settings for better readability</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Text Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-[#123B8F] flex items-center gap-2">
                <Type className="w-4 h-4 text-[#6D4AFF]" /> Text Size ({fontSize}%)
              </label>
              <button
                onClick={() => setFontSize(100)}
                className="text-xs text-[#6D4AFF] hover:underline font-bold"
              >
                Reset Size
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFontSize((prev) => Math.max(90, prev - 5))}
                className="px-3 py-1.5 rounded-lg bg-[#EEF6FF] border border-[#D8E6F7] font-bold hover:bg-[#D8E6F7] text-[#123B8F]"
              >
                A-
              </button>
              <input
                type="range"
                min="90"
                max="120"
                step="5"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
                className="flex-1 accent-[#6D4AFF] cursor-pointer"
              />
              <button
                onClick={() => setFontSize((prev) => Math.min(120, prev + 5))}
                className="px-3 py-1.5 rounded-lg bg-[#EEF6FF] border border-[#D8E6F7] font-bold hover:bg-[#D8E6F7] text-[#123B8F]"
              >
                A+
              </button>
            </div>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FBFF] border border-[#D8E6F7]">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-[#6D4AFF]" />
              <div>
                <div className="text-sm font-bold text-[#123B8F]">High Contrast Mode</div>
                <div className="text-xs text-[#48658F] font-medium">Enhance visual contrast and borders</div>
              </div>
            </div>
            <button
              onClick={() => {
                setHighContrast(!highContrast);
                showToast(`High contrast ${!highContrast ? 'enabled' : 'disabled'}`, 'info');
              }}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                highContrast ? 'bg-[#6D4AFF]' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  highContrast ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Reduce Motion */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FBFF] border border-[#D8E6F7]">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-[#6D4AFF]" />
              <div>
                <div className="text-sm font-bold text-[#123B8F]">Reduce Animations</div>
                <div className="text-xs text-[#48658F] font-medium">Minimize movement for visual comfort</div>
              </div>
            </div>
            <button
              onClick={() => {
                setReduceMotion(!reduceMotion);
                showToast(`Reduced motion ${!reduceMotion ? 'enabled' : 'disabled'}`, 'info');
              }}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                reduceMotion ? 'bg-[#6D4AFF]' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  reduceMotion ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#D8E6F7]">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-xs font-bold text-[#48658F] hover:text-[#123B8F] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restore Defaults
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#123B8F] hover:bg-[#1D4ED8] text-white font-extrabold text-sm transition-colors shadow-md"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
