import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { StoreProvider } from "./util/GlobalStore"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AlertBar from "./components/AlertBar"
// pages
import Tasks from "./pages/Tasks"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div class="container">
            <AlertBar />
            <NavBar />
            <Route exact path={["/","/tasks"]} component={Tasks} />
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
