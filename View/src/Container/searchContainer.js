import { connect } from "react-redux";

import Search from "../Components/Search/search";
import { exitSearch } from "../Action/searchActions";

export const mapStateToProps = state => {
    return {
        searchItems: state.searchItemReducer ? state.searchItemReducer : [],
        currUser: state.userReducer ? state.userReducer : {},
        mappedDetails: state.mappedPhotoReducer ? state.mappedPhotoReducer.details : [],
        mappedPhotos: state.mappedPhotoReducer ? state.mappedPhotoReducer.photos : []
    };
};


export const mapDispatchToProps = dispatch => {
    return {
        exitSearch: (searchState) => {
            dispatch(exitSearch(searchState))
        }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
