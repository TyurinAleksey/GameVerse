import { ADD_GAME_TO_FAVORITE, REMOVE_GAME_FROM_FAVORITE } from '@store/constants/actionTypes';
import { omit } from 'lodash';

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GAME_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }

        case REMOVE_GAME_FROM_FAVORITE:
            return omit(state, [action.payload])
    
        default:
            return state;
    }
}

export default favoriteReducer;