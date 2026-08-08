import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function VideoSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-32 bg-surface-container overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20 reveal-up">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">
            {t("Visual Journey", "दृश्य यात्रा")}
          </span>
          <h2 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-4">
            {t("The Golden Process in Motion", "प्रक्रिया गति में")}
          </h2>
          <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("Witness the purity of our extraction process. From sun-kissed seeds to the rich, golden oil that nourishes your family.", "हमारी निष्कर्षण प्रक्रिया की शुद्धता का गवाह बनें। धूप में पके बीजों से लेकर समृद्ध, सुनहरे तेल तक जो आपके परिवार का पोषण करता है।")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video */}
          <div className="lg:col-span-2 relative rounded-[32px] overflow-hidden shadow-xl group cursor-pointer aspect-video bg-surface-variant flex items-center justify-center reveal-up">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
            
            <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl border border-white/30 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
            
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-10 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-label-bold tracking-wider uppercase">{t("Featured", "विशेष")}</span>
                <span className="text-sm font-label-bold opacity-80 text-shadow">3:45</span>
              </div>
              <h3 className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg mb-2 text-shadow-lg">{t("The Art of Wood Pressing", "लकड़ी से दबाने की कला")}</h3>
              <p className="font-body-sm md:font-body-md opacity-90 max-w-md hidden md:block text-shadow">
                {t("Step inside our artisanal facility to see how traditional methods preserve nature's finest nutrients.", "प्रकृति के बेहतरीन पोषक तत्वों को पारंपरिक तरीके कैसे संरक्षित करते हैं, यह देखने के लिए हमारी सुविधा के अंदर कदम रखें।")}
              </p>
            </div>
          </div>

          {/* Secondary Videos */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer flex-1 bg-surface-variant flex items-center justify-center min-h-[240px] reveal-up" style={{ transitionDelay: "100ms" }}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:bg-black/30 transition-colors duration-500"></div>
              
              <div className="relative z-10 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl border border-white/30 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
              
              <div className="absolute bottom-6 left-6 z-10 text-white transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <span className="text-xs font-label-bold opacity-80 mb-2 block">1:20</span>
                <h4 className="font-label-bold text-lg text-shadow-md">{t("Sourcing the Seeds", "बीज प्राप्त करना")}</h4>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer flex-1 bg-surface-variant flex items-center justify-center min-h-[240px] reveal-up" style={{ transitionDelay: "200ms" }}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600862080031-bb96db298c47?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:bg-black/30 transition-colors duration-500"></div>
              
              <div className="relative z-10 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl border border-white/30 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
              
              <div className="absolute bottom-6 left-6 z-10 text-white transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <span className="text-xs font-label-bold opacity-80 mb-2 block">2:15</span>
                <h4 className="font-label-bold text-lg text-shadow-md">{t("Purity Testing Labs", "शुद्धता परीक्षण प्रयोगशाला")}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
