import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, LineChart, Calendar, ChevronRight } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export function HistoryTab({ onViewDetail }: { onViewDetail: (symbol: string, name: string) => void }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="mb-12">
        <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">{t('history.title')}</h2>
        <p className="text-on-surface-variant mt-2 text-sm">Automated analysis logs and historical predictions</p>
      </div>

      <div className="space-y-4">
        {/* History Card 1 */}
        <div 
          onClick={() => onViewDetail('2330.TW', '台積電 (TSMC)')}
          className="group relative overflow-hidden bg-surface-container rounded-xl p-6 transition-all hover:bg-surface-container-high active:scale-[0.98] duration-200 cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-lg text-on-surface">2330.TW</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase">Bullish</span>
                </div>
                <p className="text-sm text-on-surface-variant font-medium mt-0.5">台積電 (TSMC)</p>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-outline" />
                  <span className="text-xs text-outline font-medium uppercase tracking-wider">Oct 24, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex items-center self-center h-full">
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        {/* History Card 2 */}
        <div 
          onClick={() => onViewDetail('AAPL', 'Apple Inc.')}
          className="group relative overflow-hidden bg-surface-container rounded-xl p-6 transition-all hover:bg-surface-container-high active:scale-[0.98] duration-200 cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center">
                <LineChart className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-lg text-on-surface">AAPL</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold tracking-wider uppercase">Neutral</span>
                </div>
                <p className="text-sm text-on-surface-variant font-medium mt-0.5">Apple Inc.</p>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-outline" />
                  <span className="text-xs text-outline font-medium uppercase tracking-wider">Oct 22, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex items-center self-center h-full">
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        {/* History Card 3 */}
        <div 
          onClick={() => onViewDetail('NVDA', 'NVIDIA Corporation')}
          className="group relative overflow-hidden bg-surface-container rounded-xl p-6 transition-all hover:bg-surface-container-high active:scale-[0.98] duration-200 cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-tertiary-container" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-lg text-on-surface">NVDA</span>
                  <span className="px-2 py-0.5 rounded-full bg-error-container/20 text-tertiary-container text-[10px] font-bold tracking-wider uppercase">Correction</span>
                </div>
                <p className="text-sm text-on-surface-variant font-medium mt-0.5">NVIDIA Corporation</p>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-outline" />
                  <span className="text-xs text-outline font-medium uppercase tracking-wider">Oct 21, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex items-center self-center h-full">
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        {/* History Card 4 */}
        <div 
          onClick={() => onViewDetail('TSLA', 'Tesla, Inc.')}
          className="group relative overflow-hidden bg-surface-container rounded-xl p-6 transition-all hover:bg-surface-container-high active:scale-[0.98] duration-200 cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-lg text-on-surface">TSLA</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase">Bullish</span>
                </div>
                <p className="text-sm text-on-surface-variant font-medium mt-0.5">Tesla, Inc.</p>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-outline" />
                  <span className="text-xs text-outline font-medium uppercase tracking-wider">Oct 19, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex items-center self-center h-full">
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        {/* History Card 5 */}
        <div 
          onClick={() => onViewDetail('META', 'Meta Platforms')}
          className="group relative overflow-hidden bg-surface-container rounded-xl p-6 transition-all hover:bg-surface-container-high active:scale-[0.98] duration-200 cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-tertiary-container" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-lg text-on-surface">META</span>
                  <span className="px-2 py-0.5 rounded-full bg-error-container/20 text-tertiary-container text-[10px] font-bold tracking-wider uppercase">Bearish</span>
                </div>
                <p className="text-sm text-on-surface-variant font-medium mt-0.5">Meta Platforms</p>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-outline" />
                  <span className="text-xs text-outline font-medium uppercase tracking-wider">Oct 15, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex items-center self-center h-full">
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
