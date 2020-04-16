import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

// create-react-app sets NODE_ENV to development automatically when building locally
const middlewares = process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
