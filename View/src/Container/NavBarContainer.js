import { connect } from "react-redux";

import Navbar from '../Components/Navbar/navbar';

export const mapStateToProps = state => {
    return {
      loginState: state.loginReducer,
      userState: state.userReducer
    };
};

export default connect(mapStateToProps, null)(Navbar);
