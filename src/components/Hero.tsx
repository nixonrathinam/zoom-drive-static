import React, { useState, useEffect, useRef } from 'react';
import { Search, ShieldCheck, Zap, Award, Car as CarIcon, ChevronDown } from 'lucide-react';
import heroBgImg from '../assets/images/hero_fleet_highway_1786470735933.jpg';

interface HeroProps {
  onSearch: (pickupLocation: string, pickupDate: string, returnDate: string) => void;
  onBookNowClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onBookNowClick }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Trigger smooth entrance animation on mount
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Track scroll position inside Hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollY = window.scrollY;

      const transitionStart = heroHeight * 0.55;
      const transitionEnd = heroHeight * 0.95;

      if (scrollY <= transitionStart) {
        setScrollProgress(0);
      } else if (scrollY >= transitionEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollY - transitionStart) / (transitionEnd - transitionStart);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreCarsClick = () => {
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      onSearch('', '', '');
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative w-full min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0D0D0D] py-16 sm:py-20"
    >
      {/* SVG Subtle Film Grain Noise Filter */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <filter id="subtle-film-grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* 1. Full-Screen Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden transition-all duration-300 pointer-events-none"
        style={{
          filter: `sepia(${scrollProgress * 15}%) saturate(${100 - scrollProgress * 12}%) contrast(${100 + scrollProgress * 5}%)`
        }}
      >
        <img
          src={heroBgImg}
          alt="Zoom Drive Luxury Fleet Highway"
          className="w-full h-full object-cover object-center transition-transform duration-700 scale-105"
          style={{ opacity: 0.65 }}
        />
      </div>

      {/* 2. Overlays for Text Readability & Cinematic Depth */}
      {/* 30% Solid Black Base Overlay */}
      <div 
        className="absolute inset-0 z-[1] bg-black pointer-events-none" 
        style={{ opacity: 0.30 }}
      />

      {/* Subtle Black Gradient Overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-[#0D0D0D]/60 pointer-events-none" />

      {/* Central Soft Glow behind Hero Heading for maximum text legibility */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#FF0033]/10 via-[#0D0D0D]/60 to-[#FF0033]/10 rounded-full blur-[120px] pointer-events-none z-[2]" />

      {/* 3. Vintage Cinematic Ending Transition Overlays */}
      <div 
        className="absolute inset-0 z-[3] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at center, transparent 35%, rgba(13, 13, 13, ${0.45 + scrollProgress * 0.50}) 100%)`
        }}
      />

      {/* Gentle Dark Fade to next section */}
      <div 
        className="absolute inset-0 z-[4] bg-gradient-to-b from-transparent via-[#0D0D0D]/60 to-[#0D0D0D] pointer-events-none transition-opacity duration-500"
        style={{ opacity: scrollProgress }}
      />

      {/* 4. Foreground Hero Content */}
      <div 
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 pb-4 flex flex-col items-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Tagline Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414]/85 border border-[#FF0033]/40 text-[#FF0033] text-xs font-semibold uppercase tracking-widest mb-6 shadow-2xl backdrop-blur-md transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-[#FF0033]" />
          <span>Zoom Drive — Drive Beyond Limits</span>
        </div>

        {/* Main Heading */}
        <h1 
          className={`text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-5 leading-tight drop-shadow-2xl transition-all duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          DRIVE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF0033] to-[#CC0029]">JOURNEY</span>
        </h1>

        {/* Subheading */}
        <p 
          className={`text-gray-200 text-base sm:text-xl md:text-2xl max-w-2xl mx-auto font-normal mb-8 sm:mb-9 leading-relaxed drop-shadow-md transition-all duration-800 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Premium Cars. Flexible Rentals. Unforgettable Journeys.
        </p>

        {/* Action Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8 sm:mb-10 transition-all duration-800 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={handleExploreCarsClick}
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#FF0033] via-[#E11D48] to-[#990011] hover:from-[#FF2255] hover:to-[#CC0029] text-white font-black rounded-2xl transition-all shadow-2xl shadow-[#FF0033]/35 text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>EXPLORE CARS</span>
          </button>

          <button
            onClick={onBookNowClick ? onBookNowClick : handleExploreCarsClick}
            className="w-full sm:w-auto px-9 py-4 bg-[#141414]/90 hover:bg-[#1F1F1F] border-2 border-[#FF0033] text-white font-bold rounded-2xl transition-all shadow-xl text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 backdrop-blur-md hover:border-[#FF2255] cursor-pointer"
          >
            <CarIcon className="w-4 h-4 text-[#FF0033]" />
            <span>BOOK NOW</span>
          </button>
        </div>

        {/* Feature Badges */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-gray-300 text-xs sm:text-sm font-medium bg-[#141414]/70 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-[#FF0033]/30 backdrop-blur-md shadow-lg transition-all duration-900 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF0033]" />
            <span>300 KM / Day Included</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FF0033]" />
            <span>Extra KM from ₹6 / KM</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#FF0033]" />
            <span>Zero Hidden Charges</span>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          onClick={handleExploreCarsClick}
          className="mt-6 sm:mt-8 flex flex-col items-center gap-1 text-gray-400 hover:text-[#FF0033] transition-colors cursor-pointer animate-bounce select-none"
        >
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#FF0033]">Scroll to Fleet</span>
          <ChevronDown className="w-4 h-4 text-[#FF0033]" />
        </div>
      </div>
    </section>
  );
};

