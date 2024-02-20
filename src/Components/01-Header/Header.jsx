import React from 'react';
import styles from './Header.module.css';
import NavBar from '../02-NavBar/NavBar';


function Header(){
    return(
        <>
        <img className={styles.logo} src="./Logo.png" alt=''></img>
        <NavBar />
        <div className={styles.div2}>
            <h1 className={styles.hed}>Websites&<br></br>
            Branding</h1>
            <button className={styles.button1}>SCROLL DOWN ⇩</button>
        </div>
        <div className={styles.div3}>
            <p className={styles.p1}>Let's Talk <br></br>hello@joey.co</p>
            <p className={styles.p2}>Hello. I'm Joey. an online product designer focusing<br></br> on brand identity, advertising, and no-code <br></br> instruments.</p>
        </div>
        </>
    )
}

export default Header