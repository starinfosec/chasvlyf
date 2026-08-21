import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/hero/herobg1.png",
    "/hero/herobg2.png",
    "/hero/herobg3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${backgroundImages[currentImageIndex]}')` }}
            ></div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto text-center w-full mt-16 md:mt-0 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-2 px-4 rounded-2xl md:rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-bold text-[10px] md:text-sm tracking-widest uppercase shadow-xl mb-6 max-w-[90%] md:max-w-none">
            {t("Connecting India’s Natural Food Heritage with the Modern World.", "भारत की प्राकृतिक खाद्य विरासत को आधुनिक दुनिया से जोड़ना।")}
          </span>
          <h1 className="font-display-md md:font-display-lg text-[42px] sm:text-[56px] md:text-[90px] lg:text-[120px] leading-[1.1] mb-4 md:mb-6 text-shadow-premium">
            {t("Taste Ka", "टेस्ट का")} <br className="hidden md:block" />
            <span className="italic font-light opacity-90">{t("Naya Andaaz", "नया अंदाज़")}</span>
          </h1>
          <p className="font-body-md md:font-body-lg text-[15px] sm:text-[18px] md:text-[24px] lg:text-[28px] opacity-90 max-w-5xl mx-auto mb-8 md:mb-10 leading-relaxed drop-shadow-md px-4 md:px-0">
            {t(
              "Chaskilyf™ brings together traditional food knowledge, natural resources, local entrepreneurship, and modern quality practices to create products inspired by India's food heritage.",
              "चस्किलाइफ™ पारंपरिक खाद्य ज्ञान, प्राकृतिक संसाधनों, स्थानीय उद्यमिता और आधुनिक गुणवत्ता प्रथाओं को एक साथ लाता है ताकि भारत की खाद्य विरासत से प्रेरित उत्पाद बनाए जा सकें।"
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-6 md:px-0 max-w-[400px] sm:max-w-none mx-auto">
            <Link to="/contact" className="bg-primary text-on-primary rounded-full px-6 py-4 md:px-10 md:py-5 font-label-bold text-base md:text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-primary/20 w-full sm:w-auto">
              {t("Explore Our Products", "हमारे उत्पादों का अन्वेषण करें")}{" "}
              <span className="material-symbols-outlined text-xl md:text-2xl">trending_flat</span>
            </Link>
            <Link to="/products" className="bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-6 py-4 md:px-10 md:py-5 font-label-bold text-base md:text-xl hover:bg-white/20 transition-colors shadow-xl text-center w-full sm:w-auto">
              {t("Our Story", "हमारी कहानी")}
            </Link>
          </div>
        </motion.div>
        
        {/* Slider Indicators */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
          {backgroundImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-primary' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
