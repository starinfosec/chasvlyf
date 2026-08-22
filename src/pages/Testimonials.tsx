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
      name: "Rahul Sharma",
      role: t("Verified Customer", "सत्यापित ग्राहक"),
      content: t("The mustard oil is very pure, just like the oil we used to get in our village. Strongly recommended for daily cooking.", "सरसों का तेल बहुत शुद्ध है, बिल्कुल वैसा ही जैसा हमें गाँव में मिलता था। रोजमर्रा के खाना पकाने के लिए दृढ़ता से अनुशंसित।"),
      rating: 5
    },
    {
      name: "Priya Patel",
      role: t("Verified Customer", "सत्यापित ग्राहक"),
      content: t("Tried their Mahua laddoos for the first time. The taste is incredibly authentic and my kids loved the chocolate variant!", "पहली बार उनके महुआ लड्डू का प्रयास किया। स्वाद अविश्वसनीय रूप से प्रामाणिक है और मेरे बच्चों को चॉकलेट संस्करण बहुत पसंद आया!"),
      rating: 5
    },
    {
      name: "Amit Deshmukh",
      role: t("Verified Customer", "सत्यापित ग्राहक"),
      content: t("I've switched completely to their cold-pressed peanut oil. The aroma while cooking is amazing and it feels much healthier.", "मैं पूरी तरह से उनके कोल्ड-प्रेस्ड मूंगफली के तेल पर आ गया हूँ। खाना पकाते समय सुगंध अद्भुत होती है और यह बहुत स्वस्थ लगता है।"),
      rating: 5
    },
    {
      name: "Neha Gupta",
      role: t("Verified Customer", "सत्यापित ग्राहक"),
      content: t("Very fast delivery and the packaging of the glass bottles is excellent. The flaxseed oil has become a staple in our salads.", "बहुत तेज़ डिलीवरी और कांच की बोतलों की पैकेजिंग उत्कृष्ट है। अलसी का तेल हमारे सलाद में एक प्रमुख बन गया है।"),
      rating: 5
    },
    {
      name: "Sanjay Kumar",
      role: t("Verified Customer", "सत्यापित ग्राहक"),
      content: t("Chaskilyf's sesame oil reminds me of my grandmother's recipes. Pure, thick, and very aromatic. Excellent quality.", "चस्किलाइफ का तिल का तेल मुझे मेरी दादी के व्यंजनों की याद दिलाता है। शुद्ध, गाढ़ा और बहुत सुगंधित। उत्कृष्ट गुणवत्ता।"),
      rating: 5
    },
    {
      name: "Anjali Verma",
      role: t("Verified Customer", "सत्यापित ग्राहक"),
      content: t("The Mahua nectar is a fantastic alternative to sugar. Pure forest freshness. Will definitely buy again.", "महुआ अमृत चीनी का एक शानदार विकल्प है। शुद्ध वन ताजगी। निश्चित रूप से फिर से खरीदूंगी।"),
      rating: 5
    }
  ];

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      <main className="pt-32 pb-24 relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-fixed/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">{t("Customer Reviews", "ग्राहक समीक्षा")}</span>
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-6">{t("What Our Customers Say", "हमारे ग्राहक क्या कहते हैं")}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t("Real stories and experiences from families who have chosen purity, tradition, and health with Chaskilyf.", "उन परिवारों की वास्तविक कहानियाँ और अनुभव जिन्होंने चस्किलाइफ के साथ शुद्धता, परंपरा और स्वास्थ्य को चुना है।")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg border border-surface-variant hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="flex text-secondary-fixed mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-lg text-on-surface mb-8 italic flex-grow">"{testimonial.content}"</p>
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

        <div className="mt-16 flex flex-col items-center justify-center space-y-6">
          <p className="font-body-md text-on-surface-variant text-center max-w-md">{t("Have you tried our products? We would love to hear your feedback!", "क्या आपने हमारे उत्पादों को आजमाया है? हमें आपकी प्रतिक्रिया सुनना अच्छा लगेगा!")}</p>
          <a href="https://g.page/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-full font-label-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-200">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
            {t("Review us on Google", "हमें गूगल पर रेट करें")}
          </a>
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
