window.handleRoute = function() {
  const content = window.portfolioContent;
  const appRoot = document.getElementById('app-root');
  if (!appRoot) return;

  // Normalize hash route
  let hash = window.location.hash || '#/';
  
  // Clean hash for parsing
  if (!hash.startsWith('#/')) {
    hash = '#/';
  }

  // Update navigation link active states
  updateActiveNavLink(hash);

  // Parse path and query parameters
  const path = hash.slice(2); // Remove '#/'
  
  // Reset scroll position to top on route change
  window.scrollTo(0, 0);

  // Route mapping and dynamic body class updates
  if (path === '' || path === 'home') {
    document.body.className = 'route-home';
    appRoot.innerHTML = renderHome(content);
    if (typeof window.initClientExperienceSlider === 'function') {
      window.initClientExperienceSlider();
    }
  } else if (path === 'works') {
    document.body.className = 'route-works';
    appRoot.innerHTML = renderWorks(content);
    if (typeof window.initWorksInfiniteScroll === 'function') {
      window.initWorksInfiniteScroll(content.works);
    }
  } else if (path === 'about') {
    document.body.className = 'route-about';
    appRoot.innerHTML = renderAbout(content);
  } else if (path.startsWith('works/')) {
    const clientId = path.replace('works/', '');
    const clientData = content.clientPages ? content.clientPages[clientId] : null;

    if (clientData) {
      document.body.className = 'route-client';
      appRoot.innerHTML = renderClientPage(clientId, content);
      if (typeof window.initClientPageLazyLoad === 'function') {
        window.initClientPageLazyLoad();
      }
    } else {
      // Re-route to 404 if client ID does not exist in configuration
      document.body.className = 'route-404';
      const notFoundConfig = content.notFound || {};
      appRoot.innerHTML = renderNotFound(notFoundConfig);
      
      if (typeof window.initTypewriterAnimations === 'function') {
        window.initTypewriterAnimations(
          notFoundConfig.statusText || "This Layer Doesn't Exist",
          '#app-root'
        );
      }
    }
  } else {
    document.body.className = 'route-404';
    const notFoundConfig = content.notFound || {};
    appRoot.innerHTML = renderNotFound(notFoundConfig);
    
    // Trigger typewriter animation for 404 page
    if (typeof window.initTypewriterAnimations === 'function') {
      window.initTypewriterAnimations(
        notFoundConfig.statusText || "This Layer Doesn't Exist",
        '#app-root'
      );
    }
  }
}

// Update Header Navigation Active State
function updateActiveNavLink(hash) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Bold state logic:
    // Home bold if on #/ or empty
    // Works bold if on #/works or #/works/client-name
    // About bold if on #/about
    
    let isActive = false;
    if (linkPath === '#/' && (hash === '#/' || hash === '#/home')) {
      isActive = true;
    } else if (linkPath === '#/works' && hash.startsWith('#/works')) {
      isActive = true;
    } else if (linkPath === '#/about' && hash === '#/about') {
      isActive = true;
    }

    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// TEMPLATE RENDERING FUNCTIONS

function renderHome(data) {
  const marqueeItems = data.expertise.map(skill => `<span class="marquee-item">${skill}</span>`).join('<span class="marquee-separator">|</span>');
  
  const experienceCards = data.experience.map(exp => `
    <div class="experience-card">
      <img src="${exp.logo}" alt="${exp.company} Logo" class="exp-company-logo" loading="lazy" />
      <div class="exp-role-container">
        <span class="exp-role">${exp.role}</span>
        <span class="exp-type">${exp.employmentType}</span>
      </div>
      <span class="exp-duration">${exp.duration}</span>
    </div>
  `).join('');

  // Build the slides HTML dynamically from clientsExperience config
  const sliderConfig = data.clientsExperience || { slides: [] };
  
  const slidesHTML = sliderConfig.slides.map((slide, slideIdx) => {
    const maxLogos = Math.max(...slide.rows.map(row => row.logos.length), 1);
    let logoCounter = 0;

    const rowsHTML = slide.rows.map(row => {
      const logosHTML = row.logos.map(logo => {
        const delay = (logoCounter++) * 0.04;
        return `
          <div class="slider-logo-item" title="${logo.name}" style="--logo-delay: ${delay}s;">
            <img src="${logo.logo}" alt="${logo.name} Logo" class="slider-logo" loading="lazy" />
          </div>
        `;
      }).join('');
      
      return `
        <div class="slider-row" id="${row.id}" style="--grid-cols: ${maxLogos};">
          ${logosHTML}
        </div>
      `;
    }).join('');

    return `
      <div class="client-slide" data-id="${slide.id}">
        ${slide.title ? `<h3 class="slide-title">${slide.title}</h3>` : ''}
        <div class="slide-rows-container">
          ${rowsHTML}
        </div>
      </div>
    `;
  }).join('');

  // Build the pagination dots HTML
  const dotsHTML = sliderConfig.slides.map((slide, idx) => `
    <button class="slider-dot" data-index="${idx}" aria-label="Go to slide ${idx + 1}" role="tab" aria-selected="false"></button>
  `).join('');

  const defaultActiveSlideId = sliderConfig.defaultActiveSlideId || "";

  return `
    <div class="page-wrapper home-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-image-container">
          <img src="${data.hero.image}" alt="${data.hero.alt}" class="hero-img" loading="eager" />
        </div>
      </section>

      <!-- Core Expertise Marquee -->
      <section class="expertise-section">
        <h3 class="expertise-label">core expertise</h3>
        <div class="marquee-container">
          <div class="marquee-track">
            <div class="marquee-content">
              ${marqueeItems}
              <span class="marquee-separator">|</span>
            </div>
            <div class="marquee-content" aria-hidden="true">
              ${marqueeItems}
              <span class="marquee-separator">|</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="experience-section">
        <h2 class="section-title">Work Experience</h2>
        <div class="experience-list">
          ${experienceCards}
        </div>
        
        <div class="explore-btn-container">
          <button class="explore-btn" onclick="window.location.hash='${data.exploreWorksButton.destination}'">
            ${data.exploreWorksButton.text}
          </button>
        </div>
      </section>

      <!-- Clients Experience Slider Section -->
      <section class="clients-section">
        <h2 class="section-title">${sliderConfig.title || 'Clients Experience'}</h2>
        <p class="clients-subtitle">${sliderConfig.subtitle || 'Brands & Organizations I Have Supported Throughout My Professional Career.'}</p>
        
        <div class="client-slider-container" data-default-slide-id="${defaultActiveSlideId}">
          <div class="slider-track-wrapper">
            <div class="slider-track">
              ${slidesHTML}
            </div>
          </div>
          
          <!-- Slider Controls Group (Arrows & Dots) -->
          <div class="slider-controls-container">
            <div class="slider-arrows">
              <button class="slider-arrow prev-arrow" aria-label="Previous Slide">
                <svg class="arrow-icon" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
                </svg>
              </button>
              <button class="slider-arrow next-arrow" aria-label="Next Slide">
                <svg class="arrow-icon" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                </svg>
              </button>
            </div>
            
            <!-- Slide Indicator Dots -->
            <div class="slider-dots" role="tablist">
              ${dotsHTML}
            </div>
          </div>
        </div>
      </section>

      <!-- Outro Section -->
      <section class="outro-section">
        <img src="${data.outro.image}" alt="${data.outro.alt}" class="outro-img" loading="lazy" />
      </section>
    </div>
  `;
}

function renderWorks(data) {
  return `
    <div class="page-wrapper works-page">
      <div class="works-container">
        <h1 class="works-title">WORKS</h1>
        <div class="works-grid" id="works-grid"></div>
        <div id="works-sentinel" class="works-sentinel"></div>
      </div>
    </div>
  `;
}

function renderAbout(data) {
  const paragraphs = data.about.paragraphs.map(para => `<p class="about-bio-p">${para}</p>`).join('');

  return `
    <div class="page-wrapper about-page">
      <div class="about-container">
        <div class="about-image-wrapper">
          <img src="${data.about.image}" alt="${data.about.title} Profile Picture" class="about-img" loading="eager" />
        </div>
        <div class="about-content">
          <h2 class="about-name">${data.about.title}</h2>
          ${paragraphs}
        </div>
      </div>
      
      <div class="about-contact-section">
        <div class="about-contact-line">
          Email - <a href="mailto:${data.about.contact.email}">${data.about.contact.email}</a> | 
          Phone - <a href="tel:${data.about.contact.phone}">${data.about.contact.phone}</a> | 
          Linkedin - <a href="${data.about.contact.linkedinUrl}" target="_blank" rel="noopener noreferrer">${data.about.contact.linkedin}</a>
        </div>
      </div>
    </div>
  `;
}

function renderClientPage(clientId, data) {
  const clientData = data.clientPages[clientId];

  // Fallback render if client details don't exist in config yet
  if (!clientData) {
    const formattedId = clientId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return `
      <div class="page-wrapper client-page">
        <div class="client-page-container">
          <a href="#/works" class="client-back-link">
            &lt; Back to works
          </a>
          <div class="client-page-header">
            <h1 class="client-page-title">${formattedId}</h1>
            <p class="client-page-description">Project Detail Page (Placeholder). Create an entry for <code>"${clientId}"</code> under the <code>clientPages</code> object inside <code>js/content.js</code> to configure this page.</p>
          </div>
        </div>
      </div>
    `;
  }

  // Render Role Box if present
  let roleBoxHTML = '';
  if (clientData.role) {
    roleBoxHTML = `
      <div class="client-role-box">
        <h3 class="client-role-title">${clientData.role.title || 'My Role'}</h3>
        <p class="client-role-text">${clientData.role.description}</p>
      </div>
    `;
  }

  // Render client sections dynamically
  const sectionsHTML = clientData.sections.map(section => {
    if (section.type === 'media_group') {
      const maxCols = 3;
      const items = section.items;
      const N = items.length;
      
      const chunks = [];
      if (N <= maxCols) {
        chunks.push(items);
      } else if (N === 4) {
        chunks.push(items.slice(0, 2));
        chunks.push(items.slice(2, 4));
      } else {
        for (let i = 0; i < N; i += maxCols) {
          chunks.push(items.slice(i, i + maxCols));
        }
      }

      const rowsHTML = chunks.map(chunk => {
        const chunkCount = chunk.length;
        const itemsHTML = chunk.map(item => {
          const itemRatio = item.aspectRatio || section.aspectRatio || '16:9';
          const ratioClass = itemRatio.replace(':', '-');
          const ratioParts = itemRatio.split(':');
          const ratioValue = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);

          return `
            <div class="media-item ratio-${ratioClass} lazy-media" 
                 style="flex: ${ratioValue} 1 0%;" 
                 data-item-json="${encodeURIComponent(JSON.stringify(item))}"
                 data-section-ratio="${section.aspectRatio || ''}">
              <div class="media-skeleton"></div>
            </div>
          `;
        }).join('');

        return `
          <div class="client-media-grid cols-${chunkCount}">
            ${itemsHTML}
          </div>
        `;
      }).join('');

      return `
        <div class="client-media-group-wrapper">
          ${rowsHTML}
        </div>
      `;
    } else if (section.type === 'description_box') {
      return `
        <div class="client-description-box">
          <h4 class="client-description-title">${section.title}</h4>
          <p class="client-description-text">${section.description}</p>
        </div>
      `;
    }
    return '';
  }).join('');

  return `
    <div class="page-wrapper client-page">
      <div class="client-page-container">
        <a href="#/works" class="client-back-link">
          &lt; Back to works
        </a>
        <div class="client-page-header">
          <h1 class="client-page-title">${clientData.clientName}</h1>
          <p class="client-page-description">${clientData.clientDescription}</p>
        </div>
        
        ${roleBoxHTML}
        
        <div class="client-page-content">
          ${sectionsHTML}
        </div>
      </div>
    </div>
  `;
}

function renderNotFound(config) {
  const videoSrc = config.videoSrc || '';
  const buttonText = config.buttonText || 'Return to Home';
  const buttonDestination = config.buttonDestination || '#/';
  
  const videoHTML = videoSrc 
    ? `<div class="error-video-container">
         <video class="error-video" src="${videoSrc}" autoplay loop muted playsinline></video>
       </div>`
    : '';

  return `
    <div class="page-wrapper error-page">
      <div class="error-container">
        ${videoHTML}
        <h1 class="status-text">
          <span class="typewriter"></span><span class="cursor">|</span><span class="dots"><span class="dot">.</span><span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></span>
        </h1>
        <div class="error-btn-container">
          <button class="explore-btn" onclick="window.location.hash='${buttonDestination}'">
            ${buttonText}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Consolidated helper to parse different video links (returns type, thumbnail if available, and embed URL)
function getVideoInfo(url) {
  if (!url) return { type: 'other', embedUrl: '' };

  // 1. YouTube (standard watch links, mobile youtu.be links, embed links, shorts)
  if (url.includes('youtube.com/watch') || url.includes('youtu.be/') || url.includes('youtube.com/embed/') || url.includes('youtube-nocookie.com/embed/') || url.includes('youtube.com/shorts/')) {
    let videoId = '';
    if (url.includes('youtube.com/watch')) {
      try {
        const urlObj = new URL(url);
        videoId = urlObj.searchParams.get('v');
      } catch (e) {}
    } else if (url.includes('youtu.be/')) {
      try {
        const urlObj = new URL(url);
        videoId = urlObj.pathname.substring(1);
      } catch (e) {}
    } else if (url.includes('youtube.com/embed/') || url.includes('youtube-nocookie.com/embed/')) {
      try {
        const urlObj = new URL(url);
        const parts = urlObj.pathname.split('/').filter(Boolean);
        const embedIndex = parts.indexOf('embed');
        if (embedIndex !== -1 && parts[embedIndex + 1]) {
          videoId = parts[embedIndex + 1];
        }
      } catch (e) {}
    } else if (url.includes('youtube.com/shorts/')) {
      try {
        const urlObj = new URL(url);
        const parts = urlObj.pathname.split('/').filter(Boolean);
        const shortsIndex = parts.indexOf('shorts');
        if (shortsIndex !== -1 && parts[shortsIndex + 1]) {
          videoId = parts[shortsIndex + 1];
        }
      } catch (e) {}
    }
    
    if (videoId) {
      return {
        type: 'youtube',
        id: videoId,
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        fallbackThumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`
      };
    }
  }

  // 2. Vimeo (share links)
  if (url.includes('vimeo.com/') && !url.includes('player.vimeo.com')) {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.pathname.substring(1);
      if (videoId && !isNaN(videoId)) {
        return {
          type: 'vimeo',
          id: videoId,
          embedUrl: `https://player.vimeo.com/video/${videoId}`
        };
      }
    } catch (e) {}
  }

  // 3. Dailymotion (share links or shortlinks)
  if (url.includes('dailymotion.com/video/') || url.includes('dai.ly/')) {
    try {
      let videoId = '';
      if (url.includes('dai.ly/')) {
        const urlObj = new URL(url);
        videoId = urlObj.pathname.substring(1);
      } else {
        const urlObj = new URL(url);
        const parts = urlObj.pathname.split('/');
        videoId = parts[parts.indexOf('video') + 1];
      }
      if (videoId) {
        return {
          type: 'dailymotion',
          id: videoId,
          thumbnail: `https://www.dailymotion.com/thumbnail/video/${videoId}`,
          embedUrl: `https://www.dailymotion.com/embed/video/${videoId}`
        };
      }
    } catch (e) {}
  }

  // 4. Dropbox (standard sharing links)
  if (url.includes('dropbox.com/s/')) {
    const directUrl = url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').split('?')[0];
    return {
      type: 'direct',
      embedUrl: directUrl
    };
  }

  // 5. Instagram (standard posts, reels, and username links)
  if (url.includes('instagram.com') && (url.includes('/p/') || url.includes('/reel/'))) {
    try {
      const urlObj = new URL(url);
      const paths = urlObj.pathname.split('/').filter(Boolean);
      let typeIndex = paths.indexOf('p');
      if (typeIndex === -1) {
        typeIndex = paths.indexOf('reel');
      }
      if (typeIndex !== -1 && paths[typeIndex + 1]) {
        const type = paths[typeIndex];
        const postId = paths[typeIndex + 1];
        return {
          type: 'instagram',
          embedUrl: `https://www.instagram.com/${type}/${postId}/embed/`
        };
      }
    } catch (e) {}
  }

  // 6. Facebook (standard post videos or watch links)
  if (url.includes('facebook.com/') && (url.includes('/videos/') || url.includes('watch'))) {
    return {
      type: 'facebook',
      embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0`
    };
  }

  // 7. Microsoft OneDrive
  if (url.includes('onedrive.live.com/')) {
    const embedUrl = url.replace('/redir?', '/embed?').replace('/personal?', '/embed?');
    return {
      type: 'onedrive',
      embedUrl: embedUrl
    };
  }

  // 8. Direct Video Files (e.g. S3 links, raw storage files ending with typical video formats)
  const cleanPath = url.split('?')[0].split('#')[0].toLowerCase();
  const isDirectVideo = cleanPath.endsWith('.mp4') || cleanPath.endsWith('.webm') || cleanPath.endsWith('.ogg') || cleanPath.endsWith('.mov') || cleanPath.endsWith('.m4v');
  if (isDirectVideo) {
    return {
      type: 'direct',
      embedUrl: url
    };
  }

  // 9. Mega Cloud (redirects to new tab due to frame blocks)
  if (url.includes('mega.nz/') || url.includes('mega.co.nz/')) {
    return {
      type: 'mega',
      embedUrl: url
    };
  }

  // 10. Google Drive (resolving standard view links to preview)
  if (url.includes('drive.google.com/file/d/')) {
    let driveUrl = url;
    if (driveUrl.includes('/view')) {
      driveUrl = driveUrl.split('/view')[0] + '/preview';
    }
    return {
      type: 'drive',
      embedUrl: driveUrl
    };
  }

  // 11. Cloudflare Stream
  if (url.includes('cloudflarestream.com/') || url.includes('videodelivery.net/')) {
    let videoId = '';
    let thumbnail = '';
    
    if (url.includes('cloudflarestream.com/')) {
      try {
        const urlObj = new URL(url);
        const parts = urlObj.pathname.split('/').filter(Boolean);
        if (parts[0]) {
          videoId = parts[0];
          const host = urlObj.hostname;
          thumbnail = `https://${host}/${videoId}/thumbnails/thumbnail.jpg?time=0s`;
        }
      } catch (e) {}
    } else if (url.includes('videodelivery.net/')) {
      try {
        const urlObj = new URL(url);
        const parts = urlObj.pathname.split('/').filter(Boolean);
        if (parts[0]) {
          videoId = parts[0];
          thumbnail = `https://videodelivery.net/${videoId}/thumbnails/thumbnail.jpg?time=0s`;
        }
      } catch (e) {}
    }

    return {
      type: 'cloudflare',
      id: videoId,
      thumbnail: thumbnail,
      embedUrl: url
    };
  }

  return {
    type: 'other',
    embedUrl: url
  };
}

// Global function to play video inline (triggered by clicking play overlay)
window.playVideoInline = function(element, embedUrl, videoType) {
  if (!element || !embedUrl) return;
  
  if (videoType === 'instagram') {
    // Open standard Instagram link in new tab to avoid frame restrictions
    const originalInstagramUrl = embedUrl.replace('/embed/', '/');
    window.open(originalInstagramUrl, '_blank');
    return;
  }
  
  if (videoType === 'mega') {
    // Open Mega Cloud link in new tab to avoid encryption iframe restrictions
    window.open(embedUrl, '_blank');
    return;
  }
  
  if (videoType === 'direct') {
    // Render high-performance HTML5 native player for S3, Dropbox, etc.
    element.innerHTML = `
      <video src="${embedUrl}" controls autoplay style="width:100%; height:100%; object-fit:cover;"></video>
    `;
  } else {
    let autoplayUrl = embedUrl;
    
    // Add autoplay parameter depending on the video host
    if (autoplayUrl.includes('youtube.com') || autoplayUrl.includes('youtube-nocookie.com')) {
      autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=1&mute=0';
    } else if (autoplayUrl.includes('vimeo.com')) {
      autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=1';
    } else if (autoplayUrl.includes('cloudflarestream.com')) {
      autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=true';
    } else if (autoplayUrl.includes('dailymotion.com')) {
      autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=1&mute=0';
    } else {
      autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=1';
    }

    element.innerHTML = `
      <iframe src="${autoplayUrl}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  }
  
  // Remove cursor pointer style and onclick attribute to prevent re-triggering
  element.removeAttribute('onclick');
  element.style.cursor = 'default';
};

// Get play button SVG icon matching the video platform
function getPlayIconSvg(type) {
  switch (type) {
    case 'youtube':
      return `
        <svg class="play-icon icon-youtube" viewBox="0 0 68 48">
          <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0.13,34,0.13S12.21,0.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,47.87,34,47.87s21.79,0,27.1-1.42c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#FF0000"/>
          <polygon points="27,33 44,24 27,15" fill="#FFFFFF"/>
        </svg>
      `;
    case 'dailymotion':
      return `
        <svg class="play-icon icon-dailymotion" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="23" fill="#0066ff" />
          <path d="M26.2 14.6h-5v20.8h5c4.7 0 7.8-2.7 7.8-10.4 0-7.7-3.1-10.4-7.8-10.4zm-.2 16.2h-.8v-11.6h.8c2.8 0 3.8 1.9 3.8 5.8 0 3.9-1 5.8-3.8 5.8z" fill="#FFFFFF"/>
          <path d="M16 25.6h4.2v9.8H16z" fill="#FFFFFF"/>
        </svg>
      `;
    default:
      return `
        <svg class="play-icon icon-direct" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="23" fill="#003851" />
          <polygon points="20,16 34,25 20,34" fill="#ffffff"/>
        </svg>
      `;
  }
}

// =============================================================
// LAZY LOADING & INFINITE SCROLL SYSTEM
// =============================================================

// Works Page Infinite Scroll
window.initWorksInfiniteScroll = function(worksData) {
  const grid = document.getElementById('works-grid');
  const sentinel = document.getElementById('works-sentinel');
  if (!grid || !sentinel || !worksData || worksData.length === 0) return;

  let currentIndex = 0;
  const BATCH_SIZE = 6;
  let observer = null;

  function loadNextBatch() {
    const batch = worksData.slice(currentIndex, currentIndex + BATCH_SIZE);
    if (batch.length === 0) {
      cleanup();
      return;
    }

    const cardsHTML = batch.map(work => `
      <a href="${work.link}" class="work-card">
        <img src="${work.image}" alt="${work.clientName}" class="work-card-img" loading="lazy" />
        <div class="work-card-overlay">
          <h3 class="work-card-client">${work.clientName}</h3>
          <span class="work-card-desc">${work.description}</span>
        </div>
      </a>
    `).join('');

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cardsHTML;
    
    const addedCards = Array.from(tempDiv.children);
    addedCards.forEach(card => {
      grid.appendChild(card);
    });

    // Animate loading on the next rendering tick
    requestAnimationFrame(() => {
      setTimeout(() => {
        addedCards.forEach(card => {
          card.classList.add('loaded');
        });
      }, 50);
    });

    currentIndex += batch.length;

    if (currentIndex >= worksData.length) {
      cleanup();
    }
  }

  function cleanup() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (sentinel && sentinel.parentNode) {
      sentinel.parentNode.removeChild(sentinel);
    }
  }

  // Load first batch immediately
  loadNextBatch();

  // Observe sentinel to load more cards on scroll
  if (currentIndex < worksData.length) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadNextBatch();
        }
      });
    }, {
      rootMargin: '150px'
    });
    observer.observe(sentinel);
  }
};

// Client Pages Scroll-Based Media Lazy Loading
window.initClientPageLazyLoad = function() {
  const lazyMediaElements = document.querySelectorAll('.lazy-media');
  if (lazyMediaElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        loadLazyMedia(element);
        obs.unobserve(element);
      }
    });
  }, {
    rootMargin: '250px' // Load media before it enters the screen
  });

  lazyMediaElements.forEach(el => observer.observe(el));
};

// Load Media Content Dynamically & Prevent Layout Shifts
function loadLazyMedia(element) {
  if (!element || !element.dataset.itemJson) return;

  const item = JSON.parse(decodeURIComponent(element.dataset.itemJson));
  const sectionRatio = element.dataset.sectionRatio || '';
  const itemRatio = item.aspectRatio || sectionRatio || '16:9';
  const ratioClass = itemRatio.replace(':', '-');

  let innerHTML = '';
  let videoInfo = null;
  let thumbnailUrl = '';
  let hasCustomThumbnail = false;

  if (item.type === 'video') {
    videoInfo = getVideoInfo(item.url);
    hasCustomThumbnail = !!item.thumbnail;
    
    let needsPlaceholder = false;
    if (videoInfo.type === 'instagram' || videoInfo.type === 'mega') {
      needsPlaceholder = true;
    } else if (hasCustomThumbnail) {
      needsPlaceholder = true;
    }
    
    if (needsPlaceholder) {
      thumbnailUrl = hasCustomThumbnail ? item.thumbnail : (videoInfo.thumbnail || '');
      let onerrorAttr = '';
      if (!hasCustomThumbnail && videoInfo.type === 'youtube' && videoInfo.fallbackThumbnail) {
        onerrorAttr = `onerror="this.onerror=null; this.src='${videoInfo.fallbackThumbnail}';"`;
      }
      
      let thumbnailHTML = '';
      if (thumbnailUrl) {
        thumbnailHTML = `<img src="${thumbnailUrl}" ${onerrorAttr} alt="${item.alt || 'Play Video'}" />`;
      } else {
        thumbnailHTML = `<div class="media-placeholder-bg provider-${videoInfo.type}"></div>`;
      }
      
      innerHTML = `
        ${thumbnailHTML}
        <div class="youtube-play-overlay">
          ${getPlayIconSvg(videoInfo.type)}
        </div>
      `;
      element.classList.add('youtube-placeholder');
      element.onclick = function() {
        window.playVideoInline(element, videoInfo.embedUrl, videoInfo.type);
      };
    } else {
      if (videoInfo.type === 'direct') {
        innerHTML = `
          <video src="${videoInfo.embedUrl}" controls style="width:100%; height:100%; object-fit:cover;"></video>
        `;
      } else {
        innerHTML = `
          <iframe src="${videoInfo.embedUrl}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="${item.alt || 'Project Video'}"></iframe>
        `;
      }
    }
  } else {
    innerHTML = `
      <img src="${item.url}" alt="${item.alt || 'Project Image'}" />
    `;
  }

  // Pre-load images for smoother visual entrance (no half-rendered line jumps)
  const isImageLoadable = item.type === 'image' || (item.type === 'video' && (videoInfo.type === 'instagram' || videoInfo.type === 'mega' || hasCustomThumbnail) && thumbnailUrl);
  
  if (isImageLoadable) {
    const srcToLoad = item.type === 'image' ? item.url : thumbnailUrl;
    const imgLoader = new Image();
    imgLoader.src = srcToLoad;
    
    const onImgLoad = () => {
      const skeleton = element.querySelector('.media-skeleton');
      element.insertAdjacentHTML('beforeend', innerHTML);
      element.classList.add('loaded');
      
      // Clean up skeleton after transition finishes
      setTimeout(() => {
        if (skeleton && skeleton.parentNode) {
          skeleton.parentNode.removeChild(skeleton);
        }
      }, 600);
    };
    
    imgLoader.onload = onImgLoad;
    imgLoader.onerror = onImgLoad; // Fallback display even if loading fails
  } else {
    // Inject directly for inline direct videos and iframe players
    const skeleton = element.querySelector('.media-skeleton');
    element.insertAdjacentHTML('beforeend', innerHTML);
    element.classList.add('loaded');
    setTimeout(() => {
      if (skeleton && skeleton.parentNode) {
        skeleton.parentNode.removeChild(skeleton);
      }
    }, 600);
  }
}
