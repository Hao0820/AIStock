import React from 'react';
import { LineChart, History } from 'lucide-react';
import { TabState } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

export function BottomNav({ activeTab, setActiveTab }: { activeTab: TabState, setActiveTab: (t: TabState) => void }) {
  const { t } = useTranslation();
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-2xl bg-surface-container-low/80 backdrop-blur-xl flex justify-around items-center px-8 h-[11vh] min-h-[76px] max-h-[110px] pb-[env(safe-area-inset-bottom)] border-t border-outline-variant/20 shadow-lg">
      <button
        onClick={() => setActiveTab('analysis')}
        className={`flex flex-col items-center justify-center transition-all active:scale-90 ${
          activeTab === 'analysis' ? 'text-primary bg-primary/10 rounded-xl px-[4vw] py-[1vh]' : 'text-on-surface opacity-60 hover:opacity-100'
        }`}
      >
        <LineChart className={`w-[3.2vh] h-[3.2vh] min-w-[20px] min-h-[20px] max-w-[28px] max-h-[28px] mb-[0.5vh] ${activeTab === 'analysis' ? 'fill-primary/20' : ''}`} />
        <span className="font-label text-[clamp(9px,1.1vh,12px)] font-medium tracking-wide uppercase">{t('nav.tab.analysis')}</span>
      </button>
      <button
        onClick={() => setActiveTab('history')}
        className={`flex flex-col items-center justify-center transition-all active:scale-90 ${
          activeTab === 'history' ? 'text-primary bg-primary/10 rounded-xl px-[4vw] py-[1vh]' : 'text-on-surface opacity-60 hover:opacity-100'
        }`}
      >
        <History className={`w-[3.2vh] h-[3.2vh] min-w-[20px] min-h-[20px] max-w-[28px] max-h-[28px] mb-[0.5vh] ${activeTab === 'history' ? 'fill-primary/20' : ''}`} />
        <span className="font-label text-[clamp(9px,1.1vh,12px)] font-medium tracking-wide uppercase">{t('nav.tab.history')}</span>
      </button>
    </nav>
  );
}
