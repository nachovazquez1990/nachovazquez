import Link from 'next/link';
import { useState, Fragment } from 'react';
import { useRouter } from "next/router";

import styles from './Menu.module.scss';

export default function Menu() {
    const router = useRouter();
    const [toggleIcon, setToggleIcon] = useState(`${styles.toggleMenu}`);
    const [toggleBox, setToggleBox] = useState(`${styles.menu_responsive}`);

    function toggleMenu() {
        if (toggleIcon !== `${styles.toggleMenu} ${styles.open}` && toggleBox !== `${styles.menu_responsive} ${styles.open}`) {
            setToggleIcon(`${styles.toggleMenu} ${styles.open}`)
            setToggleBox(`${styles.menu_responsive} ${styles.open}`)
        }
        else {
            setToggleIcon(`${styles.toggleMenu}`)
            setToggleBox(`${styles.menu_responsive}`)
        }
    }
    return (
        <Fragment>
            <nav className={styles.menu}>
                <ul className={styles.langs}>
                    <li>SPA</li>
                    <li>ENG</li>
                </ul>
                <ul className={styles.pages}>
                    <li>
                        <Link href="/">
                            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={router.pathname == "/about" ? "active" : ""}>About me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={router.pathname == "/work" ? "active" : ""}>Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={router.pathname == "/contact" ? "active" : ""}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* MENU RESPOINSIVE  */}
            <nav>
                <div className={styles.toggleMenu_box}>
                    <div id="toggleIcon" className={toggleIcon} onClick={() => toggleMenu()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={toggleBox}>
                    <li onClick={() => toggleMenu()}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <div className={router.pathname == "/" ? `${styles.menu_activebar}` : `${styles.menu_hoverbar}`}></div>
                    </li>
                    <li onClick={() => toggleMenu()}>
                        <Link href="/">
                            <a>About me</a>
                        </Link>
                        <div className={router.pathname == "/about" ? `${styles.menu_activebar}` : `${styles.menu_hoverbar}`}></div>
                    </li>
                    <li onClick={() => toggleMenu()}>
                        <Link href="/">
                            <a>Work</a>
                        </Link>
                        <div className={router.pathname == "/work" ? `${styles.menu_activebar}` : `${styles.menu_hoverbar}`}></div>
                    </li>
                    <li onClick={() => toggleMenu()}>
                        <Link href="/">
                            <a>Contact</a>
                        </Link>
                        <div className={router.pathname == "/contact" ? `${styles.menu_activebar}` : `${styles.menu_hoverbar}`}></div>
                    </li>
                    <div className={styles.idiomas}>
                        <p className={styles.selected}>ENG</p>
                        <span>-</span>
                        <p>SPA</p>
                    </div>
                </ul>
            </nav>
        </Fragment>
    )
}