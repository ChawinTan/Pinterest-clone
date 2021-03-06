export function enterSearch(searchState) {
    return {
        type: 'ENTER_SEARCH',
        payload: searchState
    }
}

export function exitSearch(searchState) {
    return {
        type: 'EXIT_SEARCH',
        payload: searchState
    }
}

export function userSearch(searchItems) {
    return {
        type: 'USER_SEARCH',
        payload: searchItems
    }
}
