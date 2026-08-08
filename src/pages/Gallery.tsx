import React, { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function Gallery() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=800&auto=format&fit=crop",
      title: t("Wood Pressing Process", "लकड़ी दबाने की प्रक्रिया"),
      span: "md:col-span-2 md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop",
      title: t("Premium Mustard Oil", "प्रीमियम सरसों का तेल"),
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=800&auto=format&fit=crop",
      title: t("Traditional Extraction", "पारंपरिक निष्कर्षण"),
      span: "md:col-span-1 md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=800&auto=format&fit=crop",
      title: t("Golden Sunflower Fields", "सुनहरे सूरजमुखी के खेत"),
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800&auto=format&fit=crop",
      title: t("Pure Olive Oil", "शुद्ध जैतून का तेल"),
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1600862080031-bb96db298c47?q=80&w=800&auto=format&fit=crop",
      title: t("Sustainable Groves", "सतत उपवन"),
      span: "md:col-span-2 md:row-span-1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-secondary-fixed/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">{t("Visual Diary", "दृश्य डायरी")}</span>
          <h1 className="font-display-md text-display-md md:font-display-lg md:text-display-lg text-primary mb-6">{t("Gallery", "गैलरी")}</h1>
          <p className="font-body-md md:font-body-lg text-on-surface-variant leading-relaxed">
            {t("A visual exploration of our artisanal process, from the rich earth to the final, golden drop. Witness the dedication poured into every bottle.", "अमीर पृथ्वी से लेकर अंतिम, सुनहरी बूंद तक हमारी कलात्मक प्रक्रिया का एक दृश्य अन्वेषण। हर बोतल में डाले गए समर्पण के गवाह बनें।")}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6"
        >
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`relative group overflow-hidden rounded-3xl bg-surface-variant ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                 <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-headline-md text-headline-md text-white drop-shadow-md">{img.title}</h3>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
