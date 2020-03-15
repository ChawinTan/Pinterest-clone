const photoReducer = (state = [], action) => {
    switch(action.type) {
        case 'STORE_PHOTOS':
            return action.payload.map((photo) => {
                return { ... photo};
            });
        default:
            return state;
    }
}

export default photoReducer;
