import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { activate_NavbarLink } from '../../actions/activeTab'
import { NavLink_NONE } from '../../actions/types'

const Landing = ({activate_NavbarLink, isLoggedIn, user_data}) => {

    useEffect(() => {
        activate_NavbarLink(NavLink_NONE)
    })
    return (
        <>
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">Task Manager App</h1>
                        <p className="lead">Manage your daily tasks efficiently !</p>
                        <div className="buttons">
                        { (isLoggedIn && user_data) ?
                            <Link to="/dashboard" className="btn go-to-dash">Dashboard</Link>
                            :
                            <>
                                <Link to="/register" className="btn">Register</Link>
                                <Link to="/login" className="btn">Login</Link>
                            </>
                        }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.Auth.login.isLoggedIn,
        user_data: state.Auth.login.user
    }
}

export default connect(mapStateToProps, {activate_NavbarLink})(Landing)