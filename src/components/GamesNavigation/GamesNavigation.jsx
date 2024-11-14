import { Link } from 'react-router-dom';
import UiButton from '@UI/UiButton';

import styles from './GamesNavigation.module.scss';

function GamesNavigation({getResourse, PrevPage, NextPage, CounterPage}) {
    const handleChangePrev = () => getResourse(PrevPage); 
    const handleChangeNext = () => getResourse(NextPage);

    return (
        <div className={styles.container}>
            <Link to={`/?page=${CounterPage - 1}`} className={styles.link}>
                <UiButton 
                    name="Previous"
                    onClick={handleChangePrev}
                    disabled={!PrevPage}
                />
            </Link>
            <Link to={`/?page=${CounterPage + 1}`} className={styles.link}>
            <UiButton 
                    name="Next"
                    onClick={handleChangeNext}
                    disabled={!NextPage}
                />
            </Link>
        </div>
    )
}

export default GamesNavigation;