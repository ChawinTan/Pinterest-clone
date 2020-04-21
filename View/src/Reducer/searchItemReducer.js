const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'USER_SEARCH':
            const searchItemHolder = action.payload.map(item => {
                return { ...item };
            })
            return searchItemHolder;
        default:
            return state;
    }
}

export default searchReducer;