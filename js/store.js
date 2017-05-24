import {createStore, applyMiddleWare} from 'redux';
import {reducer as formReducer} from 'redux-form';
import think from 'redux-thunk';

import searchReducer from './js/reducers/search/index';