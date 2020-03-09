import { connect } from "react-redux";

import GetPhoto from '../Components/GetPhoto/getPhoto';

export const mapStateToProps = state => {
    return {
      userId: state.userReducer.secret ? state.userReducer.secret : ''
    };
};

export default connect(mapStateToProps, null)(GetPhoto);
