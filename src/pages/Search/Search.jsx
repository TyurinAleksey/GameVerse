import PropTypes from 'prop-types'
import { useState } from 'react';
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResourse } from '@utils/api'
import { API_SEARCH_GAME } from '@constants/api'
import GamesList from '@components/GamesList'

import styles from './Search.module.scss';

function Search({ setErrorApi }) {
    const [inputValue, setInputValue] = useState('');
    const [games, setGames] = useState([]);

    const getResponse = async (param) => {
        const res = await getApiResourse(API_SEARCH_GAME + param);

        if (res) {
            console.log(res);
            const gamesList = res.results.map(({ id, name, background_image }) => {
                return {
                    id, 
                    name,
                    gamesImage: background_image
                }
            })

            setGames(gamesList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    const handleInputChange = (e) => {
        const value = e.target.value;

        setInputValue(value)
        getResponse(value);
    }

    return (
        <>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Поиск...'
                className={styles.serch}
            />
            {games && <GamesList games={games}/>}
        </>
    )
}

Search.propTypes = {
    setErrorApi: PropTypes.func
};

export default withErrorApi(Search);