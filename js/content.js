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
      { name: "Resume", path: "https://drive.google.com/file/d/1d3CgsE36irkgQASfZw8nOvcT3dUO-WTu/view", external: true }
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

  // Home Page - Clients Experience Slider Configuration
  clientsExperience: {
    title: "Clients Experience",
    subtitle: "Showcasing a selection of Brands And Organizations I’ve worked throughout my professional career.",
    // ID of the slide that should be displayed first by default
    defaultActiveSlideId: "slide-1",
    
    // List of slides. You can add, delete, or reorder these slides.
    slides: [
      {
        id: "slide-1",
        title: "",
        // Rows within this slide. You can add, remove, or reorder rows.
        rows:
        [
          {
            id: "slide-1-row-1",
            // Logos in this row. You can add, remove, reorder, or replace logos here.
            logos: [
              { name: "TSRTC", logo: "assets/Cilent Logos/Featured Slide 1 Logos/TSRTC Logo.webp" },
              { name: "Credai", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Credai Logo.webp" },
              { name: "Anurag University", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Anurag University Logo.webp" },
              { name: "Sneha Fresh Chicken", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Sneha Fresh Chicken Logo.webp" },
              { name: "Ameenji", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Ameenji Logo.webp" },
              { name: "Ragava", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Ragava Logo.webp" }
            ]
          },
          {
            id: "slide-1-row-2",
            logos: [
              { name: "Nirah Early Years", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Nirah Logo.webp" },
              { name: "Hare Krishna Goldern Temple", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Hare Krishna Logo.webp" },
              { name: "Prakash Arts", logo: "assets/Cilent Logos/Featured Slide 1 Logos/PrakashArts Logo.webp" },
              { name: "Taruni", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Taruni Logo.webp" },
              { name: "Lake CIty by Vasavi Group", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Lake City Logo.webp" },
              { name: "CSR Estates", logo: "assets/Cilent Logos/Featured Slide 1 Logos/CSR Estates Logo.webp" }              
            ]
          },
          {
            id: "slide-1-row-3",
            logos: [
              { name: "Prosperiti Homes", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Prosperiti Homes Logo.webp" },
              { name: "Sindhu Hospitals", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Sindhu Hospitals Logo.webp" },
              { name: "Copil", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Copil Logo.webp" },
              { name: "Johnson Grammar School", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Johnson Grammar School Logo.webp" },
              { name: "Jyothi Exports", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Jyothi Exports Logo.webp" },
              { name: "Dream Valley Group", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Dream Valley Group Logo.webp" }             
            ]
          },
          {
            id: "slide-1-row-4",
            logos: [
              { name: "Medone Hospitals", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Medone Hospitals Logo.webp" },
              { name: "Kiwo Plywood Kitchens and Wardrobes", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Kiwo Logo.webp" },
              { name: "Bonsai Housing", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Bonsai Housing Logo.webp" },
              { name: "Abhi Eggs", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Abhi Eggs Logo.webp" },
              { name: "Coromandel Future Positive", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Coromandel Logo.webp" },
              { name: "FWD Furniture & More", logo: "assets/Cilent Logos/Featured Slide 1 Logos/FWD Logo.webp" }
            ]
          },
          {
            id: "slide-1-row-5",
            logos: [
              { name: "Xemx Energy Maximized", logo: "assets/Cilent Logos/Featured Slide 1 Logos/XEMX Logo.webp" },
              { name: "Furniture World", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Furniture World Logo.webp" },
              { name: "POP Portion or Paradise", logo: "assets/Cilent Logos/Featured Slide 1 Logos/POP Potions of Paradise Logo.webp" },
              { name: "Syuti", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Syuti Logo.webp" },
              { name: "Million Plast", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Million Plast Logo.webp" },
              { name: "Ideazmeet", logo: "assets/Cilent Logos/Featured Slide 1 Logos/Ideazmeet Logo.webp" }
            ]
          }
        ]
      },
      {
        id: "slide-2",
        title: "",
        rows:
        [
          {
            id: "slide-2-row-1",
            logos: [
              { name: "Iiris by Raghava", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Iiris by Raghava Logo.webp" },
              { name: "Razr raady for the future", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Razr Logo.webp" },
              { name: "Lavian", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Lavian Logo.webp" },
              { name: "Sneha Elevators", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Sukhibhava Pooja oil", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Sneha Deepam Oil", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" }
            ]
          },
          {
            id: "slide-2-row-2",
            logos: [
              { name: "Inwhite Dental", logo: "assets/Cilent Logos/Normal Slide 2 Logos/InWhite Dental Logo.webp" },
              { name: "Vian Properties", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Vian Properties Logo.webp" },
              { name: "Grit & Flair", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Grit & Flair Logo.webp" },
              { name: "Manga Ganuga", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Play Panda", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Hassu's", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Hassus Logo.webp" }
            ]
          },
          {
            id: "slide-2-row-3",
            logos: [
              { name: "Markup", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Markup Logo.webp" },
              { name: "MeatJoy", logo: "assets/Cilent Logos/Normal Slide 2 Logos/MeatJoy Logo.webp" },
              { name: "Square we make simple", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Square Logo.webp" },
              { name: "House of Vellala by Praballika", logo: "assets/Cilent Logos/Normal Slide 2 Logos/House of Vellala by Praballika Logo.webp" },
              { name: "Jewellery by Nikitha", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Jewellery by Nikitha Logo.webp" },
              { name: "Andoorhi", logo: "assets/Cilent Logos/Normal Slide 2 Logos/Andoorhi Logo.webp" }
            ]
          },
          {
            id: "slide-2-row-4",
            logos: [
              { name: "2080 from the future", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Adbeets", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Alpha Curve", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "DNJ", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Ikshara Heritage Reimagined", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Tyrlo", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" }
            ]
          },
          {
            id: "slide-2-row-5",
            logos: [
              { name: "Nudje", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Idaa Restaurant", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" },
              { name: "Arugu Restaurant", logo: "assets/Cilent Logos/Normal Slide 2 Logos/" }
            ]
          }
        ]
      }
    ]
  },

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
     "a Motion Graphics Designer with 3+ years of experience, currently at Untitled Design Studio in Hyderabad.",
      "I started as a 3D Artist in 2021 and moved into motion graphics in 2023. Since then I've worked on logo animations, SaaS animations, social media content, video editing, and 3D artist, mostly for branding and advertising agencies.",
      "I take designs from static to motion bringing them to life with clean, precise animation. I'm always exploring new tools and techniques, and outside of design I like learning about things beyond the creative field new perspectives keep the work fresh.",
    ],
    contact: {
      email: "palabindalayadakrishna@gmail.com",
      phone: "9966120909",
      linkedin: "Yada Krishna",
      linkedinUrl: "https://in.linkedin.com/in/yada-krishna-6b590b229?trk=people_directory"
    }
  },

  // Works Page - 2-column Client Cards Grid
  works: [
    {
      id: "tsrtc",
      clientName: "TSRTC",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Taruni.jpg",
      link: "#/works/taruni"
    },
    {
      id: "credai",
      clientName: "Credai",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world"
    },
    {
      id: "anurag-university",
      clientName: "Anurag University",
      description: "Social Media Videos Festival Videos & Video Editing & Color Grading & Sound Designer & 3D Artist & Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Taruni.jpg",
      link: "#/works/taruni-2"
    },
    {
      id: "taruni",
      clientName: "Taruni",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "nirah",
      clientName: "Nirah",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "hare-krishna",
      clientName: "Hare Krishna",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "ideazmeet",
      clientName: "Ideazmeet",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "kiwo",
      clientName: "Kiwo",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "sneha-group",
      clientName: "Sneha Fresh Chicken",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "prosperiti",
      clientName: "Prosperiti",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
     {
      id: "play-panda",
      clientName: "Play Panda",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "dream-valley-group",
      clientName: "Dream Valley Group",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "razer",
      clientName: "Razer",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "fwd",
      clientName: "FWD",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "2080",
      clientName: "2080",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "xemx",
      clientName: "Xemx",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "grit-&-flair",
      clientName: "Grit & Flair",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "trylo",
      clientName: "Trylo",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "adbeets",
      clientName: "Adbeets",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "copil",
      clientName: "Copil",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "abhi-eggs",
      clientName: "Abhi Eggs",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "syuti",
      clientName: "Syuti",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "csr-estates",
      clientName: "CSR Estates",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "furniture-world",
      clientName: "Furniture World",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "jewellery-by-nikitha",
      clientName: "Jewellery By Nikitha",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "medone",
      clientName: "Medone Hospitals",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "sindhu-hospitals",
      clientName: "Sindhu Hospitals",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "pop",
      clientName: "Portions or Paradise",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "mana-ganuga",
      clientName: "Mana Ganuga",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "raghava",
      clientName: "Capital 45 & Iiris by Raghava",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "vian",
      clientName: "Vian Properties",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "andoorhi",
      clientName: "Andoorhi",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "million-plast",
      clientName: "Million Plast",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "lake-city",
      clientName: "Lake City by Incor",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "jhonson-gammar-school",
      clientName: "Jhonson Gammar School",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "ameenji",
      clientName: "Ameenji",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "coromandel",
      clientName: "Coromandel",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "arugu",
      clientName: "Arugu Kitchen",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "ikshara",
      clientName: "Ikshara",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    {
      id: "idaa-restaurant",
      clientName: "Idaa Restaurant",
      description: "Social Media Videos Festival Videos & Video Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    },
    
    

  ],

};

