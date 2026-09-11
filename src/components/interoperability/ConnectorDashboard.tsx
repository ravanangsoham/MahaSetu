import React from 'react';
import { mockConnectors } from '../../data/connectors';
import { StatusBadge } from '../common/StatusBadge';
import { Activity, Server } from 'lucide-react';

export const ConnectorDashboard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="bg-orange-100 text-orange-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Interoperability Integration Layer
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Connector & API Setu Dashboard</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Real-time status of government data connectors, DigiLocker integration, and legacy adapters.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
          <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
          <span>Integration Engine Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockConnectors.map((conn) => (
          <div key={conn.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-extrabold text-slate-400 font-mono uppercase tracking-widest">
                  ID: {conn.id}
                </span>
                <StatusBadge status={conn.integrationStatus} size="sm" />
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                <Server className="w-4 h-4 text-orange-500" />
                {conn.name}
              </h3>

              <p className="text-xs text-slate-600 mb-3 leading-relaxed">{conn.description}</p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-3">
                <p className="font-bold text-slate-900 mb-1">Data Exchanged:</p>
                <div className="flex flex-wrap gap-1">
                  {conn.dataExchanged.map((d, idx) => (
                    <span key={idx} className="bg-white text-slate-700 font-medium px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-200 font-mono">
              <span>Sync: {conn.lastSyncTime}</span>
              <span>Latency: {conn.latencyMs}ms</span>
              <span>Uptime: {conn.uptime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
