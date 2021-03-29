import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { StoreProvider } from "./util/GlobalStore"

import NavBar from "./components/NavBar"
import NavBar2 from './components/NavBar2'
import Footer from "./components/Footer"
import AlertBar from "./components/AlertBar"
// pages
import Tasks from "./pages/Tasks"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import HomePage from "./pages/HomePage"
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div class="container">
            {/* <AlertBar /> */}
            <NavBar />
            <NavBar2 />
            <Route exact path ={["/", "/index"]} component={HomePage}/>
            <Route exact path={"/tasks"} component={Tasks} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Footer />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;