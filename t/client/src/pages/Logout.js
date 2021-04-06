import React, { useEffect } from "react"
import { Redirect } from 'react-router-dom'
import { useStoreContext } from "../util/GlobalStore"
import fetchJSON from "../util/API"

function Logout(){
    const [{ authOk }, dispatch ]= useStoreContext()

    
    async function userLogout(){
        // call the api to logout (and clear session)
        const { message } = await fetchJSON( '/api/users/logout' )
        // logout
        dispatch({ type: 'USER_LOGOUT', message })
    }
    
    useEffect( function(){
        // attempt to request logout (ONCE on page load)
        userLogout()
    }, [] )

    return (
        <>
            { !authOk && <Redirect to='/login' /> }
            <h1>Please wait, logging out...</h1>
        </>
    )
}

export default Logout