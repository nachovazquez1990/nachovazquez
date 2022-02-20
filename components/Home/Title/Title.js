import React, { useEffect } from "react";

import styles from './Title.module.scss';
import Pagination from '../../shared/Pagination/Pagination';
const HomeAnimations = require('../../../utils/animations/Home_animations');

export default function Title(props) {
    useEffect(() => {
        HomeAnimations.startTitleAnimation(styles.title);
    }, []);
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <h1>Nacho Vázquez.</h1>
                <h2>Design <span>& Code</span></h2>
            </div>

        </div>
    )
}