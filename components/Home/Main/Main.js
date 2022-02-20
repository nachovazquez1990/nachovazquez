import { useState } from 'react';

import styles from './Main.module.scss';
import Content from '../Content/Content';
import Title from '../Title/Title';
import Pagination from '../../shared/Pagination/Pagination';

export default function Main() {
    const [numberOfItems, setNumberOfItems] = useState(3);
    return (
        <div className={styles.main}>
            <Title />
            <Content />
            <Pagination />
        </div>
    )
}