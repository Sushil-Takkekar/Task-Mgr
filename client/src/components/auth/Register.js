import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from './axios';

const Register = () => {
    useEffect(() => {
        /** set navbar-active-tab store state on first load **/
    },[])
    
    const [fireRedirect, setFireRedirect]= useState(false)
    const registerFormEle = {
        name : '',
        email : '',
        pass1 : '',
        pass2 : ''
    }
    const [formData, setFormData] = useState(registerFormEle)
    const {name, email, pass1, pass2} = formData

    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    const register_user = () => {
        const submitBtn = document.getElementsByName("submitBtn")[0]
        const displayAlert = document.getElementsByName("invalidEntries")[0]
        const user_obj = {
            name,
            email,
            password : pass1
        }

        submitBtn.value = "Loading.."
        // make api call to create new user
        axios.create_user(user_obj).then((res) => {
            console.log(JSON.stringify(res))
            setFireRedirect(true)  // redirect to next page
        }).catch((err) => {
            console.log(JSON.stringify(err))
            displayAlert.style.display = "block"
            submitBtn.value = "Register"
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        if(pass1 !== pass2) {
            alert('Passwords do not match !')
        }
        register_user()
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
                        <div className="alert alert-danger" name="invalidEntries">
                            Invalid entries !
                        </div>
                        
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

export default Register;