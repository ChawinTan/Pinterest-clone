import { combineReducers } from "redux";

import loginReducer from '../Reducer/loginReducer';
import userReducer from '../Reducer/userReducer';

const combinedReducers = combineReducers({
    loginReducer,
    userReducer
});

export default combinedReducers;
