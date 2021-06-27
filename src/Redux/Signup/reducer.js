import { SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actiontype";



const signupinitstate = {
    signupAuth: false,
    signupLoading: false,
    signupError: false,
    email: "",
    id: ""
}


export const signUpReducer = (state = signupinitstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupAuth: true,
                signupLoading: false,
                email: payload.email,
                id: payload.id,
            };
        case SIGNUP_REQUEST:
            return {
                ...state,
                signupLoading: true
            };
        case SIGNUP_FAILED:
            return {
                ...state,
                signupAuth: false,
                signupError: true,
                signupLoading: false,
                email: "",
                password: "",
                id: ""
            };
        default:
            return state
    }
}