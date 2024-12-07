import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setGameToFavorite, removeGameFromFavorite} from '@store/actions';
import GamesList from '@components/GamesList'

import styles from './Favorites.module.scss';
import { object } from 'prop-types';


function Favorites() {
    const storeData = useSelector(state => state.favoriteReducer);

    const [games, setGames] = useState([]);

    useEffect(() => {
        const arr = Object.entries(storeData);
        
        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    name: item[1].name,
                    gamesImage: item[1].img,
                }
            })
            setGames(res);
        }
    }, []);

    return (
        <>
            <h2 className={styles.title}>Избранные игры</h2>
            {games.length
                ? <GamesList games={games}/> 
                : (<p className={styles.comment}>Тут ничего нет xD</p>)
            }
        </>
    )
}

export default Favorites;