import { connect } from "react-redux";

import App from '../App';
import { checkLogin } from '../Action/identityActions';
import { addUser } from '../Action/userActions';
import  { storePhotos } from '../Action/photoAction';

export const mapStateToProps = state => {
    return {
      loginState: state.loginReducer
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
