// Centralized Client Pages Configuration for Yada Krishna Portfolio
// Edit this file to add/remove client detail pages.

window.portfolioContent = window.portfolioContent || {};

/*
========================================================================
CLIENT PAGE BUILDER TEMPLATES (Copy & Paste Reference)
========================================================================

HOW TO CREATE A CLIENT DETAIL PAGE IN 3 EASY STEPS:

STEP 1: Copy this Page Shell and paste it under "clientPages:" below.
        Change "your-work-id" to match the "id" of your work card.
------------------------------------------------------------------------
"your-work-id": {
  clientName: "Client Name Here",
  clientDescription: "Short paragraph describing the client or project details.",
  role: {
    title: "My Role",
    description: "Explain your creative contributions (e.g. Video Editor, Motion Designer)."
  },
  sections: [
    // Put STEP 2 and STEP 3 blocks inside here!
  ]
},

STEP 2: Paste this Media Group inside the "sections: [...]" array above.
        - Set "aspectRatio" on the group (below "type: 'media_group'") to apply a default ratio (e.g. "16:9" | "9:16" | "4:5" | "1:1") to all items in that group.
        - OR, set "aspectRatio" inside any individual item to override the default and mix different ratios in the same row!
          (Mixed ratio items in the same row automatically adapt: they stretch to the exact same height and scale their widths proportionally to look balanced and aligned!)
        - You can add any number of items inside "items: [...]".
          * If there are up to 3 items, they lay out in a single row.
          * If there are exactly 4 items, they automatically wrap into a balanced 2x2 grid.
          * If there are 5 or more items, they wrap into rows of 3 columns.
          * On mobile viewports, all items stack vertically.
        - NOTE: 
          1. YouTube & Dailymotion automatically load their own thumbnails and custom play buttons.
          2. Instagram & Mega Cloud open in new tabs on click and show the default dark blue play button.
          3. Other inline platforms (Facebook, Vimeo, Google Drive, OneDrive, Cloudflare, direct files) load their native players directly if no custom "thumbnail" is set. If you set a custom "thumbnail", they show your cover first with the default dark blue play button.
------------------------------------------------------------------------
{
  type: "media_group",
  aspectRatio: "16:9", // (Optional: default ratio if not specified on items)
  items: [
    // IMAGE FORMAT (with individual aspect ratio):
    { type: "image", url: "assets/works/Taruni.jpg", aspectRatio: "1:1", alt: "Photo description" },
    
    // VIDEO FORMAT (Plays inline, with individual aspect ratio):
    { type: "video", url: "https://www.youtube.com/watch?v=VIDEO_ID", aspectRatio: "16:9", alt: "Video description" },
    
    // VIDEO FORMAT (Opens in new tab, with individual aspect ratio):
    { type: "video", url: "https://www.instagram.com/reel/VIDEO_ID/", aspectRatio: "9:16", alt: "Social video description" },
    
    // OPTIONAL CUSTOM COVER: Add the "thumbnail" property to any video item to show a custom cover image:
    { type: "video", url: "https://vimeo.com/VIDEO_ID", aspectRatio: "4:5", thumbnail: "assets/works/Taruni.jpg", alt: "Custom thumbnail video" }
  ]
},

STEP 3: Paste this Description Box inside "sections: [...]" to write text comments.
------------------------------------------------------------------------
{
  type: "description_box",
  title: "Section or Video Title Here",
  description: "Write details or context about the media items shown above."
}

========================================================================
*/

window.portfolioContent.clientPages = {
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
          { type: "video", url: "https://www.instagram.com/taruni.official/reel/DZCE4ASJ0Vk/?hl=en", thumbnail: "assets/works/Taruni.jpg", alt: "Taruni Bridal Dress 1" },
          { type: "video", url: "https://www.facebook.com/taruni.in/videos/anarkalis-that-make-every-entry-count/1597509629045146/", alt: "Sofa Set" },
          { type: "video", url: "https://www.youtube.com/shorts/pbiETqobfuM", alt: "Taruni Bridal Dress 2" },
          { type: "video", url: "https://www.instagram.com/taruni.official/reel/DZCE4ASJ0Vk/?hl=en", thumbnail: "assets/works/Taruni.jpg", alt: "Taruni Bridal Dress 1" },
          { type: "video", url: "https://www.facebook.com/taruni.in/videos/anarkalis-that-make-every-entry-count/1597509629045146/", alt: "Sofa Set" },
          { type: "video", url: "https://www.youtube.com/shorts/pbiETqobfuM", alt: "Taruni Bridal Dress 2" }
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
          { type: "video", url: "https://pub-00532822571f485189f1f63e456e4061.r2.dev/Timeless-Designs-to-Elevate-Your-Wedding_Media_S0FGHdxWV4I_001_1080p.mp4", alt: "Taruni Campaign Widescreen" },
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
          { type: "video", url: "https://pub-00532822571f485189f1f63e456e4061.r2.dev/Fresh-greens-soft-florals-and-sunshine-s_Media_unWiKVuAjL0_001_1080p.mp4", alt: "Taruni 9:16 Single Model" }
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
          { type: "video", url: "https://pub-00532822571f485189f1f63e456e4061.r2.dev/Timeless-Designs-to-Elevate-Your-Wedding_Media_S0FGHdxWV4I_001_1080p.mp4", alt: "Furniture World 3D Promo Video" }
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
};
