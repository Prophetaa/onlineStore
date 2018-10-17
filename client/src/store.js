import { createStore, compose } from "redux";



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

const enhancer = compose(
  devTools
);

const store = createStore( enhancer);

export default store;
