import { useState, useEffect } from 'react';

import workStyles from './Work.module.scss';
import listStyles from './List/List.module.scss';
import contentStyles from './Content/Content.module.scss';
import menuStyles from '../shared/Menu/Menu.module.scss';
import List from './List/List';
import Content from './Content/Content';
import ITEMS from '../../data/work.json';
const WorkAnimations = require('../../animations/Work_animations');

export default function Main() {
    useEffect(() => {
        WorkAnimations.startWorkAnimation(listStyles.title, listStyles.bar, listStyles.workItem, contentStyles.content, menuStyles.menu);
    }, []);


    const [mainPosition, setMainPosition] = useState(0);
    function changeMainPosition(newPosition) {
        if (newPosition - 1 !== mainPosition) {
            WorkAnimations.changeItemAnimation(
                listStyles.bar,
                listStyles.time,
                contentStyles.text,
                setMainPosition,
                newPosition
            )
        }
    }
    return (
        <div className={workStyles.main}>
            <List
                list={ITEMS.eng}
                mainPosition={mainPosition}
                changeMainPosition={changeMainPosition}
            />

            <Content
                id={ITEMS.eng[mainPosition].id}
                title={ITEMS.eng[mainPosition].title}
                content={ITEMS.eng[mainPosition].content}
            />
        </div>
    )
}