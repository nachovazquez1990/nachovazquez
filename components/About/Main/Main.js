import { useState, useEffect } from 'react';

import mainStyles from './Main.module.scss';
import menuStyles from '../../shared/Menu/Menu.module.scss';
import paginationStyles from '../../shared/Pagination/Pagination.module.scss';
import Content from '../Content/Content';
import Title from '../Title/Title';
import Pagination from '../../shared/Pagination/Pagination';
import ITEMS from '../../../api/about.json';

export default function Main() {
    const [mainPosition, setMainPosition] = useState(0);

    const handlePosition = async (position) => {
        console.log('hola', position);
    }

    return (
        <div className={mainStyles.main}>
            <Title
                id={ITEMS.about_en[mainPosition].id}
                title1={ITEMS.about_en[mainPosition].title1}
                title2={ITEMS.about_en[mainPosition].title2}
            />

            <Content
                id={ITEMS.about_en[mainPosition].id}
                contentTitle={ITEMS.about_en[mainPosition].contentTitle}
                content={ITEMS.about_en[mainPosition].content}
            />

            <Pagination
                ITEMS={ITEMS.about_en}
                mainPosition={mainPosition + 1}
                handlePosition={handlePosition}
            />
        </div>
    )
}