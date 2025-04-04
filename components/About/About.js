import { useState, useEffect, useCallback } from 'react';

import aboutStyles from './About.module.scss';
import titleStyles from './Title/Title.module.scss';
import contentStyles from './Content/Content.module.scss';
import menuStyles from '../shared/Menu/Menu.module.scss';
import paginationStyles from '../shared/Pagination/Pagination.module.scss';
import Content from './Content/Content';
import Title from './Title/Title';
import Pagination from '../shared/Pagination/Pagination';
import ITEMS from '../../data/about.json';
const AboutAnimations = require('../../animations/About_animations');

export default function Main() {
    const [mainPosition, setMainPosition] = useState(0);
    const [positionTitleStyle, setPositionTitleStyle] = useState(titleStyles.uno);
    const [positionContentStyle, setPositionContentStyle] = useState(contentStyles.uno);

    let image1 = require('../../public/assets/about/1.png');
    let image2 = require('../../public/assets/about/2.png');
    let image3 = require('../../public/assets/about/3.png');
    const [image, setImage] = useState(image1);

    useEffect(() => {
        AboutAnimations.startMainAnimation(titleStyles.title, contentStyles.band, contentStyles.image, menuStyles.menu, paginationStyles.pagination);
    }, []);

    const handlePosition = async (position) => {
        AboutAnimations.exitMainAnimation(
            titleStyles.title,
            contentStyles.band,
            contentStyles.image,
            menuStyles.menu,
            paginationStyles.pagination,
            setMainPosition,
            position,
            setPositionTitleStyle,
            setPositionContentStyle,
            titleStyles,
            contentStyles,
            setImage,
            image1,
            image2,
            image3
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

        AboutAnimations.exitMainAnimation(
            titleStyles.title,
            contentStyles.band,
            contentStyles.image,
            menuStyles.menu,
            paginationStyles.pagination,
            setMainPosition,
            newPosition,
            setPositionTitleStyle,
            setPositionContentStyle,
            titleStyles,
            contentStyles,
            setImage,
            image1,
            image2,
            image3
        );
    }, [mainPosition, setMainPosition, setPositionTitleStyle, setPositionContentStyle, titleStyles, contentStyles, menuStyles, paginationStyles]);

    return (
        <div className={aboutStyles.main} onWheel={handleWheel}>
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
                image={image}
            />

            <Pagination
                ITEMS={ITEMS.eng}
                mainPosition={mainPosition + 1}
                handlePosition={handlePosition}
            />
        </div>
    )
}