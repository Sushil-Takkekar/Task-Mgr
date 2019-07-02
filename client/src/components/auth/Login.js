import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import { activate_NavbarLink } from '../../actions/activeTab'
import { NavLink_LOGIN } from '../../actions/types'

const Login = ({Alert, isLoggedIn, user_data, activate_NavbarLink, login}) => {

    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
        activate_NavbarLink(NavLink_LOGIN)
    },[])

    const displayBlock = {
        display:'block'
    }

    /** Component States **/
    const loginFormEle = {
        email : '',
        pass : ''
    }
    const [formData, setFormData] = useState(loginFormEle)
    const { email, pass } = formData

    /** Functions **/
    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value })
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        const user_obj = {
            email,
            password: pass
        }
        /** call action **/
        login(user_obj)
    }

    return (
        <>
            <section className="container">
                <div className="form-container">
                    <h1 className="large text-primary text-center">
                        Log in
                    </h1>
                    <p className="lead text-center">Log into your account to manage the tasks.</p>
                    <form onSubmit={onFormSubmit} className="form">            
                        {
                            Alert ? <div className="alert alert-danger" name="invalidCreds" style={displayBlock}>
                                        Invalid credentials ! Please try again.
                                    </div> 
                                    : ''
                        }
                        
                        <div className="form-item">
                            <i className="material-icons">email</i>
                            <input type="email" name="email" placeholder="Email Address" value={email} onChange={onInputChange} required />
                        </div>
                        <div className="form-item">
                            <i className="material-icons">lock</i>
                            <input type="password" name="pass" placeholder="Password" value={pass} onChange={onInputChange} required/>
                        </div>
                        
                        <input type="submit" name="submitBtn" className="btn btn-primary" value="Login" />
                        <p className="my-1">
                            Don't have an account ?
                            <Link to="/register" className="other-form"> Sign Up</Link>
                        </p>
                    </form>

                    { (isLoggedIn && user_data) && <Redirect to="/dashboard" /> }
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        Alert: state.Alert,
        isLoggedIn: state.Auth.login.isLoggedIn,
        user_data: state.Auth.login.user
    }
}

export default connect(mapStateToProps, 
    {
        activate_NavbarLink,
        login
    })(Login)