import { useState, useEffect, useCallback } from 'react';

import homeStyles from './Home.module.scss';
import titleStyles from './Title/Title.module.scss';
import contentStyles from './Content/Content.module.scss';
import menuStyles from '../shared/Menu/Menu.module.scss';
import paginationStyles from '../shared/Pagination/Pagination.module.scss';
import Content from './Content/Content';
import Title from './Title/Title';
import Pagination from '../shared/Pagination/Pagination';
import ITEMS from '../../data/main.json';
const HomeAnimations = require('../../animations/Home_animations');

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

    const handleWheel = useCallback(async (event) => {
        const wheelEvent = event.deltaY;
        let newPosition = mainPosition;

        if (wheelEvent > 0) {
            newPosition = mainPosition + 1;
        } else {
            newPosition = mainPosition - 1;
        }

        if (newPosition < 0) {
            newPosition = 2;
        } else if (newPosition > 2) {
            newPosition = 0;
        }

        HomeAnimations.exitMainAnimation(
            titleStyles.title,
            contentStyles.band,
            menuStyles.menu,
            paginationStyles.pagination,
            setMainPosition,
            newPosition,
            setPositionTitleStyle,
            setPositionContentStyle,
            titleStyles,
            contentStyles
        );
    }, [mainPosition, setMainPosition, setPositionTitleStyle, setPositionContentStyle, titleStyles, contentStyles, menuStyles, paginationStyles]);

    return (
        <div className={homeStyles.main} onWheel={handleWheel} >
            <Title
                id={ITEMS.eng[mainPosition].id}
                title1={ITEMS.eng[mainPosition].title1}
                title2={ITEMS.eng[mainPosition].title2}
                positionTitleStyle={positionTitleStyle}
            />

            <Content
                id={ITEMS.eng[mainPosition].id}
                contentTitle={ITEMS.eng[mainPosition].contentTitle}
                content={ITEMS.eng[mainPosition].content}
                positionContentStyle={positionContentStyle}
            />
            <Pagination
                ITEMS={ITEMS.eng}
                mainPosition={mainPosition + 1}
                handlePosition={handlePosition}
            />
        </div>
    )
}