import { createStore, applyMiddleware, combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";
import { registerReducer } from "./reducers/RegisterReducer";
import { loginReducer } from "./reducers/LoginReducer";
import { getAllSubCategoriesReducer } from "./reducers/SubCategoriesReducer";
import { getServicesReducer } from "./reducers/ServicesReducer";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({
      registration: registerReducer,
      login: loginReducer,
      subCategories: getAllSubCategoriesReducer,
      services: getServicesReducer
    }),
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger))
  );
  sagaMiddleware.run(rootSaga);

  return store;
};