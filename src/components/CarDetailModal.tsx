import React, { useState, useEffect } from 'react';
import { Car, FuelType } from '../types';
import { X, Users, Gauge, Fuel, Shield, Phone, MessageSquare, CalendarCheck, CheckCircle2, Info } from 'lucide-react';
import fallbackCarImg from '../assets/images/hero_fleet_highway_1786470735933.jpg';

interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
  onBookNow: (car: Car) => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, onClose, onBookNow }) => {
  if (!car) return null;

  // Track selected fuel variant if car has multiple variants
  const [selectedFuel, setSelectedFuel] = useState<FuelType>(
    car.fuelVariants && car.fuelVariants.length > 0 ? car.fuelVariants[0].fuel : car.fuel
  );

  useEffect(() => {
    if (car.fuelVariants && car.fuelVariants.length > 0) {
      setSelectedFuel(car.fuelVariants[0].fuel);
    } else {
      setSelectedFuel(car.fuel);
    }
  }, [car]);

  // Determine active price based on selected fuel variant
  const activeVariant = car.fuelVariants?.find(v => v.fuel === selectedFuel);
  const activePricePerDay = activeVariant ? activeVariant.pricePerDay : car.pricePerDay;

  const handleProceedToBook = () => {
    onClose();
    onBookNow({
      ...car,
      fuel: selectedFuel,
      pricePerDay: activePricePerDay,
      name: car.fuelVariants ? `${car.name} (${selectedFuel})` : car.name
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#171717] border border-[#FF0033]/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white max-h-[92dvh] flex flex-col pb-safe"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-gray-300 hover:text-white rounded-full transition-all border border-gray-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Car Photo */}
          <div 
            className="relative h-64 rounded-xl overflow-hidden bg-black border border-gray-800 group"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackCarImg;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="text-xs font-bold text-[#FF0033] uppercase tracking-wider">{car.brand}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{car.name}</h2>
              </div>
              <div className="bg-[#0D0D0D] border border-[#FF0033]/40 px-4 py-1.5 rounded-xl text-right shadow-lg">
                <span className="text-[#FF0033] font-black text-xl">₹{activePricePerDay.toLocaleString()}</span>
                <span className="text-gray-400 text-xs block font-medium">/ day</span>
              </div>
            </div>
          </div>

          {/* Fuel Variant Selector if available */}
          {car.fuelVariants && car.fuelVariants.length > 0 && (
            <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#FF0033]/30 space-y-2">
              <label className="block text-xs font-bold text-[#FF0033] uppercase tracking-wider flex items-center gap-1.5">
                <Fuel className="w-4 h-4 text-[#FF0033]" />
                Select Engine / Fuel Variant:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {car.fuelVariants.map((variant) => {
                  const isSelected = selectedFuel === variant.fuel;
                  return (
                    <button
                      key={variant.fuel}
                      type="button"
                      onClick={() => setSelectedFuel(variant.fuel)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#171717] border-[#FF0033] shadow-md shadow-[#FF0033]/20 text-white'
                          : 'bg-[#121212] border-gray-800 hover:border-gray-700 text-gray-400'
                      }`}
                    >
                      <div>
                        <span className="font-bold text-sm block text-white">{variant.fuel} Engine</span>
                        <span className="text-xs text-gray-400">300 km/day included</span>
                      </div>
                      <div className="text-right">
                        <span className={`font-black text-sm ${isSelected ? 'text-[#FF0033]' : 'text-gray-300'}`}>
                          ₹{variant.pricePerDay.toLocaleString()}
                        </span>
                        <span className="text-[10px] block text-gray-500">/ day</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick Specifications Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0D0D0D] p-4 rounded-xl border border-gray-800 text-center">
            <div className="space-y-1">
              <span className="text-gray-400 text-[11px] block font-medium uppercase">Seating</span>
              <div className="flex items-center justify-center gap-1.5 font-bold text-sm text-white">
                <Users className="w-4 h-4 text-[#FF0033]" />
                <span>{car.seats} Seats</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-gray-400 text-[11px] block font-medium uppercase">Transmission</span>
              <div className="flex items-center justify-center gap-1.5 font-bold text-sm text-white">
                <Gauge className="w-4 h-4 text-[#FF0033]" />
                <span>{car.transmission}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-gray-400 text-[11px] block font-medium uppercase">Fuel Type</span>
              <div className="flex items-center justify-center gap-1.5 font-bold text-sm text-white">
                <Fuel className="w-4 h-4 text-[#FF0033]" />
                <span>{selectedFuel}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-gray-400 text-[11px] block font-medium uppercase">Category</span>
              <div className="flex items-center justify-center gap-1.5 font-bold text-sm text-[#FF0033]">
                <Shield className="w-4 h-4" />
                <span>{car.category}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          {car.description && (
            <div>
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Overview</h4>
              <p className="text-gray-300 text-sm leading-relaxed bg-[#0D0D0D]/60 p-3.5 rounded-xl border border-gray-800/80">
                {car.description}
              </p>
            </div>
          )}

          {/* Features Checklist */}
          {car.features && car.features.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Vehicle Features</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {car.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#0D0D0D] p-2.5 rounded-lg text-gray-200 border border-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#FF0033] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rental Terms & Kilometre Inclusion */}
          <div className="bg-[#121212] border border-[#FF0033]/30 p-4 rounded-xl space-y-2 text-xs">
            <h4 className="font-bold text-[#FF0033] uppercase tracking-wider flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#FF0033]" />
              Rental Terms & Mileage Guidelines
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300 pl-1">
              <li><strong>Included Distance:</strong> 300 KM per 24-hour rental day.</li>
              <li><strong>Extra Distance Charge:</strong> ₹{car.extraKmCharge || 6} per additional KM driven.</li>
              <li><strong>Fuel Policy:</strong> Fuel is not included. Please return car at the same fuel level.</li>
              <li><strong>Documentation:</strong> Original Driving License & Government ID proof required at pickup.</li>
              <li><strong>Security Deposit:</strong> Refundable deposit collected at vehicle key handover.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="p-3 sm:p-4 bg-[#0D0D0D] border-t border-gray-800 grid grid-cols-3 gap-2">
          <a
            href="tel:+917538822706"
            className="flex items-center justify-center gap-1.5 bg-[#222222] hover:bg-[#2a2a2a] text-white font-bold py-3 px-2 rounded-xl border border-gray-700 text-xs transition-all"
            title="Call to Rent"
          >
            <Phone className="w-4 h-4 text-[#FF0033]" />
            <span className="hidden sm:inline">Call to Rent</span>
            <span className="sm:hidden">Call</span>
          </a>

          <a
            href={`https://wa.me/917538822706?text=${encodeURIComponent(`Hi Zoom Drive, I am interested to book the ${car.name} (${selectedFuel} Engine, ₹${activePricePerDay.toLocaleString()}/day). Please share availability!`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#0E281A] hover:bg-[#143B26] text-emerald-400 font-extrabold py-3 px-2 rounded-xl border border-emerald-700/60 text-xs transition-all"
            title="WhatsApp Instant Chat"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>

          <button
            onClick={handleProceedToBook}
            className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#FF0033] to-[#CC0029] hover:from-[#FF2255] hover:to-[#E11D48] text-white font-extrabold py-3 px-2 rounded-xl text-xs transition-all shadow-lg shadow-[#FF0033]/25 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span className="hidden sm:inline">Proceed to Book</span>
            <span className="sm:hidden">Book</span>
          </button>
        </div>
      </div>
    </div>
  );
};
