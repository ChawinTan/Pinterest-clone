const mappedPhotoReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_MAPDETAILS':
            return {
                details: [...action.payload.details],
                photos: [...action.payload.photos]
            };
        default:
            return {};
    }
}

export default mappedPhotoReducer;