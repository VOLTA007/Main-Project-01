import React, { useState } from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');
  const [lastHoveredPosition, setLastHoveredPosition] = useState(null);
  const [isFocus, setIsFocus] = useState(null);

  const handleBlur = () => {
    setIsFocus(null);
  };

  const handleFocus = (item) => {
    setIsFocus(item);
  };

  const handleMouseEnter = (item) => {
    setIsHovered(true);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Store the last hovered item's position
    setLastHoveredPosition(getPosition());
  };

  // Get the position of the last hovered item
  const getPosition = () => {
  if (hoveredItem === 'home') {
    return '2%';
  } else if (hoveredItem === 'projects') {
    return '24.7%';
  } else if (hoveredItem === 'about') {
    return '53.5%';
  } else if (hoveredItem === 'contact') {
    return '76%';
  } else {
    return '0%';
  }
};

  // Determine animation styles based on hoveredItem state
  const getAnimationStyle = () => {
    
     if (isHovered) {
      if (hoveredItem === 'home') {
        return `${styles.animation} ${styles.hovered1} `;
      } else if (hoveredItem === 'projects') {
        return `${styles.animation} ${styles.hovered2} `;
      } else if (hoveredItem === 'about') {
        return `${styles.animation} ${styles.hovered3} `;
      } else if (hoveredItem === 'contact') {
        return `${styles.animation} ${styles.hovered4} `;
      } else {
        return styles.animation;
      }
    } else {
      return `${styles.animation} ${styles.exitAnimation}`;
    }
  };

  const animationStyle = getAnimationStyle();

  return (
    <div className={styles.div1}>
      <nav onBlur={() => handleBlur()}>
        <a href='#' className={isFocus === 'home' ? styles.focused : null} onFocus={() => handleFocus('home')} onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>Home</a>
        <a href='#' className={isFocus === 'projects' ? styles.focused : null} onFocus={() => handleFocus('projects')} onMouseEnter={() => handleMouseEnter('projects')} onMouseLeave={handleMouseLeave}>Projects</a>
        <a href='#' className={isFocus === 'about' ? styles.focused : null} onFocus={() => handleFocus('about')} onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>About</a>
        <a href='#' className={isFocus === 'contact' ? styles.focused : null} onFocus={() => handleFocus('contact')} onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>Contact</a>
        <div className={animationStyle} style={{ left: isHovered ? getPosition() : lastHoveredPosition }} />
      </nav>
    </div>
  );
}

export default NavBar;
