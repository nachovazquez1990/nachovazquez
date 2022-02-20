import styles from './Content.module.scss';

export default function Content(props) {
    return (
        <div className={styles.mainContent}>
            <div className={styles.band}>
                <h3 className={`${styles.number} ${props.positionContentStyle}`}>{props.id}</h3>
                <div className={`${styles.content} ${props.positionContentStyle}`}>
                    <h3>{props.contentTitle}</h3>
                    <p>{props.content}</p>
                </div>
            </div>

        </div>
    )
}