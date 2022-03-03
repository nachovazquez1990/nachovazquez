import styles from '../styles/Home.module.scss';

import SEO from '../components/shared/SEO/SEO';
import Menu from '../components/shared/Menu/Menu';
import Main from '../components/Home/Main/Main';

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
