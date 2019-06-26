import { Login_SUCCESS, Login_FAIL } from '../actions/types'

/**
 * Auth state object will store following things
 */
const initialState = {
    token: localStorage.getItem('token'),
    isLoggedIn: false,
    loading: true,
    user: null
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case Login_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                token: localStorage.getItem('token'),
                isLoggedIn: true,
                loading: false,
            }
        case Login_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isLoggedIn: false,
                loading: false,
                user: null
            }
        default:
            return state
    }
}

export default login