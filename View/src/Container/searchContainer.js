import { connect } from "react-redux";

import Search from "../Components/Search/search";
import { exitSearch } from "../Action/searchActions";

export const mapDispatchToProps = dispatch => {
    return {
        exitSearch: (searchState) => {
            dispatch(exitSearch(searchState))
        }
    };
  };

export default connect(null, mapDispatchToProps)(Search);
