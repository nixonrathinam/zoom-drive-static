import React from 'react';
import { ShieldCheck, CheckCircle2, Car, Clock, MapPin, Sparkles, Headphones, Key, Award } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const servicesList = [
    {
      icon: ShieldCheck,
      title: 'Best Price Guarantee',
      highlight: 'Transparent Rates',
      description: 'We offer the most competitive self-drive rates in the market with absolute billing transparency and zero hidden fees or unexpected deposit deductions.'
    },
    {
      icon: CheckCircle2,
      title: 'No Cancellation Fees',
      highlight: 'Flexible Plans',
      description: 'Schedule changes unexpectedly? Modify or cancel your reservation up to 24 hours prior to your scheduled trip start time with zero cancellation penalty.'
    },
    {
      icon: Car,
      title: 'Best Quality Cars',
      highlight: 'Pristine & Sanitized',
      description: 'Our fleet undergoes rigorous 50-point technical safety audits and comprehensive deep sanitization before every handover for a smooth, reliable journey.'
    },
    {
      icon: Clock,
      title: '24/7 Customer Support',
      highlight: 'Always On Call',
      description: 'Our dedicated customer service center and emergency roadside recovery team are at your service 24 hours a day, 7 days a week, anywhere on the road.'
    },
    {
      icon: MapPin,
      title: 'Doorstep & Airport Delivery',
      highlight: 'Hassle-Free Delivery',
      description: 'Enjoy seamless vehicle delivery directly to your residence, hotel, airport terminal, or railway station at your convenience.'
    },
    {
      icon: Key,
      title: 'Instant Online Booking',
      highlight: 'Paperless Handover',
      description: 'Quick digital verification and instant booking confirmations mean you can hit the road in minutes without lengthy paperwork or delays.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF0033]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#FF0033]/40 text-[#FF0033] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            The Best Car Rental Experience in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0033] via-[#E11D48] to-[#CC0029]">Tamil Nadu</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            We deliver unmatched self-drive vehicle rental services across the state with a premium fleet, transparent pricing, and a customer-first approach.
          </p>
        </div>

        {/* Services / Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#141414]/90 border border-[#FF0033]/30 hover:border-[#FF0033] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF0033]/10 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#222222] border border-[#FF0033]/40 flex items-center justify-center text-[#FF0033] group-hover:scale-110 group-hover:border-[#FF0033] group-hover:bg-[#2A2A2A] transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-[#FF0033] transition-colors">
                      {service.title}
                    </h3>
                    <span className="inline-block text-[11px] font-semibold text-[#FF0033]/80 tracking-wider uppercase">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Alternative Sentence Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#171717] via-[#1A1A1A] to-[#171717] border border-[#FF0033]/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-[#FF0033]/10 border border-[#FF0033]/40 rounded-xl text-[#FF0033] shrink-0 hidden sm:block">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Ready for your next journey with Zoom Drive?</h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Explore our 20+ premium self-drive cars and reserve your ride in under 2 minutes.</p>
            </div>
          </div>
          {onOpenBooking && (
            <button
              onClick={onOpenBooking}
              className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-[#FF0033] via-[#E11D48] to-[#CC0029] hover:from-[#E11D48] hover:to-[#B91C1C] text-white font-extrabold rounded-xl transition-all text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap shadow-lg shadow-[#FF0033]/20"
            >
              Book a Car Now
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
