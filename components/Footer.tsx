import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";
const getTranslations = (lang: string) => {
  const translations = { fa, en, ar, tr };
  return translations[lang as keyof typeof translations] || en;
};

type Props = {
  lang: string;
};

const Footer = ({ lang }: Props) => {
  const t = getTranslations(lang);

  const serviceLinks = [
    t.service.immigration,
    t.service.investment,
    t.service.travel,
    t.service.commerce,
    t.service.realEstate,
    t.service.vehicles,
    t.service.generalServices,
    t.service.surveying,
    t.service.construction,
    t.service.representatives,
    t.service.advertising,
    t.service.education
  ];

  const countries = [
    { name: "USA", flag: "🇺🇸" },
    { name: "France", flag: "🇫🇷" },
    { name: "Iran", flag: "🇮🇷" },
    { name: "China", flag: "🇨🇳" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Sweden", flag: "🇸🇪" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Turkey", flag: "🇹🇷" },
    { name: "Cyprus", flag: "🇨🇾" },
    { name: "Australia", flag: "🇦🇺" }
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-[#FFD700]">
              {t.footer.footerTitle}
            </h3>
            <p className=" leading-relaxed mb-6">{t.footer.intro}</p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#0F4C75] transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFD700]">
              {t.footer.serviceLinks}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className=" hover:text-[#FFD700] transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFD700]">
              {t.footer.moreServices}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(6).map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className=" hover:text-[#FFD700] transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFD700]">
              {t.footer.contactUs}
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                <p className=" text-sm leading-relaxed">
                  {t.footer.addressText}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FFD700]" />
                <div className=" text-sm">
                  <p>+905011308483</p>
                  <p>+905526855552</p>
                  <p>+989335813533</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FFD700]" />
                <p className=" text-sm">info@2shigroup.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-lg font-bold mb-6 text-[#FFD700] text-center">
            {t.footer.ourRepresentatives}
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
            <p className=" text-sm mb-4 md:mb-0">{t.footer.copyright}</p>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors duration-300"
              >
                {t.footer.privacy}
              </a>
              <span>|</span>
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors duration-300"
              >
                {t.footer.terms}
              </a>
              <span>|</span>
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors duration-300"
              >
                {t.footer.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
