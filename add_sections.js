const fs = require('fs');

const mahuaSteps = [
  { title: "Wild Foraging", title_hi: "जंगली फोरेजिंग", desc: "Our tribal partners carefully handpick fallen Mahua flowers from deep within the forest reserves before dawn.", desc_hi: "हमारे आदिवासी साथी भोर से पहले वन अभ्यारण्यों के भीतर से गिरे हुए महुआ के फूलों को सावधानीपूर्वक चुनते हैं।", icon: "park" },
  { title: "Sun Drying", title_hi: "धूप में सुखाना", desc: "The fresh flowers are naturally sun-dried on clean beds to preserve their nutritional integrity and rich flavor profile.", desc_hi: "ताजे फूलों को उनके पोषण संबंधी अखंडता और समृद्ध स्वाद प्रोफ़ाइल को संरक्षित करने के लिए साफ बिस्तरों पर प्राकृतिक रूप से धूप में सुखाया जाता है।", icon: "light_mode" },
  { title: "Traditional Extraction", title_hi: "पारंपरिक निष्कर्षण", desc: "Using time-honored tribal methods, the dried flowers are processed without chemicals to extract the pure Mahua essence.", desc_hi: "समय-सम्मानित आदिवासी विधियों का उपयोग करते हुए, सूखे फूलों को शुद्ध महुआ सार निकालने के लिए रसायनों के बिना संसाधित किया जाता है।", icon: "agriculture" },
  { title: "Cold Filtration", title_hi: "कोल्ड निस्पंदन", desc: "The extract undergoes a gravity-fed cold filtration process to remove impurities while retaining beneficial enzymes.", desc_hi: "अर्क लाभकारी एंजाइमों को बनाए रखते हुए अशुद्धियों को दूर करने के लिए गुरुत्वाकर्षण-आधारित कोल्ड निस्पंदन प्रक्रिया से गुजरता है।", icon: "filter_alt" },
  { title: "Quality Assurance", title_hi: "गुणवत्ता आश्वासन", desc: "Each batch is tested for purity, moisture content, and authentic aroma to meet our stringent standards.", desc_hi: "प्रत्येक बैच का हमारे कड़े मानकों को पूरा करने के लिए शुद्धता, नमी सामग्री और प्रामाणिक सुगंध के लिए परीक्षण किया जाता है।", icon: "verified" },
  { title: "Sealed Freshness", title_hi: "सीलबंद ताजगी", desc: "Packaged in eco-friendly bottles, ensuring the Mahua's natural goodness is delivered straight to your home.", desc_hi: "पर्यावरण के अनुकूल बोतलों में पैक किया गया, यह सुनिश्चित करते हुए कि महुआ की प्राकृतिक अच्छाई सीधे आपके घर तक पहुंचाई जाए।", icon: "inventory_2" }
];

const honeySteps = [
  { title: "Deep Forest Sourcing", title_hi: "गहरे जंगल की सोर्सिंग", desc: "We source our honey from wild bee colonies thriving in untouched, pesticide-free forest environments.", desc_hi: "हम अपना शहद अछूते, कीटनाशक मुक्त जंगल के वातावरण में पनपने वाली जंगली मधुमक्खी कॉलोनियों से प्राप्त करते हैं।", icon: "forest" },
  { title: "Sustainable Harvesting", title_hi: "सतत संचयन", desc: "Skilled tribal honey gatherers use ethical harvesting methods that protect the bees and their natural habitat.", desc_hi: "कुशल आदिवासी शहद इकट्ठा करने वाले नैतिक संचयन विधियों का उपयोग करते हैं जो मधुमक्खियों और उनके प्राकृतिक आवास की रक्षा करते हैं।", icon: "eco" },
  { title: "Raw & Unheated", title_hi: "कच्चा और बिना गरम किया हुआ", desc: "Our honey is never pasteurized or subjected to high heat, preserving all natural pollens, enzymes, and antioxidants.", desc_hi: "हमारा शहद कभी पाश्चुरीकृत या उच्च गर्मी के अधीन नहीं होता है, जो सभी प्राकृतिक पराग, एंजाइम और एंटीऑक्सिडेंट को संरक्षित करता है।", icon: "thermostat" },
  { title: "Natural Straining", title_hi: "प्राकृतिक छानना", desc: "The raw honey is gently passed through natural cloth filters to remove beeswax and debris without chemical processing.", desc_hi: "रासायनिक प्रसंस्करण के बिना मोम और मलबे को हटाने के लिए कच्चे शहद को प्राकृतिक कपड़े के फिल्टर से धीरे से गुजारा जाता है।", icon: "opacity" },
  { title: "Purity Testing", title_hi: "शुद्धता परीक्षण", desc: "Every batch is verified in our labs to ensure zero added sugars, adulterants, or artificial flavors.", desc_hi: "शून्य अतिरिक्त शर्करा, मिलावट या कृत्रिम स्वादों को सुनिश्चित करने के लिए हमारे प्रयोगशालाओं में हर बैच का सत्यापन किया जाता है।", icon: "biotech" },
  { title: "Glass Bottling", title_hi: "ग्लास बॉटलिंग", desc: "We use premium glass jars for packaging to prevent contamination and maintain the honey's pristine quality.", desc_hi: "हम संदूषण को रोकने और शहद की प्राचीन गुणवत्ता को बनाए रखने के लिए पैकेजिंग के लिए प्रीमियम कांच के जार का उपयोग करते हैं।", icon: "kitchen" }
];

function generateTimelineHTML(title, titleHi, steps) {
  let html = `
      <section className="py-20 md:py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-20">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("${title}", "${titleHi}")}</h2>
            <div className="w-24 h-1 bg-secondary-container rounded-full"></div>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30 transform -translate-x-1/2"></div>
            {/* Steps */}
            <div className="space-y-24">
`;

  steps.forEach((step, index) => {
    const isLeft = index % 2 === 0;
    const flexDirection = isLeft ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse';
    const textClass = isLeft 
      ? 'w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right' 
      : 'w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left';
    const imgClass = isLeft 
      ? 'w-full pl-20 md:w-1/2' 
      : 'w-full pl-20 md:pl-0 md:w-1/2 md:pr-20';
    const bgClass = isLeft ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary';

    html += `
              {/* Step ${index + 1} */}
              <div className="relative flex ${flexDirection} items-center group">
                <div className="${textClass}">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("${step.title}", "${step.title_hi}")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("${step.desc}", "${step.desc_hi}")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 ${bgClass} rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">${step.icon}</span>
                </div>
                <div className="${imgClass}">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="${step.title}" src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=800&auto=format&fit=crop" />
                  </div>
                </div>
              </div>
`;
  });

  html += `            </div>
          </div>
        </div>
      </section>
`;
  return html;
}

const mahuaHTML = generateTimelineHTML("Mahua: From Forest to Feast", "महुआ: जंगल से दावत तक", mahuaSteps);
const honeyHTML = generateTimelineHTML("Nectar & Honey: Pure & Untouched", "नेक्टर और शहद: शुद्ध और अछूता", honeySteps);

const content = fs.readFileSync('/home/anonymous/Downloads/chasvlyf-main/src/pages/Manufacturing.tsx', 'utf8');

// Find the end of the Oils section (around line 153)
const splitToken = "      {/* Kachi Ghani vs. Refined Section */}";
if (content.includes(splitToken)) {
  const parts = content.split(splitToken);
  const newContent = parts[0] + mahuaHTML + "\n" + honeyHTML + "\n" + splitToken + parts[1];
  fs.writeFileSync('/home/anonymous/Downloads/chasvlyf-main/src/pages/Manufacturing.tsx', newContent);
  console.log("Successfully inserted sections");
} else {
  console.error("Could not find insertion point");
}
