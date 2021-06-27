import { act } from "react-dom/test-utils"
import { Getlocaldata, Savelocaldata } from "../../Utils/localstorage";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actiontype";

const logindata = Getlocaldata("account");

const loginstate = {
    loginAuth: logindata? logindata.loginAuth : false,
    loginLoading: false,
    loginError: false,
    email: logindata? logindata.email : "",
    id:logindata? logindata.id : "",
    username: logindata? logindata.username : "",
}


export const loginReducer = (state = loginstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginAuth: true,
                loginLoading: false,
                email: payload.email,
                id: payload.id,
                username:payload.username
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loginAuth: false,
                loginLoading: false,
                loginError: true,
                email: "",
                id: "",
                username: ""
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                loginLoading: true
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loginAuth: false
            }
        default:
            return state
    }
}