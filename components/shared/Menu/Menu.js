import Link from 'next/link';
import { useState, Fragment } from 'react';
import { useRouter } from "next/router";

import styles from './Menu.module.scss';
import ITEMS from '../../../data/menu.json';

export default function Menu(props) {
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
                    <li><a className={styles.selected}>ENG</a></li>
                    <li><a>SPA</a></li>
                </ul>
                <ul className={styles.pages}>
                    {
                        ITEMS.menu_en.map(menuItem =>
                            <li key={menuItem.id}>
                                <Link href={menuItem.link}>
                                    <a className={router.pathname == `${menuItem.link}` ? `${styles.active}` : `${props.class}`}>{menuItem.item}</a>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>

            {/* MENU RESPOINSIVE  */}
            <nav>
                <div className={styles.toggleMenu_box}>
                    <div id="toggleIcon" className={`${toggleIcon} ${props.class}`} onClick={() => toggleMenu()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={toggleBox}>
                    {
                        ITEMS.menu_en.map(menuItem =>
                            <li key={menuItem.id} onClick={() => toggleMenu()}>
                                <Link href={menuItem.link}>
                                    <a>{menuItem.item}</a>
                                </Link>
                                <div className={router.pathname == `${menuItem.link}` ? `${styles.menu_activebar}` : `${styles.menu_hoverbar}`}></div>
                            </li>
                        )
                    }
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