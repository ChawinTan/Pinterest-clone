export function checkLogin(loginState) {
    return {
        type: 'CHECK_LOGIN',
        payload: loginState
    }
}

export function updateUserDetails(userDetails) {
    return {
        type: 'UPDATE_USERDETAILS',
        payload: userDetails
    }
}
