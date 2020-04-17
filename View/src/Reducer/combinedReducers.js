import { combineReducers } from "redux";

import loginReducer from '../Reducer/loginReducer';
import userReducer from '../Reducer/userReducer';
import photoReducer from '../Reducer/photoReducer';
import searchReducer from '../Reducer/searchReducer'

const combinedReducers = combineReducers({
    loginReducer,
    userReducer,
    photoReducer,
    searchReducer
});

export default combinedReducers;
