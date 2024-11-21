import { Link } from 'react-router-dom';

import FavoritesIcon from './img/Favorites.svg';
import Serch from '@components/Serch';

import styles from './Header.module.scss';

function Header() {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.header__top}>
        <Link to="/" className={styles.header__logo}>GameVerse</Link>
        <Serch />
        <Link to="/favorites" className={styles.header__favorites_box}><img src={FavoritesIcon} alt="Favorites" className={styles.header__favorites}/></Link>
      </div>
      <div className={styles.header__bottom}></div>
    </div>
    </>
  )
}

export default Header;