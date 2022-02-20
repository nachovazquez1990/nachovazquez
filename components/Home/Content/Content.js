import React, { useEffect } from "react";
import anime from 'animejs';

import styles from './Content.module.scss';
const HomeAnimations = require('../../../utils/animations/Home_animations');

export default function Content() {
    useEffect(() => {
        HomeAnimations.startBandAnimation(styles.band);
    }, []);
    return (
        <div className={styles.mainContent}>
            <div className={styles.band}>
                <h3 className={styles.number}>1</h3>
                <div className={styles.content}>
                    <h3>Believe in the process</h3>
                    <p>la tortor blandit tortor, ut vehicula magna arcu non nibh. Sed eget suscipit velit, sed varius elit. Fusce quis dapibus quam, at placerat dui. Fusce ac ex quis nulla ultrices fringilla et sed quam. Maecenas finibus dui id ipsum feugiat cursus. Donec risus odio, ornare sit amet consectetur eu, commodo vitae turpis.</p>
                </div>
            </div>

        </div>
    )
}