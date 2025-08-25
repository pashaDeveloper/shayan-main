import React from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
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

const ContactSection = ({ lang }: Props) => {
  const t = getTranslations(lang);

  return (
    <section id="contact" className="py-20 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.contactTitle}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-300 mb-6">
            {t.contact.contactSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-white dark:to-gray-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">
              {t.contact.sendMessage}
            </h3>
            <form
              method="POST"
              action="/api/contact"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="fullName"
                placeholder={t.contact.fullName}
                required
                className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t.contact.phone}
                required
                className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <input
                type="email"
                name="email"
                placeholder={t.contact.email}
                required
                className="border w-full border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <textarea
                name="message"
                placeholder={t.contact.message}
                required
                className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 sm:col-span-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="sm:col-span-2 w-full bg-secondary hover:bg-blue-700 dark:bg-secondary dark:hover:bg-blue-600 text-white font-semibold py-2 rounded"
              >
                {t.contact.submit}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-300 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-gray-900 dark:text-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6  " />
                </div>
                <h4 className="text-xl font-bold ltr">{t.contact.phone}</h4>
              </div>
              <div className="space-y-2 flex flex-col ">
                <a
                  href="tel:+905011308483"
                  dir="ltr"
                  className="text-2xl font-bold ltr"
                >
                  +905011308483
                </a>
                <a href="tel:+905011308483" dir="ltr" className="text-xl ltr">
                  +905526855552
                </a>
                <a href="tel:+905011308483" dir="ltr" className="text-xl ltr">
                  +989335813533
                </a>
              </div>
            </div>

            <div className="bg-gray-300 dark:bg-gray-800/50 backdrop-blur-sm flex flex-col gapp-y-2 rounded-2xl p-6 text-gray-900 dark:text-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 " />
                </div>
                <h4 className="text-xl font-bold">{t.contact.email}</h4>
              </div>
              <a
                href="mailto:info@2shigroup.com"
                className="text-secondary text-lg"
              >
                info@2shigroup.com
              </a>
              <a
                href="mailto:info@2shigroup.com"
                className="text-secondary text-lg"
              >
                2shigroup@gmail.com
              </a>
            </div>

            <div className="bg-gray-300 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-gray-900 dark:text-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 " />
                </div>
                <h4 className="text-xl font-bold">{t.contact.address}</h4>
              </div>
              <p className="text-blue-600 dark:text-blue-300 leading-relaxed">
                {t.contact.addressText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
