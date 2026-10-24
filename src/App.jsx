import { sendToWebhook } from './utils/webhook';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VillaCollection from './components/VillaCollection';
import PrivateForest from './components/PrivateForest';
import StoneAndSpecs from './components/StoneAndSpecs';
import ClubhouseLifestyle from './components/ClubhouseLifestyle';
import LocationConnectivity from './components/LocationConnectivity';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileFixedCTA from './components/MobileFixedCTA';
import ThankYouPage from './components/ThankYouPage';
import { EnquiryModal, ImageLightboxModal, ToastNotification } from './components/Modals';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname.replace(/\/+$/, '') === '/thank-you') {
      return 'thank-you';
    }
    return 'home';
  });

  const [submittedLead, setSubmittedLead] = useState(() => {
    try {
      const saved = sessionStorage.getItem('rhythm_last_lead');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '');
      if (path === '/thank-you') {
        setCurrentPage('thank-you');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenBookModal = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleFormSubmitSuccess = (leadData) => {
    sendToWebhook(leadData);
    setSubmittedLead(leadData);
    try {
      sessionStorage.setItem('rhythm_last_lead', JSON.stringify(leadData));
    } catch (e) {
      // ignore storage errors
    }
    setCurrentPage('thank-you');
    window.history.pushState({ page: 'thank-you' }, '', '/thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.history.pushState({ page: 'home' }, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'thank-you') {
    return (
      <>
        <ThankYouPage
          leadData={submittedLead}
          onBackToHome={handleBackToHome}
        />
        <ToastNotification toast={toast} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fbf8] text-[#1c2b18] antialiased selection:bg-[#557A46] selection:text-white pb-20 md:pb-0">
      <Header onOpenBookModal={handleOpenBookModal} />

      <main className="w-full">
        <div className="flex flex-col w-full">
          {/* Section 1 — Hero Banner */}
          <Hero onOpenBookModal={handleOpenBookModal} />

          {/* Section 2 — 4 BHK & 6 BHK Villa Collection */}
          <VillaCollection onOpenBookModal={handleOpenBookModal} />

          {/* Section 3 — Your Own Private Forest */}
          <PrivateForest onOpenBookModal={handleOpenBookModal} />

          {/* Section 4 — Natural Stone Everywhere & Signature Specifications */}
          <StoneAndSpecs onOpenBookModal={handleOpenBookModal} />

          {/* Section 5 — 40,000 sq.ft Clubhouse & Lifestyle */}
          <ClubhouseLifestyle onOpenBookModal={handleOpenBookModal} />

          {/* Section 6 — Strategic Location & Connectivity */}
          <LocationConnectivity onOpenBookModal={handleOpenBookModal} />

          {/* Section 7 — Final CTA & Site Visit Booking */}
          <FinalCTA
            onShowToast={showToast}
            onFormSubmitSuccess={handleFormSubmitSuccess}
          />
        </div>
      </main>

      <Footer />

      {/* Mobile Only Fixed Bottom Action Bar */}
      <MobileFixedCTA onOpenBookModal={handleOpenBookModal} />

      {/* Interactive Overlay Dialogs */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        onShowToast={showToast}
        onFormSubmitSuccess={handleFormSubmitSuccess}
      />
      <ImageLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
      <ToastNotification toast={toast} />
    </div>
  );
}
