import { SEARCH_PARAM_PAGE } from "@constants/api";

export const getGamesPageId = url => {
    const position = url.lastIndexOf(SEARCH_PARAM_PAGE);
    const id = url.slice(position + SEARCH_PARAM_PAGE.length, url.length);
    
    return Number(id);
}