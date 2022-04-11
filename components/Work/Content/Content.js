import styles from './Content.module.scss';

export default function Content(props) {
    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div >
    )
}