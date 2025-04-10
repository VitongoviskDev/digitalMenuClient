import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar = () => {
    const [shown, setShown] = useState(false);

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShown(e.target.checked);
    };
    const closeMenu = () => {
        setShown(false);
    };

    return (
        <div className={styles.nav_menu}>
            <label className={styles.hamburger_menu_button} htmlFor="toggle">
                <span className={styles.hamburger_line}></span>
                <span className={styles.hamburger_line}></span>
                <span className={styles.hamburger_line}></span>
            </label>
            <input className={styles.toggle} type="checkbox" name="" id="toggle" checked={shown} onChange={handleToggle} />
            {
                shown &&
                <div className={styles.nav_container}>

                    <nav className={styles.navbar}>
                        <Link className={styles.nav_item} to="/" onClick={closeMenu}>Home</Link>
                        <Link className={styles.nav_item} to="/menus" onClick={closeMenu}>Menus</Link>
                        <Link className={styles.nav_item} to="/about" onClick={closeMenu}>About</Link>
                    </nav>
                </div>
            }
        </div>
    )
}

export default Navbar