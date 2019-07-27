import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink_PROFILE } from '../../actions/types'
import { activate_NavbarLink } from '../../actions/activeTab'

const Profile = ({ user, activate_NavbarLink }) => {
    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
        activate_NavbarLink(NavLink_PROFILE)
    })

    return(
        <>
        <section class="container">
            <div class="edit-profile-btn">
                <Link to="#" class="btn btn-edit">Edit</Link>
                <Link to="#"><i class="material-icons edit">edit</i></Link>
            </div>
            <div class="profile-grid my-1">
                {/* <!-- Top --> */}
                <div class="profile-top bg-main-color">
                    <img class="round-img" src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png" alt="" />
                    <h1 class="large">{ user.name }</h1>
                    <p class="lead">Consultant at TIBCO</p>
                    <p>Navi Mumbai, India</p>
                    <div class="icons social-media">
                        <a href="https://www.facebook.com/"><img alt="facebook" src="https://www.gstatic.com/images/icons/material/system/2x/post_facebook_black_24dp.png" /></a>
                        <a href="https://twitter.com/"><img alt="twitter" src="https://www.gstatic.com/images/icons/material/system/2x/post_twitter_black_24dp.png" /></a>
                        <a href="https://aboutme.google.com/"><img alt="google-plus" src="https://www.gstatic.com/images/icons/material/system/2x/post_gplus_black_24dp.png" /></a>
                    </div>
                </div>
                
                {/* <!-- About --> */}
                <div class="profile-about bg-primary p-2">
                    <div class="bio-section">
                        <h2 class="title regular-title text-main-color">{ user.name }'s Bio</h2>
                        <p class="lead">
                            A FullStack developer, 
                            who can build the web-applications to solve the real-world problems with greater efficiency using suitable technology stack.
                        </p>
                    </div>
                    <div class="horz-line"></div> {/* <!-- Line separator --> */}
                    <div class="skills-section">
                        <div class="title text-main-color"><h2 class="regular-title">Skills</h2></div>
                        <div class="skills">
                            <div class="skill-item"><i class="material-icons">done</i>
                                HTML
                            </div>
                            <div class="skill-item"><i class="material-icons">done</i>
                                CSS
                            </div>
                            <div class="skill-item"><i class="material-icons">done</i>
                                Javascript
                            </div>
                            <div class="skill-item"><i class="material-icons">done</i>
                                ReactJs
                            </div>
                            <div class="skill-item"><i class="material-icons">done</i>
                                NodeJs
                            </div>
                            <div class="skill-item"><i class="material-icons">done</i>
                                ExpressJs
                            </div>
                            <div class="skill-item"><i class="material-icons">done</i>
                                MongoDB
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Experience --> */}
                <div class="profile-exp p-2">
                    <h2 class="exp-title regular-title text-main-color">
                        Experience
                        <a href="#"><i class="material-icons edit">edit</i></a>
                    </h2>
                    <div class="exp-item">
                        <h3 class="company">TIBCO</h3>
                        <div class="duration">
                            <b>Duration : </b>
                            July-17 to Current
                        </div>
                        <div class="position">
                            <b>Position : </b>
                            Consultant
                        </div>
                        <p class="description">
                            <b>Description : </b>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Sed doloremque nesciunt, repellendus nostrum deleniti recusandae nobis neque modi perspiciatis similique?
                        </p>
                    </div>

                    <div class="exp-item">
                        <h3 class="company">Oracle</h3>
                        <div class="duration">
                            <b>Duration : </b>
                            August-16 to July-17
                        </div>
                        <div class="position">
                            <b>Position : </b>
                            Associate Developer
                        </div>
                        <p class="description">
                            <b>Description : </b>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Sed doloremque nesciunt, repellendus nostrum deleniti recusandae nobis neque modi perspiciatis similique?
                        </p>
                    </div>
                </div>

                {/* <!-- Education --> */}
                <div class="profile-edu p-2">
                    <h2 class="edu-title regular-title text-main-color">
                        Education
                        <a href="#"><i class="material-icons edit">edit</i></a>
                    </h2>
                    <div class="edu-item">
                        <h3 class="university">Mumbai University</h3>
                        <div class="duration">
                            <b>Duration : </b>
                            July-17 to Current
                        </div>
                        <div class="degree">
                            <b>Degree : </b>
                            Bacholer Of Engineering
                        </div>
                        <div class="degree-type">
                            <b>Field of Study : </b>
                            Computer Engineering (CS)
                        </div>
                        <p class="description">
                            <b>Description : </b>
                            Completed BE in Computer Engineering in Ramrao Adik Institute Of Technology (RAIT), Nerul.
                        </p>
                    </div>
                </div>

                {/* <!-- Github repos --> */}
                <div class="profile-github p-2">
                    <h2 class="github-title regular-title text-main-color">GitHub Repos</h2>
                    <div className="github-repo">
                        <a href="https://github.com/Sushil-Takkekar/NodeJS_TaskManager_API" style={{color:'inherit'}}>
                            <div class="github-item my-1">
                                <div class="repo-details">
                                    <h4 class="repo-name">NodeJS_TaskManager_API</h4>
                                    <p class="repo-desc">
                                        Contains implementation of JWT, Email sending, File uploads, MongoDB Atlas (Cloud)
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="github-repo">
                        <a href="https://github.com/Sushil-Takkekar/Task-Mgr" style={{color:'inherit'}}>
                            <div class="github-item my-1">
                                <div class="repo-details">
                                    <h4 class="repo-name">Task-Mgr</h4>
                                    <p class="repo-desc">
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
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.Auth.login.user
    }
}

export default connect(mapStateToProps, {
    activate_NavbarLink
})(Profile)