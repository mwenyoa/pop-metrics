import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import populationReducer from './population/population';

const reducer = combineReducers({
  population: populationReducer,
});

// create store
const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));
export default store;
