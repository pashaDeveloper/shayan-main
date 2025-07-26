'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const serviceLinks = [
    t('immigration'),
    t('investment'),
    t('travel'),
    t('commerce'),
    t('realEstate'),
    t('vehicles'),
    t('generalServices'),
    t('surveying'),
    t('construction'),
    t('representatives'),
    t('advertising'),
    t('education')
  ];

  const usefulLinks = [
    t('home'),
    t('news'),
    t('about'),
    t('contact')
  ];

  const countries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Iran', flag: '🇮🇷' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Sweden', flag: '🇸🇪' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Turkey', flag: '🇹🇷' },
    { name: 'Cyprus', flag: '🇨🇾' },
    { name: 'Australia', flag: '🇦🇺' }
  ];

  return (
    <footer className="bg-[#0F4C75] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-[#FFD700]">
              {t('footerTitle')}
            </h3>
            <p className="text-blue-200 leading-relaxed mb-6">
              گروه بین‌المللی شایسته و شایان با ارائه خدمات متنوع در زمینه مهاجرت، سرمایه‌گذاری، مسافرت و سایر خدمات تخصصی، همراه شما در تحقق اهدافتان است.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFD700]">
              {t('serviceLinks')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-[#FFD700] transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFD700]">
              خدمات بیشتر
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(6).map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-[#FFD700] transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFD700]">
              {t('contactUs')}
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                <p className="text-blue-200 text-sm leading-relaxed">
                  ترکیه، استانبول، غرب استانبول، بزرگراه E5، ایستگاه متروبوس گوزل یورت، ساختمان اداری، طبقه سوم
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FFD700]" />
                <div className="text-blue-200 text-sm">
                  <p>+905011308483</p>
                  <p>+905526855552</p>
                  <p>+989335813533</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FFD700]" />
                <p className="text-blue-200 text-sm">info@2shigroup.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-lg font-bold mb-6 text-[#FFD700] text-center">
            نمایندگی‌های ما
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300"
              >
                <span className="text-xl">{country.flag}</span>
                <span className="text-sm font-medium">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 گروه بین‌المللی شایسته و شایان. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-4 text-sm text-blue-200">
              <a href="#" className="hover:text-[#FFD700] transition-colors duration-300">
                حریم خصوصی
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#FFD700] transition-colors duration-300">
                شرایط استفاده
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#FFD700] transition-colors duration-300">
                2shigroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;