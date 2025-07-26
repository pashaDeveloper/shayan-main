'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0F4C75] to-[#1e3a8a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            {t('contactSubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-white mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#0F4C75] mb-6">
              {t('sendMessage')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('fullName')}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phoneNumber')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('messagePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white py-4 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                {t('send')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#0F4C75]" />
                </div>
                <h4 className="text-xl font-bold">{t('phone')}</h4>
              </div>
              <div className="space-y-2 text-blue-100">
                <p className="text-2xl font-bold">+905011308483</p>
                <p className="text-xl">+905526855552</p>
                <p className="text-xl">+989335813533</p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#0F4C75]" />
                </div>
                <h4 className="text-xl font-bold">{t('email')}</h4>
              </div>
              <p className="text-blue-100">info@2shigroup.com</p>
            </div>

            {/* Address */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#0F4C75]" />
                </div>
                <h4 className="text-xl font-bold">{t('address')}</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                {t('addressText')}
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-[#FFD700] rounded-2xl p-6 text-[#0F4C75]">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="h-8 w-8" />
                <h4 className="text-xl font-bold">{t('support247')}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;