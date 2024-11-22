// src/hooks/mouseSwayHook.ts

import { useState } from 'react';

// Custom hook for tracking mouse position and calculating rotation values
const useMouseSwaying = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Function to handle mouse move event and calculate rotation
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    // Get the center of the viewport
    const cardCenterX = window.innerWidth / 2;
    const cardCenterY = window.innerHeight / 2;

    // Calculate the percentage of how far the mouse is from the center
    const deltaX = (clientX - cardCenterX) / cardCenterX;
    const deltaY = (clientY - cardCenterY) / cardCenterY;

    // Increase the multiplier to make the sway heavier
    const swayIntensity = 30; // This multiplier will make the sway stronger

    // Update the rotation state based on mouse position
    setRotateX(deltaY * swayIntensity);  // Adjust multiplier for more/less sway
    setRotateY(deltaX * swayIntensity);  // Adjust multiplier for more/less sway
  };

  // Handle mouse leave to reset the rotation when the mouse leaves the card
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave
  };
};

export default useMouseSwaying;
