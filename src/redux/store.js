import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

/* *** SAGAS *** */
import { fetchCollectionsStart} from './shop/shopSagas';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

// create-react-app sets NODE_ENV to development automatically when building locally
const middlewares = process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
