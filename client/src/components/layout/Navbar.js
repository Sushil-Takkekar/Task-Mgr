import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = ({ Active_NavLink, isLoggedIn, user_data, Loader }) => {
    const loader_visibility = Loader ? 'visible':'hidden'

    return (
        <>
            <nav className="navbar bg-dark">
                <h1 className="logo">
                    <Link to="/">
                        <img src="https://img.icons8.com/plasticine/100/000000/checkmark.png" alt=""/>
                        <span>Task Mgr</span>
                    </Link>
                </h1>
                {
                    isLoggedIn && user_data ? 
                            <ul>
                                <li><Link to="/dashboard" className={(Active_NavLink === 'dashboard') ? 'active-link' : ''}>Dashboard</Link></li>
                                <li>
                                    <span className="hide-sm">|</span>  {/* <!-- This is verticle separator--> */}
                                    <Link to="/profile" className={(Active_NavLink === 'profile') ? 'active-link' : ''}>
                                        <i className="material-icons">account_circle</i>
                                        <span className="hide-sm">Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/logout">
                                        <i className="material-icons">exit_to_app</i>
                                        <span className="hide-sm">Logout</span>
                                    </Link>
                                </li>
                            </ul>
                            :
                            <ul>
                                {/* <li><Link to="/dashboard" className={(Active_NavLink === 'dashboard') ? 'active-link' : ''}>Dashboard</Link></li> */}
                                <li><Link to="/register" className={(Active_NavLink === 'register') ? 'active-link' : ''}>Register</Link></li>
                                <li><Link to="/login" className={(Active_NavLink === 'login') ? 'active-link' : ''}>Login</Link></li>
                            </ul>

                }
            </nav>

            {/* add loader */}
            <div className="loader" style={{visibility: loader_visibility}}></div>
        </>
    )
}

/** Map the store state to component props **/
const mapStateToProps = (state) => {
    return {
        Active_NavLink : (state.Active_Link.Active_NavLink).toLowerCase(),
        isLoggedIn: state.Auth.login.isLoggedIn,
        user_data: state.Auth.login.user,
        Loader: state.Loader
    }
}

export default connect(mapStateToProps,null)(Navbar)