import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./redux/reducers"
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    //applyMiddleware(...middleware) ES PARA QUE SEA ACCESIBLE CON LA EXTENSION DE REDUX
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store