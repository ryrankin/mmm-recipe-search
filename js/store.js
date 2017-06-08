import {createStore, applyMiddleware} from 'redux';
import * as actions from './actions/index';
import thunk from 'redux-thunk';
import * as reducers from './reducers/index';


export default createStore(reducers.recipeReducer, applyMiddleware(thunk));