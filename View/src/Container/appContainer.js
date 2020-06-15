import { connect } from "react-redux";

import App from '../App';
import { checkLogin } from '../Action/identityActions';
import { addUser } from '../Action/userActions';
import  { storePhotos } from '../Action/photoAction';
import { getMapDetails } from '../Action/mappedPhotoActions';
import mappedPhotoReducer from "../Reducer/mappedPhotoReducer";

export const mapStateToProps = state => {
    return {
      loginState: state.loginReducer,
      searchState: state.searchReducer
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        checkLogin: (loginState) => {
            dispatch(checkLogin(loginState));
        },
        addUser: (user) => {
            dispatch(addUser(user));
        },
        storePhotos: (fetchedPhotos) => {
            dispatch(storePhotos(fetchedPhotos));
        },
        getMapDetails: (mapDetails) => {
            dispatch(getMapDetails(mapDetails));
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
