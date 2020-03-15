import { connect } from "react-redux";

import UserBoard from '../Components/Login/userBoard';
import  { storePhotos } from '../Action/photoAction';

export const mapStateToProps = state => {
    return {
        userId: state.userReducer.secret ? state.userReducer.secret : '',
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        storePhotos: (fetchedPhotos) => {
            dispatch(storePhotos(fetchedPhotos));
        },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);
