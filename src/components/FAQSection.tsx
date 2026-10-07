import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Shield, FileText, Fuel, CreditCard, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';

export interface FAQItem {
  id: string;
  category: 'Documents' | 'Policies' | 'Fuel & Km' | 'Insurance';
  question: string;
  answer: string;
  keyPoints?: string[];
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'docs-required',
    category: 'Documents',
    question: 'What documents are required to rent a self-drive car?',
    answer: 'To rent a car with Zoom Drive, you must present valid original identity and driving credentials during vehicle handover.',
    keyPoints: [
      'Original Indian Driving License (minimum 1 year valid driving history)',
      'Aadhaar Card or Passport for identity and address verification',
      'Local address proof or flight/train ticket for outstation visitors'
    ]
  },
  {
    id: 'age-limit',
    category: 'Documents',
    question: 'What is the minimum age requirement for self-drive rentals?',
    answer: 'The primary driver must be at least 21 years old and possess a valid, unexpired government-issued driving license. Learner licenses (LLR) or expired documents are strictly not accepted.',
    keyPoints: [
      'Minimum age: 21 years old',
      'Driving license must be held for at least 1 year'
    ]
  },
  {
    id: 'km-limit',
    category: 'Fuel & Km',
    question: 'How does the daily kilometer limit and extra distance charge work?',
    answer: 'All our rental vehicles include a generous allowance of 300 kilometers per calendar day. Distance is calculated cumulatively over your total rental duration.',
    keyPoints: [
      '300 km per day included in base rental price (e.g. 3 days = 900 km allowance)',
      'Any additional distance driven beyond allowance is billed at ₹6, ₹8, or ₹10 / km based on vehicle model',
      'Odometer readings are verified digitally at handover and return'
    ]
  },
  {
    id: 'fuel-policy',
    category: 'Fuel & Km',
    question: 'Are fuel charges included in the daily rental tariff?',
    answer: 'Rental rates are exclusive of fuel. We follow a fair "Level-to-Level" fuel policy.',
    keyPoints: [
      'Vehicle is handed over with a recorded fuel level (e.g. 1/4 or Half tank)',
      'Return the vehicle with the same fuel level to avoid extra refuelling charges',
      'Choose your preferred variant: Petrol, Diesel, or CNG options available'
    ]
  },
  {
    id: 'security-deposit',
    category: 'Policies',
    question: 'Is a security deposit required, and when is it refunded?',
    answer: 'Yes, a refundable security deposit ranging from ₹2,000 to ₹5,000 (depending on vehicle category) is required prior to key handover.',
    keyPoints: [
      'Hatchbacks & Compact SUVs: ₹2,000 deposit',
      '7-Seater MUVs & Premium SUVs: ₹3,000 - ₹5,000 deposit',
      '100% refunded via UPI/Bank transfer within 24 hours after inspection'
    ]
  },
  {
    id: 'cancellation-policy',
    category: 'Policies',
    question: 'What is your booking cancellation and modification policy?',
    answer: 'We offer zero-penalty flexible cancellations up to 24 hours before your scheduled rental start time.',
    keyPoints: [
      'Free cancellation & rescheduling up to 24 hours prior to trip start',
      'Cancellations within 24 hours incur a nominal 1-day rental re-stocking charge',
      'Refunds are processed to the original payment source within 2-3 business days'
    ]
  },
  {
    id: 'insurance-breakdown',
    category: 'Insurance',
    question: 'What insurance coverage is provided in case of damage or failure?',
    answer: 'Every Zoom Drive vehicle is covered under comprehensive commercial motor vehicle insurance with round-the-clock roadside emergency support.',
    keyPoints: [
      'Includes 24/7 Roadside Assistance & Breakdown Towing',
      'Maximum financial liability capped up to standard insurance deductible',
      'Damage resulting from drunk driving or illegal activity is not covered'
    ]
  },
  {
    id: 'doorstep-delivery',
    category: 'Policies',
    question: 'Do you offer doorstep or airport terminal delivery?',
    answer: 'Yes! We deliver vehicles directly to your doorstep, hotel, railway station, or airport terminal across all major cities.',
    keyPoints: [
      'Free vehicle handover at main central garage hubs',
      'Doorstep / Airport terminal delivery available for nominal distance charges',
      'Paperless digital handover completed in under 5 minutes'
    ]
  },
  {
    id: 'additional-drivers',
    category: 'Documents',
    question: 'Can someone else drive the car during the trip?',
    answer: 'Only co-drivers who present their original driving licenses and are registered in the rental agreement during handover are permitted to operate the vehicle.',
    keyPoints: [
      'Up to 1 additional driver can be registered for free',
      'All drivers must satisfy minimum age and license criteria'
    ]
  },
  {
    id: 'payment-methods',
    category: 'Policies',
    question: 'What payment modes are accepted for booking and security deposit?',
    answer: 'We accept multiple secure payment options for your convenience during booking and delivery.',
    keyPoints: [
      'UPI (Google Pay, PhonePe, Paytm, BHIM)',
      'Credit Cards, Debit Cards, and Net Banking',
      'Cash payments accepted at delivery with digital receipt'
    ]
  }
];

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['docs-required', 'km-limit']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item != id) : [...prev, id]
    );
  };

  const categories = ['All', 'Documents', 'Policies', 'Fuel & Km', 'Insurance'];

  const filteredFaqs = FAQ_DATA.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle Red Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF0033]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-[#FF0033]/40 text-[#FF0033] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0033] via-[#E11D48] to-[#CC0029]">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Everything you need to know about our self-drive rental policies, document requirements, insurance coverage, and km allowances.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-6 mb-10">
          {/* Live Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. deposit, insurance, km limit, documents)..."
              className="w-full bg-[#141414] border border-[#FF0033]/30 hover:border-[#FF0033] focus:border-[#FF0033] text-white placeholder-gray-500 rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white bg-[#222] px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-[#FF0033] text-white shadow-lg shadow-[#FF0033]/20'
                      : 'bg-[#141414] text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion Questions List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-[#141414] rounded-2xl border border-gray-800 p-8 space-y-3">
            <HelpCircle className="w-10 h-10 text-gray-600 mx-auto" />
            <p className="text-gray-300 font-bold">No matching questions found</p>
            <p className="text-xs text-gray-500">Try searching for keywords like "deposit", "fuel", "license", or "cancellation".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs text-[#FF0033] font-bold underline mt-2 inline-block"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              
              // Category icon helper
              const getCategoryBadge = (cat: string) => {
                switch (cat) {
                  case 'Documents': return { label: 'Documents', icon: FileText, color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' };
                  case 'Fuel & Km': return { label: 'Fuel & Km', icon: Fuel, color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' };
                  case 'Insurance': return { label: 'Insurance', icon: Shield, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
                  default: return { label: 'Policies', icon: CreditCard, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
                }
              };

              const badge = getCategoryBadge(faq.category);
              const BadgeIcon = badge.icon;

              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#141414] border-[#FF0033] shadow-xl shadow-[#FF0033]/5' 
                      : 'bg-[#111111] border-[#222222] hover:border-gray-700 hover:bg-[#161616]'
                  }`}
                >
                  {/* Accordion Header / Question Button */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 pr-2">
                      <div className={`mt-0.5 px-2.5 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 ${badge.color}`}>
                        <BadgeIcon className="w-3 h-3" />
                        <span className="hidden sm:inline">{badge.label}</span>
                      </div>
                      <span className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#FF0033]">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen 
                        ? 'bg-[#FF0033] text-white border-[#FF0033] rotate-180' 
                        : 'bg-[#1E1E1E] text-gray-400 border-gray-800'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-gray-800/80 text-gray-300 text-sm leading-relaxed space-y-4 animate-fadeIn">
                      <p className="text-gray-300 font-medium">{faq.answer}</p>
                      
                      {faq.keyPoints && faq.keyPoints.length > 0 && (
                        <ul className="bg-[#0D0D0D] border border-gray-800 p-4 rounded-xl space-y-2 text-xs sm:text-sm">
                          {faq.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-[#FF0033] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Help Banner */}
        <div className="mt-14 bg-[#141414] border border-[#FF0033]/40 rounded-2xl p-6 text-center space-y-3">
          <Headphones className="w-8 h-8 text-[#FF0033] mx-auto" />
          <h3 className="text-lg font-extrabold text-white">Still have questions or need assistance?</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Our 24/7 customer support team and AI rental assistant are here to help you choose the ideal vehicle for your upcoming journey.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+917538822706"
              className="px-5 py-2.5 bg-[#FF0033] text-white font-extrabold rounded-xl text-xs uppercase tracking-wider hover:bg-[#CC0029] transition-all shadow-md"
            >
              Call +91 75388 22706
            </a>
            <a
              href={`https://wa.me/917538822706?text=${encodeURIComponent("Hi Zoom Drive, I have a question about self-drive rentals.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#171717] border border-emerald-600/60 text-emerald-400 font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-[#222] transition-all"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
