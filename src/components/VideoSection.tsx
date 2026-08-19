import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function VideoSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-32 bg-surface-container overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20 reveal-up">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">
            {t("Community Impact", "सामुदायिक प्रभाव")}
          </span>
          <h2 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-4">
            {t("Creating Value Beyond Products", "उत्पादों से परे मूल्य बनाना")}
          </h2>
          <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("Chaskilyf™ isn't just about selling goods. It's about recognizing the true worth of traditional food resources.", "चस्किलाइफ™ केवल सामान बेचने के बारे में नहीं है। यह पारंपरिक खाद्य संसाधनों के वास्तविक मूल्य को पहचानने के बारे में है।")}
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
              <h3 className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg mb-2 text-shadow-lg">{t("EMPOWERMENT", "सशक्तिकरण")}</h3>
              <p className="font-body-sm md:font-body-md opacity-90 max-w-md hidden md:block text-shadow">
                {t("Working with women's self-help groups for sorting and cleaning.", "छंटाई और सफाई के लिए महिलाओं के स्वयं सहायता समूहों के साथ काम करना।")}
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
                <h4 className="font-label-bold text-lg text-shadow-md">{t("FAIR PRICING", "उचित मूल्य निर्धारण")}</h4>
                <p className="font-body-sm text-xs opacity-90 mt-1 hidden md:block text-shadow">
                  {t("Creating better value for farmers and collectors who provide our raw materials.", "कच्चे माल उपलब्ध कराने वाले किसानों और संग्राहकों के लिए बेहतर मूल्य बनाना।")}
                </p>
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
                <h4 className="font-label-bold text-lg text-shadow-md">{t("MODERN REACH", "आधुनिक पहुंच")}</h4>
                <p className="font-body-sm text-xs opacity-90 mt-1 hidden md:block text-shadow max-w-[250px]">
                  {t("Giving traditional products the respect and presentation they deserve in modern markets.", "आधुनिक बाजारों में पारंपरिक उत्पादों को वह सम्मान और प्रस्तुति देना जिसके वे हकदार हैं।")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
