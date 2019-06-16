import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

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
                    <li><Link to="/profile">Members</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login" className="active-link">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;