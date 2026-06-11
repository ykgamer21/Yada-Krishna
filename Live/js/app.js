function initApp() {
  // Handle Loading Overlay Configuration
  const loaderConfig = window.portfolioContent.loader || { enabled: false };
  const loader = document.getElementById('site-loader');
  const loaderVideo = document.getElementById('loader-video');

  if (loader) {
    if (loaderConfig.enabled) {
      if (loaderVideo && loaderConfig.videoSrc) {
        loaderVideo.src = loaderConfig.videoSrc;
      }
      
      // Fade out the loader once the window is fully loaded
      const dismissLoader = () => {
        setTimeout(() => {
          loader.classList.add('fade-out');
        }, loaderConfig.displayDuration || 1000);
      };

      if (document.readyState === 'complete') {
        dismissLoader();
      } else {
        window.addEventListener('load', dismissLoader);
      }
    } else {
      // Loader is disabled, hide immediately
      loader.style.display = 'none';
    }
  }

  // Render header dynamically from content config
  renderHeader(window.portfolioContent.header);
  
  // Render footer dynamically from content config
  renderFooter(window.portfolioContent.footer);

  // Set up SPA hashchange navigation listener
  window.addEventListener('hashchange', window.handleRoute);
  
  // Run initial route setup on load
  window.handleRoute();
}

function renderHeader(headerData) {
  const headerContainer = document.getElementById('site-header-container');
  if (!headerContainer) return;

  // Build logo HTML (supports text fallback or SVG/image files)
  let logoHTML = '';
  if (headerData.logoImage) {
    logoHTML = `<img src="${headerData.logoImage}" alt="Logo" class="logo-img" />`;
  } else {
    logoHTML = `<span class="logo-text">${headerData.logoText}</span>`;
  }

  // Build navigation items
  const navItemsHTML = headerData.navItems.map(item => {
    const isExternal = item.external;
    const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
    return `
      <li>
        <a href="${item.path}" class="nav-link" ${targetAttr}>${item.name}</a>
      </li>
    `;
  }).join('');

  headerContainer.innerHTML = `
    <header class="site-header">
      <a href="#/" class="logo-link" aria-label="Home logo link">
        ${logoHTML}
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle Navigation" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <div class="nav-backdrop" id="nav-backdrop"></div>
      <nav class="site-nav" id="site-nav" aria-label="Main Navigation">
        <ul class="nav-menu">
          ${navItemsHTML}
        </ul>
      </nav>
    </header>
  `;

  // Mobile Menu Interaction Logic
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const navBackdrop = document.getElementById('nav-backdrop');

  if (navToggle && siteNav && navBackdrop) {
    function toggleMenu() {
      const isOpen = siteNav.classList.toggle('nav-open');
      navToggle.classList.toggle('active');
      navBackdrop.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    function closeMenu() {
      siteNav.classList.remove('nav-open');
      navToggle.classList.remove('active');
      navBackdrop.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }

    navToggle.addEventListener('click', toggleMenu);
    navBackdrop.addEventListener('click', closeMenu);

    // Close menu when navigation links are clicked
    const navLinks = siteNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when the route hash changes
    window.addEventListener('hashchange', closeMenu);
  }
}

function renderFooter(footerData) {
  const footerContainer = document.getElementById('site-footer-container');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="site-footer">
      <span class="copyright-text">${footerData.copyright}</span>
    </footer>
  `;
}

// Bootstrap application on page load
document.addEventListener('DOMContentLoaded', initApp);
