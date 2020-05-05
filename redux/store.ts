import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootInitialState } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const configureStore = (initialState = rootInitialState) => {
    const sagaMiddleware = createSagaMiddleware()
    const store:any = createStore(
      rootReducer,
      initialState,
      bindMiddleware([sagaMiddleware])
    )
  
    store.sagaTask = sagaMiddleware.run(rootSaga)
  
    return store
  }

export default configureStore;