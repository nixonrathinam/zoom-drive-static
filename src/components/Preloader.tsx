import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ApexLogo } from './ApexLogo';

interface PreloaderProps {
  onFinish?: () => void;
  minDisplayTime?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinish, minDisplayTime = 2200 }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10 + 4;
        if (next >= 100) {
          clearInterval(timer);
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

          setTimeout(() => {
            setIsFinished(true);
            if (onFinish) {
              setTimeout(onFinish, 600);
            }
          }, remainingTime);

          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [minDisplayTime, onFinish]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#161616_0%,#050505_70%)] font-sans select-none"
        >
          {/* Faint speed streaks in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute h-[2px] w-[45%] -left-[40%] top-[22%] bg-gradient-to-r from-transparent via-[#FF0033]/60 to-transparent rounded-full animate-dash opacity-0" />
            <div className="absolute h-[2px] w-[45%] -left-[40%] top-[38%] bg-gradient-to-r from-transparent via-[#FF0033]/60 to-transparent rounded-full animate-dash opacity-0 [animation-delay:0.6s]" />
            <div className="absolute h-[2px] w-[45%] -left-[40%] top-[58%] bg-gradient-to-r from-transparent via-[#FF0033]/60 to-transparent rounded-full animate-dash opacity-0 [animation-delay:0.3s]" />
            <div className="absolute h-[2px] w-[45%] -left-[40%] top-[74%] bg-gradient-to-r from-transparent via-[#FF0033]/60 to-transparent rounded-full animate-dash opacity-0 [animation-delay:0.9s]" />
            <div className="absolute h-[1px] w-[45%] -left-[40%] top-[46%] bg-gradient-to-r from-transparent via-[#FF0033]/60 to-transparent rounded-full animate-dash opacity-0 [animation-delay:1.3s]" />
          </div>

          <div className="relative flex flex-col items-center z-10 px-4 text-center">
            {/* Logo Wrapper */}
            <div className="relative w-[min(75vw,380px)] filter drop-shadow-[0_0_30px_rgba(255,0,51,0.25)] animate-rise flex items-center justify-center">
              <ApexLogo variant="wide" size="xl" className="transform scale-110" />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.35)_50%,transparent_60%)] bg-[length:250%_250%] bg-[-100%_-100%] mix-blend-screen animate-shine-sweep pointer-events-none" />
            </div>

            {/* Progress Track Bar */}
            <div className="mt-8 w-[min(65vw,300px)] opacity-0 animate-fade-up [animation-delay:0.6s]">
              <div className="relative w-full h-[6px] bg-white/10 rounded-full overflow-hidden border border-white/5">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#A80410] via-[#FF0033] to-[#FF5A5A] shadow-[0_0_16px_rgba(255,0,51,0.8)] transition-all duration-150 ease-out"
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                />
              </div>
            </div>

            {/* Status Label */}
            <div className="mt-4 text-[#C9CDD3] text-[12px] sm:text-[13px] tracking-[3px] uppercase font-semibold opacity-0 animate-fade-up [animation-delay:0.9s] flex items-center justify-center gap-1">
              <span className="text-white font-bold">STARTING YOUR ENGINE</span>
              <span className="inline-flex">
                <span className="animate-blink font-bold">.</span>
                <span className="animate-blink [animation-delay:0.2s] font-bold">.</span>
                <span className="animate-blink [animation-delay:0.4s] font-bold">.</span>
              </span>
            </div>

            {/* Percentage Display */}
            <div className="mt-2 text-[11px] text-white/40 tracking-[2px] font-mono opacity-0 animate-fade-up [animation-delay:1.1s]">
              {Math.floor(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

