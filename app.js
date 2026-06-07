document.addEventListener('DOMContentLoaded', () => {
    const typewriter = document.querySelector('.typewriter');
    const cursor = document.querySelector('.cursor');
    const dots = document.querySelector('.dots');
    const text = "Rendering in Progress";
    
    // Respect user's preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        typewriter.textContent = text;
        if (cursor) cursor.style.display = 'none';
        if (dots) dots.style.opacity = '1';
        return;
    }
    
    function runAnimationCycle() {
        if (!typewriter || !cursor || !dots) return;
        
        // Reset elements to initial typing state
        typewriter.textContent = '';
        cursor.style.opacity = '1';
        cursor.style.width = '8px';
        cursor.classList.add('blinking');
        dots.classList.remove('active');
        
        let charIndex = 0;
        
        function typeChar() {
            if (charIndex < text.length) {
                typewriter.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 80); // Speed: 80ms per character for crisp feedback
            } else {
                // Hiding cursor upon completion
                cursor.style.opacity = '0';
                cursor.style.width = '0';
                cursor.classList.remove('blinking');
                
                // Fading in dots
                dots.classList.add('active');
            }
        }
        
        typeChar();
    }
    
    // Initial run
    runAnimationCycle();
    
    // Loop every 15 seconds
    setInterval(runAnimationCycle, 15000);
});
