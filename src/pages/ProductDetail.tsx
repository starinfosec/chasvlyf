import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useState, FormEvent, useEffect } from "react";

export function ProductDetail() {
  const { id } = useParams();
  const { t } = useLanguage();

  const productsData: Record<string, any> = {
    "mustard-oil": {
      name: t("Mustard Oil", "सरसों का तेल"),
      category: t("Premium Oils", "प्रीमियम तेल"),
      description: t("Real mustard oil with a strong, authentic flavor. Extracted using traditional cold-pressed methods to retain maximum nutrients, pungent aroma, and rich flavor.", "असली और कड़क स्वाद वाला सरसों का तेल। इसके सभी पोषक तत्वों और ताजी महक को बचाने के लिए इसे कच्ची घानी से निकाला गया है।"),
      images: ["/oils/mustard-oil.png", "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&q=80"],
      benefits: [
        t("Good for Digestion & Heart", "पाचन और दिल के लिए अच्छा"),
        t("Rich in Monounsaturated Fats", "मोनोअनसैचुरेटेड वसा से भरपूर"),
        t("Contains Natural Antioxidants", "प्राकृतिक एंटीऑक्सीडेंट शामिल हैं")
      ],
      sizes: [
        { label: "250 ML", price: 100 },
        { label: "500 ML", price: 190 },
        { label: "1 Ltr", price: 360 }
      ],
      badge: t("Pure Cold Pressed", "शुद्ध कोल्ड प्रेस्ड")
    },
    "peanut-oil": {
      name: t("Peanut Oil", "मूंगफली का तेल"),
      category: t("Premium Oils", "प्रीमियम तेल"),
      description: t("Healthy and tasty oil, great for daily cooking and frying. High smoke point makes it ideal for deep frying while retaining a mild, nutty flavor.", "स्वस्थ और स्वादिष्ट तेल, रोज के खाने और तलने के लिए बहुत अच्छा। इसका हाई स्मोक पॉइंट इसे डीप फ्राई करने के लिए बेहतरीन बनाता है।"),
      images: ["/oils/peanut-oil.png", "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&q=80"],
      benefits: [
        t("Rich in Vitamins & Antioxidants", "विटामिन और एंटीऑक्सीडेंट से भरपूर"),
        t("High Smoke Point for Frying", "तलने के लिए उच्च धुआं बिंदु"),
        t("Cholesterol Free", "कोलेस्ट्रॉल मुक्त")
      ],
      sizes: [
        { label: "250 ML", price: 120 },
        { label: "500 ML", price: 230 },
        { label: "1 Ltr", price: 450 }
      ],
      badge: t("Traditional Ghani", "पारंपरिक घानी")
    },
    "sunflower-oil": {
      name: t("Sunflower Oil", "सूरजमुखी का तेल"),
      category: t("Premium Oils", "प्रीमियम तेल"),
      description: t("Light, healthy and neutral-tasting oil perfect for baking, frying, and everyday cooking.", "हल्का, स्वस्थ और बिना किसी तेज स्वाद वाला तेल जो बेकिंग, तलने और रोजमर्रा के खाना पकाने के लिए एकदम सही है।"),
      images: ["/oils/sunflower-oil.png", "https://images.unsplash.com/photo-1474624000418-f018d9633e6c?w=800&q=80"],
      benefits: [
        t("Vitamin E Rich", "विटामिन ई से भरपूर"),
        t("Neutral Smoke Point", "तटस्थ स्मोक पॉइंट"),
        t("Light on Stomach", "पेट के लिए हल्का")
      ],
      sizes: [
        { label: "250 ML", price: 90 },
        { label: "500 ML", price: 170 },
        { label: "1 Ltr", price: 320 }
      ],
      badge: t("Everyday Essential", "रोजमर्रा के लिए आवश्यक")
    },
    "sesame-oil": {
      name: t("Sesame Oil", "तिल का तेल"),
      category: t("Premium Oils", "प्रीमियम तेल"),
      description: t("Rich, aromatic oil traditionally used in Asian cuisine and Ayurvedic practices. Cold-pressed to retain its natural goodness.", "समृद्ध, सुगंधित तेल जिसका पारंपरिक रूप से एशियाई व्यंजनों और आयुर्वेदिक प्रथाओं में उपयोग किया जाता है।"),
      images: ["/oils/sesame-oil.png", "https://images.unsplash.com/photo-1611078815152-b1315801c402?w=800&q=80"],
      benefits: [
        t("Traditional Flavor", "पारंपरिक स्वाद"),
        t("Antioxidant Rich", "एंटीऑक्सीडेंट से भरपूर"),
        t("Good for Skin & Hair", "त्वचा और बालों के लिए अच्छा")
      ],
      sizes: [
        { label: "250 ML", price: 150 },
        { label: "500 ML", price: 290 },
        { label: "1 Ltr", price: 560 }
      ],
      badge: t("Ayurvedic Heritage", "आयुर्वेदिक विरासत")
    },
    "coconut-oil": {
      name: t("Coconut Oil", "नारियल का तेल"),
      category: t("Premium Oils", "प्रीमियम तेल"),
      description: t("Pure, cold-pressed coconut oil, perfect for cooking, skin, and hair care. Extracted without heat to preserve natural aroma and nutrients.", "शुद्ध, कोल्ड-प्रेस्ड नारियल तेल, खाना पकाने, त्वचा और बालों की देखभाल के लिए एकदम सही। प्राकृतिक सुगंध और पोषक तत्वों को संरक्षित करने के लिए बिना गर्मी के निकाला गया।"),
      images: ["/oils/coconut-oil.png", "/oils/coconutoil.png"],
      benefits: [
        t("Multipurpose & Nourishing", "बहुउद्देश्यीय और पौष्टिक"),
        t("Good for Skin and Hair", "त्वचा और बालों के लिए अच्छा"),
        t("Rich in MCTs", "MCTs से भरपूर")
      ],
      sizes: [
        { label: "250 ML", price: 180 },
        { label: "500 ML", price: 340 },
        { label: "1 Ltr", price: 650 }
      ],
      badge: t("Virgin Cold Pressed", "वर्जिन कोल्ड प्रेस्ड")
    },
    "flaxseed-oil": {
      name: t("Flaxseed Oil", "अलसी का तेल"),
      category: t("Premium Oils", "प्रीमियम तेल"),
      description: t("Nutrient-dense oil rich in Omega-3 fatty acids, ideal for heart health and immunity. Best consumed raw or lightly drizzled.", "ओमेगा-3 फैटी एसिड से भरपूर पोषक तत्वों से भरपूर तेल, हृदय स्वास्थ्य और प्रतिरक्षा के लिए आदर्श। कच्चे या हल्के छिड़काव का सबसे अच्छा सेवन किया जाता है।"),
      images: ["/oils/flaxseed-oil.png", "/oils/flaxseedoil.png"],
      benefits: [
        t("High in Omega-3", "ओमेगा-3 से भरपूर"),
        t("Supports Heart Health", "हृदय स्वास्थ्य का समर्थन करता है"),
        t("Boosts Immunity", "प्रतिरक्षा को बढ़ाता है")
      ],
      sizes: [
        { label: "250 ML", price: 220 },
        { label: "500 ML", price: 420 },
        { label: "1 Ltr", price: 800 }
      ],
      badge: t("Heart Healthy", "हृदय के लिए स्वस्थ")
    },
    "classic-mahua-laddoo": {
      name: t("Classic Mahua Laddoo", "क्लासिक महुआ लड्डू"),
      category: t("Artisanal Laddoos", "कारीगर लड्डू"),
      description: t("Traditional sweet made with nutrient-rich mahua, pure ghee, and nuts. A perfect traditional treat for any occasion.", "पौष्टिक महुआ, शुद्ध घी और मेवों से बनी पारंपरिक मिठाई। किसी भी अवसर के लिए एक आदर्श पारंपरिक उपचार।"),
      images: ["/laddoos/classic-mahua-laddo.png", "/laddoos/classic-mahua-laddo1.png"],
      benefits: [
        t("Energy Booster", "ऊर्जा बूस्टर"),
        t("Made with Pure Ghee", "शुद्ध घी से बना"),
        t("No Artificial Colors", "कोई कृत्रिम रंग नहीं")
      ],
      sizes: [
        { label: "250g", price: 200 },
        { label: "500g", price: 380 },
        { label: "1kg", price: 700 }
      ],
      badge: t("Traditional Heritage", "पारंपरिक विरासत")
    },
    "chocolate-mahua-laddoo": {
      name: t("Chocolate Mahua Laddoo", "चॉकलेट महुआ लड्डू"),
      category: t("Artisanal Laddoos", "कारीगर लड्डू"),
      description: t("A delicious fusion of healthy mahua and rich cocoa for a modern twist.", "आधुनिक स्वाद के लिए स्वस्थ महुआ और समृद्ध कोको का एक स्वादिष्ट संलयन।"),
      images: ["/laddoos/chocolate-mahua-laddo.png", "/laddoos/chocolate-mahua-laddo1.png"],
      benefits: [
        t("Kids Favorite", "बच्चों की पसंद"),
        t("Antioxidant Rich Cocoa", "एंटीऑक्सीडेंट युक्त कोको"),
        t("Deliciously Healthy", "स्वादिष्ट रूप से स्वस्थ")
      ],
      sizes: [
        { label: "250g", price: 220 },
        { label: "500g", price: 420 },
        { label: "1kg", price: 800 }
      ],
      badge: t("Modern Twist", "आधुनिक ट्विस्ट")
    },
    "coconut-mahua-laddoo": {
      name: t("Coconut Mahua Laddoo", "नारियल महुआ लड्डू"),
      category: t("Artisanal Laddoos", "कारीगर लड्डू"),
      description: t("Sweet and aromatic laddoos enriched with the tropical goodness of coconut.", "नारियल की उष्णकटिबंधीय अच्छाई से समृद्ध मीठे और सुगंधित लड्डू।"),
      images: ["/laddoos/coconut-mahua-laddo.png", "/laddoos/coconut-mahua-laddo1.png"],
      benefits: [
        t("Rich in Fiber", "फाइबर से भरपूर"),
        t("Tropical Taste", "उष्णकटिबंधीय स्वाद"),
        t("Natural Sweetness", "प्राकृतिक मिठास")
      ],
      sizes: [
        { label: "250g", price: 210 },
        { label: "500g", price: 400 },
        { label: "1kg", price: 750 }
      ],
      badge: t("Tropical Delight", "उष्णकटिबंधीय खुशी")
    },
    "ilaichi-mahua-laddoo": {
      name: t("Ilaichi Mahua Laddoo", "इलायची महुआ लड्डू"),
      category: t("Artisanal Laddoos", "कारीगर लड्डू"),
      description: t("Fragrant laddoos infused with aromatic cardamom for a refreshing taste.", "ताज़ा स्वाद के लिए सुगंधित इलायची के साथ सुगंधित लड्डू।"),
      images: ["/laddoos/ilaichi-mahua-laddo.png", "/laddoos/ilaichi-mahua-laddo1.png"],
      benefits: [
        t("Aromatic", "सुगंधित"),
        t("Digestive Benefits", "पाचन लाभ"),
        t("Refreshing Flavour", "ताज़ा स्वाद")
      ],
      sizes: [
        { label: "250g", price: 210 },
        { label: "500g", price: 400 },
        { label: "1kg", price: 750 }
      ],
      badge: t("Fragrant & Fresh", "सुगंधित और ताज़ा")
    },
    "peanut-mahua-laddoo": {
      name: t("Peanut Mahua Laddoo", "मूंगफली महुआ लड्डू"),
      category: t("Artisanal Laddoos", "कारीगर लड्डू"),
      description: t("Crunchy and protein-packed laddoos made with roasted peanuts and mahua.", "भुनी हुई मूंगफली और महुआ से बने कुरकुरे और प्रोटीन युक्त लड्डू।"),
      images: ["/laddoos/peanut-mahua-laddo.png", "/laddoos/peanut-mahua-laddo1.png"],
      benefits: [
        t("Protein Rich", "प्रोटीन युक्त"),
        t("Crunchy Texture", "कुरकुरा बनावट"),
        t("Energy Packed", "ऊर्जा से भरपूर")
      ],
      sizes: [
        { label: "250g", price: 190 },
        { label: "500g", price: 360 },
        { label: "1kg", price: 680 }
      ],
      badge: t("Crunchy Treat", "कुरकुरा उपचार")
    },
    "wild-forest-honey": {
      name: t("Honey", "शहद"),
      category: t("Honey & Nectar", "शहद और नेक्टर"),
      description: t("Pure, unfiltered honey collected from deep forest hives.", "गहरे जंगल के छत्तों से एकत्र किया गया शुद्ध, अनफ़िल्टर्ड शहद।"),
      images: ["/honey.png", "/honey1.png"],
      benefits: [
        t("Immunity Booster", "रोग प्रतिरोधक क्षमता वर्धक"),
        t("Rich in Antioxidants", "एंटीऑक्सीडेंट से भरपूर"),
        t("100% Natural", "100% प्राकृतिक")
      ],
      sizes: [
        { label: "250g", price: 250 },
        { label: "500g", price: 480 },
        { label: "1kg", price: 900 }
      ],
      badge: t("100% Raw & Natural", "100% कच्चा और प्राकृतिक")
    },
    "mahua-nectar": {
      name: t("Nectar", "नेक्टर"),
      category: t("Honey & Nectar", "शहद और नेक्टर"),
      description: t("A unique, sweet nectar derived from the mahua flowers.", "महुआ के फूलों से प्राप्त एक अनोखा, मीठा अमृत।"),
      images: ["/nectar.png", "/nectar1.png"],
      benefits: [
        t("Rich in Minerals", "खनिजों से भरपूर"),
        t("Natural Sweetener", "प्राकृतिक स्वीटनर"),
        t("Energy Booster", "ऊर्जा बूस्टर")
      ],
      sizes: [
        { label: "250g", price: 200 },
        { label: "500g", price: 380 },
        { label: "1kg", price: 720 }
      ],
      badge: t("Forest Reserve", "वन रिजर्व")
    }
  };

  const product = id ? productsData[id] : null;

  const [selectedSizeIdx, setSelectedSizeIdx] = useState<number>(0);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(0);
  const [orderType, setOrderType] = useState<"sample" | "bulk">("sample");
  const [quantity, setQuantity] = useState<number>(1);
  const [formData, setFormData] = useState({ name: "", email: "", contact: "", address: "" });

  useEffect(() => {
    // Reset state when product changes
    setSelectedSizeIdx(0);
    setSelectedImageIdx(0);
    setOrderType("sample");
    setQuantity(1);
    setFormData({ name: "", email: "", contact: "", address: "" });
  }, [id]);

  const handleOrderTypeChange = (type: "sample" | "bulk") => {
    setOrderType(type);
    if (type === "bulk" && quantity < 10) {
      setQuantity(10);
    } else if (type === "sample" && quantity > 5) {
      setQuantity(1);
    }
  };

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (orderType === "bulk") {
      if (newQuantity >= 10) setQuantity(newQuantity);
    } else {
      if (newQuantity >= 1 && newQuantity <= 5) setQuantity(newQuantity);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (product) {
      const selectedSize = product.sizes[selectedSizeIdx].label;
      const message = `*New Order Request*\n\n*Product:* ${product.name}\n*Size:* ${selectedSize}\n*Order Type:* ${orderType === 'bulk' ? 'Bulk Order' : 'Sample Order'}\n*Quantity:* ${quantity}\n*Total Price:* ₹${totalPrice.toLocaleString('en-IN')}\n\n*Customer Details*\n*Name:* ${formData.name}\n*Contact:* ${formData.contact}\n*Email:* ${formData.email}\n*Address:* ${formData.address}`;

      const whatsappUrl = `https://wa.me/918767153572?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-display-sm text-primary mb-4">{t("Product Not Found", "उत्पाद नहीं मिला")}</h1>
        <Link to="/products" className="text-secondary underline">{t("Go back to products", "उत्पादों पर वापस जाएं")}</Link>
      </div>
    );
  }

  const basePrice = product.sizes[selectedSizeIdx].price;
  // Give a 15% discount for bulk orders
  const unitPrice = orderType === "bulk" ? Math.floor(basePrice * 0.85) : basePrice;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Link to="/products" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          {t("Back to Products", "उत्पादों पर वापस जाएं")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Image & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden luxury-shadow p-8 flex items-center justify-center relative aspect-square">
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                    {product.badge}
                  </span>
                </div>
                <img
                  src={product.images[selectedImageIdx]}
                  alt={product.name}
                  className={product.category.includes('Laddoo') || product.category.includes('लड्डू') ? "w-full h-full object-cover rounded-2xl transition-all duration-300" : "max-h-full max-w-full object-contain transition-all duration-300"}
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {product.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      className={`relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all ${selectedImageIdx === idx ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                      <img loading="lazy" decoding="async" src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="text-secondary font-label-bold tracking-widest uppercase mb-2 block">
                {product.category}
              </span>
              <h1 className="text-display-sm md:text-display-md text-primary mb-4">
                {product.name}
              </h1>

              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                {product.description}
              </p>

              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 border-b border-outline-variant/30 pb-2">
                  {t("Key Benefits", "मुख्य लाभ")}
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                      <span className="text-on-surface-variant">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Order Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 luxury-shadow border border-surface-container sticky top-24">
              <h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant/30 pb-4">
                {t("Configure Order", "ऑर्डर कॉन्फ़िगर करें")}
              </h3>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-on-surface-variant mb-3 uppercase tracking-wider">{t("Select Size", "आकार चुनें")}</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((sizeObj: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSizeIdx(idx)}
                      className={`px-6 py-3 rounded-full border font-label-bold transition-all ${idx === selectedSizeIdx
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
                        }`}
                    >
                      {sizeObj.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-on-surface-variant mb-3 uppercase tracking-wider">{t("Order Type", "ऑर्डर का प्रकार")}</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className={`flex-1 flex items-center justify-center gap-2 cursor-pointer p-4 rounded-2xl border transition-all ${orderType === 'sample' ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/50'}`}>
                    <input type="radio" name="orderType" value="sample" checked={orderType === 'sample'} onChange={() => handleOrderTypeChange('sample')} className="hidden" />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${orderType === 'sample' ? 'border-primary' : 'border-outline-variant'}`}>
                      {orderType === 'sample' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`font-bold ${orderType === 'sample' ? 'text-primary' : 'text-on-surface-variant'}`}>{t("Sample Order", "नमूना ऑर्डर")}</span>
                      <span className="text-xs text-on-surface-variant text-center">(Max 5)</span>
                    </div>
                  </label>

                  <label className={`flex-1 flex items-center justify-center gap-2 cursor-pointer p-4 rounded-2xl border transition-all ${orderType === 'bulk' ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/50'}`}>
                    <input type="radio" name="orderType" value="bulk" checked={orderType === 'bulk'} onChange={() => handleOrderTypeChange('bulk')} className="hidden" />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${orderType === 'bulk' ? 'border-primary' : 'border-outline-variant'}`}>
                      {orderType === 'bulk' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`font-bold ${orderType === 'bulk' ? 'text-primary' : 'text-on-surface-variant'}`}>{t("Bulk Order", "थोक ऑर्डर")}</span>
                      <span className="text-xs text-on-surface-variant text-center">(Min 10, 15% Off)</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6 flex items-center justify-between bg-surface-container px-6 py-4 rounded-2xl">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{t("Quantity", "मात्रा")}</label>
                <div className="flex items-center gap-6">
                  <button type="button" onClick={() => handleQuantityChange(-1)} className="text-primary hover:text-primary-fixed disabled:opacity-50 transition-colors" disabled={orderType === 'bulk' ? quantity <= 10 : quantity <= 1}>
                    <span className="material-symbols-outlined text-2xl">remove_circle</span>
                  </button>
                  <span className="font-display-sm text-display-sm text-primary min-w-[2ch] text-center">{quantity}</span>
                  <button type="button" onClick={() => handleQuantityChange(1)} className="text-primary hover:text-primary-fixed disabled:opacity-50 transition-colors" disabled={orderType === 'sample' && quantity >= 5}>
                    <span className="material-symbols-outlined text-2xl">add_circle</span>
                  </button>
                </div>
              </div>

              {/* Price Details */}
              <div className="mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-on-surface-variant">{t("Price per unit", "प्रति इकाई मूल्य")}:</span>
                  <span className="font-bold text-on-surface">₹{unitPrice.toLocaleString('en-IN')}</span>
                </div>
                {orderType === 'bulk' && (
                  <div className="flex justify-between items-center mb-2 text-secondary">
                    <span>{t("Bulk Discount Applied", "थोक छूट लागू")}:</span>
                    <span>-15%</span>
                  </div>
                )}
                <div className="flex justify-between items-end border-t border-primary/20 pt-4 mt-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">{t("Total Price", "कुल कीमत")}:</span>
                  <span className="font-headline-lg text-headline-lg text-primary leading-none">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">{t("Your Details", "आपका विवरण")}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder={t("Full Name", "पूरा नाम")} required className="w-full bg-surface-container px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:outline-none transition-colors" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  <input type="tel" placeholder={t("Contact Number", "संपर्क नंबर")} required className="w-full bg-surface-container px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:outline-none transition-colors" value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })} />
                </div>
                <input type="email" placeholder={t("Email Address", "ईमेल पता")} required className="w-full bg-surface-container px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:outline-none transition-colors" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                <textarea placeholder={t("Delivery Address", "वितरण का पता")} required rows={3} className="w-full bg-surface-container px-4 py-3 rounded-xl border border-outline-variant/30 focus:border-primary focus:outline-none resize-none transition-colors" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })}></textarea>

                <button type="submit" className="w-full bg-primary text-on-primary flex items-center justify-center gap-2 py-4 rounded-xl font-label-bold hover:bg-primary/90 transition-all active:scale-[0.98] text-lg mt-6">
                  {t("Place Order via WhatsApp", "WhatsApp के माध्यम से ऑर्डर दें")}
                  <span className="material-symbols-outlined">send</span>
                </button>
                <p className="text-xs text-on-surface-variant text-center mt-4">
                  {t("By placing this order, you will be redirected to WhatsApp to confirm your request with our team.", "यह ऑर्डर देने पर, आपको हमारी टीम के साथ अपने अनुरोध की पुष्टि करने के लिए WhatsApp पर पुनर्निर्देशित किया जाएगा।")}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
