import React, { useState, useEffect } from 'react'
import { Redirect, NavLink, useLocation  } from "react-router-dom"
import { useStoreContext } from "../../util/GlobalStore"
import fetchJSON from '../../util/API'

let timeout

function NavBar() {
  const [{ authOk, name }, dispatch ]= useStoreContext()
  const [ showMenu, setShowMenu ] = useState( true )
  const location = useLocation()

  async function loadUserSession(){
    const { status, userData, message }= await fetchJSON( `/api/users/session` )
    console.log( `[NavBar] attempted to reload session, result(${status}) message(${message})` )
    if( !status ){
      // clear any session
      dispatch({ type: 'USER_LOGOUT', message })
      return
    }
    dispatch({ type: 'USER_LOGIN', data: userData })
  }

  useEffect( function(){
    if( showMenu ){
      if( timeout ) clearTimeout( timeout )
      timeout = setTimeout( function(){ setShowMenu( false ); }, 2000 )
    }
  }, [ showMenu ])

  // location changed so hide menu
  useEffect( function(){
    if( timeout ) clearTimeout( timeout )
    setShowMenu( false )
  }, [ location ])
  
  useEffect( function(){
    // on load let's get try to get the  session (if one exists)
    if( localStorage.session && !authOk ){
      loadUserSession()
    }
  }, [] )

  return ( 
    <>
      { localStorage.session && 
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" className="navbar-brand">
              <img src="" alt="" width="64" height="64" />
          </NavLink>
          <button onClick={() => setShowMenu(!showMenu)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse `+(showMenu ? 'show' : '')} id="navbar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/tasks" className="nav-link" activeClassName="active">Tasks</NavLink>
              </li>          
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">Logout</NavLink>
              </li> 
            </ul>
            { name && <div class="d-flex"><div class="mx-3">Welcome back <u>{name}</u></div></div> }
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar