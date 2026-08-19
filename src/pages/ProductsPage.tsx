import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function ProductsPage() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const oils = [
    {
      id: "mustard-oil",
      name: t("Mustard Oil", "सरसों का तेल"),
      desc: t("Real mustard oil with a strong, authentic flavor.", "असली और कड़क स्वाद वाला सरसों का तेल।"),
      benefit: t("Good for Digestion & Heart", "पाचन और दिल के लिए अच्छा"),
      badge: t("Pure Cold Pressed", "शुद्ध कोल्ड प्रेस्ड"),
      images: ["/oils/mustard-oil.png", "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&q=80"]
    },
    {
      id: "peanut-oil",
      name: t("Peanut Oil", "मूंगफली का तेल"),
      desc: t("Healthy and tasty oil, great for daily cooking and frying.", "स्वस्थ और स्वादिष्ट तेल, रोज के खाने और तलने के लिए बहुत अच्छा।"),
      benefit: t("Rich in Vitamins & Antioxidants", "विटामिन और एंटीऑक्सीडेंट से भरपूर"),
      badge: t("Traditional Ghani", "पारंपरिक घानी"),
      images: ["/oils/peanut-oil.png", "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&q=80"]
    },
    {
      id: "sunflower-oil",
      name: t("Sunflower Oil", "सूरजमुखी का तेल"),
      desc: t("Light, healthy and neutral-tasting oil perfect for baking, frying, and everyday cooking.", "हल्का, स्वस्थ और बिना किसी तेज स्वाद वाला तेल।"),
      benefit: t("Vitamin E Rich", "विटामिन ई से भरपूर"),
      badge: t("Everyday Essential", "रोजमर्रा के लिए आवश्यक"),
      images: ["/oils/sunflower-oil.png", "https://images.unsplash.com/photo-1474624000418-f018d9633e6c?w=800&q=80"]
    },
    {
      id: "sesame-oil",
      name: t("Sesame Oil", "तिल का तेल"),
      desc: t("Rich, aromatic oil traditionally used in Asian cuisine and Ayurvedic practices.", "समृद्ध, सुगंधित तेल जिसका पारंपरिक रूप से उपयोग किया जाता है।"),
      benefit: t("Antioxidant Rich", "एंटीऑक्सीडेंट से भरपूर"),
      badge: t("Ayurvedic Heritage", "आयुर्वेदिक विरासत"),
      images: ["/oils/sesame-oil.png", "https://images.unsplash.com/photo-1611078815152-b1315801c402?w=800&q=80"]
    }
  ];

  const laddoos = [
    {
      id: "classic-mahua-laddoo",
      name: t("Classic Mahua Laddoo", "क्लासिक महुआ लड्डू"),
      desc: t("Traditional sweet made with nutrient-rich mahua, pure ghee, and nuts.", "पौष्टिक महुआ, शुद्ध घी और मेवों से बनी पारंपरिक मिठाई।"),
      benefit: t("Energy Booster", "ऊर्जा बूस्टर"),
      badge: t("Traditional Heritage", "पारंपरिक विरासत"),
      images: ["/laddoos/classic-mahua-laddo.png", "/laddoos/classic-mahua-laddo1.png"]
    },
    {
      id: "chocolate-mahua-laddoo",
      name: t("Chocolate Mahua Laddoo", "चॉकलेट महुआ लड्डू"),
      desc: t("A delicious fusion of healthy mahua and rich cocoa for a modern twist.", "आधुनिक स्वाद के लिए स्वस्थ महुआ और समृद्ध कोको का एक स्वादिष्ट संलयन।"),
      benefit: t("Kids Favorite", "बच्चों की पसंद"),
      badge: t("Modern Twist", "आधुनिक ट्विस्ट"),
      images: ["/laddoos/chocolate-mahua-laddo.png", "/laddoos/chocolate-mahua-laddo1.png"]
    },
    {
      id: "coconut-mahua-laddoo",
      name: t("Coconut Mahua Laddoo", "नारियल महुआ लड्डू"),
      desc: t("Sweet and aromatic laddoos enriched with the tropical goodness of coconut.", "नारियल की उष्णकटिबंधीय अच्छाई से समृद्ध मीठे और सुगंधित लड्डू।"),
      benefit: t("Rich in Fiber", "फाइबर से भरपूर"),
      badge: t("Tropical Delight", "उष्णकटिबंधीय खुशी"),
      images: ["/laddoos/coconut-mahua-laddo.png", "/laddoos/coconut-mahua-laddo1.png"]
    },
    {
      id: "ilaichi-mahua-laddoo",
      name: t("Ilaichi Mahua Laddoo", "इलायची महुआ लड्डू"),
      desc: t("Fragrant laddoos infused with aromatic cardamom for a refreshing taste.", "ताज़ा स्वाद के लिए सुगंधित इलायची के साथ सुगंधित लड्डू।"),
      benefit: t("Aromatic", "सुगंधित"),
      badge: t("Fragrant & Fresh", "सुगंधित और ताज़ा"),
      images: ["/laddoos/ilaichi-mahua-laddo.png", "/laddoos/ilaichi-mahua-laddo1.png"]
    },
    {
      id: "peanut-mahua-laddoo",
      name: t("Peanut Mahua Laddoo", "मूंगफली महुआ लड्डू"),
      desc: t("Crunchy and protein-packed laddoos made with roasted peanuts and mahua.", "भुनी हुई मूंगफली और महुआ से बने कुरकुरे और प्रोटीन युक्त लड्डू।"),
      benefit: t("Protein Rich", "प्रोटीन युक्त"),
      badge: t("Crunchy Treat", "कुरकुरा उपचार"),
      images: ["/laddoos/peanut-mahua-laddo.png", "/laddoos/peanut-mahua-laddo1.png"]
    }
  ];

  const honeyAndNectar = [
    {
      id: "wild-forest-honey",
      name: t("Honey", "शहद"),
      desc: t("Pure, unfiltered honey collected from deep forest hives.", "गहरे जंगल के छत्तों से एकत्र किया गया शुद्ध, अनफ़िल्टर्ड शहद।"),
      benefit: t("Immunity Booster", "रोग प्रतिरोधक क्षमता वर्धक"),
      badge: t("100% Raw & Natural", "100% कच्चा और प्राकृतिक"),
      images: ["/honey.png", "/honey1.png"]
    },
    {
      id: "mahua-nectar",
      name: t("Nectar", "नेक्टर"),
      desc: t("A unique, sweet nectar derived from the flowers.", "फूलों से प्राप्त एक अनोखा, मीठा अमृत।"),
      benefit: t("Rich in Minerals", "खनिजों से भरपूर"),
      badge: t("Forest Reserve", "वन रिजर्व"),
      images: ["/nectar.png", "/nectar1.png"]
    }
  ];

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-4">{t("Our Products", "हमारे उत्पाद")}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{t("Discover products inspired by India's natural resources and traditional food practices.", "भारत के प्राकृतिक संसाधनों और पारंपरिक खाद्य प्रथाओं से प्रेरित उत्पादों की खोज करें।")}</p>
        </motion.header>

        <div className="w-full">
          {/* Product Grid */}
          <div className="w-full space-y-16">
            {/* Oils Section */}
            <section>
              <div className="mb-8 border-b border-outline-variant/30 pb-4">
                <h2 className="font-display-sm text-display-sm text-primary mb-2">{t("Traditional Oils, Modern Quality", "पारंपरिक तेल, आधुनिक गुणवत्ता")}</h2>
                <p className="font-body-md text-on-surface-variant max-w-2xl">{t("Our range of oils reflects India's traditional food culture while being presented for the needs of today's consumers.", "हमारे तेलों की श्रृंखला भारत की पारंपरिक खाद्य संस्कृति को दर्शाती है जबकि आज के उपभोक्ताओं की जरूरतों के लिए प्रस्तुत की जाती है।")}</p>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter"
              >
                {oils.map((item) => (
                  <motion.article key={item.id} variants={itemVariants} className="group bg-surface-container-lowest rounded-3xl overflow-hidden luxury-shadow transition-all duration-500 hover:-translate-y-2 border border-surface-container">
                    <Link to={`/product/${item.id}`} className="product-image-container block cursor-pointer relative h-72 bg-surface-container-low overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <img className={`h-full w-auto object-contain transition-all duration-700 group-hover:scale-110 ${item.images.length > 1 ? 'group-hover:opacity-0' : ''}`} alt={item.name} src={item.images[0]} />
                        {item.images.length > 1 && (
                          <img className="absolute h-full w-auto object-contain transition-all duration-700 scale-95 opacity-0 group-hover:scale-110 group-hover:opacity-100" alt={item.name} src={item.images[1]} />
                        )}
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 backdrop-blur-md text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{item.badge}</span>
                      </div>
                    </Link>
                    <div className="p-6">
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{item.name}</h3>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 italic">{item.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="material-symbols-outlined text-secondary text-sm">health_and_safety</span>
                        <span className="text-xs text-on-surface-variant font-medium">{item.benefit}</span>
                      </div>
                      <div className="mb-6">
                        <span className="text-[10px] font-bold text-outline uppercase block mb-2 tracking-tighter">{t("Available Sizes", "उपलब्ध आकार")}</span>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 rounded-full border border-primary text-[10px] font-bold bg-primary/5 text-primary">250 ML</button>
                          <button className="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold">500 ML</button>
                          <button className="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold">1 Ltr</button>
                        </div>
                      </div>
                      <Link to={`/product/${item.id}`} className="w-full bg-primary text-on-primary flex items-center justify-center gap-2 py-4 rounded-full font-label-bold hover:bg-primary/90 transition-all active:scale-[0.98]">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {t("View Details & Order", "विवरण देखें और ऑर्डर करें")}
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>

            {/* Laddoos Section */}
            <section>
              <div className="mb-8 border-b border-outline-variant/30 pb-4">
                <h2 className="font-display-sm text-display-sm text-primary mb-2">{t("Mahua Laddu — A Taste Rooted in Tradition", "महुआ लड्डू — परंपरा में निहित एक स्वाद")}</h2>
                <p className="font-body-md text-on-surface-variant max-w-2xl">{t("Mahua represents an important part of India's natural and traditional food heritage. Our Classic Mahua Laddoos offer a traditional taste presented in a modern, convenient form.", "महुआ भारत की प्राकृतिक और पारंपरिक खाद्य विरासत का एक महत्वपूर्ण हिस्सा है। हमारे क्लासिक महुआ लड्डू आधुनिक रूप में पारंपरिक स्वाद प्रदान करते हैं।")}</p>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter"
              >
                {laddoos.map((item) => (
                  <motion.article key={item.id} variants={itemVariants} className="group bg-surface-container-lowest rounded-3xl overflow-hidden luxury-shadow transition-all duration-500 hover:-translate-y-2 border border-surface-container">
                    <Link to={`/product/${item.id}`} className="product-image-container block cursor-pointer relative h-72 bg-surface-container-low overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${item.images.length > 1 ? 'group-hover:opacity-0' : ''}`} alt={item.name} src={item.images[0]} />
                        {item.images.length > 1 && (
                          <img className="absolute h-full w-full object-cover transition-all duration-700 scale-95 opacity-0 group-hover:scale-110 group-hover:opacity-100" alt={item.name} src={item.images[1]} />
                        )}
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 backdrop-blur-md text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{item.badge}</span>
                      </div>
                    </Link>
                    <div className="p-6">
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{item.name}</h3>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 italic">{item.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="material-symbols-outlined text-secondary text-sm">stars</span>
                        <span className="text-xs text-on-surface-variant font-medium">{item.benefit}</span>
                      </div>
                      <div className="mb-6">
                        <span className="text-[10px] font-bold text-outline uppercase block mb-2 tracking-tighter">{t("Available Sizes", "उपलब्ध आकार")}</span>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 rounded-full border border-primary text-[10px] font-bold bg-primary/5 text-primary">250g</button>
                          <button className="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold">500g</button>
                          <button className="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold">1kg</button>
                        </div>
                      </div>
                      <Link to={`/product/${item.id}`} className="w-full bg-primary text-on-primary flex items-center justify-center gap-2 py-4 rounded-full font-label-bold hover:bg-primary/90 transition-all active:scale-[0.98]">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {t("View Details & Order", "विवरण देखें और ऑर्डर करें")}
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>

            {/* Honey and Nectar Section */}
            <section>
              <h2 className="font-display-sm text-display-sm text-primary mb-8 border-b border-outline-variant/30 pb-4">{t("Honey & Nectar", "शहद और नेक्टर")}</h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter"
              >
                {honeyAndNectar.map((item) => (
                  <motion.article key={item.id} variants={itemVariants} className="group bg-surface-container-lowest rounded-3xl overflow-hidden luxury-shadow transition-all duration-500 hover:-translate-y-2 border border-surface-container">
                    <Link to={`/product/${item.id}`} className="product-image-container block cursor-pointer relative h-72 bg-surface-container-low overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${item.images.length > 1 ? 'group-hover:opacity-0' : ''}`} alt={item.name} src={item.images[0]} />
                        {item.images.length > 1 && (
                          <img className="absolute h-full w-full object-cover transition-all duration-700 scale-95 opacity-0 group-hover:scale-110 group-hover:opacity-100" alt={item.name} src={item.images[1]} />
                        )}
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 backdrop-blur-md text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{item.badge}</span>
                      </div>
                    </Link>
                    <div className="p-6">
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{item.name}</h3>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 italic">{item.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="material-symbols-outlined text-secondary text-sm">spa</span>
                        <span className="text-xs text-on-surface-variant font-medium">{item.benefit}</span>
                      </div>
                      <div className="mb-6">
                        <span className="text-[10px] font-bold text-outline uppercase block mb-2 tracking-tighter">{t("Available Sizes", "उपलब्ध आकार")}</span>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 rounded-full border border-primary text-[10px] font-bold bg-primary/5 text-primary">250g</button>
                          <button className="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold">500g</button>
                          <button className="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold">1kg</button>
                        </div>
                      </div>
                      <Link to={`/product/${item.id}`} className="w-full bg-primary text-on-primary flex items-center justify-center gap-2 py-4 rounded-full font-label-bold hover:bg-primary/90 transition-all active:scale-[0.98]">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {t("View Details & Order", "विवरण देखें और ऑर्डर करें")}
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>
          </div>
        </div>
      </main>


    </div>
  );
}
