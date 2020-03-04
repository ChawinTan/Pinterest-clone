import { connect } from "react-redux";

import GetPhoto from '../Components/GetPhoto/getPhoto';

export const mapStateToProps = state => {
    return {
      getPhoto: state.userReducer.get_photos ? state.userReducer.get_photos.data[0] : 0
    };
};

export default connect(mapStateToProps, null)(GetPhoto);
