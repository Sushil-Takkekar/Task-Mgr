import { Activate_LOGIN, Activate_REGISTER, Activate_DASHBOARD, Activate_PROFILE, Activate_LOGOUT, Activate_NONE } from './types'

export const activate_LOGIN = () => dispatch => {
    dispatch({
        type: Activate_LOGIN
    })
}
export const activate_REGISTER = () => dispatch => {
    dispatch({
        type: Activate_REGISTER
    })
}
export const activate_DASHBOARD = () => dispatch => {
    dispatch({
        type: Activate_DASHBOARD
    })
}
export const activate_PROFILE = () => dispatch => {
    dispatch({
        type: Activate_PROFILE
    })
}
export const activate_LOGOUT = () => dispatch => {
    dispatch({
        type: Activate_LOGOUT
    })
}
export const activate_NONE = () => dispatch => {
    dispatch({
        type: Activate_NONE
    })
}