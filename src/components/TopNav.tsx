import React from 'react';
import { Activity, Settings } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export function TopNav({ onSettingsClick }: { onSettingsClick: () => void }) {
  const { t } = useTranslation();
  return (
    <header className="bg-surface-container-low flex justify-between items-center w-full px-6 h-16 fixed top-0 z-50">
      <div className="flex items-center gap-3">
        <Activity className="text-primary w-6 h-6" />
        <h1 className="font-headline font-bold tracking-tight text-xl text-primary">{t('nav.title')}</h1>
      </div>
      <button 
        onClick={onSettingsClick}
        className="hover:bg-on-surface/5 transition-colors p-2 rounded-full active:scale-95 duration-200"
      >
        <Settings className="text-on-surface opacity-70 w-5 h-5" />
      </button>
    </header>
  );
}
