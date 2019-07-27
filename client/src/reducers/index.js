import { combineReducers } from 'redux'
import Alert from './alert'
import Active_Link from './activeTab'
import Auth from './auth'
import Dashboard from './dashboard'
import PopupStatus from './popup'
import Loader from './loader'

const rootReducer = combineReducers({
    Alert,
    Auth,
    Dashboard,
    PopupStatus,
    Active_Link,
    Loader
})

export default rootReducer