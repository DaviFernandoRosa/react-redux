import {createStore} from 'redux';

import rootReducer from './reducers/rootRecudcer';

export const store = createStore(rootReducer);