import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import { signUpReducer } from "./Signup/reducer"
import thunk from "redux-thunk"
import { loginReducer } from "./Login/reducer";
import { timetrackReducer } from "./Getdata/reducer";

var rootReducer = combineReducers({
 signup:signUpReducer,
 login:loginReducer,
 getdata:timetrackReducer,

});
 export const store = createStore(rootReducer,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));