import React from 'react'
import {NavLink} from 'react-router-dom'




function NavBar2(){
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <NavLink to="/" class="navbar-brand" className="nav-link" activeClassName="active">Adopt-A-Pet</NavLink>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item"> <NavLink to="/MessageBoards" className="nav-link" activeClassName="active">
                                Message Boards</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/Resources" className="nav-link" activeClassName="active">
                                Resources</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/Reviews" className="nav-link" activeClassName="active">
                                Reviews</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/Register" className="nav-link" activeClassName="active">
                                Register</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/Login" className="nav-link" activeClassName="active">
                                Login</NavLink>
                            </li>
                            <li class="nav-item"> <NavLink to="/Logout" className="nav-link" activeClassName="active">
                                Logout</NavLink>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
    
    





}




export default NavBar2