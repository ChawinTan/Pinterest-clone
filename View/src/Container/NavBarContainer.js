import { connect } from "react-redux";

import Navbar from '../Components/Navbar/navbar';

export const mapStateToProps = state => {
    return {
      loginState: state.loginReducer
    };
};

export default connect(mapStateToProps, null)(Navbar);
