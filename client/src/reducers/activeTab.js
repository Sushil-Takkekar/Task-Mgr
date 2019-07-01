/**
 * Set active tab for Navbar
 * Options : Login, Register, Dashboard, Profile, Logout
 */
import { combineReducers } from 'redux'
import {
    NavLink_NONE, NavLink_LOGIN, NavLink_REGISTER,
    NavLink_Dashboard, NavLink_PROFILE, NavLink_LOGOUT
} from '../actions/types'

const Active_NavLink = (state = '', action) => {
    switch(action.type) {
        case NavLink_NONE:
            return NavLink_NONE
        case NavLink_LOGIN:
            return NavLink_LOGIN
        case NavLink_REGISTER:
            return NavLink_REGISTER
        case NavLink_Dashboard:
            return NavLink_Dashboard
        case NavLink_PROFILE:
            return NavLink_PROFILE
        case NavLink_LOGOUT:
            return NavLink_LOGOUT    
        default:
            return state
    }
}

const Active_SideLink = (state = '', action) => {
    const type = action.type
    const sidelink = type.substr(0, type.indexOf('_'))
    if(sidelink === 'SideLink') {
        return type
    }else {
        return state
    }
}

const Active_Link = combineReducers({
    Active_NavLink,
    Active_SideLink
})

export default Active_Link