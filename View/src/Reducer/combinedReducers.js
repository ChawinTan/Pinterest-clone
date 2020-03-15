import { combineReducers } from "redux";

import loginReducer from '../Reducer/loginReducer';
import userReducer from '../Reducer/userReducer';
import photoReducer from '../Reducer/photoReducer';

const combinedReducers = combineReducers({
    loginReducer,
    userReducer,
    photoReducer
});

export default combinedReducers;
