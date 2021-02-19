import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./middlewares/rootSaga";

const saga = createSagaMiddleware();
const middleware = [saga];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),

    //Comment out next line to use REDUX Dev tools in Chrome
    
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootSaga)

export default store;