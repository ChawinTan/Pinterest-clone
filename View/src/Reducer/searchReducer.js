const searchReducer = (state = false, action) => {
    switch (action.type) {
        case 'ENTER_SEARCH':
            return true
        case 'EXIT_SEARCH':
            return false;
        default:
            return state;
    }
}

export default searchReducer;
