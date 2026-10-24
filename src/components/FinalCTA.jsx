import { sendToWebhook } from '../utils/webhook';
import React, { useState } from 'react';

export default function FinalCTA({ onShowToast, onFormSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData((prev) => ({ ...prev, name: val }));
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: val }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
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

    if (onFormSubmitSuccess) {
      onFormSubmitSuccess(leadInfo);
    } else {
      sendToWebhook(leadInfo);
      if (onShowToast) {
        onShowToast(`Thank you ${leadInfo.name}! Your private site visit reservation has been received.`, 'success');
      }
    }
  };

  return (
    <section className="relative w-full py-16 lg:py-20 text-white overflow-hidden flex items-center bg-[#151c13]" id="book-visit">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          alt="Rhythm of Earth Villa Enclave"
          className="w-full h-full object-cover scale-105 filter blur-[1px]"
          src="/rhythm_hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151c13] via-[#151c13]/90 to-[#151c13]"></div>
      </div>

      <div className="relative z-10 max-w-[1380px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Badges */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-[#a0c49d] text-xs font-semibold uppercase tracking-[0.2em] border border-white/15">
              Private Site Visit
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Why rent an apartment when you can OWN a private villa?
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              25+ Acres | Behind Sobha Townpark, Hosur Road. Book your private site visit today.
            </p>

            {/* Concise badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#a0c49d] font-semibold block">Address</span>
                <span className="text-xs sm:text-sm font-medium text-white">Behind Sobha Townpark</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#a0c49d] font-semibold block">Community</span>
                <span className="text-xs sm:text-sm font-medium text-white">Granite-Road Villa Living</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#a0c49d] font-semibold block">Typology</span>
                <span className="text-xs sm:text-sm font-medium text-white">4 BHK &amp; Royal 6 BHK</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#a0c49d] font-semibold block">Clubhouse</span>
                <span className="text-xs sm:text-sm font-medium text-white">40,000 sq.ft &amp; 50+ Amenities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Site Visit Form */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-neutral-900 border border-neutral-200">
              <div className="mb-5 text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#557A46] font-bold block mb-1">
                  Private Site Visit
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1c2b18]">
                  Schedule Your Tour
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-left" noValidate>
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1 font-semibold">
                    Full Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={handleNameChange}
                    className={`w-full bg-[#f9fbf8] text-neutral-900 text-sm px-3.5 py-2.5 rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                      errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200 focus:ring-[#557A46]'
                    }`}
                    placeholder="Enter your name"
                    type="text"
                    required
                  />
                  {errors.name && <span className="text-xs text-red-600 mt-1">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1 font-semibold">
                    Email Address
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleEmailChange}
                    className={`w-full bg-[#f9fbf8] text-neutral-900 text-sm px-3.5 py-2.5 rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200 focus:ring-[#557A46]'
                    }`}
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  {errors.email && <span className="text-xs text-red-600 mt-1">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1 font-semibold">
                    Phone Number
                  </label>
                  <input
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={10}
                    className={`w-full bg-[#f9fbf8] text-neutral-900 text-sm px-3.5 py-2.5 rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                      errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200 focus:ring-[#557A46]'
                    }`}
                    placeholder="Enter 10-digit mobile number"
                    type="tel"
                    required
                  />
                  {errors.phone && <span className="text-xs text-red-600 mt-1">{errors.phone}</span>}
                </div>

                <button
                  className="w-full bg-[#1c2b18] hover:bg-[#2e4727] text-white text-xs uppercase tracking-wider font-bold py-3 rounded-lg shadow-md transition-all cursor-pointer text-center mt-2"
                  type="submit"
                >
                  Book Private Site Visit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
