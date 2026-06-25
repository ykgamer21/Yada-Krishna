/**
 * Client Experience Slider Component logic
 * Handles interactive sliding, touch gestures, transitions, and indicators.
 */
(function() {
  window.initClientExperienceSlider = function() {
    const container = document.querySelector('.client-slider-container');
    if (!container) return;

    const track = container.querySelector('.slider-track');
    const slides = container.querySelectorAll('.client-slide');
    const prevBtn = container.querySelector('.prev-arrow');
    const nextBtn = container.querySelector('.next-arrow');
    const dots = container.querySelectorAll('.slider-dot');
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;
    let trackWrapperWidth = container.querySelector('.slider-track-wrapper').clientWidth;

    // Recalculate wrapper width on resize to keep translate values accurate (with memory leak protection)
    if (window._clientSliderResizeHandler) {
      window.removeEventListener('resize', window._clientSliderResizeHandler);
    }

    window._clientSliderResizeHandler = function() {
      // If the slider container is no longer in the DOM, clean up the global listener
      if (!document.body.contains(container)) {
        window.removeEventListener('resize', window._clientSliderResizeHandler);
        window._clientSliderResizeHandler = null;
        return;
      }
      
      const wrapper = container.querySelector('.slider-track-wrapper');
      if (wrapper) {
        trackWrapperWidth = wrapper.clientWidth;
        
        // Re-apply translation to avoid alignment offsets on resize
        track.style.transition = 'none';
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Recalculate height instantly on resize (no animation during resize)
        const activeSlide = slides[currentIndex];
        if (activeSlide) {
          wrapper.style.transition = 'none';
          wrapper.style.height = `${activeSlide.scrollHeight}px`;
          wrapper.offsetHeight; // force reflow
          wrapper.style.transition = 'height 0.4s cubic-bezier(0.25, 1, 0.2, 1)';
        }
        
        // Force reflow
        track.offsetHeight;
        track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.3, 1)';
      }
    };

    window.addEventListener('resize', window._clientSliderResizeHandler);

    // Go to a specific slide index
    function goToSlide(index) {
      // Loop-around functionality
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
      
      currentIndex = index;
      
      // Move track
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Dynamic height adjustment to match content of active slide
      const activeSlide = slides[currentIndex];
      const wrapper = container.querySelector('.slider-track-wrapper');
      if (wrapper && activeSlide) {
        wrapper.style.height = `${activeSlide.scrollHeight}px`;
      }
      
      // Update slide active classes (for entrance transitions)
      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      
      // Update active indicators (dots)
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    // Event Listeners for Nav buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        goToSlide(currentIndex + 1);
      });
    }

    // Event Listeners for Pagination Dots
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', function() {
        goToSlide(idx);
      });
    });

    // Touch Support for Mobile Swiping
    track.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      currentX = startX;
      isSwiping = true;
      track.style.transition = 'none'; // Disable transition during drag
      trackWrapperWidth = container.querySelector('.slider-track-wrapper').clientWidth;
    }, { passive: true });

    track.addEventListener('touchmove', function(e) {
      if (!isSwiping) return;
      currentX = e.touches[0].clientX;
      const diffX = currentX - startX;
      
      // Calculate translate percentage/pixels
      const currentOffsetPixels = -currentIndex * trackWrapperWidth;
      const targetTranslate = currentOffsetPixels + diffX;
      
      // Set inline transform style
      track.style.transform = `translateX(${targetTranslate}px)`;
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
      if (!isSwiping) return;
      isSwiping = false;
      track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.3, 1)';
      
      const diffX = currentX - startX;
      const swipeThreshold = 55; // 55px threshold
      
      // Determine if we swiped past threshold
      if (Math.abs(diffX) > swipeThreshold) {
        if (diffX < 0) {
          // Swiped left -> Next Slide
          goToSlide(currentIndex + 1);
        } else {
          // Swiped right -> Previous Slide
          goToSlide(currentIndex - 1);
        }
      } else {
        // Snap back to current slide
        goToSlide(currentIndex);
      }
      
      // Reset values
      startX = 0;
      currentX = 0;
    });

    // Find and set initial active slide based on dataset
    const defaultSlideId = container.dataset.defaultSlideId;
    let initialIndex = 0;
    if (defaultSlideId) {
      const matchIndex = Array.from(slides).findIndex(s => s.dataset.id === defaultSlideId);
      if (matchIndex !== -1) {
        initialIndex = matchIndex;
      }
    }
    
    // Initialize first slide position
    goToSlide(initialIndex);
  };
})();
