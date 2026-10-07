import React, { useState, useMemo } from 'react';
import { Car } from '../types';
import { Users, Gauge, Fuel, Shield, Phone, MessageSquare, CalendarCheck, SlidersHorizontal, Search } from 'lucide-react';
import fallbackCarImg from '../assets/images/hero_fleet_highway_1786470735933.jpg';

interface CarsSectionProps {
  cars: Car[];
  onSelectCar: (car: Car) => void;
  onBookCar: (car: Car) => void;
  selectedCategoryFromHero?: string;
}

export const CarsSection: React.FC<CarsSectionProps> = ({
  cars,
  onSelectCar,
  onBookCar
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedFuel, setSelectedFuel] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('price-asc');
  const [searchQuery, setSearchQuery] = useState('');

  const typeCategories = ['All', 'SUV', 'Sedan', 'MUV', 'Hatchback', 'Luxury'];
  const fuelCategories = ['All', 'Petrol', 'Diesel', 'CNG'];

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesType = selectedType === 'All' || car.type.toLowerCase() === selectedType.toLowerCase();
      const matchesFuel = selectedFuel === 'All' || car.fuel.toLowerCase() === selectedFuel.toLowerCase();
      const matchesSearch = 
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesFuel && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricePerDay - b.pricePerDay;
      if (sortBy === 'price-desc') return b.pricePerDay - a.pricePerDay;
      return 0;
    });
  }, [cars, selectedType, selectedFuel, searchQuery, sortBy]);

  return (
    <section id="cars" className="py-20 bg-[#0D0D0D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#FF0033] text-xs font-bold uppercase tracking-widest mb-2">
            Zoom Drive Fleet
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Choose Your <span className="text-[#FF0033]">Perfect Ride</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            All rentals include 300 KM/day allowance. Clear extra KM charges from ₹6 to ₹10/km.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#171717] border border-[#FF0033]/30 rounded-2xl p-4 mb-10 shadow-xl space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Query Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Fortuner, Creta, Thar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] pl-10 pr-4 py-2 text-sm text-white rounded-xl outline-none"
              />
            </div>

            {/* Body Type Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto justify-center">
              {typeCategories.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedType === type
                      ? 'bg-[#FF0033] text-white shadow-md shadow-[#FF0033]/30'
                      : 'bg-[#222222] text-gray-300 hover:bg-[#2a2a2a] hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
              <SlidersHorizontal className="w-4 h-4 text-[#FF0033]" />
              <span className="text-xs text-gray-400 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#0D0D0D] border border-gray-800 text-gray-200 text-xs rounded-lg px-3 py-1.5 focus:border-[#FF0033] outline-none"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Secondary Fuel Filter */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-800/80 text-xs">
            <span className="text-gray-400 font-semibold uppercase tracking-wider">Fuel:</span>
            <div className="flex items-center gap-2">
              {fuelCategories.map((fuel) => (
                <button
                  key={fuel}
                  onClick={() => setSelectedFuel(fuel)}
                  className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                    selectedFuel === fuel
                      ? 'bg-[#FF0033]/20 text-[#FF0033] font-bold border border-[#FF0033]/60'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-16 bg-[#171717] rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-lg font-medium">No vehicles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedType('All');
                setSelectedFuel('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#FF0033] text-white font-bold rounded-lg text-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="group bg-[#171717] border border-[#FF0033]/30 hover:border-[#FF0033] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF0033]/10 flex flex-col justify-between"
              >
                {/* Image Header with Category Badges */}
                <div 
                  className="relative h-52 bg-[#0A0A0A] overflow-hidden cursor-pointer" 
                  onClick={() => onSelectCar(car)}
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackCarImg;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/40" />

                  {/* Category Badge */}
                  {(car.isPremium || car.category === 'Luxury' || car.category === 'Premium') && (
                    <div className="absolute top-3 left-3 bg-[#FF0033] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      <span>{car.category}</span>
                    </div>
                  )}

                  {/* Price Tag at top right */}
                  <div className="absolute top-3 right-3 bg-[#0D0D0D]/90 border border-[#FF0033]/40 backdrop-blur-md px-3 py-1 rounded-lg text-right shadow-lg">
                    <span className="text-[#FF0033] font-black text-lg">
                      {car.fuelVariants ? `₹${Math.min(...car.fuelVariants.map(v => v.pricePerDay)).toLocaleString()}` : `₹${car.pricePerDay.toLocaleString()}`}
                    </span>
                    <span className="text-gray-400 text-[10px] block font-medium">/ day</span>
                  </div>

                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#FF0033] tracking-wider uppercase">{car.brand}</span>
                      <span className="text-[11px] bg-[#222] text-gray-300 px-2 py-0.5 rounded border border-gray-800">{car.type}</span>
                    </div>
                    <h3 
                      onClick={() => onSelectCar(car)}
                      className="text-xl font-bold text-white mt-1 group-hover:text-[#FF0033] transition-colors cursor-pointer"
                    >
                      {car.name}
                    </h3>
                  </div>

                  {/* Vehicle Spec Grid Icons */}
                  <div className="grid grid-cols-2 gap-2.5 bg-[#0D0D0D] p-3 rounded-xl border border-gray-800/80 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#FF0033]" />
                      <span>{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-3.5 h-3.5 text-[#FF0033]" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="w-3.5 h-3.5 text-[#FF0033]" />
                      <span className="truncate">
                        {car.fuelVariants ? car.fuelVariants.map(v => v.fuel).join(' / ') : car.fuel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <span>300 km/day</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 px-1 pt-1 border-t border-gray-800">
                    <span>Extra KM: <strong className="text-white">₹{car.extraKmCharge || 6}/km</strong></span>
                    <span>Fuel: Excluded</span>
                  </div>

                  {/* Actions Buttons */}
                  <div className="grid grid-cols-3 gap-1.5 pt-2">
                    <a
                      href="tel:+917538822706"
                      className="flex items-center justify-center gap-1 bg-[#222222] hover:bg-[#2a2a2a] text-white font-semibold py-2.5 px-1.5 rounded-xl border border-gray-700 text-xs transition-colors"
                      title="Call to Rent"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FF0033]" />
                      <span className="text-[11px]">Call</span>
                    </a>

                    <a
                      href={`https://wa.me/917538822706?text=${encodeURIComponent(`Hi Zoom Drive, I am interested to book the ${car.name}. Please share availability and rates!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-[#0E281A] hover:bg-[#143B26] text-emerald-400 font-bold py-2.5 px-1.5 rounded-xl border border-emerald-700/60 text-xs transition-colors"
                      title="WhatsApp Instant Chat"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px]">WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onBookCar(car)}
                      className="flex items-center justify-center gap-1 bg-gradient-to-r from-[#FF0033] to-[#CC0029] hover:from-[#FF2255] hover:to-[#E11D48] text-white font-extrabold py-2.5 px-1.5 rounded-xl text-xs transition-all shadow-md shadow-[#FF0033]/20 cursor-pointer"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Book</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
