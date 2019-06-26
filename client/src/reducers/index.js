import { combineReducers } from 'redux'
import Alert from './alert'
import Active_NavLink from './activeTab'
import Auth from './auth'

const rootReducer = combineReducers({
    Alert,
    Active_NavLink,
    Auth
})

export default rootReducer