import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { activate_NONE } from '../../actions/activeTab'


const Landing = (props) => {

    useEffect(() => {
        props.activate_NONE()
    })
    return (
        <>
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">Task Manager App</h1>
                        <p className="lead">Manage your daily tasks efficiently !</p>
                        <div className="buttons">
                            <Link to="/register" className="btn">Register</Link>
                            <Link to="/login" className="btn">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default connect(null, {activate_NONE})(Landing)