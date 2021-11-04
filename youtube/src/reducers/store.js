import { createStore, combineReducers } from "redux";

import mostPopularReducer from "./videos/reducer"

const reducers = combineReducers( {mostPopularReducer} );
const store = createStore(reducers);

export default store;