import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: t("Chef Julian Moore", "शेफ जूलियन मूर"),
      role: t("Executive Chef, Le Petit Chateu", "कार्यकारी शेफ, ले पेटिट चेटू"),
      content: t("The wood-pressed groundnut oil from Chaskilyf has transformed our culinary profile. Its high smoke point and authentic nutty undertones are unmatched in the current market. A truly artisanal product.", "चस्किलाइफ के लकड़ी से दबाए गए मूंगफली के तेल ने हमारे पाक प्रोफाइल को बदल दिया है। इसका उच्च धुआं बिंदु और प्रामाणिक पौष्टिक स्वर वर्तमान बाजार में बेजोड़ हैं। वास्तव में एक कारीगर उत्पाद।"),
      rating: 5
    },
    {
      name: t("Sarah Jenkins", "सारा जेनकिंस"),
      role: t("Nutritionist & Wellness Coach", "पोषण विशेषज्ञ और वेलनेस कोच"),
      content: t("I exclusively recommend Chaskilyf's Virgin Coconut Oil to my clients. The cold-pressed extraction method preserves the medium-chain triglycerides perfectly. You can taste the purity in every spoonful.", "मैं विशेष रूप से अपने ग्राहकों को चस्किलाइफ के वर्जिन कोकोनट ऑयल की सलाह देता हूं। कोल्ड-प्रेस्ड निष्कर्षण विधि मध्यम-श्रृंखला ट्राइग्लिसराइड्स को पूरी तरह से संरक्षित करती है। आप हर चम्मच में शुद्धता का स्वाद ले सकते हैं।"),
      rating: 5
    },
    {
      name: t("Marcus Wei", "मार्कस वेई"),
      role: t("Artisan Baker", "कारीगर बेकर"),
      content: t("Finding consistent, high-quality cold-pressed oils was a challenge until we partnered with Chaskilyf. Their golden sunflower oil brings a lightness to our pastries that our customers constantly praise.", "चस्किलाइफ के साथ साझेदारी करने तक लगातार, उच्च गुणवत्ता वाले कोल्ड-प्रेस्ड तेल खोजना एक चुनौती थी। उनका सुनहरा सूरजमुखी का तेल हमारे पेस्ट्री में एक हल्कापन लाता है जिसकी हमारे ग्राहक लगातार प्रशंसा करते हैं।"),
      rating: 5
    },
    {
      name: t("Elena Rostova", "एलेना रोस्तोवा"),
      role: t("Holistic Health Practitioner", "समग्र स्वास्थ्य व्यवसायी"),
      content: t("The Gingelly Sesame oil is a staple in my practice. The aroma is incredibly rich, and its therapeutic properties are exactly what I look for in a traditional, unrefined oil. Absolutely phenomenal.", "जिंजेली तिल का तेल मेरे अभ्यास में एक प्रधान है। सुगंध अविश्वसनीय रूप से समृद्ध है, और इसके चिकित्सीय गुण वही हैं जो मैं एक पारंपरिक, अपरिष्कृत तेल में ढूंढता हूं। बिल्कुल अभूतपूर्व।"),
      rating: 5
    },
    {
      name: t("David Chen", "डेविड चेन"),
      role: t("Restaurant Owner", "रेस्तरां के मालिक"),
      content: t("We buy in bulk, and the consistency across batches is incredible. The Mustard Oil brings an authentic pungency that is essential for our regional dishes. Delivery is always prompt and professional.", "हम थोक में खरीदते हैं, और बैचों में स्थिरता अविश्वसनीय है। सरसों का तेल एक प्रामाणिक तीखापन लाता है जो हमारे क्षेत्रीय व्यंजनों के लिए आवश्यक है। वितरण हमेशा शीघ्र और पेशेवर होता है।"),
      rating: 5
    },
    {
      name: t("Priya Sharma", "प्रिया शर्मा"),
      role: t("Home Chef", "होम शेफ"),
      content: t("Chaskilyf has brought back the flavors of my childhood. The wood-pressed oils have a depth of flavor that refined oils simply cannot replicate. Knowing it's chemical-free gives me peace of mind.", "चस्किलाइफ मेरे बचपन के स्वाद को वापस ले आया है। लकड़ी से दबाए गए तेलों में स्वाद की गहराई होती है जिसे परिष्कृत तेल बस दोहरा नहीं सकते हैं। यह जानकर कि यह रसायन मुक्त है, मुझे मन की शांति मिलती है।"),
      rating: 5
    }
  ];

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      <main className="pt-32 pb-24 relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-fixed/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">{t("Client Stories", "ग्राहक की कहानियाँ")}</span>
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-6">{t("Testimonials", "प्रशंसापत्र")}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t("Hear from the chefs, nutritionists, and everyday connoisseurs who trust Chaskilyf for their culinary and wellness needs.", "उन शेफ, पोषण विशेषज्ञों और रोजमर्रा के पारखी लोगों से सुनें जो अपनी पाक और कल्याण आवश्यकताओं के लिए चस्किलाइफ पर भरोसा करते हैं।")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg border border-surface-variant hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-secondary-fixed mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-lg text-on-surface mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 border-t border-outline-variant pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md text-headline-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface">{testimonial.name}</h4>
                  <p className="text-sm text-on-surface-variant">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center bg-primary/5 rounded-3xl p-12 border border-primary/10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Experience the Purity", "शुद्धता का अनुभव करें")}</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">{t("Join thousands of satisfied customers who have made the switch to artisanal, cold-pressed oils.", "हजारों संतुष्ट ग्राहकों से जुड़ें जिन्होंने कारीगर, कोल्ड-प्रेस्ड तेलों को अपनाया है।")}</p>
            <Link to="/products" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-bold text-label-bold hover:bg-primary/90 transition-all inline-block shadow-lg shadow-primary/20">
                {t("Explore Our Collection", "हमारे संग्रह का अन्वेषण करें")}
            </Link>
        </div>
      </main>
    </div>
  );
}
