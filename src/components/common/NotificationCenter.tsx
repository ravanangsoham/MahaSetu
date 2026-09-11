import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { NotificationItem } from '../../types';
import { Bell, X, AlertTriangle, FileText, CheckCircle, Clock } from 'lucide-react';

interface NotificationCenterProps {
  onNavigateTab: (tab: string) => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({ onNavigateTab }) => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'notif-1',
      title: {
        en: 'Prerequisite Document Alert',
        mr: 'कागदपत्र सूचना: उत्पन्नाचा दाखला',
        hi: 'दस्तावेज सूचना: आय प्रमाण पत्र',
      },
      message: {
        en: 'Family Income Certificate missing for Rajarshi Shahu Maharaj Scholarship. Apply via Aaple Sarkar.',
        mr: 'राजर्षी शाहू महाराज शिष्यवृत्तीसाठी उत्पन्नाचा दाखला आवश्यक आहे. आपले सरकारवरून अर्ज करा.',
        hi: 'राजर्षि शाहू महाराज छात्रवृत्ति के लिए आय प्रमाण पत्र आवश्यक है। Aaple Sarkar पर आवेदन करें।',
      },
      date: '10 mins ago',
      type: 'prerequisite',
      read: false,
      linkTab: 'journey',
    },
    {
      id: 'notif-2',
      title: {
        en: 'Scholarship Application Update',
        mr: 'शिष्यवृत्ती अर्ज अद्ययावत',
        hi: 'छात्रवृत्ति आवेदन अपडेट',
      },
      message: {
        en: 'Status updated to "College Scrutiny Review" for Reference ID: DEMO-EDU-2026-001.',
        mr: 'संदर्भ क्रमांक DEMO-EDU-2026-001 ची स्थिती "महाविद्यालयीन पडताळणी" अशी अद्ययावत झाली.',
        hi: 'संदर्भ संख्या DEMO-EDU-2026-001 की स्थिति "कॉलेज सत्यापन" के रूप में अपडेट हुई।',
      },
      date: '1 hour ago',
      type: 'update',
      read: false,
      linkTab: 'track',
    },
    {
      id: 'notif-3',
      title: {
        en: 'Deadline Approaching',
        mr: 'अंतिम मुदत जवळ आली आहे',
        hi: 'अंतिम तिथि समीप है',
      },
      message: {
        en: 'Yuva Karya Prashikshan Yojna application deadline is Oct 31, 2026.',
        mr: 'युवा कार्य प्रशिक्षण योजनेची अंतिम मुदत ३१ ऑक्टोबर २०२६ आहे.',
        hi: 'युवा कार्य प्रशिक्षण योजना की अंतिम तिथि 31 अक्टूबर 2026 है।',
      },
      date: '1 day ago',
      type: 'alert',
      read: true,
      linkTab: 'schemes',
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'prerequisite':
        return <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />;
      case 'update':
        return <Clock className="w-5 h-5 text-[#2563EB] flex-shrink-0" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-[#16A36A] flex-shrink-0" />;
      case 'alert':
      default:
        return <FileText className="w-5 h-5 text-[#6D4AFF] flex-shrink-0" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-[#123B8F] hover:bg-[#EEF6FF] rounded-full transition-colors"
        title="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-[#6D4AFF] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#D8E6F7] z-50 overflow-hidden">
          <div className="p-3.5 bg-[#123B8F] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-purple-200" />
              <h3 className="font-semibold text-sm">{t('notificationsTab')}</h3>
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="text-xs text-blue-200 hover:text-white underline font-medium"
                >
                  Mark read
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-blue-200 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-[#EEF6FF]">
            {notifications.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.linkTab) onNavigateTab(item.linkTab);
                  setIsOpen(false);
                }}
                className={`p-3 hover:bg-[#EEF6FF] cursor-pointer transition-colors flex gap-3 ${
                  !item.read ? 'bg-[#EEF6FF]/60' : ''
                }`}
              >
                {getIcon(item.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#123B8F]">{item.title[language]}</h4>
                    <span className="text-[10px] text-[#48658F]">{item.date}</span>
                  </div>
                  <p className="text-xs text-[#294A78] mt-1 leading-snug font-medium">{item.message[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
