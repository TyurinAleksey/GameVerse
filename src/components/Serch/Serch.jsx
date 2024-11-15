import PropTypes from 'prop-types'

import serchIcon from './img/serch.svg';

import styles from './Serch.module.scss';

function Serch() {
    return (
        <div className={styles.serch}>
          <input type="text" placeholder='Поиск...' className={styles.serch__text}/>
          <button><img src={serchIcon} alt="serch" className={styles.serch__btn}/></button>
        </div>
    )
}

Serch.propTypes = {
    // test: PropTypes.string
};

export default Serch;