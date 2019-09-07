import { combineReducers } from "redux";

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state, 
                users: action.payload
            }
        case "ADD_USER":
            return {
                ...state, 
                users: action.payload
            }    
        case "EDIT_USER":
            return {
                ...state, 
                id: action.payload,
                update: action.update
            }
        case "DELETE_USER":
            return {
                ...state, 
                id: action.payload
            }                      
        default:
            return state
    }
    
}

export default combineReducers({
    users: usersReducer
})
