// useParallax.ts
import { useState, useEffect } from 'react';

const useParallax = (smallScreen: number, mediumScreen: number, largeScreen: number) => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [translateY, setTranslateY] = useState(0); // Set initial translateY to 0

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update window width on resize
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate the translateY value based on scrollY and windowWidth
  useEffect(() => {
    const getTranslateYValue = () => {
      if (windowWidth < 600) {
        return scrollY * smallScreen;
      } else if (windowWidth >= 600 && windowWidth < 1024) {
        return scrollY * mediumScreen;
      } else {
        return scrollY * largeScreen;
      }
    };

    setTranslateY(getTranslateYValue());
  }, [scrollY, windowWidth, smallScreen, mediumScreen, largeScreen]);

  return translateY;
};

export default useParallax;
