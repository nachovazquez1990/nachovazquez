import styles from '../styles/Container.module.scss';

import SEO from '../components/shared/SEO/SEO';
import Menu from '../components/shared/Menu/Menu';
import Main from '../components/Home/Home';

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO
        title="Home"
        description="Nacho Vázquez' contact page"
      />
      <Menu />
      <Main />
    </div>
  )
}
