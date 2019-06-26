import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = ({ Navbar_activeTab }) => {
    return (
        <>
            <nav className="navbar bg-dark">
                <h1 className="logo">
                    <Link to="/">
                        <img src="https://img.icons8.com/plasticine/100/000000/checkmark.png" alt=""/>
                        <span>Task Mgr</span>
                    </Link>
                </h1>
                <ul>
                    <li><Link to="/dashboard" className={(Navbar_activeTab === 'dashboard') ? 'active-link' : ''}>Dashboard</Link></li>
                    <li><Link to="/register" className={(Navbar_activeTab === 'register') ? 'active-link' : ''}>Register</Link></li>
                    <li><Link to="/login" className={(Navbar_activeTab === 'login') ? 'active-link' : ''}>Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

/** Map the store state to component props **/
const mapStateToProps = (state) => {
    return {
        Navbar_activeTab : (state.Navbar_activeTab).toLowerCase()
    }
}

export default connect(mapStateToProps,null)(Navbar)