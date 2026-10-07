import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CarsSection } from './components/CarsSection';
import { ServicesSection } from './components/ServicesSection';
import { CarDetailModal } from './components/CarDetailModal';
import { BookingModal } from './components/BookingModal';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Footer } from './components/Footer';
import { CARS_DATABASE } from './data/cars';
import { Car } from './types';

export default function App() {
  const cars = CARS_DATABASE;
  const [selectedCarForDetail, setSelectedCarForDetail] = useState<Car | null>(null);
  const [selectedCarForBooking, setSelectedCarForBooking] = useState<Car | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchFromHero = (pickupLocation: string, pickupDate: string, returnDate: string) => {
    handleNavigate('cars');
  };

  const handleOpenBookingForCar = (car: Car) => {
    setSelectedCarForBooking(car);
    setIsBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedCarForBooking(cars[0] || CARS_DATABASE[0]);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF0033] selection:text-white pb-16 md:pb-0 w-full overflow-x-hidden">
      {/* Animated ZoomDrive Preloader */}
      <Preloader minDisplayTime={2200} />

      {/* Sticky Header Navigation with Zoom Drive Logo */}
      <Navbar 
        onBookNowClick={handleOpenGeneralBooking}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="w-full bg-[#050505] overflow-x-hidden">
        {/* Hero Section */}
        <Hero 
          onSearch={handleSearchFromHero} 
          onBookNowClick={handleOpenGeneralBooking}
        />

        {/* Cars Fleet Section */}
        <CarsSection 
          cars={cars}
          onSelectCar={(car) => setSelectedCarForDetail(car)}
          onBookCar={handleOpenBookingForCar}
        />

        {/* Services & Why Choose Us Section */}
        <ServicesSection onOpenBooking={handleOpenGeneralBooking} />

        {/* About Zoom Drive Section */}
        <AboutSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Mobile Sticky Quick Action Bar for iPhone */}
      <MobileQuickBar onBookNowClick={handleOpenGeneralBooking} />

      {/* Modals */}
      {selectedCarForDetail && (
        <CarDetailModal 
          car={selectedCarForDetail}
          onClose={() => setSelectedCarForDetail(null)}
          onBookNow={handleOpenBookingForCar}
        />
      )}

      {isBookingModalOpen && (
        <BookingModal 
          car={selectedCarForBooking}
          cars={cars}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}

    </div>
  );
}
