import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from './axios'

const Login = () => {
    const [fireRedirect, setFireRedirect]= useState(false)
    const loginFormEle = {
        email : '',
        pass : ''
    }
    const [formData, setFormData] = useState(loginFormEle)
    const { email, pass } = formData

    const authenticate_user = async () => {
        const submitBtn = document.getElementsByName("submitBtn")[0]
        const displayAlert = document.getElementsByName("invalidCreds")[0]
        const user_obj = {
            email,
            password: pass
        }
        submitBtn.value = "Logging In ..."

        // make api call to authenticate user.
        axios.login_user(user_obj).then((res) => {
            displayAlert.style.display = "none"
            submitBtn.value = "Login Successful.."
            setFireRedirect(true)
        }).catch((err) => {
            displayAlert.style.display = "block"
            submitBtn.value = "Login"
        })
    }
    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value })
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        authenticate_user()
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
                        <div className="alert alert-danger" name="invalidCreds">
                            Invalid credentials ! Please try again.
                        </div>
                        
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

                    { fireRedirect && <Redirect to="/dashboard" /> }
                </div>
            </section>
        </>
    )
}

export default Login;