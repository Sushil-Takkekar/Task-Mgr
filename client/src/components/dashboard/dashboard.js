import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { activate_NavbarLink } from '../../actions/activeTab'
import { dashboardReq } from '../../actions/dashboard'
import Sidebar from './sidebar'
import TaskContainer from './taskContainer'
import { 
    NavLink_Dashboard, LIST_TASK,
    Tasks_ALL, Tasks_COMPLETED,
    Tasks_TODAY, Tasks_WEEKLY
} from '../../actions/types'

const Dashboard = ({ isLoggedIn, user_data, activate_NavbarLink, dashboardReq }) => {

    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
        activate_NavbarLink(NavLink_Dashboard)
        dashboardReq(LIST_TASK)
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
    dashboardReq
})(Dashboard)