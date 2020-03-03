const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'CHECK_LOGIN':
            return action.payload;
        case 'CHECK_LOGOUT':
            return action.payload;
        default:
            return state;
    }
}

export default loginReducer;
