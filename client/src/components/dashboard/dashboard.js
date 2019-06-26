import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { activate_DASHBOARD } from '../../actions/activeTab'
import Sidebar from './sidebar'
import TaskContainer from './taskContainer'

const Dashboard = ({ activate_DASHBOARD }) => {

    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
        activate_DASHBOARD()
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

export default connect(null, {activate_DASHBOARD})(Dashboard)