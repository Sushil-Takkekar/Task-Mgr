import { combineReducers } from  'redux'
import { 
    Login_SUCCESS, Login_FAIL,
    Register_SUCCESS, Register_FAIL
} from '../actions/types'

/**
 * Auth state object will store following things
 */
const initialState = {
    token: localStorage.getItem('token'),
    isLoggedIn: localStorage.getItem('active'),
    loading: true,
    user: JSON.parse(localStorage.getItem('user'))
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case Login_SUCCESS:
            setLocalStorage(true, action.payload)
            return {
                ...state,
                ...action.payload,
                token: localStorage.getItem('token'),
                isLoggedIn: true,
                loading: false,
            }
        case Login_FAIL:
            setLocalStorage(false)
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

const register = (state = initialState, action) => {
    switch(action.type) {
        case Register_SUCCESS:
            return {
                ...state,
                user: action.payload.user
            }
        case Register_FAIL:
            setLocalStorage(false)
            return state
        default:
            return state
    }
}

const setLocalStorage = (flag, data) => {
    if(flag) {
        localStorage.setItem('token',data.token)
        localStorage.setItem('user',JSON.stringify(data.user))
        localStorage.setItem('active',true)
    }else {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('active')
    }
}

const Auth = combineReducers({
    login,
    register
})

export default Auth