/**
 * Set active tab for Navbar
 * Options : Login, Register, Dashboard, Profile, Logout
 */
import {Activate_LOGIN,Activate_REGISTER,Activate_DASHBOARD,Activate_PROFILE,Activate_LOGOUT,Activate_NONE} from '../actions/types'

const Navbar_activeTab = (state = '', action) => {
    switch(action.type) {
        case Activate_LOGIN:
            return 'LOGIN'
        case Activate_REGISTER:
            return 'REGISTER'
        case Activate_DASHBOARD:
            return 'DASHBOARD'
        case Activate_PROFILE:
            return 'PROFILE'
        case Activate_LOGOUT:
            return 'LOGOUT'
        case Activate_NONE:
            return ''
        default:
            return state
    }
}

export default Navbar_activeTab