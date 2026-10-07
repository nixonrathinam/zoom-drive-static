import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Car } from '../types';
import { X, Calendar, User, Phone, Mail, Car as CarIcon } from 'lucide-react';
import { BookingSuccessAnimation } from './BookingSuccessAnimation';

interface BookingModalProps {
  car: Car | null;
  cars: Car[];
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ car, cars, onClose }) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(car || cars[0] || null);
  const [selectedFuel, setSelectedFuel] = useState<string>(car ? car.fuel : (cars[0]?.fuel || 'Petrol'));
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pickupDate, setPickupDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState(() => {
    const next = new Date();
    next.setDate(next.getDate() + 3);
    return next.toISOString().split('T')[0];
  });
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Local file state strictly following: file -> URL.createObjectURL(file) -> previewUrl
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (car) {
      setSelectedCar(car);
      setSelectedFuel(car.fuel);
    }
  }, [car]);

  // Determine current active rate per day based on selected fuel variant
  const activeVariant = selectedCar?.fuelVariants?.find(v => v.fuel === selectedFuel);
  const ratePerDay = activeVariant ? activeVariant.pricePerDay : (selectedCar?.pricePerDay || 0);

  // Calculate rental days
  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 1;
    const pDate = new Date(pickupDate);
    const rDate = new Date(returnDate);
    const diffTime = Math.abs(rDate.getTime() - pDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const rentalDays = calculateDays();
  const estimatedTotal = ratePerDay * rentalDays;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCar) return;

    const whatsappMessage = [
      'Hi Zoom Drive! I would like to enquire about a car rental.',
      `Vehicle: ${selectedCar.name} (${selectedFuel})`,
      `Customer: ${customerName}`,
      `Phone: ${phoneNumber}`,
      `Email: ${email}`,
      `Dates: ${pickupDate} to ${returnDate} (${rentalDays} day${rentalDays === 1 ? '' : 's'})`,
      `Estimated total: ₹${estimatedTotal.toLocaleString()}`,
      message ? `Special request: ${message}` : '',
      selectedFile ? 'I will send my selected ID/license image separately in WhatsApp.' : ''
    ].filter(Boolean).join('\n');

    window.open(
      `https://wa.me/917538822706?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#171717] border border-[#FF0033]/40 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative text-white max-h-[92dvh] flex flex-col pb-safe"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0D0D0D] p-5 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CarIcon className="w-5 h-5 text-[#FF0033]" />
            <h3 className="text-lg font-bold text-white">Car Rental Enquiry</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              >
                <BookingSuccessAnimation
                  car={selectedCar}
                  fuelVariant={selectedFuel}
                  customerName={customerName}
                  phoneNumber={phoneNumber}
                  email={email}
                  message={message}
                  pickupDate={pickupDate}
                  returnDate={returnDate}
                  days={rentalDays}
                  ratePerDay={ratePerDay}
                  totalPrice={estimatedTotal}
                  onClose={onClose}
                />
              </motion.div>
            ) : (
              <motion.form
                key="booking-form"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
              {/* Selected Car Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Selected Vehicle
                </label>
                <select
                  value={selectedCar?.id || ''}
                  onChange={(e) => {
                    const found = cars.find((c) => c.id === e.target.value);
                    if (found) {
                      setSelectedCar(found);
                      setSelectedFuel(found.fuelVariants && found.fuelVariants.length > 0 ? found.fuelVariants[0].fuel : found.fuel);
                    }
                  }}
                  className="w-full bg-[#0D0D0D] border border-[#FF0033]/40 text-white text-sm rounded-xl p-3 focus:ring-1 focus:ring-[#FF0033] outline-none font-medium"
                >
                  {cars.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} — {c.type} ({c.fuelVariants ? c.fuelVariants.map(v => v.fuel).join('/') : c.fuel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Fuel Variant Selector if car has multiple fuel options */}
              {selectedCar?.fuelVariants && selectedCar.fuelVariants.length > 0 && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#FF0033] uppercase tracking-wider">
                    Select Fuel Variant *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCar.fuelVariants.map((v) => (
                      <button
                        key={v.fuel}
                        type="button"
                        onClick={() => setSelectedFuel(v.fuel)}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                          selectedFuel === v.fuel
                            ? 'bg-[#222222] border-[#FF0033] text-[#FF0033] shadow-md'
                            : 'bg-[#0D0D0D] border-gray-800 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        <span>{v.fuel} Engine</span>
                        <span>₹{v.pricePerDay.toLocaleString()}/day</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Estimation Summary Box */}
              {selectedCar && (
                <div className="bg-[#0D0D0D] border border-[#FF0033]/30 p-3.5 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-400 block font-medium">Rental Duration:</span>
                    <strong className="text-white text-sm">{rentalDays} Day{rentalDays > 1 ? 's' : ''}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block font-medium">Rate / Day:</span>
                    <strong className="text-[#FF0033] text-sm">₹{ratePerDay.toLocaleString()}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 block font-medium">Estimated Total:</span>
                    <strong className="text-[#FF0033] text-base font-black">₹{estimatedTotal.toLocaleString()}</strong>
                  </div>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#FF0033]" />
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-2.5 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#FF0033]" />
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 75388 22706"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-2.5 outline-none"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#FF0033]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-2.5 outline-none"
                />
              </div>

              {/* Rental Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FF0033]" />
                    Rental Start Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-2.5 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FF0033]" />
                    Return Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-2.5 outline-none"
                  />
                </div>
              </div>

              {/* Optional Message */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Special Notes / Message
                </label>
                <textarea
                  rows={2}
                  placeholder="Any flight timing or special delivery instructions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-2.5 outline-none resize-none"
                />
              </div>

              {/* Optional ID Proof / License Upload */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center justify-between">
                  <span>ID Proof / Driving License (Optional)</span>
                  <span className="text-[10px] text-gray-500 font-normal">Original local file</span>
                </label>
                <div className="flex flex-col gap-2">
                  <label className="border border-dashed border-gray-700 hover:border-[#FF0033] bg-[#0D0D0D] rounded-xl p-3 flex items-center justify-center gap-2 cursor-pointer transition-colors group">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <span className="text-xs text-gray-300 group-hover:text-white">
                      {selectedFile ? 'Change Selected File' : 'Click to select image file'}
                    </span>
                  </label>

                  {previewUrl && (
                    <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0A0A0A] p-2.5 flex items-center gap-3">
                      <img
                        src={previewUrl}
                        alt="Local Preview"
                        className="w-14 h-14 object-cover rounded-lg border border-gray-700"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-white truncate">{selectedFile?.name}</p>
                        <p className="text-[10px] text-gray-400">
                          {selectedFile ? (selectedFile.size / 1024).toFixed(1) + ' KB' : ''} • Exact local preview
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedFile(null);
                          setPreviewUrl(null);
                        }}
                        className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
                        title="Remove image"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF0033] via-[#E11D48] to-[#990011] hover:from-[#FF2255] hover:to-[#CC0029] text-white font-extrabold py-3.5 rounded-xl transition-all shadow-xl shadow-[#FF0033]/25 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
              >
                <span>Continue on WhatsApp</span>
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
