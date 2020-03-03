export function checkLogin(loginState) {
    return {
        type: 'CHECK_LOGIN',
        payload: loginState
    }
}

export function checkLogout(logoutState) {
    return {
        type: 'CHECK_LOGOUT',
        payload: logoutState
    };
}
