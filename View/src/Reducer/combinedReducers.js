import { combineReducers } from "redux";

import loginReducer from '../Reducer/loginReducer';
import userReducer from '../Reducer/userReducer';
import photoReducer from '../Reducer/photoReducer';
import searchReducer from '../Reducer/searchReducer'
import searchItemReducer from './searchItemReducer';
import mappedPhotoReducer from './mappedPhotoReducer';

const combinedReducers = combineReducers({
    loginReducer,
    userReducer,
    photoReducer,
    searchReducer,
    searchItemReducer,
    mappedPhotoReducer
});

export default combinedReducers;
