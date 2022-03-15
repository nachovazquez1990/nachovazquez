import styles from './Title.module.scss';

export default function Title(props) {
    return (
        <div className={styles.box}>
            <div className={`${styles.title} ${props.positionTitleStyle}`}>
                <h1>Nacho Vázquez.</h1>
                <h2 className={`${props.positionTitleStyle}`}>{props.title1}<span>{props.title2}</span></h2>
            </div>

        </div>
    )
}