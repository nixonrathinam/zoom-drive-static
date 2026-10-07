import React, { useState, useEffect } from 'react';
import { ApexLogo } from './ApexLogo';
import { Phone, MessageSquare, Menu, X, Car as CarIcon, Instagram } from 'lucide-react';

interface NavbarProps {
  onBookNowClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        isScrolled 
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#FF0033]/30 py-3 shadow-2xl shadow-black/80' 
          : 'bg-gradient-to-b from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo on the left */}
        <div onClick={() => handleNavClick('hero')} className="cursor-pointer">
          <ApexLogo size="md" showTagline={false} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick('hero')} 
            className="text-gray-300 hover:text-[#FF0033] font-medium text-sm tracking-wide transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('cars')} 
            className="text-gray-300 hover:text-[#FF0033] font-medium text-sm tracking-wide transition-colors"
          >
            Cars
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="text-gray-300 hover:text-[#FF0033] font-medium text-sm tracking-wide transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-gray-300 hover:text-[#FF0033] font-medium text-sm tracking-wide transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('faq')} 
            className="text-gray-300 hover:text-[#FF0033] font-medium text-sm tracking-wide transition-colors"
          >
            FAQ
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-gray-300 hover:text-[#FF0033] font-medium text-sm tracking-wide transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Quick Call Button */}
          <a
            href="tel:+917538822706"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-[#171717] hover:bg-[#222222] border border-[#FF0033]/30 rounded-lg transition-all"
            title="Call Zoom Drive"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF0033]" />
            <span>+91 75388 22706</span>
          </a>

          {/* Quick Instagram Button */}
          <a
            href="https://www.instagram.com/zoomdrive_?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-400 hover:text-rose-300 bg-[#171717] hover:bg-[#222222] border border-rose-900/50 rounded-lg transition-all"
            title="Follow on Instagram (@zoomdrive_)"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>Instagram</span>
          </a>

          {/* Quick WhatsApp Button */}
          <a
            href={`https://wa.me/917538822706?text=${encodeURIComponent("Hi Zoom Drive, I am interested to book a car. Please share details and availability!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-[#171717] hover:bg-[#222222] border border-emerald-900/50 rounded-lg transition-all"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* Red "Book a Car" Button */}
          <button
            onClick={onBookNowClick}
            className="flex items-center gap-2 bg-gradient-to-r from-[#FF0033] to-[#CC0029] hover:from-[#FF2255] hover:to-[#E11D48] text-white font-extrabold px-5 py-2.5 rounded-full shadow-lg shadow-[#FF0033]/25 hover:shadow-[#FF0033]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
          >
            <CarIcon className="w-4 h-4" />
            <span>Book a Car</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onBookNowClick}
            className="bg-[#FF0033] text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-md shadow-[#FF0033]/30"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-[#FF0033] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171717] border-b border-[#FF0033]/40 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left text-gray-200 hover:text-[#FF0033] py-2 font-medium border-b border-gray-800"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('cars')}
              className="text-left text-gray-200 hover:text-[#FF0033] py-2 font-medium border-b border-gray-800"
            >
              Cars
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left text-gray-200 hover:text-[#FF0033] py-2 font-medium border-b border-gray-800"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-gray-200 hover:text-[#FF0033] py-2 font-medium border-b border-gray-800"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left text-gray-200 hover:text-[#FF0033] py-2 font-medium border-b border-gray-800"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left text-gray-200 hover:text-[#FF0033] py-2 font-medium border-b border-gray-800"
            >
              Contact
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:+917538822706"
              className="flex items-center justify-center gap-2 py-2.5 bg-[#222] border border-[#FF0033]/40 text-[#FF0033] rounded-lg font-semibold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 75388 22706</span>
            </a>
            <a
              href={`https://wa.me/917538822706?text=${encodeURIComponent("Hi Zoom Drive, I am interested to book a car. Please share details and availability!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-[#0e2a1b] border border-emerald-700/60 text-emerald-400 rounded-lg font-semibold text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>
            <a
              href="https://www.instagram.com/zoomdrive_?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-[#2a0e1a] border border-rose-800/60 text-rose-400 rounded-lg font-semibold text-xs"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Follow @zoomdrive_ on Instagram</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNowClick();
              }}
              className="w-full bg-[#FF0033] text-white font-extrabold py-3 rounded-full text-center shadow-lg shadow-[#FF0033]/30 text-sm tracking-wide"
            >
              Book a Car Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
