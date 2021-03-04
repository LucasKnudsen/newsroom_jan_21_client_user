import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';
import initialState from '../store/initialState'

const store = createStore(rootReducer, initialState)

export default store;