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
      { name: "Resume", path: "https://drive.google.com/file/d/1U40zT5dEw8g1JzYkZ6qJv_DqA0R6yH9-/view?usp=sharing", external: true }
    ]
  },

  // Home Page - Hero Section
  hero: {
    // The hero image in the center (transparent PNG with "VISUAL CREATOR" and floating icons)
    image: "assets/images/Hero Section Image.png",
    alt: "Visual Creator - Motion Design, Video Editing, 3D Artist, Sound Design"
  },

  // Home Page - Core Expertise (Horizontal Marquee)
  expertise: [
    "Motion Design",
    "Video Editing",
    "Sound Design",
    "Color Grading",
    "3D Artist",
    "Graphic Design"
  ],

  // Home Page - Work Experience Section
  experience: [
    {
      company: "marks methods",
      logo: "assets/logos/M&M Logo.png",
      role: "3D Artist",
      employmentType: "Internship",
      duration: "2021-23"
    },
    {
      company: "White Thoughts & Branding",
      logo: "assets/logos/WTB Logo.png",
      role: "Motion Desing | 3D Artist",
      employmentType: "Full Time",
      duration: "2023-25"
    },
    {
      company: "untitled",
      logo: "assets/logos/Untitled Desing Studio Logo.png",
      role: "Motion Desing",
      employmentType: "Full Time",
      duration: "2023-Present"
    }
  ],

  // Explore My Works Button (under Work Experience)
  exploreWorksButton: {
    text: "Explore My Works",
    destination: "#/works"
  },

  // Home Page - Clients Experience Grid (5 columns)
  clients: [
    { name: "marks methods", logo: "assets/logos/M&M Logo.png" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.png" },
    { name: "untitled", logo: "assets/logos/Untitled Desing Studio Logo.png" },
    { name: "marks methods", logo: "assets/logos/M&M Logo.png" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.png" },
    
    { name: "marks methods", logo: "assets/logos/M&M Logo.png" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.png" },
    { name: "untitled", logo: "assets/logos/Untitled Desing Studio Logo.png" },
    { name: "marks methods", logo: "assets/logos/M&M Logo.png" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.png" },
    
    { name: "marks methods", logo: "assets/logos/M&M Logo.png" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.png" },
    { name: "untitled", logo: "assets/logos/Untitled Desing Studio Logo.png" },
    { name: "marks methods", logo: "assets/logos/M&M Logo.png" },
    { name: "White Thoughts & Branding", logo: "assets/logos/WTB Logo.png" }
  ],

  // Global Footer Configuration
  footer: {
    copyright: "© 2026 Portfolio - Yada Krishna. All rights reserved."
  },

  // About Page - Bio & Contacts Section
  about: {
    image: "assets/images/About Profile.png",
    title: "Hey! I'm Yada Krishna",
    paragraphs: [
      "I'm a Motion Designer currently working at Untitled Design Studio, creating motion design, logo animations, video editing, social media content, saas animation.",
      "My creative journey started with 3D artist and has grown into over four years of experience across motion design and 3D modelling & visualization. What I enjoy most about motion design is its ability to turn ideas into stories that people can understand and connect with.",
      "I'm naturally curious and always exploring new tools, techniques, and creative fields even those outside my day-to-day work. I enjoy paying attention to the details that make a project feel polished, purposeful, and memorable.",
      "For me, great design isn't just about movement or visuals it's about telling a story and creating something that leaves an impact."
    ],
    contact: {
      email: "palaindalayadakrishna@gmail.com",
      phone: "9966120909",
      linkedin: "Yada Krishna",
      linkedinUrl: "https://www.linkedin.com/in/yada-krishna/"
    }
  },

  // Works Page - 2-column Client Cards Grid
  works: [
    {
      id: "taruni",
      clientName: "Taruni",
      description: "Social Media Videos\nFestival Videos &\nVideo Editing",
      image: "assets/works/Taruni.jpg",
      link: "#/works/taruni"
    },
    {
      id: "furniture-world",
      clientName: "Furniture World",
      description: "Social Media Videos\nFestival Videos &\nVideo Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world"
    },
    {
      id: "taruni-2",
      clientName: "Taruni",
      description: "Social Media Videos\nFestival Videos &\nVideo Editing",
      image: "assets/works/Taruni.jpg",
      link: "#/works/taruni-2"
    },
    {
      id: "furniture-world-2",
      clientName: "Furniture World",
      description: "Social Media Videos\nFestival Videos &\nVideo Editing",
      image: "assets/works/Furniture World.jpg",
      link: "#/works/furniture-world-2"
    }
  ],

  // Future Client Pages - Custom content for each work card details.
  // Add new keys matching the works `id` field.
  clientPages: {
    "taruni": {
      title: "Taruni",
      subtitle: "Boutique Fashion Motion Design Showcase",
      contentLayout: [
        {
          type: "text",
          value: "We created a series of aesthetic social media reels and festival marketing videos for Taruni, showcasing their luxury bridal couture collection. The visual language relied heavily on elegant lighting, warm color palettes, and fluid transitions matching the grace of the garments."
        },
        {
          type: "video",
          url: "https://customer-v7g3tq9n6e6b4y3c.cloudflarestream.com/5d5e5f5g5h5i5j5k5l5m5n5o5p5q5r5s/iframe",
          caption: "Festival Couture Launch Video - Embedded from Cloudflare Stream"
        },
        {
          type: "gallery",
          images: [
            "assets/works/Taruni.jpg",
            "assets/works/Furniture World.jpg"
          ],
          caption: "Campaign Stills"
        }
      ]
    },
    "furniture-world": {
      title: "Furniture World",
      subtitle: "Product Visualization & Ad Campaigns",
      contentLayout: [
        {
          type: "text",
          value: "Furniture World requested a complete promotional video showcasing their modern, minimalist sofa layout. We integrated 3D camera sweeps with motion graphics overlays highlighting key features, dimensions, and fabric customizable options."
        },
        {
          type: "video",
          url: "https://customer-v7g3tq9n6e6b4y3c.cloudflarestream.com/9a9b9c9d9e9f9g9h9i9j9k9l9m9n9o9p/iframe",
          caption: "3D Product Promo Reel - Embedded from Cloudflare Stream"
        }
      ]
    },
    "taruni-2": {
      title: "Taruni Campaign Part II",
      subtitle: "Social Media Engagement Strategy",
      contentLayout: [
        {
          type: "text",
          value: "The second phase of the Taruni campaign focused on interactive Instagram Stories and short vertical edits. The pacing was brisk, matching modern mobile consumption habits while keeping the premium visual style intact."
        }
      ]
    },
    "furniture-world-2": {
      title: "Furniture World Seasonal Sale",
      subtitle: "Promotional Motion Graphics Campaign",
      contentLayout: [
        {
          type: "text",
          value: "Seasonal promotional video utilizing vector animations and clean typography to highlight limited-time store offers and clearance campaigns."
        }
      ]
    }
  }
};
