import styles from '../styles/Container.module.scss';
import menuStyles from '../components/shared/Menu/Menu.module.scss';

import SEO from '../components/shared/SEO/SEO';
import Menu from '../components/shared/Menu/Menu';
import Main from '../components/Work/Work';

export default function Work() {
    return (
        <div className={styles.container}>
            <SEO
                title="Work"
                description="Nacho Vázquez' contact page"
            />
            <Menu />
            <Main />
        </div>
    )
}
