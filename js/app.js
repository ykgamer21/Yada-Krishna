function initApp() {
  // Handle Maintenance Mode
  const maintenanceConfig = window.portfolioContent.maintenance || { enabled: false };
  if (maintenanceConfig.enabled) {
    document.body.classList.add('maintenance-mode-active');
    const maintenanceScreen = document.getElementById('maintenance-screen');
    if (maintenanceScreen) {
      maintenanceScreen.style.display = 'flex';
      
      // Setup Maintenance Details
      const mLogo = document.getElementById('maintenance-logo');
      const mCopyright = document.getElementById('maintenance-copyright');
      
      if (mLogo && maintenanceConfig.logoImage) {
        mLogo.src = maintenanceConfig.logoImage;
      }
      if (mCopyright && maintenanceConfig.copyright) {
        mCopyright.innerHTML = maintenanceConfig.copyright;
      }
      
      // Init maintenance animations
      window.initTypewriterAnimations(maintenanceConfig.statusText || "Rendering in Progress", '#maintenance-screen');
    }
    
    // Hide loader if present
    const loader = document.getElementById('site-loader');
    if (loader) {
      loader.style.display = 'none';
    }
    return; // Short-circuit normal bootstrapping
  }

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

// Global Typewriter and Trailing Dots Animation Initializer
window.initTypewriterAnimations = function(text, containerSelector = '#maintenance-screen') {
  const typewriter = document.querySelector(`${containerSelector} .typewriter`);
  const cursor = document.querySelector(`${containerSelector} .cursor`);
  const dots = document.querySelector(`${containerSelector} .dots`);
  
  // Respect user's preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    if (typewriter) typewriter.textContent = text;
    if (cursor) cursor.style.display = 'none';
    if (dots) dots.style.opacity = '1';
    return;
  }
  
  // Track interval ID on the element to prevent multiple overlapping intervals if re-rendered
  const targetElement = document.querySelector(containerSelector);
  if (targetElement) {
    if (targetElement.typewriterInterval) {
      clearInterval(targetElement.typewriterInterval);
    }
  }
  
  function runAnimationCycle() {
    // Re-query elements inside the cycle in case of SPA page re-renders
    const currentTypewriter = document.querySelector(`${containerSelector} .typewriter`);
    const currentCursor = document.querySelector(`${containerSelector} .cursor`);
    const currentDots = document.querySelector(`${containerSelector} .dots`);
    
    if (!currentTypewriter || !currentCursor || !currentDots) return;
    
    // Reset elements to initial typing state
    currentTypewriter.textContent = '';
    currentCursor.style.opacity = '1';
    currentCursor.style.width = '8px';
    currentCursor.classList.add('blinking');
    currentDots.classList.remove('active');
    
    let charIndex = 0;
    
    function typeChar() {
      // Check if elements still exist in DOM (user navigated away)
      const activeTypewriter = document.querySelector(`${containerSelector} .typewriter`);
      if (!activeTypewriter) {
        return;
      }
      
      if (charIndex < text.length) {
        activeTypewriter.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 80); // Speed: 80ms per character for crisp feedback
      } else {
        const activeCursor = document.querySelector(`${containerSelector} .cursor`);
        const activeDots = document.querySelector(`${containerSelector} .dots`);
        if (activeCursor) {
          activeCursor.style.opacity = '0';
          activeCursor.style.width = '0';
          activeCursor.classList.remove('blinking');
        }
        if (activeDots) {
          activeDots.classList.add('active');
        }
      }
    }
    
    typeChar();
  }
  
  // Initial run
  runAnimationCycle();
  
  // Loop every 15 seconds
  const intervalId = setInterval(runAnimationCycle, 15000);
  if (targetElement) {
    targetElement.typewriterInterval = intervalId;
  }
}
