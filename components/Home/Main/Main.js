import { useState, useEffect } from 'react';

import mainStyles from './Main.module.scss';
import titleStyles from '../Title/Title.module.scss';
import contentStyles from '../Content/Content.module.scss';
import menuStyles from '../../shared/Menu/Menu.module.scss';
import paginationStyles from '../../shared/Pagination/Pagination.module.scss';
import Content from '../Content/Content';
import Title from '../Title/Title';
import Pagination from '../../shared/Pagination/Pagination';
import ITEMS from '../../../data/main.json';
const HomeAnimations = require('../../../utils/animations/Home_animations');

export default function Main() {
    useEffect(() => {
        HomeAnimations.startMainAnimation(titleStyles.title, contentStyles.band, menuStyles.menu, paginationStyles.pagination);
    }, []);

    const [mainPosition, setMainPosition] = useState(0);
    const [positionTitleStyle, setPositionTitleStyle] = useState(titleStyles.uno);
    const [positionContentStyle, setPositionContentStyle] = useState(contentStyles.uno);
    const handlePosition = async (position) => {
        HomeAnimations.exitMainAnimation(
            titleStyles.title,
            contentStyles.band,
            menuStyles.menu,
            paginationStyles.pagination,
            setMainPosition,
            position,
            setPositionTitleStyle,
            setPositionContentStyle,
            titleStyles,
            contentStyles
        );
    }
    return (
        <div className={mainStyles.main}>
            <Title
                id={ITEMS.main_en[mainPosition].id}
                title1={ITEMS.main_en[mainPosition].title1}
                title2={ITEMS.main_en[mainPosition].title2}
                positionTitleStyle={positionTitleStyle}
            />

            <Content
                id={ITEMS.main_en[mainPosition].id}
                contentTitle={ITEMS.main_en[mainPosition].contentTitle}
                content={ITEMS.main_en[mainPosition].content}
                positionContentStyle={positionContentStyle}
            />
            <Pagination
                ITEMS={ITEMS.main_en}
                mainPosition={mainPosition + 1}
                handlePosition={handlePosition}
            />
        </div>
    )
}