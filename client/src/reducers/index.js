import { combineReducers } from 'redux'
import Alert from './alert'
import Active_NavLink from './activeTab'
import Auth from './auth'
import Dashboard from './dashboard'

const rootReducer = combineReducers({
    Alert,
    Auth,
    Dashboard,
    Active_NavLink
})

export default rootReducer