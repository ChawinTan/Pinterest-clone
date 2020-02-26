import { combineReducers } from "redux";

import loginReducer from '../Reducer/loginReducer';

const combinedReducers = combineReducers({
    loginReducer
});

export default combinedReducers;
