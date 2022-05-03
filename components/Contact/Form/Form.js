import styles from './Form.module.scss';

export default function Form() {
    return (
        <div className={styles.form}>
            <div className={styles.fieldBox}>
                <div className={styles.field}>
                    <label for="name">Name:</label>
                    <input id="name" type="text"></input>
                </div>
                <div className={styles.field}>
                    <label for="company">Company:</label>
                    <input id="company" type="text"></input>
                </div>
                <div className={styles.field}>
                    <label for="email">Email:</label>
                    <input id="email" type="email"></input>
                </div>
                <div className={styles.field}>
                    <label for="subject">Subject:</label>
                    <input id="subject" type="text"></input>
                </div>
            </div>
            <div className={styles.button}>SEND</div>
        </div>
    )
}