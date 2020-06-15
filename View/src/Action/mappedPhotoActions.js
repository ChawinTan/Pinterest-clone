export function getMapDetails(mappedPhotos) {
    return {
        type: 'GET_MAPDETAILS',
        payload: mappedPhotos
    };
}