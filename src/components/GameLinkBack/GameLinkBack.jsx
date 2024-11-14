import { useNavigate } from 'react-router-dom';
import iconBack from './img/back.png'
import styles from './GameLinkBack.module.scss';

function GameLinkBack() {
    const navigate = useNavigate ();

    const handleGoBack = (e) => {
        e.preventDefault();
        
        navigate(-1);
    }

    return (
        <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}
        >
            <img src={iconBack} className={styles.link__img} alt="Go back" />
            <span className={styles.link__text}>Go back</span>
        </a>
    )
}


export default GameLinkBack;