import { createStore } from 'redux';
import counter from '../../reducers/counter/counterReducer';

const counterStore = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default counterStore;
