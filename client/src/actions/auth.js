import { login_user, create_user } from '../axios/user'
import { 
    Loader_SHOW, Loader_HIDE,
    Login_SUCCESS, Login_FAIL,
    Register_SUCCESS, Register_FAIL,
    Alert_SHOW, Alert_HIDE 
} from './types'

/**
 * Login action.
 * Set action based on API call response.
 */
export const login = (user) => dispatch => {
    dispatch({ type: Loader_SHOW })

    login_user(user).then((res) => {
        dispatch({ type: Loader_HIDE })
        dispatch({
            type: Login_SUCCESS,
            payload: res
        })
        /** Hide Alert **/
        dispatch({
            type: Alert_HIDE
        })
    }).catch((err) => {
        dispatch({ type: Loader_HIDE })
        dispatch({
            type: Login_FAIL
        })
        /** Show Alert **/
        dispatch({
            type: Alert_SHOW
        })
    })
}

/**
 * Register action.
 * Set action based on API call response.
 */
export const register = (user) => dispatch => {
    dispatch({ type: Loader_SHOW })
    if(user.pass1 === user.pass2) {
        const user_obj = {
            name: user.name,
            email: user.email,
            password : user.pass1
        }
        create_user(user_obj).then((res) => {
            dispatch({ type: Loader_HIDE })
            dispatch({
                type: Register_SUCCESS,
                payload: res 
            })
            /** Hide Alert **/
            dispatch({
                type: Alert_HIDE
            })
        }).catch((err) => {
            dispatch({ type: Loader_HIDE })
            dispatch({
                type: Register_FAIL, 
            })
            /** Show Alert **/
            dispatch({
                type: Alert_SHOW
            })
        })
    }else {
        /** Show Alert **/
        dispatch({
            type: Alert_SHOW
        })
    }
}

export const logoutUser = () => dispatch => {
    dispatch({
        type: Login_FAIL
    })
}