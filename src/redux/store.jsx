import { createStore } from 'redux';
import dragPanelReducer from './reducers/reducer';

const store = createStore(dragPanelReducer);

export default store;