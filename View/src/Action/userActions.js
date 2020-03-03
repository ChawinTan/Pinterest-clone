export function addUser(user) {
    return {
        type: 'ADD_USER',
        payload : user
    };
}

export function removeUser() {
    return {
        type: 'REMOVE_USER',
        payload : {}
    };
}
