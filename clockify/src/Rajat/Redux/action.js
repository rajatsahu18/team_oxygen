import { DELETE_CLIENT_FAILURE, 
        DELETE_CLIENT_REQUEST,
        DELETE_CLIENT_SUCCESS, 
        EDIT_CLIENT_FAILURE, 
        EDIT_CLIENT_REQUEST, 
        EDIT_CLIENT_SUCCESS }
from "./actionType"

// Edit Clients

export const editClientRequest = () => {
    return {
        type:  EDIT_CLIENT_REQUEST
    }
}

export const editClientSuccess = (payload) => {
    return {
        type:  EDIT_CLIENT_SUCCESS,
        payload
    }
}

export const editClientFailure = () => {
    return {
        type:  EDIT_CLIENT_FAILURE
    }
}

export const editClients = () => dispatch => {
    dispatch(editClientRequest())
    return axios.patch(`https://json-server-mocker-pooran.herokuapp.com/userdata/${id}`)
    .then(res => {
        dispatch(editClientSuccess(res.data))
        console.log(res.data)
        return {success: true}
    })
    .catch(err => {
        dispatch(editClientFailure())
        return false
    })
}

// Delete Clients

export const deleteClientRequest = () => {
    return {
        type:  DELETE_CLIENT_REQUEST
    }
}

export const deleteClientSuccess = (payload) => {
    return {
        type:  DELETE_CLIENT_SUCCESS,
        payload
    }
}

export const deleteClientFailure = () => {
    return {
        type:  DELETE_CLIENT_FAILURE
    }
}

export const deleteClients = () => (dispatch) => {
    dispatch(deleteClientRequest())
    return axios.delete("")
    .then(res => {
        dispatch(deleteClientSuccess(res.data))
        return {success: true}
    })
    .catch(err => {
        dispatch(deleteClientFailure())
        return false
    })
}