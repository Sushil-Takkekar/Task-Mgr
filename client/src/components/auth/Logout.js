import React,{ useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/auth'

const Logout = ({ logoutUser }) => {
    useEffect(() => {
        logoutUser()
    })
    return (
        <>
            <Redirect to="/" />
        </>
    )
}

export default connect(null, {
    logoutUser
})(Logout)