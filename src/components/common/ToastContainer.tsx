import React from 'react';
import { useToast } from '../../hooks/useToast';
import { CheckCircle, Info, AlertTriangle, AlertCircle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4">
      {toasts.map((toast) => {
        let bgColor = 'bg-[#123B8F] border-[#1D4ED8] text-white';
        let Icon = Info;

        if (toast.type === 'success') {
          bgColor = 'bg-white border-[#16A36A] text-[#16A36A] shadow-md';
          Icon = CheckCircle;
        } else if (toast.type === 'warning') {
          bgColor = 'bg-white border-[#F59E0B] text-[#F59E0B] shadow-md';
          Icon = AlertTriangle;
        } else if (toast.type === 'error') {
          bgColor = 'bg-white border-[#DC4A4A] text-[#DC4A4A] shadow-md';
          Icon = AlertCircle;
        } else {
          bgColor = 'bg-white border-[#6D4AFF] text-[#123B8F] shadow-md';
          Icon = Info;
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 p-3.5 rounded-xl border backdrop-blur-md shadow-lg transition-all transform animate-slide-in duration-300 ${bgColor}`}
            role="alert"
          >
            <Icon className="w-5 h-5 shrink-0" />
            <div className="flex-1 text-sm font-medium leading-snug">{toast.message}</div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors shrink-0 opacity-70 hover:opacity-100"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
