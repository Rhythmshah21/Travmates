import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { noteCreateReducer, noteDeleteReducer, blogListReducer, noteUpdateReducer } from './reducers/blogReducer';
const reducer=combineReducers({
    blogList:blogListReducer,
    // noteCreate:noteCreateReducer,
    // noteUpdate:noteUpdateReducer,
    // noteDelete:noteDeleteReducer

});
const initialState ={};
const middleware=[thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)
export default store;