import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { StoreProvider } from "./util/GlobalStore"
// import "bootstrap/dist/css/bootstrap.min.css"

// import NavBar from './components/NavBar/NavBar'

import NavBar2 from './components/NavBar/NavBar2'
import Footer from "./components/Footer/Footer"
// import AlertBar from "./components/AlertBar"
// pages
import Tasks from "./pages/Tasks"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import HomePage from "./pages/HomePage"
import Reviews from './pages/Reviews'
import FindAVet from './pages/FindAVet'
import Resources from './pages/Resources'
import MessageBoard from './pages/MessageBoard'
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Pets from "./pages/Pets"
import Background3 from "./assets/images/Background3.jpeg"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        {/* <AlertBar /> */}
        {/* <NavBar /> */}
        <NavBar2 />
        {/* <NavBar /> */}
        <div id="main" style={{ backgroundImage: `url(${Background3})`, width: 'full', backgroundRepeat: "no-repeat", backgroundSize: 'cover', opacity: 2}}>
          <div class="container" >

            <Route exact path={["/", "/index"]} component={HomePage} />
            <Route exact path={["/MessageBoards"]} component={MessageBoard} />
            <Route exact path={["/Reviews"]} component={Reviews} />
            <Route exact path={["/Resources"]} component={Resources} />
            <Route exact path={["/FindAVet"]} component={FindAVet} />
            <Route exact path={"/tasks"} component={Tasks} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/Pets" component={Pets} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
