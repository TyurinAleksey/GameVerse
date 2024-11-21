import { useSelector } from 'react-redux';
import { setGameToFavorite, removeGameFromFavorite} from '@store/actions'

import styles from './Favorites.module.scss';

function Favorites() {
    const storeData = useSelector(state => state.favoriteReducer)
    console.log(storeData)
    return (
        <>
            <h1>FavoritesPage</h1>
        </>
    )
}

export default Favorites;