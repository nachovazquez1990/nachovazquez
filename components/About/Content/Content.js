import Image from 'next/image';

import styles from './Content.module.scss';
import image from '../../../public/assets/about/1.png'

export default function Content(props) {
    return (
        <div className={styles.mainContent}>
            <div className={styles.band}>
                <div className={styles.text}>
                    <h2>{props.contentTitle}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt="Nacho Vázquez"
                />
            </div>
        </div>
    )
}