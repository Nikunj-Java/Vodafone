import {createStore} from 'redux';
import rootReducer from './reducers';

const store=createStore(rootReducer);

export default store;

//to install redux : npm i react-redux redux
