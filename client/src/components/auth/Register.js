import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../actions/auth'
import { activate_NavbarLink } from '../../actions/activeTab'
import { NavLink_REGISTER } from '../../actions/types'
import axios from './axios';

const Register = ({ activate_NavbarLink, register, Alert }) => {

    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
        activate_NavbarLink(NavLink_REGISTER)
    },[])
    
    const displayBlock = {
        display:'block'
    }

    /** Component States **/
    const [fireRedirect, setFireRedirect]= useState(false)
    const registerFormEle = {
        name : '',
        email : '',
        pass1 : '',
        pass2 : ''
    }
    const [formData, setFormData] = useState(registerFormEle)
    const {name, email, pass1, pass2} = formData

    /** Functions **/
    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        /** call action **/
        register(formData)
    }
    return (
        <>
            <section className="container">
                <div className="form-container">
                    <h1 className="large text-primary text-center">
                        Sign Up
                    </h1>
                    <p className="lead text-center">Create new account</p>
                    <form onSubmit={onFormSubmit} className="form">
                        {Alert ?
                            <div className="alert alert-danger" name="invalidEntries" style={displayBlock}>
                                Invalid entries !
                            </div> : ''
                        }
                        
                        <div className="form-item">
                            <i className="material-icons">account_circle</i>
                            <input type="text" name="name" placeholder="Full Name" value={name} onChange={onInputChange} required/>
                        </div>
                        <div className="form-item">
                            <i className="material-icons">email</i>
                            <input type="email" name="email" placeholder="Email Address" value={email} onChange={onInputChange} />
                        </div>
                        <div className="form-item">
                            <i className="material-icons">lock_open</i>
                            <input type="password" name="pass1" placeholder="Password" minLength="7" value={pass1} onChange={onInputChange} />
                        </div>
                        <div className="form-item">
                            <i className="material-icons">lock</i>
                            <input type="password" name="pass2" placeholder="Confirm Password" minLength="7" value={pass2} onChange={onInputChange} />
                        </div>
                        <input type="submit" name="submitBtn" className="btn btn-primary" value="Register" />
                        <p className="my-1">
                            Already have an account ?
                            <Link to="/login" className="other-form"> Sign In</Link>
                        </p>
                    </form>
                    
                    { fireRedirect && <Redirect to="/login" /> }
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        Alert : state.Alert
    }
}

export default connect(mapStateToProps, { activate_NavbarLink, register })(Register)