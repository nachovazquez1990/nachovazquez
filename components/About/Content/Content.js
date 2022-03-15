import Image from 'next/image';

import styles from './Content.module.scss';

export default function Content(props) {
    return (
        <div className={styles.mainContent}>
            <div className={styles.band}>
                <div className={`${styles.text} ${props.positionContentStyle}`}>
                    <h2>{props.contentTitle}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
            <div className={`${styles.image} ${props.positionContentStyle}`}>
                <Image
                    src={props.image}
                    alt="Nacho Vázquez"
                />
            </div>
        </div>
    )
}