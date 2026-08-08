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
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-bold text-label-bold mb-6 text-sm tracking-widest uppercase shadow-xl">
            {t("SINCE 1994 • PREMIUM QUALITY", "1994 से • बेहतरीन क्वालिटी")}
          </span>
          <h1 className="font-display-md md:font-display-lg text-[56px] sm:text-[72px] md:text-[90px] lg:text-[120px] leading-[1.1] mb-6 text-shadow-premium">
            {t("Pure Oils,", "शुद्ध तेल,")} <br className="hidden md:block" />
            <span className="italic font-light opacity-90">{t("Healthy Life", "स्वस्थ जीवन")}</span>
          </h1>
          <p className="font-body-md md:font-body-lg text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] opacity-90 max-w-5xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            {t(
              "Enjoy 100% natural, cold-pressed oils and authentic Mahua Laddoos. Made with care to keep all the healthy nutrients and fresh smell.",
              "हमारे 100% प्राकृतिक और कच्ची घानी तेलों और प्रामाणिक महुआ लड्डू का आनंद लें। इन्हें इस तरह बनाया गया है कि सारे पोषक तत्व और ताजी महक बनी रहे।"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-primary text-on-primary rounded-full px-10 py-5 font-label-bold text-lg md:text-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-primary/20">
              {t("Ask Us", "हमसे पूछें")}{" "}
              <span className="material-symbols-outlined text-xl md:text-2xl">trending_flat</span>
            </Link>
            <Link to="/products" className="bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-10 py-5 font-label-bold text-lg md:text-xl hover:bg-white/20 transition-colors shadow-xl">
              {t("See Products", "उत्पाद देखें")}
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
