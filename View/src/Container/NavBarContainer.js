import { connect } from "react-redux";

import Navbar from '../Components/Navbar/navbar';
import { checkLogout } from '../Action/identityActions';
import { removeUser } from '../Action/userActions';
import { enterSearch } from '../Action/searchActions';
 
export const mapStateToProps = state => {
    return {
      loginState: state.loginReducer,
      userState: state.userReducer
    };
};

export const mapDispatchToProps = dispatch => {
  return {
      checkLogout: (logoutState) => {
          dispatch(checkLogout(logoutState));
      },
      removeUser: () => {
          dispatch(removeUser());
      },
      enterSearch: (searchState) => {
        dispatch(enterSearch(searchState));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
