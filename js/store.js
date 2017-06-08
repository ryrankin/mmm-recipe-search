import {createStore, applyMiddleWare} from 'redux';
import think from 'redux-thunk';
import * as reducers from './reducers/index';

export default createStore(reducers.recipeReducer, applyMiddleWare(thunk));