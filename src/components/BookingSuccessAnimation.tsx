import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Car as CarIcon, MessageSquare, ShieldCheck, Sparkles, Receipt } from 'lucide-react';
import { Car } from '../types';

interface BookingSuccessAnimationProps {
  car: Car | null;
  fuelVariant?: string;
  customerName: string;
  phoneNumber: string;
  email?: string;
  message?: string;
  pickupDate: string;
  returnDate: string;
  days: number;
  ratePerDay: number;
  totalPrice: number;
  onClose: () => void;
}

export const BookingSuccessAnimation: React.FC<BookingSuccessAnimationProps> = ({
  car,
  fuelVariant,
  customerName,
  phoneNumber,
  email,
  message,
  pickupDate,
  returnDate,
  days,
  totalPrice,
  onClose
}) => {
  const bookingRef = React.useMemo(() => `ZOM-${Math.floor(100000 + Math.random() * 900000)}`, []);

  const whatsappMessage = `Hi Zoom Drive! I just submitted a rental enquiry.
Booking ID: ${bookingRef}
Vehicle: ${car?.name || 'Car'} (${fuelVariant || car?.fuel || 'Standard'})
Customer: ${customerName} (${phoneNumber})
${email ? `Email: ${email}\n` : ''}${message ? `Special request: ${message}\n` : ''}
Dates: ${pickupDate} to ${returnDate} (${days} days)
Total Estimated: ₹${totalPrice.toLocaleString()}`;

  return (
    <div className="text-center py-2 space-y-5 relative overflow-hidden">
      {/* Animated Driving Car Header Stage */}
      <div className="relative w-full h-28 bg-[#0D0D0D] rounded-2xl border border-[#FF0033]/40 flex items-center justify-center overflow-hidden">
        {/* Road Track Line */}
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF0033]/50 to-transparent border-dashed border-t border-[#FF0033]" />
        
        {/* Animated Speed Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '-100%', opacity: [0, 1, 0] }}
            transition={{
              duration: 0.9 + i * 0.15,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.2
            }}
            className="absolute h-[1px] bg-[#FF0033] rounded-full"
            style={{
              top: `${20 + i * 14}%`,
              width: `${25 + i * 12}px`
            }}
          />
        ))}

        {/* Confetti Explosion Particles */}
        {[...Array(12)].map((_, i) => {
          const colors = ['#FF0033', '#10B981', '#E11D48', '#FFFFFF', '#CC0029'];
          const color = colors[i % colors.length];
          const angle = (i / 12) * 360;
          const radius = 50 + (i % 3) * 15;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={`confetti-${i}`}
              initial={{ scale: 0, x: 0, y: 0, opacity: 1, rotate: 0 }}
              animate={{
                scale: [0, 1, 0.6, 0],
                x: [0, x],
                y: [0, y + 20],
                opacity: [1, 1, 0.8, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 1.4,
                delay: 0.25 + (i % 4) * 0.05,
                ease: [0.25, 1, 0.5, 1]
              }}
              className="absolute z-20 w-2.5 h-2.5 rounded-full shadow-md"
              style={{ backgroundColor: color }}
            />
          );
        })}

        {/* Animated Car Zooming In */}
        <motion.div
          initial={{ x: '-120%', scale: 0.7, opacity: 0 }}
          animate={{ x: '0%', scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 13, delay: 0.15 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 bg-gradient-to-tr from-[#FF0033] via-[#E11D48] to-[#990011] rounded-2xl p-3 shadow-2xl shadow-[#FF0033]/40 flex items-center justify-center text-white"
            >
              <CarIcon className="w-10 h-10 stroke-[2.2]" />
            </motion.div>
            
            {/* Glowing checkmark badge on car corner */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
              className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 text-black rounded-full flex items-center justify-center shadow-lg border-2 border-[#171717]"
            >
              <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Sparkle Bursts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.12, repeat: Infinity, repeatDelay: 1.8 }}
            className="absolute text-[#FF0033]"
            style={{
              top: `${15 + (i * 23) % 65}%`,
              left: `${12 + (i * 15) % 75}%`
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Title & Status Banner */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-1"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>WhatsApp Enquiry Ready</span>
        </div>
        <h3 className="text-2xl font-black text-white tracking-tight">
          Continue Your Booking
        </h3>
        <p className="text-xs text-gray-400">
          Booking reference: <strong className="text-[#FF0033] font-mono">{bookingRef}</strong>
        </p>
      </motion.div>

      {/* Reservation Pass Ticket */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-[#0D0D0D] border border-[#FF0033]/40 rounded-2xl p-4 sm:p-5 text-left relative overflow-hidden shadow-2xl space-y-4"
      >
        {/* Top Red Foil Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF0033] via-[#E11D48] to-[#990011]" />

        {/* Vehicle Row */}
        <div className="flex items-center gap-3 border-b border-gray-800/80 pb-3">
          {car?.image ? (
            <img 
              src={car.image} 
              alt={car.name} 
              className="w-16 h-12 object-cover rounded-lg border border-gray-800 shrink-0" 
            />
          ) : (
            <div className="w-16 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-[#FF0033]">
              <CarIcon className="w-6 h-6" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-extrabold text-white truncate">{car?.name || 'Selected Vehicle'}</h4>
            <span className="text-xs text-[#FF0033] font-semibold">
              {fuelVariant || car?.fuel} Engine • {car?.transmission}
            </span>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] text-gray-400 uppercase block font-semibold">Est. Total</span>
            <span className="text-base font-black text-[#FF0033]">₹{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-gray-400 block text-[11px] font-medium">Customer Name</span>
            <strong className="text-white font-bold">{customerName || 'Valued Customer'}</strong>
          </div>
          <div>
            <span className="text-gray-400 block text-[11px] font-medium">Phone Number</span>
            <strong className="text-white font-bold">{phoneNumber || 'N/A'}</strong>
          </div>
          <div>
            <span className="text-gray-400 block text-[11px] font-medium">Rental Start</span>
            <strong className="text-gray-200">{pickupDate}</strong>
          </div>
          <div>
            <span className="text-gray-400 block text-[11px] font-medium">Return Date</span>
            <strong className="text-gray-200">{returnDate} ({days} Day{days > 1 ? 's' : ''})</strong>
          </div>
        </div>

        {/* Notice Box */}
        <div className="bg-[#171717] p-2.5 rounded-xl border border-gray-800 text-[11px] text-gray-300 leading-normal flex items-center gap-2">
          <Receipt className="w-4 h-4 text-[#FF0033] shrink-0" />
          <span>Your enquiry is not sent until you tap Send in WhatsApp. Any selected ID image must be attached there manually.</span>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-3 pt-1"
      >
        <a
          href={`https://wa.me/917538822706?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Confirm on WhatsApp</span>
        </a>
        <button
          onClick={onClose}
          className="w-full sm:w-auto px-6 py-3 bg-[#222] hover:bg-[#333] border border-gray-700 text-gray-200 font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all"
        >
          Done & Close
        </button>
      </motion.div>
    </div>
  );
};
