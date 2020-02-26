import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import combinedReducers from './Reducer/combinedReducers';

export default createStore(
    combinedReducers,
    {},
    applyMiddleware(createLogger(), thunk)
)