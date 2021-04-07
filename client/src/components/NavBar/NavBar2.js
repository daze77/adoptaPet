import React, { useState, useEffect } from 'react'
import { Redirect, NavLink, useLocation  } from "react-router-dom"
import { useStoreContext } from "../../util/GlobalStore"
import fetchJSON from '../../util/API'
import Paws from '../../assets/images/paws.png'
import "./style.css"

let timeout

function NavBar2(){

    const [{ authOk, name }, dispatch ]= useStoreContext()
    const [ showMenu, setShowMenu ] = useState( true )
    // adding const for menu toggle
   
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <NavLink to="/" class="navbar-brand" className="nav-link" activeClassName="active"><img src={Paws} alt="" width="64" height="64" />   <strong>   Adopt-A-Pet</strong></NavLink>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"> <NavLink to="/Pets" className="nav-link" activeClassName="active" >
                                Pets</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/MessageBoards" className="nav-link" activeClassName="active">
                                Message Board</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/FindAShelter" className="nav-link" activeClassName="active">
                                Find a Shelter</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/FindAVet" className="nav-link" activeClassName="active">
                                Find a Vet</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/Reviews" className="nav-link" activeClassName="active" >
                                Reviews</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/advice" className="nav-link" activeClassName="active">Advice</NavLink>
                            </li>
                            {/* {showMenuItem && <li class="nav-item"> <NavLink to="/Login" className="nav-link" activeClassName="active">Login</NavLink></li>} */}
                            {!name && <div className={`collapse navbar-collapse ` + (showMenu ? 'show' : '')} id="navbar">
                             <li class="nav-item"> <NavLink to="/Login" className="nav-link" activeClassName="active">Login</NavLink></li>
                            </div>}

                        </ul>
                        {name && 
                            <div class="d-flex">
                                <div class="mx-3">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarScrollingDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Welcome back <u>{name}</u>
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                                <li class="nav-item"> <NavLink to="/Logout" className="nav-link" activeClassName="active">Logout</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                        <br/>
                    </div>
                </div>
            </nav>


        </>

    )
    
  
}




export default NavBar2