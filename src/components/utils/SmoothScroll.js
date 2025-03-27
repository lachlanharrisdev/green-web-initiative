import Lenis from '@studio-freight/lenis';

let lenisInstance = null;

export function initSmoothScrolling() {
  if (typeof window !== 'undefined') {
    // Clean up any existing instance
    if (lenisInstance) {
      lenisInstance.destroy();
    }

    // Create new Lenis instance
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Tie Lenis to requestAnimationFrame for smooth performance
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Refresh AOS on scroll
    lenisInstance.on('scroll', () => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    });

    return lenisInstance;
  }
  return null;
}

export function destroySmoothScrolling() {
  if (typeof window !== 'undefined' && lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}