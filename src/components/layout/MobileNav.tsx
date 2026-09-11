import React from 'react';
import { MessageSquare, Search, UserCheck, Activity, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();

  const mobileItems = [
    { id: 'ask-ai', label: t('navAskAI'), icon: MessageSquare },
    { id: 'schemes', label: t('navSchemes'), icon: Search },
    { id: 'journey', label: t('navJourney'), icon: UserCheck },
    { id: 'track', label: t('navTrack'), icon: Activity },
    { id: 'grievance', label: t('navGrievance'), icon: HelpCircle },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#D8E6F7] px-2 py-1.5 z-40 shadow-2xl flex items-center justify-around">
      {mobileItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
              isActive ? 'text-[#123B8F] font-bold scale-105' : 'text-[#48658F] hover:text-[#123B8F]'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-[#6D4AFF]' : ''}`} />
            <span className="text-[10px] mt-0.5 whitespace-nowrap font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
