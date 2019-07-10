/**
 * Form Alerts
 */
export const Alert_SHOW = 'Alert_SHOW'
export const Alert_HIDE = 'Alert_HIDE'

/**
 * Active Tabs : Navbar
 * These vars are used to pass the type of action during dispatch only.
 * It means dispatching a dynamic action
 */
export const NavLink_LOGIN = 'LOGIN';
export const NavLink_REGISTER = 'REGISTER';
export const NavLink_Dashboard = 'Dashboard';
export const NavLink_PROFILE = 'PROFILE';
export const NavLink_LOGOUT = 'LOGOUT';
export const NavLink_NONE = '';

/**
 * Active Tabs : Sidebar (Dashboard)
 * These vars are used to pass the type of action during dispatch.
 */


/**
 * Login status 
 */
export const Login_SUCCESS = 'Login_SUCCESS'
export const Login_FAIL = 'Login_FAIL'

/**
 * Register status 
 */
export const Register_SUCCESS = 'Register_SUCCESS'
export const Register_FAIL = 'Register_FAIL'

/**
 * Logout user
 */
export const Logout_USER = 'Logout_USER'

/**
 * Dashboard requests 
 */
export const LIST_TASK = 'LIST_TASK'
export const Tasks_ALL = 'Tasks_ALL'
export const Tasks_TODAY = 'Tasks_TODAY'
export const Tasks_WEEKLY = 'Tasks_WEEKLY'
export const Tasks_COMPLETED = 'Tasks_COMPLETED'

export const Bind_TASK = 'Bind_TASK'
export const Bind_LIST = 'Bind_LIST'
export const Bind_TAB_COUNT = 'Bind_TAB_COUNT'

/**
 * Popup status
 */
export const Popup_RESET = 'Popup_RESET'
export const Popup_SUCCESS = 'Popup_SUCCESS'
export const Popup_FAIL = 'Popup_FAIL'

export const Popup_AddList = 'Popup_AddList'
export const Popup_EditList = 'Popup_EditList'
export const Popup_AddTask = 'Popup_AddTask'
export const Popup_EditTask = 'Popup_EditTask'