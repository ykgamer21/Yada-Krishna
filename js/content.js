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
      company: "untitled",
      logo: "assets/logos/Untitled Desing Studio Logo.png",
      role: "Motion Design",
      employmentType: "Full Time",
      duration: "2025-Present"
    },
    {
      company: "White Thoughts & Branding",
      logo: "assets/logos/WTB Logo.png",
      role: "Motion Design | 3D Artist",
      employmentType: "Full Time",
      duration: "2023-25"
    },
    {
      company: "marks methods",
      logo: "assets/logos/M&M Logo.png",
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
      email: "palabindalayadakrishna@gmail.com",
      phone: "9966120909",
      linkedin: "Yada Krishna",
      linkedinUrl: "https://in.linkedin.com/in/yada-krishna-6b590b229?trk=people_directory"
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
  /*
  =======================================================
  CLIENT PAGE BUILDER TEMPLATES (Copy & Paste Reference)
  =======================================================

  Use these blocks to easily construct real-world client pages:

  1. FULL CLIENT PAGE OUTER SHELL:
  ----------------------------------
  "client-id-here": {
    clientName: "Client Name",
    clientDescription: "Detailed description of the client's project goals and scope.",
    role: {
      title: "My Role",
      description: "Description of your specific role and creative contributions."
    },
    sections: [
      // Add media groups and description boxes here
    ]
  },

  2. MEDIA GROUP (1, 2, or 3 items of aspect ratio "9:16" | "4:5" | "1:1" | "16:9"):
  ------------------------------------------------------------------------------------
  {
    type: "media_group",
    aspectRatio: "16:9", // Support aspect ratios: "9:16" | "4:5" | "1:1" | "16:9"
    items: [
      // Add 1, 2, or 3 items (mix images and videos)
      { type: "image", url: "assets/works/Taruni.jpg", alt: "Alt image text" },
      // Videos support YouTube, Vimeo, Dailymotion, Dropbox, OneDrive, Google Drive, Facebook, Instagram, Cloudflare, Amazon S3 / Direct links:
      { type: "video", url: "https://www.youtube.com/watch?v=VIDEO_ID", alt: "Play Video" },
      // Optional: Add a custom cover image by adding the "thumbnail" property:
      { type: "video", url: "https://vimeo.com/VIDEO_ID", thumbnail: "assets/works/Taruni.jpg", alt: "Play Video" }
    ]
  },

  3. DESCRIPTION BOX CARD:
  -------------------------
  {
    type: "description_box",
    title: "Name of the Work / Section Title",
    description: "Write key context or comments about the works showcased in the media section above."
  }
  */
  clientPages: {
    "taruni": {
      clientName: "Taruni",
      clientDescription: "We created a series of aesthetic social media reels and festival marketing videos for Taruni, showcasing their luxury bridal couture collection. The visual language relied heavily on elegant lighting, warm color palettes, and fluid transitions matching the grace of the garments.",
      role: {
        title: "My Role",
        description: "Design, edit, color grade, and sound design. My role in this project was to edit the videos, animate the typography, and color grade the footage to match the client's premium visual brand style guide."
      },
      sections: [
        {
          type: "media_group",
          aspectRatio: "9:16",
          items: [
            { type: "video", url: "https://www.instagram.com/taruni.official/reel/DZCE4ASJ0Vk/?hl=en", alt: "Taruni Bridal Dress 1" },
            { type: "image", url: "assets/works/Furniture World.jpg", alt: "Sofa Set" },
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni Bridal Dress 2" }
          ]
        },
        {
          type: "description_box",
          title: "Name of the Work 1 mentioned above",
          description: "Here goes description for these social media posts. Color keys match the luxury aesthetic with warm beige and gold tones, highlighting the high-end apparel in motion."
        },
        {
          type: "media_group",
          aspectRatio: "4:5",
          items: [
            { type: "image", url: "assets/works/Furniture World.jpg", alt: "Furniture World Layout 1" },
            { type: "image", url: "assets/works/Furniture World.jpg", alt: "Furniture World Layout 2" }
          ]
        },
        {
          type: "description_box",
          title: "Name of the Work 1 mentioned above",
          description: "Here goes description for these social media posts. Color keys match the luxury aesthetic with warm beige and gold tones, highlighting the high-end apparel in motion."
        },
        {
          type: "media_group",
          aspectRatio: "16:9",
          items: [
            { type: "video", url: "https://www.youtube.com/embed/h2T2HfaMYu0", alt: "Taruni Landscape Couture" }
          ]
        },
        {
          type: "description_box",
          title: "Name of the Work 1 mentioned above",
          description: "Here goes description for these social media posts. Color keys match the luxury aesthetic with warm beige and gold tones, highlighting the high-end apparel in motion."
        },
        {
          type: "media_group",
          aspectRatio: "1:1",
          items: [
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni Square Couture 1" },
            { type: "image", url: "assets/works/Furniture World.jpg", alt: "Furniture World Square Showcase" },
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni Square Couture 2" }
          ]
        },
        {
          type: "description_box",
          title: "Name of the Work 1 mentioned above",
          description: "Here goes description for these social media posts. Color keys match the luxury aesthetic with warm beige and gold tones, highlighting the high-end apparel in motion."
        },
        {
          type: "media_group",
          aspectRatio: "16:9",
          items: [
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni Campaign Widescreen" },
            { type: "image", url: "assets/works/Furniture World.jpg", alt: "Furniture World Showroom" }
          ]
        },
        {
          type: "description_box",
          title: "Name of the Work 1 mentioned above",
          description: "Here goes description for these social media posts. Color keys match the luxury aesthetic with warm beige and gold tones, highlighting the high-end apparel in motion."
        },
        {
          type: "media_group",
          aspectRatio: "4:5",
          items: [
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni 4:5 Model 1" },
            { type: "image", url: "assets/works/Furniture World.jpg", alt: "Furniture 4:5 Model 2" },
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni 4:5 Model 3" }
          ]
        },
        {
          type: "description_box",
          title: "Name of the Work 1 mentioned above",
          description: "Here goes description for these social media posts. Color keys match the luxury aesthetic with warm beige and gold tones, highlighting the high-end apparel in motion."
        },
        {
          type: "media_group",
          aspectRatio: "9:16",
          items: [
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni 9:16 Single Model" }
          ]
        },
        {
          type: "description_box",
          title: "Name of the Work 1 mentioned above",
          description: "Here goes description for these social media posts. Color keys match the luxury aesthetic with warm beige and gold tones, highlighting the high-end apparel in motion."
        }
      ]
    },
    "furniture-world": {
      clientName: "Furniture World",
      clientDescription: "Furniture World requested a complete promotional video showcasing their modern, minimalist sofa layout. We integrated 3D camera sweeps with motion graphics overlays highlighting key features, dimensions, and fabric customizable options.",
      role: {
        title: "My Role",
        description: "3D Product Visualization, Camera Animation, and Motion Graphics. I built the interior environment, animated the camera movements, and added user interface overlays to guide the viewer."
      },
      sections: [
        {
          type: "media_group",
          aspectRatio: "16:9",
          items: [
            { type: "video", url: "https://customer-v7g3tq9n6e6b4y3c.cloudflarestream.com/9a9b9c9d9e9f9g9h9i9j9k9l9m9n9o9p/iframe", alt: "Furniture World 3D Promo Video" }
          ]
        },
        {
          type: "description_box",
          title: "3D Product Promo Reel",
          description: "Promo reel presenting detailed camera animation and feature calls for custom fabrics and modular sofa dimensions."
        }
      ]
    },
    "taruni-2": {
      clientName: "Taruni Campaign Part II",
      clientDescription: "The second phase of the Taruni campaign focused on interactive Instagram Stories and short vertical edits. The pacing was brisk, matching modern mobile consumption habits while keeping the premium visual style intact.",
      role: {
        title: "My Role",
        description: "Vertical Video Editing, Social Media Pacing, and Transition Design. I recut the hero assets into snappy 9:16 reels for maximum engagement."
      },
      sections: [
        {
          type: "media_group",
          aspectRatio: "9:16",
          items: [
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni Vertical Reel Content" },
            { type: "image", url: "assets/works/Taruni.jpg", alt: "Taruni Vertical Story Frame" }
          ]
        },
        {
          type: "description_box",
          title: "Vertical Social Shorts",
          description: "Fast-paced video variations designed specifically for Instagram and TikTok feeds, showcasing texture close-ups."
        }
      ]
    },
    "furniture-world-2": {
      clientName: "Furniture World Seasonal Sale",
      clientDescription: "Seasonal promotional video utilizing vector animations and clean typography to highlight limited-time store offers and clearance campaigns.",
      role: {
        title: "My Role",
        description: "2D Vector Animation and Kinetic Typography. I created the clean text animations and layout graphics."
      },
      sections: [
        {
          type: "media_group",
          aspectRatio: "16:9",
          items: [
            { type: "image", url: "assets/works/Furniture World.jpg", alt: "Furniture World Sale Feature" }
          ]
        },
        {
          type: "description_box",
          title: "Promotional Motion Graphics Campaign",
          description: "Typography-focused layouts highlighting store discounts, brand alignments, and operating hours during the holiday sale season."
        }
      ]
    }
  }
};
