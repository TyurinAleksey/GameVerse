import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import GamesList from "@components/GamesList"
import GamesNavigation from '@components/GamesNavigation';
import { getApiResourse } from "@utils/api";
import {API_GAMES} from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams"
import { getGamesPageId } from "@services/getGamesData"

function Home({setErrorApi}) {
    const [games, setGames] = useState(null);
    const [PrevPage, setPrevPage] = useState(null);
    const [NextPage, setNextPage] = useState(null);
    const [CounterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page')

    const getResourse = async (url) => {
        const data = await getApiResourse(url);
        // console.log(data)

        if (data) {
            const gamesList = data.results.map(({id, name, background_image}) => {
                return {
                    id, 
                    name,
                    gamesImage: background_image
                }
            });
    
            setGames(gamesList)
            setPrevPage(data.previous)
            setNextPage(data.next)
            setCounterPage(getGamesPageId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResourse(API_GAMES+(queryPage || 1));
    }, []);

    return (
        <>
            {games && <GamesList games={games}/>}
            <GamesNavigation 
                getResourse={getResourse}
                PrevPage={PrevPage}
                NextPage={NextPage}
                CounterPage={CounterPage}
            />
        </>
    )
}

Home.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(Home);