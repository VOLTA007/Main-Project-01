import React, { useState } from 'react';
import styles from './NavBar.module.css';

function NavBar() {

  return (
    <div className={styles.div1}>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>Projects</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <div className={`${styles.animation} ${styles.starthome}`}/>
      </nav>
    </div>
  );
}

export default NavBar;