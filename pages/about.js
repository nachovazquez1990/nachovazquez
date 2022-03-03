import styles from '../styles/About.module.scss';
import menuStyles from '../components/shared/Menu/Menu.module.scss';

import SEO from '../components/shared/SEO/SEO';
import Menu from '../components/shared/Menu/Menu';
import Main from '../components/About/Main/Main';

export default function About() {
    return (
        <div className={styles.container}>
            <SEO
                title="About"
                description="Nacho Vázquez' contact page"
            />
            <Menu class={menuStyles.about} />
            <Main />
        </div>
    )
}
