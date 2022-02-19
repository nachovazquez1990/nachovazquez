import styles from './Title.module.scss';
import Pagination from '../../shared/Pagination/Pagination';

export default function Title(props) {
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <h1>Nacho Vázquez.</h1>
                <h2>Design <span>& Code</span></h2>
            </div>
            <Pagination numberOfItems={props.numberOfItems} />
        </div>
    )
}