export type CarType = 'SUV' | 'Sedan' | 'MUV' | 'Hatchback' | 'Luxury';
export type FuelType = 'Petrol' | 'Diesel' | 'CNG';
export type TransmissionType = 'Manual' | 'Automatic';
export type CarCategory = 'Economy' | 'Standard' | 'Premium' | 'Luxury';

export interface FuelVariant {
  fuel: FuelType;
  pricePerDay: number;
  transmission?: TransmissionType;
}

export interface Car {
  id: string;
  codeIndex?: string; // e.g. '01', '02', ..., '20'
  name: string;
  brand: string;
  price?: string; // Formatted price e.g. "₹2,200"
  pricePerDay: number;
  type: CarType;
  fuel: FuelType;
  transmission: TransmissionType;
  seats: number;
  category: CarCategory;
  extraKmCharge: number; // ₹6, ₹8, or ₹10/km depending on vehicle
  includedKmPerDay: number; // Always 300 km/day
  image: string;
  gallery?: string[];
  isPremium?: boolean;
  features?: string[];
  description?: string;
  fuelVariants?: FuelVariant[]; // e.g. [{ fuel: 'Petrol', pricePerDay: 5000 }, { fuel: 'Diesel', pricePerDay: 5500 }]
}

export interface BookingEnquiry {
  id?: string;
  customerName: string;
  phoneNumber: string;
  email: string;
  carId: string;
  carName: string;
  pickupLocation: string;
  pickupDate: string;
  returnDate: string;
  days: number;
  estimatedTotal: number;
  message?: string;
  createdAt?: string;
}

export interface QuickFilterOption {
  label: string;
  value: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  carRecommendations?: Car[];
  showBookingFormForCar?: Car;
  quickFilters?: string[];
  timestamp: Date;
}
