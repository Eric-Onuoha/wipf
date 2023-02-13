import {compose, createStore, applyMiddleware} from "redux"; // see if creat store and configureStore are interchangable
// import logger from "react-redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";


const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const reduxStore = createStore(rootReducer, undefined, composedEnhancers);
