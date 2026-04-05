export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Zayden CCTV Installation",
    legalName: "Zayden CCTV Installation",
    tagline: "Expert CCTV & Surveillance Installation",
    description: "Zayden CCTV Installation specialises in HD and 4K camera systems for homes, offices, and commercial properties across Harare. See everything, miss nothing.",
    phone: "+263 78 508 1541",
    phoneRaw: "+263785081541",
    whatsappNumber: "263785081541",
    email: "info@zaydencctv.co.zw",
    address: "Vale Cl, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 1,
    established: "2019",
    yearsExperience: "5+",
    projectsCompleted: "350+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "zayden-cctv-installation-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Zayden",
    logoLine2: "CCTV Installation",
  },

  hero: {
    badge: "Harare's CCTV & Surveillance Specialists",
    titleParts: [
      { text: "SEE" },
      { text: "EVERYTHING", highlight: true },
      { text: "MISS NOTHING." },
    ],
    subtitle: "Zayden CCTV Installation specialises in HD and 4K camera systems for homes, offices, and commercial properties across Harare. See everything, miss nothing.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "View Systems",
    trustBadge: "350+ Clients Served",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85", alt: "CCTV security monitoring room" },
      { url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=85", alt: "Security technology installation" },
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85", alt: "Digital surveillance dashboard" },
    ],
  },

  stats: [
    { number: "350+", label: "Installations Done" },
    { number: "5+", label: "Years of Service" },
    { number: "24/7", label: "Monitoring Available" },
    { number: "5", label: "Google Rating" },
  ],

  servicesPreview: [
    { title: "CCTV Installation", desc: "HD and 4K camera systems with night vision, motion detection, and remote viewing from your smartphone.", icon: "Star" },
    { title: "Alarm Systems", desc: "Wired and wireless burglar alarms with 24/7 monitoring, instant alerts, and armed response integration.", icon: "Buildings" },
    { title: "Access Control", desc: "Biometric, card, and keypad access systems for offices, estates, and industrial sites.", icon: "Briefcase" },
    { title: "Electric Fencing", desc: "High-voltage perimeter fencing with energiser units, alarm integration, and lightning protection.", icon: "Lightbulb" },
    { title: "Intercom Systems", desc: "Audio and video intercom for residential gates and commercial buildings. IP and analogue options.", icon: "Heart" },
    { title: "Security Consulting", desc: "Comprehensive vulnerability assessments and security system design tailored to your risk profile.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs.",
    items: [
      {
        title: "CCTV Installation",
        slug: "cctv-installation",
        desc: "See everything, miss nothing. We design and install CCTV systems using the latest IP camera technology with crystal-clear HD and 4K resolution, infrared night vision, and intelligent motion detection. Monitor your property in real-time from anywhere using your smartphone.",
        features: ["HD/4K Cameras", "Night Vision", "Motion Detection", "Remote Viewing App", "Cloud Recording", "Multi-Site Systems"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Alarm Systems",
        slug: "alarm-systems",
        desc: "Our alarm systems provide the first line of defence against intrusion. We install wired and wireless systems from leading manufacturers, integrated with 24/7 monitoring centres and armed response services for complete peace of mind.",
        features: ["Wired & Wireless", "24/7 Monitoring", "Armed Response", "Panic Buttons", "Zone Configuration", "Battery Backup"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
      {
        title: "Access Control",
        slug: "access-control",
        desc: "Control who enters your premises and when. Our access control solutions range from simple keypad locks to sophisticated biometric and card-based systems that log every entry and exit for complete accountability.",
        features: ["Biometric Readers", "Card Systems", "Keypad Entry", "Time & Attendance", "Visitor Management", "Integration Ready"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
      {
        title: "Electric Fencing",
        slug: "electric-fencing",
        desc: "A visible, effective deterrent that forms the outer ring of your security perimeter. Our electric fence installations use high-quality energiser units with alarm integration, tamper detection, and lightning protection.",
        features: ["High-Voltage Deterrent", "Alarm Integration", "Tamper Detection", "Lightning Protection", "Wall-Top & Free-Standing", "Maintenance Plans"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Intercom Systems",
        slug: "intercom-systems",
        desc: "Know who is at your gate before you open it. We install audio and video intercom systems for residential and commercial properties, including IP-based systems that let you answer from your phone anywhere in the world.",
        features: ["Video Intercom", "Audio Intercom", "IP Systems", "Multi-Unit", "Gate Integration", "Mobile Answering"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
      {
        title: "Security Consulting",
        slug: "security-consulting",
        desc: "Before installing any equipment, we assess your actual risk. Our security consultants conduct thorough vulnerability assessments of your property and design a layered security solution that addresses your specific threats within your budget.",
        features: ["Risk Assessment", "System Design", "Budget Planning", "Compliance Auditing", "Threat Analysis", "Implementation Plan"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our work that showcases our capabilities.",
    items: [
      {
        title: "Retail Chain Surveillance",
        slug: "retail-chain-surveillance",
        category: "CCTV",
        location: "Harare, Zimbabwe",
        desc: "64-camera IP system across 4 retail locations with centralised monitoring and cloud backup.",
        client: "Retail Chain",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"],
      },
      {
        title: "Residential Estate Security",
        slug: "residential-estate-security",
        category: "Integrated",
        location: "Harare, Zimbabwe",
        desc: "Electric fencing, CCTV, and access control for a 40-unit residential estate in Borrowdale.",
        client: "Property Developer",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"],
      },
      {
        title: "Corporate Office Access",
        slug: "corporate-office-access",
        category: "Access Control",
        location: "Harare, Zimbabwe",
        desc: "Biometric and card access system for a 6-floor office building with visitor management.",
        client: "Corporate Client",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"],
      },
      {
        title: "School Security Upgrade",
        slug: "school-security-upgrade",
        category: "CCTV",
        location: "Harare, Zimbabwe",
        desc: "32-camera system with playground monitoring, entrance cameras, and panic button integration.",
        client: "Private School",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"],
      },
      {
        title: "Warehouse Perimeter",
        slug: "warehouse-perimeter",
        category: "Electric Fence",
        location: "Harare, Zimbabwe",
        desc: "1.2km electric fence with 8 alarm zones, gate automation, and CCTV integration.",
        client: "Industrial Client",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"],
      },
      {
        title: "Smart Home Package",
        slug: "smart-home-package",
        category: "Integrated",
        location: "Harare, Zimbabwe",
        desc: "Full smart security package: CCTV, alarm, intercom, and mobile app for a luxury home.",
        client: "Private Residence",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"],
      },
    ],
  },

  homeTestimonials: [
    { text: "Zayden CCTV Installation installed a complete CCTV system at my home and I finally feel safe. The cameras are crystal clear and I can check my phone from anywhere.", name: "Wellington Moyo", role: "Homeowner, Borrowdale", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We contracted Zayden CCTV Installation for our estate security and they delivered a fully integrated system -- cameras, access control, and electric fencing all working together.", name: "Chenai Dziva", role: "Property Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "Zayden CCTV Installation installed security cameras at our school and the improvement in safety and accountability has been remarkable. Parents are very reassured.", name: "Tapiwa Gondo", role: "School Headmaster", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The alarm system Zayden CCTV Installation installed has already paid for itself. Fast response, reliable monitoring, and their technicians are always available when needed.", name: "Martha Zvobgo", role: "Business Owner, CBD", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise, driven by results.",
    story: [
      "Zayden CCTV Installation was founded in 2019 by a team of surveillance technology specialists. We focus exclusively on camera systems because specialisation breeds excellence.",
      "350+ installations across Harare and we have never had a dissatisfied client. From single-camera home setups to 64-camera commercial networks, Zayden designs systems that work flawlessly.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work. Every project receives our full attention and best effort." },
      { title: "Transparent Pricing", desc: "No hidden fees, no surprises. We quote honestly and invoice accurately." },
      { title: "Expert Team", desc: "Our team brings years of specialist experience to every project we undertake." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, adapt, and deliver." },
    ],
    team: [
      { name: "Team Leader", role: "Director", bio: "Leading Zayden CCTV Installation with expertise and vision.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Operations Manager", role: "Operations", bio: "Ensuring every project runs smoothly and on schedule.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Technical Lead", role: "Technical", bio: "Bringing specialist expertise to every engagement.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important needs.",
    items: [
      { text: "Zayden CCTV Installation installed a complete CCTV system at my home and I finally feel safe. The cameras are crystal clear and I can check my phone from anywhere.", name: "Wellington Moyo", role: "Homeowner, Borrowdale", rating: 5 },
      { text: "We contracted Zayden CCTV Installation for our estate security and they delivered a fully integrated system -- cameras, access control, and electric fencing all working together.", name: "Chenai Dziva", role: "Property Manager", rating: 5 },
      { text: "Zayden CCTV Installation installed security cameras at our school and the improvement in safety and accountability has been remarkable. Parents are very reassured.", name: "Tapiwa Gondo", role: "School Headmaster", rating: 5 },
      { text: "The alarm system Zayden CCTV Installation installed has already paid for itself. Fast response, reliable monitoring, and their technicians are always available when needed.", name: "Martha Zvobgo", role: "Business Owner, CBD", rating: 5 },
      { text: "Remote viewing works perfectly. I can see my house from my office phone thanks to Zayden CCTV Installation's CCTV setup.", name: "Simba Karonga", role: "Remote Monitoring Client", rating: 5 },
      { text: "Electric fence installation was done in one day with minimal disruption. Zayden CCTV Installation are efficient and tidy.", name: "Douglas Mhizha", role: "Homeowner", rating: 5 },
      { text: "The access control system Zayden CCTV Installation installed at our offices has completely eliminated unauthorised entry.", name: "Linda Masuku", role: "Corporate Client", rating: 5 },
      { text: "Night vision on these cameras is incredible. Zayden CCTV Installation recommended the right specs for our needs.", name: "Patrick Makoni", role: "Night Security Client", rating: 5 },
      { text: "Intercom system with video is a game-changer. We can see who is at the gate without leaving the house.", name: "Angela Mhembere", role: "Residential Client", rating: 5 },
      { text: "Annual maintenance contract with Zayden CCTV Installation keeps everything working perfectly. Proactive, not reactive.", name: "Brian Mutema", role: "Maintenance Client", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [],
  },

  contact: {
    heroTitle: "Get in Touch",
    heroSubtitle: "We would love to hear from you. Reach out and let us discuss how we can help.",
    branches: [
      { name: "Main Office", address: "Vale Cl, Harare, Zimbabwe", phone: "+263 78 508 1541", email: "info@zaydencctv.co.zw" },
    ],
  },

  homeCta: {
    title: "TOTAL, VISIBILITY",
    subtitle: "Zayden CCTV Installation specialises in HD and 4K camera systems for homes, offices, and commercial properties across Harare. See everything, miss nothing.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Zayden! I need CCTV installation for my property.",
    backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85",
  },

  footer: {
    description: "Zayden CCTV Installation specialises in HD and 4K camera systems for homes, offices, and commercial properties across Ha...",
    copyright: "Zayden CCTV Installation",
  },
};

export default siteData;