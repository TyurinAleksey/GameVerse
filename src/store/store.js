import { createStore } from "@reduxjs/toolkit";
import {rootReducer} from './reducers';
import { setLocalStorage } from '@utils/localStorage';

const store = createStore(rootReducer);

store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store;