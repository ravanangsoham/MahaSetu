import React from 'react';
import type { IntegrationStatus } from '../../types';

interface StatusBadgeProps {
  status: IntegrationStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-semibold';

  switch (status) {
    case 'REAL':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 ${sizeClasses}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-ping"></span>
          REAL INTEGRATION
        </span>
      );
    case 'DEMO':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 ${sizeClasses}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
          DEMO CONNECTOR
        </span>
      );
    case 'OFFICIAL_HANDOFF':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300 ${sizeClasses}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          OFFICIAL PORTAL HANDOFF
        </span>
      );
    case 'FUTURE':
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-300 ${sizeClasses}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
          FUTURE INTEGRATION
        </span>
      );
  }
};
