import React, { useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink_PROFILE } from '../../actions/types'
import { activate_NavbarLink } from '../../actions/activeTab'

const Profile = ({ isLoggedIn, user, activate_NavbarLink }) => {
    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
        activate_NavbarLink(NavLink_PROFILE)
    })

    return(
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
                            <h1 className="large">{ user.name }</h1>
                            <p className="lead">Consultant at TIBCO</p>
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
                                <h2 className="title regular-title text-main-color">{ user.name }'s Bio</h2>
                                <p className="lead">
                                    A FullStack developer, 
                                    who can build the web-applications to solve the real-world problems with greater efficiency using suitable technology stack.
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
                                    July-17 to Current
                                </div>
                                <div className="position">
                                    <b>Position : </b>
                                    Consultant
                                </div>
                                <p className="description">
                                    <b>Description : </b>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Sed doloremque nesciunt, repellendus nostrum deleniti recusandae nobis neque modi perspiciatis similique?
                                </p>
                            </div>

                            <div className="exp-item">
                                <h3 className="company">Oracle</h3>
                                <div className="duration">
                                    <b>Duration : </b>
                                    August-16 to July-17
                                </div>
                                <div className="position">
                                    <b>Position : </b>
                                    Associate Developer
                                </div>
                                <p className="description">
                                    <b>Description : </b>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Sed doloremque nesciunt, repellendus nostrum deleniti recusandae nobis neque modi perspiciatis similique?
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
                                    July-17 to Current
                                </div>
                                <div className="degree">
                                    <b>Degree : </b>
                                    Bacholer Of Engineering
                                </div>
                                <div className="degree-type">
                                    <b>Field of Study : </b>
                                    Computer Engineering (CS)
                                </div>
                                <p className="description">
                                    <b>Description : </b>
                                    Completed BE in Computer Engineering in Ramrao Adik Institute Of Technology (RAIT), Nerul.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Github repos --> */}
                        <div className="profile-github p-2">
                            <h2 className="github-title regular-title text-main-color">GitHub Repos</h2>
                            <div className="github-repo">
                                <a href="https://github.com/Sushil-Takkekar/NodeJS_TaskManager_API" style={{color:'inherit'}}>
                                    <div className="github-item my-1">
                                        <div className="repo-details">
                                            <h4 className="repo-name">NodeJS_TaskManager_API</h4>
                                            <p className="repo-desc">
                                                Contains implementation of JWT, Email sending, File uploads, MongoDB Atlas (Cloud)
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="github-repo">
                                <a href="https://github.com/Sushil-Takkekar/Task-Mgr" style={{color:'inherit'}}>
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
    return{
        isLoggedIn: state.Auth.login.isLoggedIn,
        user: state.Auth.login.user
    }
}

export default connect(mapStateToProps, {
    activate_NavbarLink
})(Profile)