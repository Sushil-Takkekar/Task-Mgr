import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Sidebar from './sidebar'
import TaskContainer from './taskContainer'

const Dashboard = () => {
    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
    },[])
    
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

export default Dashboard