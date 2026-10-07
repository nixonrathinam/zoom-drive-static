import React, { useState } from 'react';
import { ApexLogo } from './ApexLogo';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ShieldCheck, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openTerms = () => {
    setModalTitle('Terms & Conditions — Zoom Drive');
    setModalContent(
      `1. Driving License & Verification: Renter must hold a valid Indian Driving License (or International Driving Permit for foreign nationals) and be at least 21 years of age.\n` +
      `2. Distance Allowance: Standard daily rental includes 300 KM per 24-hour period. Excess distance is charged at ₹6–₹10/KM depending on vehicle model.\n` +
      `3. Fuel Policy: Vehicle is provided with a recorded fuel level and must be returned with the equivalent amount. Fuel is not included in base rental charges.\n` +
      `4. Security Deposit: A refundable security deposit is collected prior to key handover and released upon vehicle return after damage inspection.\n` +
      `5. Speed Limit: Vehicles are fitted with speed governors as per government norms (max 80 km/h or 120 km/h depending on highway regulations).`
    );
  };

  const openPrivacy = () => {
    setModalTitle('Privacy Policy — Zoom Drive');
    setModalContent(
      `1. Data Privacy: Zoom Drive collects customer personal information (Name, Phone, Email, Driving License copy) solely for rental verification, reservation processing, and regulatory compliance.\n` +
      `2. Zero Sharing: We never sell or distribute your personal contact details to third-party marketing companies.\n` +
      `3. Location Telematics: For safety and theft prevention, vehicles are monitored via GPS telematics.\n` +
      `4. Contact Us: For data privacy queries, please reach out to support@zoomdrive.com.`
    );
  };

  return (
    <footer className="bg-[#050505] border-t border-[#FF0033]/30 text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-900">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <ApexLogo size="md" showTagline={true} />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pt-2">
              South India’s premier luxury self-drive car rental platform. Exceptional fleet, transparent pricing, and 24/7 dedicated service.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/zoomdrive_?utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow ZoomDrive on Instagram"
                className="p-2 bg-[#171717] hover:bg-[#FF0033] text-gray-300 hover:text-white rounded-lg transition-all border border-gray-800"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#171717] hover:bg-[#FF0033] text-gray-300 hover:text-white rounded-lg transition-colors border border-gray-800">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#171717] hover:bg-[#FF0033] text-gray-300 hover:text-white rounded-lg transition-colors border border-gray-800">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#171717] hover:bg-[#FF0033] text-gray-300 hover:text-white rounded-lg transition-colors border border-gray-800">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#FF0033] uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('cars')} className="hover:text-white transition-colors">Our Fleet (20+ Cars)</button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services & Why Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Why Zoom Drive</button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">FAQs & Policies</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact Us</button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-[#FF0033] font-bold hover:underline">Book a Car Now</button>
              </li>
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#FF0033] uppercase tracking-wider">Car Categories</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>SUVs (Fortuner, Creta, Thar, XUV 700)</li>
              <li>Luxury Sedans (BMW 520d)</li>
              <li>MUVs (Innova Crysta, Carens, Ertiga)</li>
              <li>Hatchbacks (Swift, Baleno, Glanza)</li>
              <li>Economy & CNG Rentals</li>
            </ul>
          </div>

          {/* Contact Hotline */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#FF0033] uppercase tracking-wider">24/7 Booking Support</h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <a href="tel:+917538822706" className="flex items-center gap-2 hover:text-[#FF0033] transition-colors">
                <Phone className="w-4 h-4 text-[#FF0033]" />
                <span>+91 75388 22706</span>
              </a>
              <a href="mailto:support@zoomdrive.com" className="flex items-center gap-2 hover:text-[#FF0033] transition-colors">
                <Mail className="w-4 h-4 text-[#FF0033]" />
                <span>support@zoomdrive.com</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/e9GHdn6TZ7T4HeJz7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 pt-1 text-gray-400 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#FF0033] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#FF0033] transition-colors">Zoom Drive Hub, Old NH45, Tiruchirappalli, Tamil Nadu 620002</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} ZOOM DRIVE CAR RENTAL. All Rights Reserved. Drive Beyond Limits.</p>

          <div className="flex items-center gap-6">
            <button onClick={openTerms} className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={openPrivacy} className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#171717] border border-[#FF0033]/40 rounded-2xl max-w-lg w-full p-6 text-white space-y-4 relative">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <h3 className="font-bold text-[#FF0033] text-lg">{modalTitle}</h3>
              <button onClick={() => setModalTitle(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-gray-300 whitespace-pre-line leading-relaxed max-h-[60vh] overflow-y-auto">
              {modalContent}
            </div>
            <button
              onClick={() => setModalTitle(null)}
              className="w-full bg-[#FF0033] hover:bg-[#CC0029] text-white font-bold py-2.5 rounded-xl text-xs uppercase cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
