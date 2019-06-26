import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { activate_NavbarLink } from '../../actions/activeTab'
import { NavLink_Dashboard } from '../../actions/types'
import Sidebar from './sidebar'
import TaskContainer from './taskContainer'

const Dashboard = ({ activate_NavbarLink }) => {

    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
        // activate_DASHBOARD()
        activate_NavbarLink(NavLink_Dashboard)
    })

    return (
        <>
            <section className="dashboard-container">
                <Sidebar />                
                <TaskContainer />
            </section>
            
            {/* <!-- Resolution Error --> */}
            <div className="resolution-error">
                <h2>Can not show the dashboard :( <br />
                Make sure your device is having a resolution above 900px.</h2>
            </div>
        </>
    )
}

export default connect(null, {activate_NavbarLink})(Dashboard)