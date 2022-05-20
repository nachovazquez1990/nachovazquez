import styles from '../styles/Container.module.scss';
import menuStyles from '../components/shared/Menu/Menu.module.scss';

import SEO from '../components/shared/SEO/SEO';
import Menu from '../components/shared/Menu/Menu';
import Main from '../components/Contact/Contact';

export default function Contact() {
    return (
        <div className={styles.container}>
            <SEO
                title="Contact"
                description="Nacho Vázquez' contact page"
            />
            <Menu class={menuStyles.about} />
            <Main />
        </div>
    )
}
