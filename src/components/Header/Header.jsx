import { Link } from 'react-router-dom';
import { useState } from 'react';

import FavoritesIcon from './img/Favorites.svg';
import SerchIcon from './img/serch.svg';

import styles from './Header.module.scss';

function Header() {
  const [active, setActive] = useState(false);
  return (
    <>
    <div className={styles.header}>
      <div className={styles.header__top}>
        <Link to="/" className={styles.header__logo}>GameVerse</Link>
        <nav className={styles.header__right}>
          <Link 
            to="/serch" 
            onClick={() => setActive(!active)}
            className={styles.header__favorites_box}
          >
            <img src={SerchIcon} alt="Serch" className={styles.header__favorites}/>
          </Link>
          <Link 
            to="/favorites" 
            className={styles.header__favorites_box}
          >
            <img src={FavoritesIcon} alt="Favorites" className={styles.header__favorites}/>
          </Link>
        </nav>
      </div>
      <div className={styles.header__bottom}></div>
    </div>
    </>
  )
}

export default Header;