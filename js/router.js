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
          const ytId = getYouTubeVideoId(item.url);
          const hasCustomThumbnail = !!item.thumbnail;
          
          if (ytId || hasCustomThumbnail) {
            let thumbnailUrl = '';
            if (hasCustomThumbnail) {
              thumbnailUrl = item.thumbnail;
            } else {
              thumbnailUrl = `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
            }
            
            const targetUrl = formatEmbedUrl(item.url);
            const onerrorAttr = hasCustomThumbnail ? '' : `onerror="this.onerror=null; this.src='https://img.youtube.com/vi/${ytId}/hqdefault.jpg';"`;
            
            return `
              <div class="media-item ratio-${ratioClass} youtube-placeholder" onclick="window.playVideoInline(this, '${targetUrl}')">
                <img src="${thumbnailUrl}" ${onerrorAttr} alt="${item.alt || 'Play Video'}" />
                <div class="youtube-play-overlay">
                  <svg class="youtube-play-icon" viewBox="0 0 68 48">
                    <path class="youtube-play-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0.13,34,0.13S12.21,0.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,47.87,34,47.87s21.79,0,27.1-1.42c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#FF0000"/>
                    <polygon points="27,33 44,24 27,15" fill="#FFFFFF"/>
                  </svg>
                </div>
              </div>
            `;
          } else {
            const videoUrl = formatEmbedUrl(item.url);
            return `
              <div class="media-item ratio-${ratioClass}">
                <iframe src="${videoUrl}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="${item.alt || 'Project Video'}"></iframe>
              </div>
            `;
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

// Helper to format YouTube and Vimeo links into correct embed iframe URLs
function formatEmbedUrl(url) {
  if (!url) return '';
  
  // YouTube watch format: youtube.com/watch?v=VIDEO_ID
  if (url.includes('youtube.com/watch')) {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get('v');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (e) {}
  }
  
  // YouTube short format: youtu.be/VIDEO_ID
  if (url.includes('youtu.be/')) {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.pathname.substring(1);
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (e) {}
  }
  
  // Vimeo format: vimeo.com/VIDEO_ID
  if (url.includes('vimeo.com/') && !url.includes('player.vimeo.com')) {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.pathname.substring(1);
      if (videoId && !isNaN(videoId)) {
        return `https://player.vimeo.com/video/${videoId}`;
      }
    } catch (e) {}
  }

  // Google Drive video format: drive.google.com/file/d/VIDEO_ID/view
  if (url.includes('drive.google.com/file/d/')) {
    try {
      let driveUrl = url;
      if (driveUrl.includes('/view')) {
        driveUrl = driveUrl.split('/view')[0] + '/preview';
      }
      return driveUrl;
    } catch (e) {}
  }

  return url;
}

// Extract YouTube Video ID if it's a standard/short YouTube link (returns null if embed link)
function getYouTubeVideoId(url) {
  if (!url) return null;
  
  // YouTube watch format: youtube.com/watch?v=VIDEO_ID
  if (url.includes('youtube.com/watch')) {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get('v');
    } catch (e) {}
  }
  
  // YouTube short format: youtu.be/VIDEO_ID
  if (url.includes('youtu.be/')) {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.pathname.substring(1);
      if (videoId) {
        return videoId;
      }
    } catch (e) {}
  }
  
  return null;
}

// Global function to play video inline (triggered by clicking play overlay)
window.playVideoInline = function(element, embedUrl) {
  if (!element || !embedUrl) return;
  
  let autoplayUrl = embedUrl;
  
  // Add autoplay parameter depending on the video host
  if (autoplayUrl.includes('youtube.com') || autoplayUrl.includes('youtube-nocookie.com')) {
    autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=1&mute=0';
  } else if (autoplayUrl.includes('vimeo.com')) {
    autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=1';
  } else if (autoplayUrl.includes('cloudflarestream.com')) {
    autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=true';
  } else {
    autoplayUrl += (autoplayUrl.includes('?') ? '&' : '?') + 'autoplay=1';
  }

  // Replace content of the media-item with the iframe element
  element.innerHTML = `
    <iframe src="${autoplayUrl}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  
  // Remove cursor pointer style and onclick attribute to prevent re-triggering
  element.removeAttribute('onclick');
  element.style.cursor = 'default';
};
