"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Play, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      id: 1,
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle"),
      description: t("hero.slide1.description"),
      features: [
        t("hero.slide1.features.0"),
        t("hero.slide1.features.1"),
        t("hero.slide1.features.2")
      ],
      backgroundImage: "./img/hero/slide1/migration.webp",
      animatedImage: "./img/hero/slide1/model1.png",
      secondImage: "./img/hero/slide1/airplane.webp",
      gradient: "from-blue-900/80 to-indigo-900/80"
    },
    {
      id: 2,
      title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle"),
      description: t("hero.slide2.description"),
      features: [
        t("hero.slide2.features.0"),
        t("hero.slide2.features.1"),
        t("hero.slide2.features.2")
      ],
      backgroundImage: "./img/hero/slide2/Investment.webp",
      animatedImage: "./img/hero/slide2/model2.webp",
      secondImage: "./img/hero/slide2/world.webp",

      gradient: "from-green-900/80 to-emerald-900/80"
    },

    {
      id: 4,
      title: t("hero.slide4.title"),
      subtitle: t("hero.slide4.subtitle"),
      description: t("hero.slide4.description"),
      features: [
        t("hero.slide4.features.0"),
        t("hero.slide4.features.1"),
        t("hero.slide4.features.2")
      ],
      backgroundImage: "./img/hero/slide3/tourism.webp",
      animatedImage: "./img/hero/slide3/model3.webp",
      secondImage: "./img/hero/slide3/pizza-tower.webp",

      gradient: "from-yellow-900/80 to-orange-900/80"
    },
    {
      id: 5,
      title: t("hero.slide5.title"),
      subtitle: t("hero.slide5.subtitle"),
      description: t("hero.slide5.description"),
      features: [
        t("hero.slide5.features.0"),
        t("hero.slide5.features.1"),
        t("hero.slide5.features.2")
      ],
      backgroundImage: "./img/hero/slide4/commerce.webp",
      animatedImage: "./img/hero/slide4/model4.webp",
      secondImage: "./img/hero/slide4/basket.webp",

      gradient: "from-teal-900/80 to-cyan-900/80"
    },
    {
      id: 6,
      title: t("hero.slide6.title"),
      subtitle: t("hero.slide6.subtitle"),
      description: t("hero.slide6.description"),
      features: [
        t("hero.slide6.features.0"),
        t("hero.slide6.features.1"),
        t("hero.slide6.features.2")
      ],
      backgroundImage: "./img/hero/slide5/sell.webp",
      animatedImage: "./img/hero/slide5/model5.webp",
      secondImage: "./img/hero/slide5/real-state2.webp",

      gradient: "from-gray-900/80 to-zinc-900/80"
    },
    {
      id: 7,
      title: t("hero.slide7.title"),
      subtitle: t("hero.slide7.subtitle"),
      description: t("hero.slide7.description"),
      features: [
        t("hero.slide7.features.0"),
        t("hero.slide7.features.1"),
        t("hero.slide7.features.2")
      ],
      backgroundImage: "./img/hero/slide6/carbuy.webp",

      animatedImage: "./img/hero/slide6/model6.webp",
      secondImage: "./img/hero/slide6/car.webp",

      gradient: "from-red-900/80 to-rose-900/80"
    },
    {
      id: 8,
      title: t("hero.slide8.title"),
      subtitle: t("hero.slide8.subtitle"),
      description: t("hero.slide8.description"),
      features: [
        t("hero.slide8.features.0"),
        t("hero.slide8.features.1"),
        t("hero.slide8.features.2")
      ],
      backgroundImage: "./img/hero/slide7/measuring.webp",
      animatedImage: "./img/hero/slide7/model7.webp",
      secondImage: "./img/hero/slide7/camera.webp",

      gradient: "from-lime-900/80 to-green-900/80"
    },
    {
      id: 9,
      title: t("hero.slide9.title"),
      subtitle: t("hero.slide9.subtitle"),
      description: t("hero.slide9.description"),
      features: [
        t("hero.slide9.features.0"),
        t("hero.slide9.features.1"),
        t("hero.slide9.features.2")
      ],
      backgroundImage: "./img/hero/slide8/construct.webp",
      animatedImage: "./img/hero/slide8/model8.webp",
      secondImage: "./img/hero/slide8/building.webp",

      gradient: "from-indigo-900/80 to-fuchsia-900/80"
    },
    {
      id: 10,
      title: t("hero.slide10.title"),
      subtitle: t("hero.slide10.subtitle"),
      description: t("hero.slide10.description"),
      features: [
        t("hero.slide10.features.0"),
        t("hero.slide10.features.1"),
        t("hero.slide10.features.2")
      ],
      backgroundImage: "./img/hero/slide9/agency.webp",
      animatedImage: "./img/hero/slide9/model9.webp",
      secondImage: "./img/hero/slide9/notebook.webp",

      gradient: "from-sky-900/80 to-blue-900/80"
    },
    {
      id: 11,
      title: t("hero.slide11.title"),
      subtitle: t("hero.slide11.subtitle"),
      description: t("hero.slide11.description"),
      features: [
        t("hero.slide11.features.0"),
        t("hero.slide11.features.1"),
        t("hero.slide11.features.2")
      ],
      backgroundImage: "./img/hero/slide10/advertising.webp",
      animatedImage: "./img/hero/slide10/model10.webp",
      secondImage: "./img/hero/slide10/sheypoor.webp",

      gradient: "from-stone-900/80 to-neutral-900/80"
    },
    {
      id: 12,
      title: t("hero.slide12.title"),
      subtitle: t("hero.slide12.subtitle"),
      description: t("hero.slide12.description"),
      features: [
        t("hero.slide12.features.0"),
        t("hero.slide12.features.1"),
        t("hero.slide12.features.2")
      ],
      backgroundImage: "./img/hero/slide11/educate.webp",
      animatedImage: "./img/hero/slide11/model11.webp",
      secondImage: "./img/hero/slide11/education.webp",

      gradient: "from-orange-900/80 to-red-900/80"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="pt-0 relative overflow-hidden">
      {/* Main Slider Container */}
      <div className="relative ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentSlideData.backgroundImage})`
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} transition-all duration-1000`}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center">
          <div className="max-w-7xl mx-auto pt-44 ltr:pl-12 rtl:pr-12 px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Right Side */}
              <div
                className={`${isRTL ? "lg:order-1" : "lg:order-1"} text-white`}
              >
                <div
                  className={`transform transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Subtitle */}
                  <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
                    <span className="text-[#FFD700]">✨</span>{" "}
                    {currentSlideData.subtitle}
                  </div>

                  {/* Main Title */}
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {currentSlideData.title}
                  </h1>

                  {/* Description */}
                  <p
                    className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    {currentSlideData.description}
                  </p>

                  {/* Features List */}
                  <div
                    className="mb-8 animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {currentSlideData.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2"
                        >
                          <CheckCircle className="h-4 w-4 text-[#FFD700] flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div
                    className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <button className="group bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0F4C75] px-8 py-4 rounded-full font-bold hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                      <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      {t("hero.startNow")}
                    </button>

                    <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0F4C75] transition-all duration-300 flex items-center justify-center gap-2">
                      {t("hero.freeConsultation")}
                      {isRTL ? (
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                      ) : (
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated Image - Left Side */}
              <div
                className={`${isRTL ? "lg:order-2" : "lg:order-2"} relative`}
              >
                <div>
                  {/* Main Image Container */}
                  <div className="relative">
                    {/* Floating Background Elements */}
                    <div className="absolute -left-4 w-full h-full "></div>
                    <div
                      className="absolute  -right-4 w-full h-full    animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Main Image */}
                    <div className="relative z-10 overflow-visible w-full h-[500px]">
                      <Image
                        src={currentSlideData.secondImage}
                        alt="Background Animation"
                        width={400}
                        height={400}
                        className={`w-[500px] h-[500px] object-contain absolute top-0 right-0   
                          transform transition-all duration-1000 delay-1000 ${
                            isLoaded
                              ? "translate-x-0 opacity-100"
                              : "translate-x-10 opacity-0"
                          }`}
                      />

                      <div className="absolute left-0 bottom-0  hover:scale-105 transform transition-transform duration-500">
                        <Image
                          src={currentSlideData.animatedImage}
                          alt="Hero Image"
                          width={200}
                          height={400}
                          className={`w-auto md:h-[500px] h-[400px] object-contain cursor-pointer animate-float
                            transform transition-all duration-2000 delay-2000 ${
                              isLoaded
                                ? "translate-x-0 opacity-100"
                                : "translate-x-10 opacity-0"
                            }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              aria-label="قبلی"
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <ArrowLeft className="h-5 w-5 rtl:rotate-180 text-white group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2 rtl:space-x-reverse">
              {slides.map((_, index) => (
                <button
                  key={index}
                    aria-label={`رفتن به اسلاید شماره ${index + 1}`}

                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[#FFD700] scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="بعدی"
              className="w-10 h-10 rtl:rotate-180 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <div
            className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-6000 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
              animation: isAutoPlaying ? "progress 6s linear infinite" : "none"
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 right-8 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: ${100 / slides.length}%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
