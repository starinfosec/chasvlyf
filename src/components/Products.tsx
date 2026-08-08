import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Products() {
  const { t } = useLanguage();

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-16 md:py-24 bg-surface-container-low overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary mb-2">
            {t("Our Products", "हमारे उत्पाद")}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            {t(
              "Discover our range of pure, cold-pressed oils. Every drop is packed with health and natural taste.",
              "हमारे शुद्ध और कच्चे घानी तेलों को आज़माएँ। इनकी हर बूँद सेहत और स्वाद से भरपूर है।"
            )}
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="hidden md:flex gap-4"
        >
          <Link to="/products" className="px-6 py-3 rounded-full bg-white text-primary border border-outline-variant hover:bg-primary hover:text-white transition-all font-label-bold">
            {t("View All", "सभी देखें")}
          </Link>
        </motion.div>
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-margin-mobile md:px-margin-desktop pb-10"
      >
        {/* Product Card 1 */}
        <motion.div
          variants={itemVariants}
          className="w-full glass-card rounded-[40px] p-4 group hover:-translate-y-2 transition-all duration-500"
        >
          <Link to={`/product/mustard-oil`} className="block cursor-pointer h-[280px] rounded-[32px] overflow-hidden mb-6 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
              src="/oils/mustard-oil.png"
              alt="Mustard Oil"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&q=80"
              alt="Mustard Oil Secondary"
            />
            <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-[12px] font-label-bold">
              {t("PREMIUM", "प्रीमियम")}
            </div>
          </Link>
          <div className="px-4 pb-4">
            <h3 className="font-headline-md text-headline-md mb-2">
              {t("Mustard Oil", "सरसों का तेल")}
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Heart Health Boost", "हृदय स्वास्थ्य के लिए")}
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("High Pungency", "तीखा स्वाद")}
              </li>
            </ul>
            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-label-bold hover:brightness-110 transition-all">
              <span className="material-symbols-outlined">chat</span> {t("Enquire via WhatsApp", "WhatsApp से पूछें")}
            </button>
          </div>
        </motion.div>
        {/* Product Card 2 */}
        <motion.div
          variants={itemVariants}
          className="w-full glass-card rounded-[40px] p-4 group hover:-translate-y-2 transition-all duration-500"
        >
          <Link to={`/product/peanut-oil`} className="block cursor-pointer h-[280px] rounded-[32px] overflow-hidden mb-6 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
              src="/oils/peanut-oil.png"
              alt="Peanut Oil"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&q=80"
              alt="Peanut Oil Secondary"
            />
          </Link>
          <div className="px-4 pb-4">
            <h3 className="font-headline-md text-headline-md mb-2">
              {t("Peanut Oil", "मूंगफली का तेल")}
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Low Saturated Fat", "कम संतृप्त वसा")}
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Nutty Flavor Profile", "पौष्टिक स्वाद")}
              </li>
            </ul>
            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-label-bold">
              <span className="material-symbols-outlined">chat</span> {t("Enquire via WhatsApp", "WhatsApp से पूछें")}
            </button>
          </div>
        </motion.div>
        {/* Product Card 3 - Honey */}
        <motion.div
          variants={itemVariants}
          className="w-full glass-card rounded-[40px] p-4 group hover:-translate-y-2 transition-all duration-500"
        >
          <Link to={`/product/wild-forest-honey`} className="block cursor-pointer h-[280px] rounded-[32px] overflow-hidden mb-6 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
              src="https://images.unsplash.com/photo-1587049352851-8d4e89134780?w=800&q=80"
              alt="Honey"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1557062402-273579178351?w=800&q=80"
              alt="Honey Secondary"
            />
          </Link>
          <div className="px-4 pb-4">
            <h3 className="font-headline-md text-headline-md mb-2">
              {t("Honey", "शहद")}
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Immunity Booster", "रोग प्रतिरोधक क्षमता वर्धक")}
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("100% Raw & Natural", "100% कच्चा और प्राकृतिक")}
              </li>
            </ul>
            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-label-bold">
              <span className="material-symbols-outlined">chat</span> {t("Enquire via WhatsApp", "WhatsApp से पूछें")}
            </button>
          </div>
        </motion.div>
        {/* Product Card 4 - Nectar */}
        <motion.div
          variants={itemVariants}
          className="w-full glass-card rounded-[40px] p-4 group hover:-translate-y-2 transition-all duration-500"
        >
          <Link to={`/product/mahua-nectar`} className="block cursor-pointer h-[280px] rounded-[32px] overflow-hidden mb-6 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
              src="https://images.unsplash.com/photo-1628157790150-13f8d75e4e7e?w=800&q=80"
              alt="Nectar"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80"
              alt="Nectar Secondary"
            />
          </Link>
          <div className="px-4 pb-4">
            <h3 className="font-headline-md text-headline-md mb-2">
              {t("Nectar", "नेक्टर")}
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Rich in Minerals", "खनिजों से भरपूर")}
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Forest Reserve", "वन रिजर्व")}
              </li>
            </ul>
            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-label-bold">
              <span className="material-symbols-outlined">chat</span> {t("Enquire via WhatsApp", "WhatsApp से पूछें")}
            </button>
          </div>
        </motion.div>

        {/* Product Card 5 - Laddoo */}
        <motion.div
          variants={itemVariants}
          className="w-full glass-card rounded-[40px] p-4 group hover:-translate-y-2 transition-all duration-500"
        >
          <Link to={`/product/classic-mahua-laddoo`} className="block cursor-pointer h-[280px] rounded-[32px] overflow-hidden mb-6 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
              src="/laddoos/classic-mahua-laddo.png"
              alt="Classic Mahua Laddoo"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              src="/laddoos/classic-mahua-laddo1.png"
              alt="Classic Mahua Laddoo Secondary"
            />
          </Link>
          <div className="px-4 pb-4">
            <h3 className="font-headline-md text-headline-md mb-2">
              {t("Classic Mahua Laddoo", "क्लासिक महुआ लड्डू")}
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Energy Booster", "ऊर्जा बूस्टर")}
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Traditional Heritage", "पारंपरिक विरासत")}
              </li>
            </ul>
            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-label-bold">
              <span className="material-symbols-outlined">chat</span> {t("Enquire via WhatsApp", "WhatsApp से पूछें")}
            </button>
          </div>
        </motion.div>

        {/* Product Card 6 - Laddoo */}
        <motion.div
          variants={itemVariants}
          className="w-full glass-card rounded-[40px] p-4 group hover:-translate-y-2 transition-all duration-500"
        >
          <Link to={`/product/chocolate-mahua-laddoo`} className="block cursor-pointer h-[280px] rounded-[32px] overflow-hidden mb-6 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
              src="/laddoos/chocolate-mahua-laddo.png"
              alt="Chocolate Mahua Laddoo"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              src="/laddoos/chocolate-mahua-laddo1.png"
              alt="Chocolate Mahua Laddoo Secondary"
            />
          </Link>
          <div className="px-4 pb-4">
            <h3 className="font-headline-md text-headline-md mb-2">
              {t("Chocolate Mahua Laddoo", "चॉकलेट महुआ लड्डू")}
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Kids Favorite", "बच्चों की पसंद")}
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-sm font-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>{" "}
                {t("Modern Twist", "आधुनिक ट्विस्ट")}
              </li>
            </ul>
            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-label-bold">
              <span className="material-symbols-outlined">chat</span> {t("Enquire via WhatsApp", "WhatsApp से पूछें")}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
