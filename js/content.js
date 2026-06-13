// Centralized Content Configuration for Yada Krishna Portfolio
// Edit this file to add/remove pages, change text, swap images, or update links.

window.portfolioContent = {
  // Global Header Configuration
  header: {
    logoText: "YK",
    // To use an image for the logo, set logoImage to the path (e.g. "assets/logos/my-logo.png")
    // If null, the text logo "YK" will be styled and rendered instead.
    logoImage: "assets/logos/YK-Logo.png",
    navItems: [
      { name: "Home", path: "#/" },
      { name: "Works", path: "#/works" },
      { name: "About", path: "#/about" },
      { name: "Resume", path: "https://drive.google.com/file/d/1ICMy3iVC9poBbLZ4F2VKRnMfKyBpAApe/view", external: true }
    ]
  },
  
  // Loader Configuration
  loader: {
    enabled: true,                                               // Set to false to disable the loading screen completely
    videoSrc: "assets/Loading Animation/Loading Animation.webm", // Path to your loader animation video
    displayDuration: 4000                                        // Time in milliseconds before the loader fades out
  },
  
  // Maintenance Page Configuration
  maintenance: {
    enabled: false,                                              // Set to true to enable the maintenance screen, false to disable
    logoImage: "assets/images/YK-Logo.png",                      // Path to your maintenance logo
    statusText: "We're crafting new visuals behind the scenes",                        // Message for typewriter animation
    copyright: "© 2026 Portfolio - Yada Krishna. All rights reserved." // Copyright text
  },
  
  // 404 Page Configuration
  notFound: {
    videoSrc: "assets/404 Animation/404 Animation.webm",         // Path to your 404 animation video
    statusText: "This Layer Doesn't Exist",                      // Message for typewriter animation
    buttonText: "Return to Home",                                // Text on the redirect button
    buttonDestination: "#/"                                      // Where the button redirects (e.g. #/ for home, #/works, etc.)
  },

  // Home Page - Hero Section
  hero: {
    // The hero image in the center (transparent PNG with "VISUAL CREATOR" and floating icons)
    image: "assets/images/Hero Section Image.webp",
    alt: "Visual Creator - Motion Design, Video Editing, 3D Artist, Sound Design"
  },

  // Home Page - Core Expertise (Horizontal Marquee)
  expertise: [
    "Motion Graphics Designer",
    "Video Editing",
    "Sound Design",
    "Color Grading",
    "3D Artist",
    "Graphic Design"
  ],

  // Home Page - Work Experience Section
  experience: [
    {
      company: "untitled",
      logo: "assets/logos/Untitled Desing Studio Logo.webp",
      role: "Motion Graphics Designer",
      employmentType: "Full Time",
      duration: "2025-Present"
    },
    {
      company: "White Thoughts & Branding",
      logo: "assets/logos/WTB Logo.webp",
      role: "Motion Graphics Designer | 3D Artist",
      employmentType: "Full Time",
      duration: "2023-25"
    },
    {
      company: "marks methods",
      logo: "assets/logos/M&M Logo.webp",
      role: "3D Artist",
      employmentType: "Internship",
      duration: "2021-23"
    }
  ],

  // Explore My Works Button (under Work Experience)
  exploreWorksButton: {
    text: "Explore My Works",
    destination: "#/works"
  },

  // Home Page - Clients Experience Grid (5 columns)
  clients: [
    { name: "marks methods", logo: "assets/logos/M&M Logo.webp" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.webp" },
    { name: "untitled", logo: "assets/logos/Untitled Desing Studio Logo.webp" },
    { name: "marks methods", logo: "assets/logos/M&M Logo.webp" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.webp" },
    
    { name: "marks methods", logo: "assets/logos/M&M Logo.webp" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.webp" },
    { name: "untitled", logo: "assets/logos/Untitled Desing Studio Logo.webp" },
    { name: "marks methods", logo: "assets/logos/M&M Logo.webp" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.webp" },
    
    { name: "marks methods", logo: "assets/logos/M&M Logo.webp" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.webp" },
    { name: "untitled", logo: "assets/logos/Untitled Desing Studio Logo.webp" },
    { name: "marks methods", logo: "assets/logos/M&M Logo.webp" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.webp" }
  ],

  // Home Page - Outro (Thanks) Section
  outro: {
    image: "assets/images/Hero Section Thanks.webp",
    alt: "Thanks For Coming By!"
  },

  // Global Footer Configuration
  footer: {
    copyright: "© 2026 Portfolio - Yada Krishna. All rights reserved."
  },

  // About Page - Bio & Contacts Section
  about: {
    image: "assets/images/About Profile.png",
    title: "Hey! I'm Yada Krishna",
    paragraphs: [
     "A Motion Graphic Designer with 3+ years of experience currently working at Untitled Design Studio.",
      "I started my creative journey as a 3D artist in 2021 before transitioning into motion graphics in 2023. Since then, I've worked on motion graphics, logo animations, video editing, social media content, SaaS animations, and 3D visualization.",
      "I enjoy turning ideas into clear, engaging visual stories that people can connect with. I'm always curious to learn and explore new tools, techniques, and creative approaches. Beyond design, I’m also interested in learning about topics outside the creative field, as I enjoy discovering new perspectives and expanding my knowledge.",
    ],
    contact: {
      email: "palabindalayadakrishna@gmail.com",
      phone: "9966120909",
      linkedin: "Yada Krishna",
      linkedinUrl: "https://in.linkedin.com/in/yadakrishna"
    }
  },

  // Works Page - 2-column Client Cards Grid
  works: [
    {
      id: "taruni",
      clientName: "Taruni",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Taruni.jpg",
      link: "#/works/taruni"
    },
    {
      id: "furniture-world",
      clientName: "Furniture World Kiwo",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world"
    },
    {
      id: "taruni-2",
      clientName: "Taruni",
      description: "Social Media Videos Festival Videos & Video Editing & Color Grading & Sound Designer & 3D Artist & Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Taruni.jpg",
      link: "#/works/taruni-2"
    },
    {
      id: "furniture-world-2",
      clientName: "Furniture World",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    }
  ],

};

