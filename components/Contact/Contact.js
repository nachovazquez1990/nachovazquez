import { useEffect } from 'react';

import contactStyles from './Contact.module.scss';
import titleStyles from './Title/Title.module.scss';
import menuStyles from '../shared/Menu/Menu.module.scss';
import formStyles from './Form/Form.module.scss';
import Form from './Form/Form';
import Title from './Title/Title';
const ContactAnimations = require('../../animations/Contact_animations');

export default function Main() {
    useEffect(() => {
        ContactAnimations.startContactAnimation(menuStyles.menu, titleStyles.questionWord, titleStyles.answer, formStyles.form);
    }, []);

    return (
        <div className={contactStyles.main}>
            <Title />
            <Form />
        </div>
    )
}