import { useState, useEffect } from 'react';

import mainStyles from './Main.module.scss';
import titleStyles from '../Title/Title.module.scss';
import menuStyles from '../../shared/Menu/Menu.module.scss';
import Form from '../Form/Form';
import Title from '../Title/Title';
const ContactAnimations = require('../../../utils/animations/Contact_animations');

export default function Main() {
    useEffect(() => {
        ContactAnimations.startContactAnimation(menuStyles.menu, titleStyles.questionWord, titleStyles.answer);
    }, []);

    return (
        <div className={mainStyles.main}>
            <Title />
            <Form />
        </div>
    )
}