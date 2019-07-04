import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { activate_NavbarLink } from '../../actions/activeTab'
import { dashboardReq } from '../../actions/dashboard'
import { setPopupStatus } from '../../actions/popup'
import { 
    NavLink_Dashboard, LIST_TASK,
    Popup_RESET
} from '../../actions/types'
import Sidebar from './sidebar'
import TaskContainer from './taskContainer'
import PopupRoot from './popupRoot'


const Dashboard = ({ isLoggedIn, user_data, activate_NavbarLink, dashboardReq,setPopupStatus }) => {

    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
        activate_NavbarLink(NavLink_Dashboard)
        dashboardReq(LIST_TASK)
        setPopupStatus(Popup_RESET)
    })

    return (
        <>
            {
                isLoggedIn && user_data ? 
                    <>
                        <section className="dashboard-container">
                            <Sidebar />                
                            <TaskContainer />
                        </section>
                        
                        { /* <!-- Resolution Error --> */ }
                        <div className="resolution-error">
                            <h2>Can not show the dashboard :( <br />
                            Make sure your device is having a resolution above 900px.</h2>
                        </div>

                        { /* <!-- Add popup logic --> */ }
                        <PopupRoot />
                    </>
                    :
                    <Redirect to="/" />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.Auth.login.isLoggedIn,
        user_data: state.Auth.login.user
    }
}

export default connect(mapStateToProps, {
    activate_NavbarLink,
    dashboardReq,
    setPopupStatus
})(Dashboard)