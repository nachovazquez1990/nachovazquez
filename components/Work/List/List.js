import styles from './List.module.scss';

export default function List(props) {
    return (
        <div>
            <div className={styles.list}>
                <div className={styles.title}>
                    <h1>Nacho Vázquez.</h1>
                    <h2><span>Work</span></h2>
                </div>

                <div className={styles.workList}>
                    <div className={styles.bar}></div>
                    {props.list.map(item => {
                        return (
                            <div key={item.id} className={styles.workItem} onClick={() => props.changeMainPosition(item.id)}>
                                <p className={styles.time}>{item.time}</p>
                                <h3>{item.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}