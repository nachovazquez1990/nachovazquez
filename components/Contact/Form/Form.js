import styles from './Form.module.scss';

export default function Form() {
    return (
        <div className={styles.form}>
            <div className={styles.fieldBox}>
                <div className={styles.field}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text"></input>
                </div>
                <div className={styles.field}>
                    <label htmlFor="company">Company:</label>
                    <input id="company" type="text"></input>
                </div>
                <div className={styles.field}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email"></input>
                </div>
                <div className={styles.field}>
                    <label htmlFor="subject">Subject:</label>
                    <textarea id="subject" type="text"></textarea>
                </div>
            </div>
            <div className={styles.button}>SEND</div>
        </div>
    )
}