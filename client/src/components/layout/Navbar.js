import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    /** Active Navbar Tab **/
    const Navbar_activeTab = 'Dashboard'  // replace value with 'useSelector(state => state.Navbar_activeTab);'

    useEffect(() => {
       console.log('Navbar re-renderd !'); 
    })

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
                    <li><Link to="/dashboard" className={(Navbar_activeTab === 'Dashboard') ? 'active-link' : ''}>Dashboard</Link></li>
                    <li><Link to="/register" className={(Navbar_activeTab === 'Register') ? 'active-link' : ''}>Register</Link></li>
                    <li><Link to="/login" className={(Navbar_activeTab === 'Login') ? 'active-link' : ''}>Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;