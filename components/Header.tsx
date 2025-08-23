"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Search,
  ChevronDown,
  Sun,
  Moon,
  Bell,
  User,
  ShoppingBag,
  Home,
  Users,
  Zap,
  Award,
  Image,
  Newspaper,
  LogIn,
  UserPlus,
  Phone
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import UserProfile from "./UserProfile";
import { AuthProvider } from "@/contexts/AuthContext";
import Dashboard from "./icons/Dashboard";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "register">(
    "login"
  );
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoggedIn, status } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 20); // اگر به بالا اسکرول شود یا در بالای صفحه باشد
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const languages = [
    { code: "fa", name: "فارسی", flag: "🇮🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" }
  ];

  const currentLang = languages.find((lang) => lang.code === language);
  const menuItems = [
    { key: "home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { key: "about", href: "#about", icon: <Users className="w-5 h-5" /> },
    { key: "services", href: "#services", icon: <Zap className="w-5 h-5" /> },
    {
      key: "certificates",
      href: "#certificates",
      icon: <Award className="w-5 h-5" />
    },
    { key: "gallery", href: "#gallery", icon: <Image className="w-5 h-5" /> },
    { key: "contact", href: "#contact", icon: <Phone className="w-5 h-5" /> }
  ];
  const terms = [
    t("header.popularTerms.immigrationToTurkey"),
    t("header.popularTerms.investment"),
    t("header.popularTerms.residenceInGermany")
  ];

  return (
    <>
      <AuthProvider>
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled
              ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20"
              : "bg-transparent"
          }`}
        >
          {/* Top Bar */}
          <div
            className={`border-b border-gray-200/10 bg-secondary dark:border-gray-700/10 transition-all duration-300 ${
              isScrolled
                ? "h-0 overflow-hidden opacity-0"
                : "h-auto opacity-100"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center text-white justify-between h-10 text-sm">
                <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2 md:block">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-white hidden md:block">
                      {t(`header.support`)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <a
                      href="tel:+905011308483"
                      dir="ltr"
                      className="text-white hover:underline ltr"
                    >
                      +90-501-1308483
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✉️</span>
                    <a
                      href="mailto:info@2shigroup.com"
                      className="text-white hover:underline"
                    >
                      info@2shigroup.com
                    </a>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center  gap-2">
                    {user && (
                      <>
                        <Bell className="h-4 w-4 text-gray-200 hover:text-white cursor-pointer transition-colors" />
                        <img
                          src={user?.image || "/default-avatar.png"}
                          alt={user?.name || "User"}
                          className="w-8 h-8 rounded-full shadow-lg"
                        />
                        <span>{user?.name}</span>
                      </>
                    )}
                    {!user && (
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/${language}/auth//user/signin`}
                          className="text-xs flex gap-x-1 text-gray-100 hover:text-white transition-colors"
                        >
                          <LogIn className="h-4 w-4" />
                          <span className="sm:block">{t(`header.signin`)}</span>
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link
                          href={`/${language}/auth//user/signin`}
                          className="text-xs text-gray-100 hover:text-white transition-colors"
                        >
                          {t(`header.register`)}{" "}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-all duration-300">
            <div
              className={`flex rtl:flex-row-reverse items-center justify-between transition-all duration-300 ease-in-out
    ${
      isScrolled && !isScrollingUp
        ? "h-0 opacity-0 overflow-hidden pointer-events-none"
        : "h-20 opacity-100"
    }`}
            >
              {/* Logo */}
              <div className="flex-shrink-0 group">
                <div className="flex rtl:flex-row-reverse items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-white font-bold text-xl">2S</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <span className="text-[#0F4C75] text-xs font-bold">
                        G
                      </span>
                    </div>
                  </div>
                  <div className="block">
                    <div className="md:text-2xl text-xl text-left font-bold bg-gradient-to-r from-[#0F4C75] to-[#FFD700] bg-clip-text text-transparent">
                      2SHIGROUP
                    </div>
                    <div className="text-xs text-left text-gray-500 dark:text-gray-400 -mt-1">
                      International
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center">
                <div className="flex ltr:flex-row-reverse items-center bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-2 py-2 border border-gray-200/40 dark:border-gray-700/20">
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.key}
                      href={
                        item.key === "home"
                          ? `/${language}`
                          : item.key === "news"
                          ? `/${language}/news`
                          : item.key === "services"
                          ? `/${language}/services`
                          : item.href
                      }
                      className="group relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#0F4C75] dark:hover:text-[#FFD700] transition-all duration-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base">{item.icon}</span>
                        {t(`header.${item.key}`)}{" "}
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Right Side Actions */}
              <div className="flex rtl:flex-row-reverse items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    aria-label={t("header.search")}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#0F4C75] dark:hover:text-[#FFD700] hover:border-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
                  >
                    <Search className="h-5 w-5" />
                  </button>

                  {/* Search Dropdown */}
                  {isSearchOpen && (
                    <div className="absolute z-50 top-full right-[-100px] mt-6 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 animate-fade-in-up">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder={t("header.search")}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 outline-none rounded-xl border-0 focus:ring-2 focus:ring-bg-gray-100 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300"
                          autoFocus
                        />
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {t("header.popularSearches")}
                        </div>
                        {terms.map((term, index) => (
                          <button
                            key={index}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Theme Toggle */}

                <ThemeToggle />
                {/* Language Selector */}
                <div className="relative hidden md:flex">
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    aria-label={"تغییر زبان"}
                    className="flex items-center justify-center 
    w-10 aspect-square sm:w-auto sm:aspect-auto 
    px-1 sm:px-3 py-1 sm:py-2 
    bg-gray-100 dark:bg-gray-800/50 
    backdrop-blur-sm rounded-full 
    text-sm font-medium 
    text-gray-700 dark:text-gray-300 
    transition-all duration-300 
    border border-gray-200/20 dark:border-gray-700/20"
                  >
                    <span className="text-lg">{currentLang?.flag}</span>
                    <span className="hidden sm:block">{currentLang?.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 hidden md:block transition-transform duration-300 ${
                        isLangOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isLangOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as any);
                            setIsLangOpen(false);

                            const segments = pathname.split("/");
                            segments[1] = lang.code; // فرض بر اینکه زبان همیشه در index 1 آدرس است
                            const newPath = segments.join("/");
                            router.push(newPath);
                          }}
                          className="flex items-center w-full px-4 py-3 text-sm ..."
                        >
                          <span className="ltr:mr-3 rtl:ml-3 text-lg">
                            {lang.flag}
                          </span>
                          <span className="font-medium">{lang.name}</span>
                          {lang.code === language && (
                            <div className="ltr:ml-auto rtl:mr-auto w-2 h-2 bg-[#0F4C75] rounded-full"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden w-10 h-10 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#0F4C75] dark:hover:text-[#FFD700] hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
                >
                  <div className="relative w-6 h-6">
                    <span
                      className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                        isMenuOpen ? "rotate-45 top-3" : "top-1"
                      }`}
                    ></span>
                    <span
                      className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                        isMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    ></span>
                    <span
                      className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                        isMenuOpen ? "-rotate-45 top-3" : "top-5"
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
            </div>
            <hr
              className={`border md:hidden border-gray-300 ${
                isScrolled && !isScrollingUp
                  ? "h-0 overflow-hidden hidden"
                  : " opacity-100"
              }`}
            />

            {/* Mobile Second Line */}
            <div
              className={`md:hidden rtl:flex-row items-center ltr:flex-row-reverse flex w-full py-1 justify-between   transition-all duration-300 `}
            >
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  aria-label={"تغییر زبان"}
                  className="flex gap-x-2 items-center justify-center px-2 py- advises bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 z-40 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
                >
                  <span className="text-lg">{currentLang?.flag}</span>
                  <span className="block">{currentLang?.name}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLangOpen(false);

                          const segments = pathname.split("/");
                          segments[1] = lang.code; // فرض بر اینکه زبان همیشه در index 1 آدرس است
                          const newPath = segments.join("/");
                          router.push(newPath);
                        }}
                        className="flex items-center w-full px-4 py-3 text-sm ..."
                      >
                        <span className="ltr:mr-3 rtl:ml-3 text-lg">
                          {lang.flag}
                        </span>
                        <span className="font-medium">{lang.name}</span>
                        {lang.code === language && (
                          <div className="ltr:ml-auto rtl:mr-auto w-2 h-2 bg-[#0F4C75] rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                {user ? (
                  <div className="flex items-center justify-center gap-x-2">
                    <span className="rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-700">
                      <Bell className="h-6 w-6  cursor-pointer transition-colors text-gray-800 dark:text-gray-200" />
                    </span>

                    <Link
                      href={`/${language}/dashboard/user`}
                      className="rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-700"
                    >
                      <Dashboard className="text-gray-800 dark:text-gray-200" />
                    </Link>
                    <button
                      onClick={() => setIsProfileOpen(true)}
                      className="flex gap-x-2 items-center"
                    >
                      <img
                        src={user?.image || "/default-avatar.png"}
                        alt={user?.name || "User"}
                        className="w-9 h-9 rounded-full shadow-lg"
                      />
                      <span className="block">{user.name.split(" ")[0]}</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Link
                      href={`${language}/auth//user/signin`}
                      className="flex items-center gap-2 px-3 py-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#0F4C75] dark:hover:text-[#FFD700] hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
                    >
                      <LogIn className="h-4 w-4" />
                      <span className="sm:block">{t(`header.signin`)}</span>
                    </Link>
                    <Link
                      href={`${language}/auth//user/signin`}
                      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white rounded-full text-sm font-medium hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span className="sm:block">{t(`header.register`)} </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </AuthProvider>
      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute top-0 rtl:right-0 ltr:left-0 w-80 h-full bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">2S</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0F4C75] dark:text-white">
                      2SHIGROUP
                    </div>
                    <div className="text-xs text-gray-500">
                      {" "}
                      {t(`header.mainMenu`)}{" "}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={
                    item.key === "home"
                      ? `/${language}`
                      : item.key === "news"
                      ? `/${language}/news`
                      : item.key === "services"
                      ? `/${language}/services`
                      : item.href
                  }
                  className="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-[#0F4C75] dark:hover:text-[#FFD700] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{t(`header.${item.key}`)}</span>
                </a>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-gradient-to-r from-[#0F4C75] to-[#FFD700] rounded-xl p-4 text-white text-center">
                <div className="font-bold mb-1">
                  {t(`header.freeConsultation`)}{" "}
                </div>
                <div className="text-sm opacity-90">
                  {" "}
                  {t(`header.callNow`)}{" "}
                </div>
                <button className="mt-3 bg-white text-[#0F4C75] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                  {t(`header.contactUs`)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay Backdrop */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
        />
      )}


      {/* User Profile Modal */}
      <UserProfile
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
};

export default Header;
