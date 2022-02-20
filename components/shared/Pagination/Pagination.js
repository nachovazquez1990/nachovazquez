import styles from './Pagination.module.scss';

export default function Pagination(props) {
    return (
        <div className={styles.pagination}>
            {
                props.ITEMS.map(mainItem =>
                    <span
                        key={mainItem.id}
                        className={props.mainPosition == `${mainItem.id}` ? `${styles.active}` : ""}
                        onClick={() => props.handlePosition(mainItem.id - 1)}
                    ></span>
                )
            }
        </div>
    )
}