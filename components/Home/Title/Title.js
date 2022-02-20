import React, { useEffect } from "react";

import styles from './Title.module.scss';
const HomeAnimations = require('../../../utils/animations/Home_animations');

export default function Title(props) {
    useEffect(() => {
        HomeAnimations.startTitleAnimation(styles.title);
    }, []);
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <h1>Nacho Vázquez.</h1>
                <h2>{props.title1}<span>{props.title2}</span></h2>
            </div>

        </div>
    )
}