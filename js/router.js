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
  } else if (path === 'works') {
    document.body.className = 'route-works';
    appRoot.innerHTML = renderWorks(content);
  } else if (path === 'about') {
    document.body.className = 'route-about';
    appRoot.innerHTML = renderAbout(content);
  } else if (path.startsWith('works/')) {
    document.body.className = 'route-client';
    const clientId = path.replace('works/', '');
    appRoot.innerHTML = renderClientPage(clientId, content);
  } else {
    document.body.className = 'route-404';
    appRoot.innerHTML = renderNotFound();
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

  const clientLogos = data.clients.map(client => `
    <div class="client-logo-item">
      <img src="${client.logo}" alt="${client.name} Logo" class="client-logo" loading="lazy" />
    </div>
  `).join('');

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

      <!-- Clients Experience Grid -->
      <section class="clients-section">
        <h2 class="section-title">Clients Experience</h2>
        <p class="clients-subtitle">Brands & Organizations I Have Supported Throughout My Professional Career.</p>
        <div class="clients-grid">
          ${clientLogos}
        </div>
      </section>

      <!-- Outro Section -->
      <section class="outro-section">
        <img src="assets/images/Hero Section Thanks.png" alt="Thanks For Coming By!" class="outro-img" loading="lazy" />
      </section>
    </div>
  `;
}

function renderWorks(data) {
  const cards = data.works.map(work => `
    <a href="${work.link}" class="work-card">
      <img src="${work.image}" alt="${work.clientName}" class="work-card-img" loading="lazy" />
      <div class="work-card-overlay">
        <h3 class="work-card-client">${work.clientName}</h3>
        <span class="work-card-desc">${work.description}</span>
      </div>
    </a>
  `).join('');

  return `
    <div class="page-wrapper works-page">
      <div class="works-container">
        <h1 class="works-title">WORKS</h1>
        <div class="works-grid">
          ${cards}
        </div>
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
      const ratioClass = section.aspectRatio.replace(':', '-'); // e.g., '9-16'
      const itemsCount = section.items.length;
      
      const itemsHTML = section.items.map(item => {
        if (item.type === 'video') {
          const videoInfo = getVideoInfo(item.url);
          const hasCustomThumbnail = !!item.thumbnail;
          const hasProviderThumbnail = !!videoInfo.thumbnail;
          
          if (hasCustomThumbnail || hasProviderThumbnail) {
            let thumbnailUrl = hasCustomThumbnail ? item.thumbnail : videoInfo.thumbnail;
            let onerrorAttr = '';
            if (!hasCustomThumbnail && videoInfo.type === 'youtube' && videoInfo.fallbackThumbnail) {
              onerrorAttr = `onerror="this.onerror=null; this.src='${videoInfo.fallbackThumbnail}';"`;
            }
            
            return `
              <div class="media-item ratio-${ratioClass} youtube-placeholder" onclick="window.playVideoInline(this, '${videoInfo.embedUrl}', '${videoInfo.type}')">
                <img src="${thumbnailUrl}" ${onerrorAttr} alt="${item.alt || 'Play Video'}" />
                <div class="youtube-play-overlay">
                  ${getPlayIconSvg(videoInfo.type)}
                </div>
              </div>
            `;
          } else {
            if (videoInfo.type === 'direct') {
              return `
                <div class="media-item ratio-${ratioClass}">
                  <video src="${videoInfo.embedUrl}" controls style="width:100%; height:100%; object-fit:cover;"></video>
                </div>
              `;
            } else {
              return `
                <div class="media-item ratio-${ratioClass}">
                  <iframe src="${videoInfo.embedUrl}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="${item.alt || 'Project Video'}"></iframe>
                </div>
              `;
            }
          }
        } else {
          return `
            <div class="media-item ratio-${ratioClass}">
              <img src="${item.url}" alt="${item.alt || 'Project Image'}" loading="lazy" />
            </div>
          `;
        }
      }).join('');

      return `
        <div class="client-media-grid cols-${itemsCount}">
          ${itemsHTML}
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

function renderNotFound() {
  return `
    <div class="page-wrapper error-page" style="padding: 100px 20px; text-align: center;">
      <h1 style="font-size: 3rem; margin-bottom: 20px;">404</h1>
      <p style="font-size: 1.2rem; margin-bottom: 30px;">Page not found.</p>
      <a href="#/" class="explore-btn" style="display: inline-block;">Return Home</a>
    </div>
  `;
}

// Consolidated helper to parse different video links (returns type, thumbnail if available, and embed URL)
function getVideoInfo(url) {
  if (!url) return { type: 'other', embedUrl: '' };

  // 1. YouTube (standard watch links, mobile youtu.be links, embed links)
  if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
    let videoId = '';
    if (url.includes('youtube.com/watch')) {
      try {
        const urlObj = new URL(url);
        videoId = urlObj.searchParams.get('v');
      } catch (e) {}
    } else {
      try {
        const urlObj = new URL(url);
        videoId = urlObj.pathname.substring(1);
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

  // 5. Instagram (standard posts and reels links)
  if (url.includes('instagram.com/p/') || url.includes('instagram.com/reel/')) {
    try {
      const urlObj = new URL(url);
      const paths = urlObj.pathname.split('/').filter(Boolean);
      const type = paths[0];
      const postId = paths[1];
      if (postId) {
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
  if (url.includes('cloudflarestream.com/')) {
    return {
      type: 'cloudflare',
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
    case 'instagram':
      return `
        <svg class="play-icon icon-instagram" viewBox="0 0 50 50">
          <defs>
            <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fdf497" />
              <stop offset="5%" stop-color="#fdf497" />
              <stop offset="45%" stop-color="#fd5949" />
              <stop offset="60%" stop-color="#d6249f" />
              <stop offset="90%" stop-color="#285AEB" />
            </linearGradient>
          </defs>
          <circle cx="25" cy="25" r="23" fill="url(#instaGrad)" />
          <path d="M30 18H20c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V20c0-1.1-.9-2-2-2zm-5 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm4.5-7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#FFFFFF"/>
          <circle cx="25" cy="26" r="2" fill="#FFFFFF"/>
        </svg>
      `;
    case 'vimeo':
      return `
        <svg class="play-icon icon-vimeo" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="23" fill="#1ab7ea" />
          <path d="M36.3 18.2c-.3 3.6-2.7 8.5-7.1 14.8-4.6 6.5-8.5 9.8-11.7 9.8-2 0-3.7-1.8-5.1-5.5-.9-3.4-1.9-6.8-2.9-10.2-.9-3.5-1.9-5.3-2.9-5.3-.2 0-.9.4-2.1 1.2l-1.3-1.6c1.3-1.2 2.7-2.4 4.1-3.6 1.9-1.6 3.3-2.5 4.1-2.6 1.9-.2 3.1 1 3.6 3.6.6 3.1 1.2 6.6 1.7 10.4.7 4.2 1.5 6.3 2.3 6.3.7 0 1.6-1 2.8-3.1s1.9-4.2 2.1-6.3c.3-3.1-.7-4.6-3-4.6-.9 0-2 .4-3.1 1.1 1.9-6.3 5.6-9.4 10.9-9.3 4 .1 5.9 2.7 5.6 7.7z" fill="#FFFFFF"/>
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
    case 'onedrive':
      return `
        <svg class="play-icon icon-onedrive" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="23" fill="#0078d4" />
          <path d="M30.5 19.5c-1.1 0-2.1.5-2.7 1.4-.8-.9-2-1.4-3.3-1.4-2 0-3.6 1.3-4.1 3.1-.4-.2-.8-.3-1.3-.3-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1h11.4c2 0 3.6-1.6 3.6-3.6 0-1.8-1.3-3.3-3.1-3.6.1-.2.2-.5.2-.8 0-1.1-.9-2-2-2z" fill="#ffffff"/>
        </svg>
      `;
    case 'facebook':
      return `
        <svg class="play-icon icon-facebook" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="23" fill="#1877f2" />
          <path d="M28 25h-3v8h-3v-8h-2v-3h2v-2c0-2.5 1.5-4 3.8-4 1.1 0 2 .1 2 .1v2.3h-1.4c-1.2 0-1.6.7-1.6 1.5v2h3l-.5 3z" fill="#ffffff"/>
        </svg>
      `;
    case 'mega':
      return `
        <svg class="play-icon icon-mega" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="23" fill="#d9272e" />
          <path d="M17 32V18l8 7 8-7v14h-3V23l-5 4-5-4v9h-3z" fill="#ffffff"/>
        </svg>
      `;
    case 'cloudflare':
      return `
        <svg class="play-icon icon-cloudflare" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="23" fill="#f38020" />
          <path d="M32.4 22c0-.3 0-.6-.1-.9-.3-1.7-1.7-3-3.5-3-.9 0-1.7.3-2.3.9-.7-1.4-2.1-2.3-3.7-2.3-2 0-3.7 1.3-4.1 3.1-.3-.2-.7-.3-1.1-.3-1.5 0-2.8 1.1-2.9 2.6-.6-.1-1.2.3-1.4.9-.2.5-.1 1.1.3 1.5.3.3.7.4 1.1.4h17.1c1.4 0 2.6-1.1 2.6-2.5-.1-.2-.1-.5-.1-.7z" fill="#ffffff"/>
        </svg>
      `;
    case 'drive':
      return `
        <svg class="play-icon icon-drive" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="23" fill="#25a25a" />
          <polygon points="21,17 33,25 21,33" fill="#ffffff"/>
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
