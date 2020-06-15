import { connect } from "react-redux";

import UserBoard from '../Components/Login/userBoard';

export const mapStateToProps = state => {
    return {
        userId: state.userReducer.secret ? state.userReducer.secret : '',
        photos: state.photoReducer.length > 0 ? state.photoReducer : [],
        mappedPhotos: state.mappedPhotoReducer ? state.mappedPhotoReducer.photos : []
    };
};

export const mapDispatchToProps = dispatch => {
    return {

    };
  };

export default connect(mapStateToProps, null)(UserBoard);
