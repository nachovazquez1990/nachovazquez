import { useState } from 'react';

import mainStyles from './Main.module.scss';
import titleStyles from '../Title/Title.module.scss';
import contentStyles from '../Content/Content.module.scss';
import Content from '../Content/Content';
import Title from '../Title/Title';
import Pagination from '../../shared/Pagination/Pagination';
import ITEMS from '../../../api/main.json';
const HomeAnimations = require('../../../utils/animations/Home_animations');

export default function Main() {
    const [mainPosition, setMainPosition] = useState(0);
    async function handlePosition(position) {
        HomeAnimations.exitTitleAnimation(titleStyles.box);
        HomeAnimations.exitBandAnimation(contentStyles.band);
        setMainPosition(position)
    }
    return (
        <div className={mainStyles.main}>
            <Title
                id={ITEMS.main_en[mainPosition].id}
                title1={ITEMS.main_en[mainPosition].title1}
                title2={ITEMS.main_en[mainPosition].title2}
            />

            <Content
                id={ITEMS.main_en[mainPosition].id}
                contentTitle={ITEMS.main_en[mainPosition].contentTitle}
                content={ITEMS.main_en[mainPosition].content}
            />
            <Pagination
                ITEMS={ITEMS.main_en}
                mainPosition={mainPosition + 1}
                handlePosition={handlePosition}
            />
        </div>
    )
}