import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
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


const Dashboard = ({ isLoggedIn, user_data, Tasks, activate_NavbarLink, dashboardReq, setPopupStatus }) => {

	useEffect(() => {
		/** set navbar-active-tab store state on first load **/
		activate_NavbarLink(NavLink_Dashboard)
		dashboardReq(LIST_TASK)
		setPopupStatus(Popup_RESET)
	})

	const [clicked_task, Set_Clicked_task] = useState(undefined)
	/** this function will be called by the edit task button inside 'TaskContainer'. **/
	const edit_task_clicked = (task) => {
		Set_Clicked_task(task)
		//console.log('dash ==> '+JSON.stringify(task)) 
		//document.getElementById("popup-edit-task").style = "visibility:visible;opacity:1;"
	}

	return (
		<>
			{
				isLoggedIn && user_data ?
					<>
						<section className="dashboard-container">
							<Sidebar />
							<TaskContainer Tasks={Tasks} edit_task_clicked={edit_task_clicked} />
						</section>

						{ /* <!-- Resolution Error --> */}
						<div className="resolution-error">
							<h2>Can not show the dashboard :( <br />
								Make sure your device is having a resolution above 900px.</h2>
						</div>

						{ /* <!-- Add popup logic --> */}
						<PopupRoot Task={clicked_task} />
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