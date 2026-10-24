import { sendToWebhook } from '../utils/webhook';
import React, { useState } from 'react';

export function EnquiryModal({ isOpen, onClose, onShowToast, onFormSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData((prev) => ({ ...prev, name: val }));
    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: val }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
  };

  const validate = () => {
    const newErrors = {};
    const cleanName = formData.name.trim();
    if (!cleanName) {
      newErrors.name = 'Full name is required.';
    } else if (cleanName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const cleanEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(cleanEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (digitsOnly.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      if (onShowToast) onShowToast('Please complete all fields correctly.', 'error');
      return;
    }

    const leadInfo = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      project: 'Rhythm of Earth Bangalore',
    };
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    onClose();

    if (onFormSubmitSuccess) {
      onFormSubmitSuccess(leadInfo);
    } else {
      sendToWebhook(leadInfo);
      if (onShowToast) {
        onShowToast(`Thank you ${leadInfo.name}! Your site visit request has been received.`, 'success');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-neutral-200 text-neutral-900">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100"
          type="button"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="mb-6 text-left">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#557A46] font-bold block mb-1">
            RHYTHM OF EARTH
          </span>
          <h3 className="text-2xl font-bold font-serif text-[#1c2b18]">
            Book Your Private Site Visit
          </h3>
          <p className="text-xs text-neutral-500 mt-1 font-light">
            25+ Acres Villa Enclave · Behind Sobha Townpark, Hosur Road, Bangalore.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-wider text-neutral-500 mb-1 font-semibold">
              Full Name
            </label>
            <input
              value={formData.name}
              onChange={handleNameChange}
              className={`w-full bg-[#f9fbf8] text-neutral-900 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 border transition-all ${
                errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200 focus:ring-[#557A46]'
              }`}
              placeholder="Enter your full name"
              type="text"
              required
            />
            {errors.name && (
              <span className="text-xs text-red-600 mt-1 font-medium">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-wider text-neutral-500 mb-1 font-semibold">
              Email Address
            </label>
            <input
              value={formData.email}
              onChange={handleEmailChange}
              className={`w-full bg-[#f9fbf8] text-neutral-900 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 border transition-all ${
                errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200 focus:ring-[#557A46]'
              }`}
              placeholder="Enter your email address"
              type="email"
              required
            />
            {errors.email && (
              <span className="text-xs text-red-600 mt-1 font-medium">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-wider text-neutral-500 mb-1 font-semibold">
              Phone Number
            </label>
            <input
              value={formData.phone}
              onChange={handlePhoneChange}
              maxLength={10}
              className={`w-full bg-[#f9fbf8] text-neutral-900 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 border transition-all ${
                errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200 focus:ring-[#557A46]'
              }`}
              placeholder="Enter 10-digit phone number"
              type="tel"
              required
            />
            {errors.phone && (
              <span className="text-xs text-red-600 mt-1 font-medium">
                {errors.phone}
              </span>
            )}
          </div>

          <button
            className="w-full bg-[#1c2b18] hover:bg-[#2e4727] text-white text-xs uppercase tracking-wider font-bold py-3.5 rounded-xl shadow-lg transition-all duration-300 cursor-pointer text-center mt-2"
            type="submit"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}

export function ImageLightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors cursor-pointer z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>

      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
        <img
          alt={item.title || 'Villa Preview'}
          className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
          src={item.image}
        />
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-bold font-serif">
            {item.title}
          </h3>
          <p className="text-xs text-neutral-400 max-w-xl mx-auto mt-1">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ToastNotification({ toast }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#1c2b18] text-white px-5 py-4 rounded-2xl shadow-2xl border border-[#557A46]/40 flex items-start gap-3">
      <span className="w-2 h-2 rounded-full bg-[#a0c49d] mt-2 shrink-0"></span>
      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
        {toast.message}
      </p>
    </div>
  );
}
