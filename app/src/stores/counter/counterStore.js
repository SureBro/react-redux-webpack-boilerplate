import { createStore } from 'redux';
import counter from '../../reducers/counter/counterReducer';

const counterStore = createStore(counter);

export default counterStore;
