import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./reducers/rootReducers";
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);
export default store;
