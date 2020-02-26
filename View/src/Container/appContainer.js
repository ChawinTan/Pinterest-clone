import { connect } from "react-redux";

import App from '../App';
import { checkLogin } from '../Action/identityActions';

export const mapStateToProps = state => {
    return {
      loginState: state.loginReducer
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        checkLogin: (loginState) => {
            dispatch(checkLogin(loginState));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
