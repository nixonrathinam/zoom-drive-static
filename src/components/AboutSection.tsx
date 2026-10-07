import React from 'react';
import { ShieldCheck, DollarSign, Clock, Headphones, ThumbsUp, Car } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const reasons = [
    {
      icon: <Car className="w-6 h-6 text-[#FF0033]" />,
      title: 'Premium & Well-Maintained Cars',
      description: 'Every vehicle undergoes rigorous multi-point quality & safety inspections before every handover.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#FF0033]" />,
      title: 'Transparent Pricing',
      description: 'No hidden costs. Included 300 KM allowance per day with clear ₹6–₹10/km for any extra distance.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#FF0033]" />,
      title: 'Flexible Rental Options',
      description: 'From daily road trips to monthly corporate leases, choose duration that suits your journey.'
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-[#FF0033]" />,
      title: 'Easy & Fast Booking',
      description: 'Instant enquiry confirmation via website, phone, or our Zoom AI booking assistant.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#FF0033]" />,
      title: '24/7 Customer Support',
      description: 'Dedicated roadside assistance and helpline available round the clock whenever you travel.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FF0033]" />,
      title: 'Reliable & On-Time Service',
      description: 'Guaranteed sanitized cars delivered right to your doorstep or airport terminal.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0A0A0A] text-white relative border-t border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#FF0033] text-xs font-bold uppercase tracking-widest mb-2">
            The Zoom Standard
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Choose <span className="text-[#FF0033]">Zoom Drive?</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            We redefine luxury self-drive rentals with uncompromised quality, transparent terms, and premium hospitality.
          </p>
        </div>

        {/* Key Milestone Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-[#111111] border border-[#F59E0B]/30 hover:border-[#F59E0B] p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#F59E0B]/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F59E0B] tracking-tight mb-1.5">
              1000+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              Happy Customers
            </div>
          </div>

          <div className="bg-[#111111] border border-[#F59E0B]/30 hover:border-[#F59E0B] p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#F59E0B]/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F59E0B] tracking-tight mb-1.5">
              20+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              Vehicles in Fleet
            </div>
          </div>

          <div className="bg-[#111111] border border-[#F59E0B]/30 hover:border-[#F59E0B] p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#F59E0B]/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F59E0B] tracking-tight mb-1.5">
              5+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              Years Experience
            </div>
          </div>

          <div className="bg-[#111111] border border-[#F59E0B]/30 hover:border-[#F59E0B] p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#F59E0B]/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F59E0B] tracking-tight mb-1.5">
              24/7
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              Customer Support
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-[#171717] border border-[#FF0033]/30 hover:border-[#FF0033] p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#FF0033]/10 space-y-3 group"
            >
              <div className="w-12 h-12 bg-[#0D0D0D] border border-[#FF0033]/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF0033] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
