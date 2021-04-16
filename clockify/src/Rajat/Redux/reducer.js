import { DELETE_CLIENT_FAILURE, 
        DELETE_CLIENT_REQUEST, 
        DELETE_CLIENT_SUCCESS, 
        EDIT_CLIENT_FAILURE, 
        EDIT_CLIENT_REQUEST, 
        EDIT_CLIENT_SUCCESS } 
    from "./actionType"

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {

        // EDIT CLIENTS

        case EDIT_CLIENT_REQUEST: 
            return {
                ...state,
                isLoading: true,
                error: false
            }

        case EDIT_CLIENT_SUCCESS: 
            return {
                ...state,
                isLoading: false
            }

        case EDIT_CLIENT_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // Delete CLIENTS

        case DELETE_CLIENT_REQUEST: 
            return {
                isLoading: true,
                error: false
            }

        case DELETE_CLIENT_SUCCESS: 
            return {
                isLoading: false
            }

        case DELETE_CLIENT_FAILURE: 
            return {
                isLoading: false,
                error: true
            }

        default: 
            return state
    }
}