export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tamilName?: string;
  category: "Kalari Therapies" | "Ayurvedic Treatments" | "Rehabilitation & Pain Care";
  shortDescription: string;
  fullDescription: string;
  purpose: string;
  sessionInvolves: string[];
  duration: string;
  recommendedCourse: string;
  suitableFor: string[];
  contraindications?: string[];
  preparationInstructions: string[];
  pricingNote: string;
  image: string;
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface WellnessProgram {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  category: string;
  overview: string;
  idealFor: string[];
  inclusions: string[];
  exclusions: string[];
  scheduleOutline: string[];
  pricingNote: string;
  image: string;
  badge?: string;
  confirmationNotice?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Treatments" | "Sanctuary" | "Herbal Traditions" | "Pollachi Heritage";
  image: string;
  caption: string;
  alt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Treatments" | "Appointments & Bookings" | "Facilities & Guidelines" | "Location & Travel";
}

export const BUSINESS_INFO = {
  name: "Prathama Kalari Wellness Retreat",
  shortName: "Prathama Kalari",
  regionalName: "ப்ரதமா களரி வல்னஸ் ரிட்ரீட்",
  tagline: "Authentic Kalari Healing, Marma Chikitsa & Traditional Ayurveda",
  subTagline: "A tranquil sanctuary for rejuvenation, musculoskeletal restoration, and ancient South Indian holistic health in Pollachi.",
  phone: "+91 93448 82346",
  displayPhone: "+91 93448 82346",
  whatsappNumber: "919344882346",
  email: "enquiries@prathamawellness.com",
  instagram: "https://www.instagram.com/prathamawellness/",
  instagramHandle: "@prathamawellness",
  address: {
    line1: "51, Railway Station Road",
    landmark: "Opposite Pollachi Railway Station",
    city: "Pollachi",
    state: "Tamil Nadu",
    pincode: "642001",
    country: "India",
    full: "51, Railway Station Road (Opposite Railway Station), Pollachi, Tamil Nadu 642001, India",
  },
  openingHours: [
    { day: "Monday", hours: "7:00 AM – 6:00 PM", status: "Verified Business Hours" },
    { day: "Tuesday", hours: "7:00 AM – 6:00 PM", status: "Standard Hours (Confirm with Retreat)" },
    { day: "Wednesday", hours: "7:00 AM – 6:00 PM", status: "Standard Hours (Confirm with Retreat)" },
    { day: "Thursday", hours: "7:00 AM – 6:00 PM", status: "Standard Hours (Confirm with Retreat)" },
    { day: "Friday", hours: "7:00 AM – 6:00 PM", status: "Standard Hours (Confirm with Retreat)" },
    { day: "Saturday", hours: "7:00 AM – 6:00 PM", status: "Standard Hours (Confirm with Retreat)" },
    { day: "Sunday", hours: "Prior Appointment Only", status: "Advance Reservation Advised" },
  ],
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=51+Railway+Station+Road+Pollachi+Tamil+Nadu+642001",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8973685324546!2d77.0041235!3d10.6596145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84f23bdf2292f%3A0xe54e7d95da8a09ee!2sRailway%20Station%20Rd%2C%20Pollachi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: "chavitti-uzhichil",
    slug: "kalari-chavitti-uzhichil",
    title: "Kalari Chavitti Uzhichil",
    tamilName: "களரி சவட்டி உழிச்சல்",
    category: "Kalari Therapies",
    shortDescription: "Traditional rope-assisted foot bodywork that stretches muscle fibers, aligns the spine, and releases deep structural tension.",
    fullDescription: "Kalari Chavitti Uzhichil is an ancient specialty of the South Indian Kalari lineage. The therapist holds onto strong ropes suspended from the wooden ceiling to calibrate body weight and deliver smooth, rhythmic, deep-tissue strokes using the feet along major muscular meridians.",
    purpose: "Designed to release chronic structural stiffness, enhance physical flexibility, decompress the lumbar and thoracic spine, and restore optimal blood flow throughout large muscle groups.",
    sessionInvolves: [
      "Initial assessment of physical posture and flexibility",
      "Application of warmed herbal medicated oils formulated for tendon and ligament nourishment",
      "Rope-assisted rhythmic long-stroke foot application across the back, spine, legs, and hips",
      "Targeted pressure along kinetic body chains to unlock tightness",
      "Herbal hot water towel compress or transition to gentle steam bath",
    ],
    duration: "60 to 75 minutes per session",
    recommendedCourse: "3 to 7 consecutive sessions for chronic stiffness; individual sessions for rejuvenation",
    suitableFor: [
      "Individuals experiencing chronic back stiffness and postural fatigue",
      "Athletes, martial artists, dancers, and sports professionals needing mobility restoration",
      "Sedentary desk workers suffering from tight hamstrings, hip flexors, and lower back tension",
      "Those seeking authentic Kerala-tradition full-body decompression",
    ],
    contraindications: [
      "Recent spinal surgery or active fractures",
      "Acute infectious fever or severe cardiovascular conditions",
      "Pregnancy",
    ],
    preparationInstructions: [
      "Avoid eating heavy meals within 2 hours prior to the session",
      "Wear comfortable loose clothing",
      "Inform the practitioner about any past surgeries, disc issues, or injuries during consultation",
    ],
    pricingNote: "Custom pricing per session or discounted course packages available upon consultation.",
    image: "/images/chavitti-uzhichil.jpg",
    featured: true,
    faqs: [
      {
        question: "Is Chavitti Uzhichil painful?",
        answer: "While the strokes are deep and firm, our skilled practitioners regulate their pressure precisely using ceiling-suspended ropes. Most guests experience profound relaxation and immediate spinal decompression.",
      },
      {
        question: "What medicated oils are used?",
        answer: "We prepare and use authentic traditional herbal oils tailored to your body constitution, muscle tightness, and joint condition.",
      },
    ],
  },
  {
    id: "marma-chikitsa",
    slug: "marma-chikitsa",
    title: "Marma Chikitsa & Vital Point Healing",
    tamilName: "வர்ம / மர்ம சிகிச்சை",
    category: "Kalari Therapies",
    shortDescription: "Specialized pressure-point therapy targeting the body's 107 vital energy points (marmas) to relieve acute pain and restore functional balance.",
    fullDescription: "Rooted in ancient Kalari and Siddha-Ayurveda traditions, Marma Chikitsa works with the 107 anatomical junction points where muscle, vein, ligament, bone, and joint intersect. By gently manipulating blocked or traumatized marma points with specific medicinal oils and calibrated manual pressure, the nervous system recalibrates and systemic pain subsides.",
    purpose: "To relieve musculoskeletal blockages, alleviate sciatica, frozen shoulder, migraine, cervical spondylosis, and re-establish natural energy circulation.",
    sessionInvolves: [
      "Thorough evaluation of tender points, pain patterns, and range of motion",
      "Localized application of concentrated herbal thailams (medicated oils)",
      "Precise finger and thumb manipulation of specific marma junctions",
      "Gentle joint articulation and nervous system harmonization",
      "Therapeutic rest and post-session guidelines",
    ],
    duration: "45 to 60 minutes",
    recommendedCourse: "5 to 10 sessions depending on the chronicity of the injury or condition",
    suitableFor: [
      "Sciatica and radiating nerve pain",
      "Cervical spondylosis and frozen shoulder",
      "Chronic lower back pain and lumbar disc discomfort",
      "Repetitive strain injuries, tennis elbow, and joint stiffness",
    ],
    preparationInstructions: [
      "Arrive 10 minutes before the scheduled time to discuss medical history",
      "Bring any existing MRI or X-ray reports if you are being evaluated for disc or joint issues",
    ],
    pricingNote: "Evaluation and session rates are provided upon initial assessment.",
    image: "/images/marma-chikitsa.jpg",
    featured: true,
    faqs: [
      {
        question: "How does Marma Chikitsa differ from general massage?",
        answer: "General massage relaxes superficial muscles, whereas Marma Chikitsa is a targeted clinical healing discipline that directly stimulates neuro-vascular intersections to trigger natural self-repair mechanisms.",
      },
    ],
  },
  {
    id: "shirodhara",
    slug: "shirodhara",
    title: "Ayurvedic Shirodhara",
    tamilName: "ஆயுர்வேத சிரோதாரா",
    category: "Ayurvedic Treatments",
    shortDescription: "A rhythmic, continuous stream of warm medicated herbal oil gently poured onto the forehead to soothe the central nervous system.",
    fullDescription: "Shirodhara is one of Ayurveda's most revered therapeutic rituals. A specially formulated warm herbal oil (or medicated milk/buttermilk depending on constitution) is poured in a continuous, oscillation across the forehead (Ajna chakra). This stimulates the hypothalamus and induces a deep parasympathetic state.",
    purpose: "Proven relaxation for chronic stress, insomnia, anxiety, tension headaches, burnout, and mental fatigue.",
    sessionInvolves: [
      "Gentle head and shoulder massage with calming oils",
      "Comfortable positioning on a traditional carved neem-wood Droni",
      "Continuous steady pouring of warm medicated herbal oil via a hanging bronze dharapatra",
      "Gentle scalp wiping and peaceful relaxation period in serene ambient silence",
    ],
    duration: "50 to 60 minutes",
    recommendedCourse: "3, 5, or 7 consecutive days for lasting nervous system restoration",
    suitableFor: [
      "Chronic insomnia and interrupted sleep cycles",
      "Mental exhaustion, high-stress executives, and corporate burnout",
      "Tension headaches and anxiety symptoms",
      "Neurological calming and overall vitality enhancement",
    ],
    preparationInstructions: [
      "Wash your hair cleanly on the morning of the treatment without heavy synthetic chemicals",
      "Keep the remainder of your treatment day calm and free from intensive screens or travel",
    ],
    pricingNote: "Available as single sessions or multi-day calming packages.",
    image: "/images/shirodhara.jpg",
    featured: true,
    faqs: [
      {
        question: "Can I take a bath immediately after Shirodhara?",
        answer: "We recommend letting the nourishing medicinal oil absorb for at least 30 to 45 minutes before a gentle warm-water wash.",
      },
    ],
  },
  {
    id: "kizhi-therapy",
    slug: "kizhi-therapy",
    title: "Kizhi Herbal Poultice Therapy",
    tamilName: "கிழி ஒத்தடம் (இலைக்கிழி & பொடிக்கிழி)",
    category: "Ayurvedic Treatments",
    shortDescription: "Warm linen boluses filled with therapeutic medicinal herbs and powders, rhythmically patted over inflamed joints and tight muscles.",
    fullDescription: "Kizhi (swedana fomentation) uses custom-made linen pouches packed with medicinal leaves (Elakizhi) or therapeutic botanical powders and minerals (Podikizhi). Dipped in hot herbal decoctions or oils, these poultices deliver deep convective heat and herbal phytonutrients directly into deep tissues.",
    purpose: "Reduces acute and chronic joint inflammation, eases arthritis, breaks down metabolic stiffness, and relieves swelling.",
    sessionInvolves: [
      "Selection of specialized herbal formulation (Elakizhi for pain/swelling, Podikizhi for stiff joints and heaviness)",
      "Preparation of fresh warm medicated oil pan",
      "Rhythmic heated application of boluses along affected areas and the entire spine",
      "Gentle lymphatic drainage and herbal warmth retention",
    ],
    duration: "50 to 60 minutes",
    recommendedCourse: "5 to 7 days for sustained relief from arthritis and spinal stiffness",
    suitableFor: [
      "Osteoarthritis and rheumatic joint pain",
      "Lumbar stiffness and morning spinal rigidity",
      "Post-traumatic swelling and muscular spasms",
      "Inflammatory conditions without acute skin breakage",
    ],
    preparationInstructions: [
      "Drink warm water prior to the session to aid gentle perspiration",
      "Inform the therapist about any skin allergies or sensitive areas",
    ],
    pricingNote: "Packages tailored to individual condition requirements.",
    image: "/images/kizhi-therapy.jpg",
    featured: true,
    faqs: [
      {
        question: "What is the difference between Podikizhi and Elakizhi?",
        answer: "Elakizhi uses freshly chopped medicinal leaves (like castor, neem, and tamarind) primarily for muscular spasm and pain, whereas Podikizhi uses dry medicinal herbal powders to reduce swelling, heaviness, and stiffness.",
      },
    ],
  },
  {
    id: "traditional-uzhichil",
    slug: "traditional-uzhichil",
    title: "Traditional Kai Uzhichil (Herbal Oil Massage)",
    tamilName: "கை உழிச்சல் (மூலிகை எண்ணெய் சிகிச்சை)",
    category: "Kalari Therapies",
    shortDescription: "Authentic full-body herbal oil therapy performed with rhythmic hand strokes along venous and arterial circulation pathways.",
    fullDescription: "Kai Uzhichil is the foundational healing massage of the Kerala-Tamil Nadu tradition. Utilizing generous amounts of warm, herb-infused sesame and medicinal oils, the practitioner applies harmonized pressure to rejuvenate dry tissues, improve lymphatic drainage, and strengthen muscle tone.",
    purpose: "General body rejuvenation, deep relaxation, improved skin health, and removal of physical fatigue.",
    sessionInvolves: [
      "Warm herbal oil application from neck to feet",
      "Synchronized long strokes following cardiovascular blood flow direction",
      "Abdominal, spinal, and extremity nourishment",
      "Warm compress or steam bath accompaniment",
    ],
    duration: "60 minutes",
    recommendedCourse: "Regular weekly or monthly maintenance session, or as part of a multi-day retreat",
    suitableFor: [
      "General fatigue, lethargy, and physical tiredness",
      "Dry skin and sluggish blood circulation",
      "Routine self-care and holistic wellness enthusiasts",
    ],
    preparationInstructions: [
      "Hydrate well with warm water throughout the day",
      "Wear casual clothing suitable for oil therapy",
    ],
    pricingNote: "Session rates available on request.",
    image: "/images/traditional-uzhichil.jpg",
    featured: false,
    faqs: [
      {
        question: "Are the oils custom formulated?",
        answer: "Yes, our oils are prepared following classical recipes using cold-pressed bases and handpicked botanicals.",
      },
    ],
  },
  {
    id: "sports-injury-care",
    slug: "sports-injury-care",
    title: "Kalari Sports Injury & Musculoskeletal Rehab",
    tamilName: "விளையாட்டுக் காயங்கள் மற்றும் மூட்டு மறுவாழ்வு",
    category: "Rehabilitation & Pain Care",
    shortDescription: "Targeted Kalari-marma protocols for sprains, muscle tears, tendon strains, ligament instability, and mobility rehabilitation.",
    fullDescription: "Centuries of martial arts practice have given Kalari practitioners unparalleled mastery over acute trauma, sprains, joint dislocations, and muscle tears. Our sports injury program merges traditional Kalari bandaging, marma manipulation, and herbal poultices to speed up tissue healing and restore functional joint stability.",
    purpose: "Rapid reduction of post-injury edema, scar tissue mobilization, joint stabilization, and safe return to physical activity.",
    sessionInvolves: [
      "Anatomical assessment of the injured joint and kinetic chain",
      "Application of specific traditional herbal pastes (lepa / kettu)",
      "Gentle mobilization and marma alignment without forceful cracking",
      "Home guidance and progressive movement recommendations",
    ],
    duration: "45 to 60 minutes",
    recommendedCourse: "Tailored to severity; typically 3 to 10 treatment sessions",
    suitableFor: [
      "Ankle sprains, knee ligament strains, and hamstring pulls",
      "Tennis elbow, golfer's elbow, and rotator cuff strain",
      "Gym-goers, runners, martial artists, and recreational athletes",
    ],
    preparationInstructions: [
      "Bring diagnostic scans (X-ray, MRI, ultrasound) if available",
      "Do not take heavy painkillers immediately prior to assessment so genuine sensation can be assessed",
    ],
    pricingNote: "Evaluated on a case-by-case basis depending on injury complexity.",
    image: "/images/sports-injury-rehab.jpg",
    featured: false,
    faqs: [
      {
        question: "Can older or chronic sports injuries be treated?",
        answer: "Yes. Many chronic injuries have residual scar tissue, chronic stiffness, or compensatory muscle tightness that responds very well to Kalari marma release.",
      },
    ],
  },
  {
    id: "herbal-steam-bath",
    slug: "herbal-steam-bath",
    title: "Bashpa Sweda (Traditional Herbal Steam)",
    tamilName: "பாஷ்ப ஸ்வேதம் (மூலிகை ஆவிக்குளியல்)",
    category: "Ayurvedic Treatments",
    shortDescription: "Enclosed aromatic wooden steam chamber infused with healing eucalyptus, neem, and medicinal herbal decoctions.",
    fullDescription: "Bashpa Sweda is a classic Ayurvedic therapeutic sweating method. The guest sits inside a handcrafted wooden chamber with the head resting comfortably outside in cool ambient air, while aromatic herbal steam warms the body, opens pores, and mobilizes deep cellular toxins for elimination.",
    purpose: "Detoxification, improved metabolic circulation, skin radiance, and muscular relaxation.",
    sessionInvolves: [
      "Gentle pre-steam oil massage",
      "15 to 20 minutes in the aromatic wooden herbal steam box",
      "Cooling damp towel for forehead comfort",
      "Post-steam herbal decoction drink and warm shower",
    ],
    duration: "25 to 35 minutes",
    recommendedCourse: "Ideally combined immediately following Chavitti Uzhichil, Kizhi, or Kai Uzhichil",
    suitableFor: [
      "General detoxification and fluid retention relief",
      "Muscular aches and stiffness after travel or workouts",
      "Complementary therapy following oil treatments",
    ],
    preparationInstructions: [
      "Stay hydrated before entering the steam chamber",
      "Inform staff if you experience claustrophobia or heat sensitivity",
    ],
    pricingNote: "Available as an add-on or integrated into wellness packages.",
    image: "/images/herbal-steam-bath.jpg",
    featured: false,
    faqs: [
      {
        question: "Why does the head remain outside the steam box?",
        answer: "In classical Ayurveda, keeping the head and eyes cool during whole-body heat therapy protects delicate sensory faculties and avoids dizziness.",
      },
    ],
  },
  {
    id: "nasya-therapy",
    slug: "nasya-therapy",
    title: "Nasya & Sinus Decongestion",
    tamilName: "நஸ்யம் (சுவாசப்பாதை & சைனஸ் சிகிச்சை)",
    category: "Ayurvedic Treatments",
    shortDescription: "Therapeutic administration of herbal medicated drops through the nasal passageways to clear sinuses and head congestion.",
    fullDescription: "In classical Ayurveda, the nasal passage is considered the gateway to the head and sensory organs. Nasya involves gentle facial steam, targeted marma massage around the sinuses, followed by the instillation of purified medicinal herbal oils.",
    purpose: "Clears chronic sinus blockages, alleviates tension headaches, improves respiratory ease, and relieves neck and shoulder stiffness.",
    sessionInvolves: [
      "Gentle localized facial oil application and herbal facial steam",
      "Targeted stimulation of facial marma points",
      "Administration of warm medicated herbal drops into nostrils",
      "Warm gargle and expulsion of mobilized mucous",
    ],
    duration: "30 to 45 minutes",
    recommendedCourse: "3 to 7 days for chronic sinusitis or migraine tendencies",
    suitableFor: [
      "Chronic sinusitis, seasonal rhinitis, and nasal congestion",
      "Migraines, tension headaches, and heaviness in the head",
      "Tension in the jaw, neck, and upper cervical vertebrae",
    ],
    preparationInstructions: [
      "Avoid cold water showers or heavy meals right before the session",
      "Avoid exposure to strong artificial air conditioning immediately after",
    ],
    pricingNote: "Consultation-based pricing.",
    image: "/images/kizhi-therapy.jpg",
    featured: false,
    faqs: [
      {
        question: "Is Nasya safe for beginners?",
        answer: "Yes, when conducted by trained practitioners using mild, high-purity classical oils such as Anu Thailam.",
      },
    ],
  },
];

export const WELLNESS_PROGRAMS: WellnessProgram[] = [
  {
    id: "rejuvenation-detox",
    slug: "rejuvenation-detox-program",
    title: "Pancha Prana Rejuvenation & Detox",
    tagline: "Comprehensive traditional rejuvenation for vitality, immune strength, and mental reset.",
    duration: "3, 7, or 14 Days",
    category: "Holistic Rejuvenation",
    overview: "A structured retreat schedule combining authentic daily oil therapies, herbal steam, gentle movement, and mindful rest under the tranquil skies of Pollachi.",
    idealFor: [
      "Individuals experiencing chronic exhaustion and nervous burnout",
      "Those looking for a complete physiological reset and herbal detox",
      "Visitors wanting to immerse themselves in authentic Tamil Nadu wellness traditions",
    ],
    inclusions: [
      "Initial consultation and personalized dosha/health assessment",
      "Daily prescribed therapies (Kai Uzhichil, Kizhi, or Shirodhara as appropriate)",
      "Daily Bashpa Sweda (Herbal Steam Session)",
      "Fresh therapeutic herbal teas and decoctions",
      "Personalized post-retreat lifestyle and dietary guidelines",
    ],
    exclusions: [
      "Allopathic prescription medications",
      "Off-site personal transportation (can be arranged on request)",
    ],
    scheduleOutline: [
      "Morning: Assessment, herbal infusion, and primary therapeutic treatment",
      "Midday: Rest, light nourishing diet, and quiet retreat ambiance",
      "Late Afternoon: Secondary gentle therapy or herbal steam bath",
      "Evening: Calming herbal tea and restorative relaxation",
    ],
    pricingNote: "Custom quote provided based on requested duration and personalized requirements.",
    image: "/images/hero-sanctuary.jpg",
    badge: "Popular Program",
    confirmationNotice: "Note for guests: Specific day-by-day regimens and accommodation options are verified directly by retreat management upon enquiry.",
  },
  {
    id: "pain-mobility-care",
    slug: "kalari-marma-pain-mobility",
    title: "Kalari Marma Pain & Spinal Care Program",
    tagline: "Intensive musculoskeletal restoration for back, neck, sciatica, and joint disorders.",
    duration: "5 or 10 Days",
    category: "Pain Relief & Mobility",
    overview: "Focused specifically on chronic back pain, disc issues, sciatica, stiff necks, and joint immobility using time-tested Kalari Chavitti Uzhichil and precise Marma manipulation.",
    idealFor: [
      "Chronic lower back pain and sciatica sufferers",
      "Cervical spondylosis and frozen shoulder",
      "Athletes recovering from recurring tendon or muscle injuries",
      "Individuals seeking non-invasive natural structural rehabilitation",
    ],
    inclusions: [
      "Daily targeted Marma Chikitsa session",
      "Daily Chavitti Uzhichil or Kizhi therapy as clinically indicated",
      "Herbal hot compress and medicated oil fomentation",
      "Personalized posture and therapeutic joint mobility exercises",
      "Direct follow-up instructions from the master practitioner",
    ],
    exclusions: [
      "Surgery or invasive procedures",
      "Unrelated chronic medical tests",
    ],
    scheduleOutline: [
      "Day 1-2: Muscular tension release and gentle inflammation reduction",
      "Day 3-5: Deep structural work, rope-assisted foot strokes, and marma realignment",
      "Day 6-10 (Extended): Stabilization, strengthening guidance, and preventive movement",
    ],
    pricingNote: "Quotations provided after preliminary case review.",
    image: "/images/sports-injury-rehab.jpg",
    badge: "Specialist Care",
    confirmationNotice: "Please share prior medical reports with our team for precise program scheduling.",
  },
  {
    id: "stress-mental-calm",
    slug: "manasa-shanti-stress-reset",
    title: "Manasa Shanti: Deep Mental Reset",
    tagline: "Unwind nervous exhaustion through consecutive Shirodhara and restorative therapies.",
    duration: "3 or 5 Days",
    category: "Stress & Sleep Healing",
    overview: "Tailored for overworked minds, chronic insomnia, and sensory overload. Designed to bring the sympathetic nervous system into deep stillness.",
    idealFor: [
      "High-stress professionals and corporate leaders",
      "Individuals experiencing chronic sleep fragmentation",
      "Anyone seeking a quiet sanctuary to pause, breathe, and heal",
    ],
    inclusions: [
      "Daily Shirodhara with specialized herbal oils",
      "Head, neck, and shoulder marma soothing massage",
      "Quiet herbal retreat rest sessions",
      "Mindfulness breathing recommendations",
    ],
    exclusions: [
      "Intensive physical training",
    ],
    scheduleOutline: [
      "Morning: Calming herbal decoction and head/neck preparation",
      "Forenoon: 60-minute Shirodhara and deep relaxation",
      "Afternoon: Rest in quiet natural surroundings without electronic screens",
    ],
    pricingNote: "Contact us via WhatsApp or Enquiry Form for custom group and individual rates.",
    image: "/images/shirodhara.jpg",
    badge: "Restorative",
    confirmationNotice: "Advance booking recommended due to limited daily Shirodhara slots.",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "1",
    title: "Authentic Healing Sanctuary",
    category: "Sanctuary",
    image: "/images/hero-sanctuary.jpg",
    caption: "Hand-carved wooden droni tables, brass oil vessels, and fresh blooms inside our authentic Pollachi sanctuary.",
    alt: "Prathama Kalari treatment room with traditional wooden droni table and brass urlis",
  },
  {
    id: "2",
    title: "Kalari Chavitti Uzhichil",
    category: "Treatments",
    image: "/images/chavitti-uzhichil.jpg",
    caption: "Authentic rope-assisted foot massage delivering deep muscle decompression and spinal alignment.",
    alt: "Kalari practitioner performing Chavitti Uzhichil using overhead ropes on wooden droni",
  },
  {
    id: "3",
    title: "Ayurvedic Shirodhara",
    category: "Treatments",
    image: "/images/shirodhara.jpg",
    caption: "A continuous flow of warm medicated herbal oil soothing the nervous system.",
    alt: "Guest receiving Ayurvedic Shirodhara therapy with bronze hanging vessel",
  },
  {
    id: "4",
    title: "Herbal Kizhi Poultices",
    category: "Herbal Traditions",
    image: "/images/kizhi-therapy.jpg",
    caption: "Freshly prepared linen boluses infused with neem, tulsi, and therapeutic medicinal oils.",
    alt: "Herbal poultice boluses prepared for Kizhi therapy in bronze vessel with fresh herbs",
  },
  {
    id: "5",
    title: "Marma Chikitsa Point Healing",
    category: "Treatments",
    image: "/images/marma-chikitsa.jpg",
    caption: "Precise therapeutic manipulation of vital energy points for acute and chronic pain relief.",
    alt: "Traditional Kalari healer applying medicinal oil to vital marma points on shoulder",
  },
  {
    id: "6",
    title: "Pollachi Nature Surroundings",
    category: "Pollachi Heritage",
    image: "/images/pollachi-retreat.jpg",
    caption: "Lush coconut groves and peaceful morning mist from the Anaimalai hills surrounding Pollachi.",
    alt: "Scenic Pollachi landscape with lush coconut palms, stone path and morning mist over mountains",
  },
  {
    id: "7",
    title: "Traditional Herbal Steam (Bashpa Sweda)",
    category: "Treatments",
    image: "/images/herbal-steam-bath.jpg",
    caption: "Handcrafted wooden steam box releasing aromatic herbal steam for deep cellular detox.",
    alt: "Wooden herbal steam chamber with gentle herbal steam rising in Ayurvedic sanctuary",
  },
  {
    id: "8",
    title: "Traditional Kai Uzhichil",
    category: "Treatments",
    image: "/images/traditional-uzhichil.jpg",
    caption: "Full-body rejuvenating herbal oil therapy applied with rhythmic master strokes.",
    alt: "Practitioner performing traditional Kai Uzhichil herbal oil massage on client",
  },
  {
    id: "9",
    title: "Sports Injury & Joint Rehab",
    category: "Treatments",
    image: "/images/sports-injury-rehab.jpg",
    caption: "Specialized Kalari marma evaluation and rehabilitation for athletes and joint pain sufferers.",
    alt: "Kalari healer treating joint and knee mobility with medicinal oils in traditional clinic",
  },
];

export const FAQS: FAQItem[] = [
  {
    category: "Treatments",
    question: "What is Kalari Marma Chikitsa and how is it different from a normal spa massage?",
    answer: "A standard spa massage is primarily designed for temporary surface relaxation. Kalari Marma Chikitsa is a specialized classical healing discipline rooted in ancient martial and medical science. It works directly with 107 vital intersection points (marmas) to relieve compressed nerves, release deep fascia, align joints, and stimulate natural healing.",
  },
  {
    category: "Treatments",
    question: "Do you make any medical cure claims?",
    answer: "No. At Prathama Kalari Wellness Retreat, we strictly uphold ethical traditional practices. We do not make unsupported claims or guarantee 100% medical cures. Our therapies focus on holistic natural rejuvenation, pain relief, flexibility, stress alleviation, and traditional wellness care. We encourage all guests to share previous clinical diagnoses.",
  },
  {
    category: "Treatments",
    question: "What should I wear during treatments?",
    answer: "We provide clean, traditional linen drapes and treatment coverings. You may bring comfortable, loose cotton attire to change into after your herbal oil therapies.",
  },
  {
    category: "Appointments & Bookings",
    question: "Do I need to book in advance before visiting?",
    answer: "Yes, advance booking is strongly recommended. Because our authentic treatments—especially Chavitti Uzhichil and Shirodhara—require fresh herbal preparation and dedicated practitioner time, booking ahead ensures your slot is secured.",
  },
  {
    category: "Appointments & Bookings",
    question: "How can I book an appointment or enquire?",
    answer: "You can book directly via WhatsApp (+91 93448 82346) or by filling out the online Enquiry Form on this website. Our team typically confirms consultation times promptly.",
  },
  {
    category: "Location & Travel",
    question: "Where is Prathama Kalari located in Pollachi?",
    answer: "We are conveniently located at 51, Railway Station Road, right opposite the Pollachi Railway Station in Pollachi, Tamil Nadu 642001. We are easily accessible by train, bus, and road from Coimbatore, Palakkad, Udumalpet, and Valparai.",
  },
  {
    category: "Location & Travel",
    question: "What are the nearest travel transit points?",
    answer: "Pollachi Railway Station is directly opposite our location. The nearest airport is Coimbatore International Airport (CJB), approximately 45 km (about 75 minutes) away. Direct bus connections run frequently from Coimbatore and Palakkad.",
  },
  {
    category: "Facilities & Guidelines",
    question: "What are your confirmed opening hours?",
    answer: "Our verified hours are Monday, 7:00 AM to 6:00 PM. Tuesday through Saturday follow standard retreat operating hours (7:00 AM – 6:00 PM), and Sunday sessions are strictly by prior appointment and advance consultation.",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Senthil Kumar M.",
    location: "Coimbatore, Tamil Nadu",
    treatment: "Chavitti Uzhichil & Marma Chikitsa",
    quote: "After months of severe lumbar tightness from daily driving and desk work, the Chavitti Uzhichil foot therapy here gave me deep relief. The practitioner is extremely skilled and knows the exact pressure points.",
    verified: true,
  },
  {
    id: "2",
    name: "Ananya R.",
    location: "Bengaluru, Karnataka",
    treatment: "Shirodhara & Herbal Steam",
    quote: "The serene environment in Pollachi combined with genuine Shirodhara was deeply calming. Warm herbal oils, quiet treatment rooms, and no rushed commercial attitude.",
    verified: true,
  },
  {
    id: "3",
    name: "Karthik Narayanan",
    location: "Palakkad, Kerala",
    treatment: "Sports Injury Rehab & Kizhi",
    quote: "Recovered from a bad ankle sprain and chronic knee stiffness using their Kalari herbal poultice treatment. Authentic South Indian methods delivered with genuine care.",
    verified: true,
  },
];
