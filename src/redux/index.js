import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { postsReducer } from './reducers/postsReducers'
import { photosReducer } from './reducers/photosReducer'
import { loadingsReducer } from './reducers/loadingsReducer'

const rootReducer = combineReducers({
  postsReducer,
  photosReducer,
  loadingsReducer,
})

const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
