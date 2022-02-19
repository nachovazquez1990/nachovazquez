import styles from './Pagination.module.scss';

export default function Pagination(props) {
    return (
        <div className={styles.pagination}>
            <span className={styles.active}></span>
            <span></span>
            <span></span>
        </div>
    )
}