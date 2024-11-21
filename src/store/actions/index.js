import { ADD_GAME_TO_FAVORITE, REMOVE_GAME_FROM_FAVORITE } from '@store/constants/actionTypes';

export const setGameToFavorite = (game) => ({
    type: ADD_GAME_TO_FAVORITE,
    payload: game,
})

export const removeGameFromFavorite = (id) => ({
    type: REMOVE_GAME_FROM_FAVORITE,
    payload: id,
})