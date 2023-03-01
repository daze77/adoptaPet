import React, { useEffect, useRef } from "react"
import { Redirect, Link } from "react-router-dom"
import { useStoreContext } from "../util/GlobalStore"
import fetchJSON from "../util/API"

function Login(){
    const [{ authOk }, dispatch ]= useStoreContext()

    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputRememberMe = useRef()
    const refForm = useRef()

    async function userLogin( e ){
        e.preventDefault()
        // console.log( `[userLogin]`, inputEmail.current.value )
        
        // leverage browser built in + bootstrap features for form validation
        if( !refForm.current.checkValidity() ){            
            refForm.current.classList.add('was-validated')
            return
        }

        const saveData = {
            email: inputEmail.current.value,
            password: inputPassword.current.value,
            rememberMe: inputRememberMe.current.checked
        }

        // console.log('this is saveData', saveData)

        if( saveData.email.indexOf('@')<3 || saveData.password.length<8 ) {
            inputEmail.current.focus()
            dispatch({ type: 'ALERT_MESSAGE', message: 'Something is wrong with your login.' })
            return
        }
    
        const { status, session, userData, message }= await fetchJSON( '/api/users/login', 'post', saveData )            
        if( !status ){
            // clear any session
            localStorage.session = ''
            dispatch({ type: 'ALERT_MESSAGE', message })
            return
        }

        // remember email if user wanted
        if( inputRememberMe && inputRememberMe.current.checked ){
            localStorage.email = inputEmail.current.value
        } else {
            localStorage.email = ''
        }
         
        // login ok, saving session & saving userData
        localStorage.session = session
        dispatch({ type: 'USER_LOGIN', data: userData })
    }

    // at startup we initialize a few things
    useEffect( function(){
        inputEmail.current.value = localStorage.email || ''
        inputRememberMe.current.checked = true
    }, [] )

    return (
        <>
            { authOk ? <Redirect to='/' /> : '' }
            <form ref={refForm}>
            <div class="card mt-5">
                <div class="card-header">
                    <h1>Login</h1>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input ref={inputEmail} id="email" type="email" class="form-control" required />
                        <div class="invalid-feedback">
                            Please enter your login email
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="userPassword">Password</label>
                        <input ref={inputPassword} id="userPassword" type="password" class="form-control"  pattern=".{8,}" required />
                        <div class="invalid-feedback">
                            Please enter your password (8 chars min)
                        </div>
                    </div>
                </div>                    
                <div class="card-footer">
                    <button onClick={userLogin} type="button" class="btn btn-primary mx-1">Login</button>
                    &nbsp; 
                    <input ref={inputRememberMe} id='rememberMe' type="checkbox" />                        
                    <label class='text-secondary' for='rememberMe'>Remember Me</label> &nbsp;
                    <Link to="/register" class="mx-3">Need to Register?</Link>
                </div>
            </div>
            </form>
        </>
    )
}

export default Login