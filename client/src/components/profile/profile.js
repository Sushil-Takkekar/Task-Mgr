/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink_PROFILE } from '../../actions/types'
import { activate_NavbarLink } from '../../actions/activeTab'

const Profile = ({ isLoggedIn, user, activate_NavbarLink }) => {
	useEffect(() => {
		/** set navbar-active-tab store state on first load **/
		activate_NavbarLink(NavLink_PROFILE)
	})

	return (
		<>
			{
				isLoggedIn && user ?
					<>
						<section className="container">
							<div className="edit-profile-btn">
								<Link to="#" className="btn btn-edit">Edit</Link>
								<Link to="#"><i className="material-icons edit">edit</i></Link>
							</div>
							<div className="profile-grid my-1">
								{/* <!-- Top --> */}
								<div className="profile-top bg-main-color">
									<img className="round-img" src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png" alt="" />
									<h1 className="large">Sushil Takkekar</h1>
									<p className="lead">Developer at TIBCO Software Inc.</p>
									<p>Navi Mumbai, India</p>
									<div className="icons social-media">
										<a href="https://www.facebook.com/"><img alt="facebook" src="https://www.gstatic.com/images/icons/material/system/2x/post_facebook_black_24dp.png" /></a>
										<a href="https://twitter.com/"><img alt="twitter" src="https://www.gstatic.com/images/icons/material/system/2x/post_twitter_black_24dp.png" /></a>
										<a href="https://aboutme.google.com/"><img alt="google-plus" src="https://www.gstatic.com/images/icons/material/system/2x/post_gplus_black_24dp.png" /></a>
									</div>
								</div>

								{/* <!-- About --> */}
								<div className="profile-about bg-primary p-2">
									<div className="bio-section">
										<h2 className="title regular-title text-main-color">Sushil Takkekar's Bio</h2>
										<p className="lead">
											Web developer with 2+ years of experience in building applications using suitable technology stack and deploying them on cloud.
										</p>
									</div>
									<div className="horz-line"></div> {/* <!-- Line separator --> */}
									<div className="skills-section">
										<div className="title text-main-color"><h2 className="regular-title">Skills</h2></div>
										<div className="skills">
											<div className="skill-item"><i className="material-icons">done</i>
												HTML
											</div>
											<div className="skill-item"><i className="material-icons">done</i>
												CSS
											</div>
											<div className="skill-item"><i className="material-icons">done</i>
												Javascript
											</div>
											<div className="skill-item"><i className="material-icons">done</i>
												ReactJs
											</div>
											<div className="skill-item"><i className="material-icons">done</i>
												NodeJs
											</div>
											<div className="skill-item"><i className="material-icons">done</i>
												ExpressJs
											</div>
											<div className="skill-item"><i className="material-icons">done</i>
												MongoDB
											</div>
										</div>
									</div>
								</div>

								{/* <!-- Experience --> */}
								<div className="profile-exp p-2">
									<h2 className="exp-title regular-title text-main-color">
										Experience
										<a href="#"><i className="material-icons edit">edit</i></a>
									</h2>
									<div className="exp-item">
										<h3 className="company">TIBCO</h3>
										<div className="duration">
											<b>Duration : </b>
											Jul-17 to Current
										</div>
										<div className="position">
											<b>Position : </b>
											TIBCO Developer
										</div>
										<p className="description">
											<b>Description : </b>
											Currently working as a developer on various open-source as well as tibco technologies across multiple projects.
											<br />- Worked on a Quiz application and deployed it to cloud using Docker and OpenShift.
											<br />- Worked on integrating Telegram API in NodeJs that sends automated messages to clients using bots.
											<br />- Developed connectors for 'Project Flogo' using GoLang during a month-long Hackathon.
											<br />- Developed PowerShell scripts for the automation of Infrastructure setup.
										</p>
									</div>

									<div className="exp-item">
										<h3 className="company">RAIT</h3>
										<div className="duration">
											<b>Duration : </b>
											Aug-16 to Mar-17
										</div>
										<div className="position">
											<b>Position : </b>
											Developer
										</div>
										<p className="description">
											<b>Description : </b>
											Created a web application for the college during BE project. 
											Worked on both frontend and backend technologies to develop we-based code testing and monitoring engine.
											Using this app, the students can enrolled for the lab assignments where they need to submit their solution and 
											then this solution gets validated against the pre-defined test-cases.
											<br />- Created frontend using ReactJs, Axios and MaterializeCss.
											<br />- Developed backend using NodeJs, Mongoose and MongoDB as database.
											<br />- Written automated test-cases using Mocha.
										</p>
									</div>
								</div>

								{/* <!-- Education --> */}
								<div className="profile-edu p-2">
									<h2 className="edu-title regular-title text-main-color">
										Education
										<a href="#"><i className="material-icons edit">edit</i></a>
									</h2>
									<div className="edu-item">
										<h3 className="university">Mumbai University</h3>
										<div className="duration">
											<b>Duration : </b>
											Jul-14 to May-17
										</div>
										<div className="degree">
											<b>Degree : </b>
											Bacholer Of Engineering (BE)
										</div>
										<div className="degree-type">
											<b>Field of Study : </b>
											Computer Engineering (CS)
										</div>
										<div className="degree-marks">
											<b>Marks : </b>
											8.3/10
										</div>
										<p className="description">
											<b>Description : </b>
											Completed BE in Computer Engineering in Ramrao Adik Institute Of Technology (RAIT), Nerul.
										</p>
									</div>
									<div className="edu-item">
										<h3 className="university">MSBTE</h3>
										<div className="duration">
											<b>Duration : </b>
											Jul-11 to May-14
										</div>
										<div className="degree">
											<b>Degree : </b>
											Diploma
										</div>
										<div className="degree-type">
											<b>Field of Study : </b>
											Diploma in Computer Engineering
										</div>
										<div className="degree-marks">
											<b>Marks : </b>
											83 %
										</div>
										<p className="description">
											<b>Description : </b>
											Completed Diploma in Computer Engineering in Government Polytechnic, Thane.
										</p>
									</div>
								</div>

								{/* <!-- Github repos --> */}
								<div className="profile-github p-2">
									<h2 className="github-title regular-title text-main-color">GitHub Repos</h2>
									<div className="github-repo">
										<a href="https://github.com/Sushil-Takkekar/MERN-Template" style={{ color: 'inherit' }}>
											<div className="github-item my-1">
												<div className="repo-details">
													<h4 className="repo-name">MERN-Template</h4>
													<p className="repo-desc">
														Reusable template for MERN stack app.
													</p>
												</div>
											</div>
										</a>
									</div>

									<div className="github-repo">
										<a href="https://github.com/Sushil-Takkekar/Task-Mgr" style={{ color: 'inherit' }}>
											<div className="github-item my-1">
												<div className="repo-details">
													<h4 className="repo-name">Task-Mgr</h4>
													<p className="repo-desc">
														A FullStack app developed in ReactJs, NodeJs and MongoDB.
													</p>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</section>
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
		user: state.Auth.login.user
	}
}

export default connect(mapStateToProps, {
	activate_NavbarLink
})(Profile)