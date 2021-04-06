import React, { useRef, useEffect } from "react"
import { Redirect, Link } from 'react-router-dom'
import { useStoreContext } from "../util/GlobalStore"
import fetchJSON from "../util/API"

function Register(){
    const [{ authOk }, dispatch ] = useStoreContext()

    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputName = useRef()
    const refForm = useRef()

    async function registerUser( e ){
        e.preventDefault()
        
        // leverage browser built in + bootstrap features for form validation
        if( !refForm.current.checkValidity() ){            
            refForm.current.classList.add('was-validated')
            return
        }

        const regData = {
            name: inputName.current.value.trim(),
            email: inputEmail.current.value.trim(),
            password: inputPassword.current.value.trim()
        }

        // just to make sure the browser validation worked, we double-check
        if( regData.name.length<2 || regData.email.indexOf('@')<2 || regData.password.length<5 ){
            inputName.current.focus()
            dispatch({ type: 'ALERT_MESSAGE', message: "Something is wrong with your form" })
            return
        }

        const { status, session, userData, message }= await fetchJSON( '/api/users/register', 'post', regData )
        if( !status ){
            // clear any session
            localStorage.session = ''
            dispatch({ type: 'ALERT_MESSAGE', message })
            return
        }

        // notify user message; set user session/data
        localStorage.session = session
        dispatch({ type: 'USER_LOGIN', data: userData, message })
    }

    useEffect( function(){
        // if remembered email, insert
        inputEmail.current.value = localStorage.email || ''
    }, [] )

    return (
        <>
            { authOk ? <Redirect to='/' /> : '' }
            <form ref={refForm}>
            <div class="card mt-5">
                <div class="card-header">
                    <h1>User Registration</h1>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="name">First Name</label>
                        <input ref={inputName} type="text" id="name" class="form-control" required />
                        <div class="invalid-feedback">
                            Please enter a name
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email">Email Address</label>
                        <input ref={inputEmail} id="email" type="email" class="form-control" required />
                        <div class="invalid-feedback">
                            Please enter an email
                        </div>

                    </div>
                    <div class="mb-3">
                        <label for="userPassword">Password</label>
                        <input ref={inputPassword} id="userPassword" type="password" class="form-control"  pattern=".{8,}" required />
                        <div class="invalid-feedback">
                            Please enter a password (8 chars min)
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button onClick={registerUser} class="btn btn-primary mx-1" >Register</button>
                    <Link to="/login" class="font-weight-light text-muted mx-3">Already Registered?</Link>
                </div>
            </div>
            </form>
        </>
    )
}

export default Register