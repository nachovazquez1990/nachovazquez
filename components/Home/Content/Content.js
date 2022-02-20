import React, { useEffect } from "react";
import anime from 'animejs';

import styles from './Content.module.scss';
const HomeAnimations = require('../../../utils/animations/Home_animations');

export default function Content(props) {
    useEffect(() => {
        HomeAnimations.startBandAnimation(styles.band);
    }, []);
    return (
        <div className={styles.mainContent}>
            <div className={styles.band}>
                <h3 className={styles.number}>{props.id}</h3>
                <div className={styles.content}>
                    <h3>{props.contentTitle}</h3>
                    <p>{props.content}</p>
                </div>
            </div>

        </div>
    )
}