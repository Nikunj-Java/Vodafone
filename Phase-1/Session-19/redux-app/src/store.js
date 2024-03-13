import {createStore} from 'redux';
import CounterReducer from './reducers/CounterReducer';

const store=createStore(CounterReducer);

export default store;

//to install redux : npm i react-redux redux
