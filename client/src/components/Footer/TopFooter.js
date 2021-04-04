import React from "react"
import { Link } from "react-router-dom"
import Address from '../Address'



function TopFooter() {


    return (
        <>
            <div class="row row-cols-1 row-cols-md-2">
                <div id="footerleftimage" class="col-md-4">
                    <p id="footerlefttext">The world's most comprehensive site for finding pets new forever homes</p>
                </div>
                <div id="footerright" class="col-md-8">
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col-md-6">
                            <span class='footerContact'><h5>CONTACT</h5> </span><br />
                            <Address />
                            <span><a href="tel:+1-555-555-5555"> 555.555.5555</a></span><br />
                            <span><a href="mailto:adoptapet@findmeahome.com"><i class="far fa-envelope"></i></a></span>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li><Link to='/AboutUs'>ABOUT US</Link></li>
                                <li><Link to='/PrivacyPolicy'>PRIVACY POLICY</Link></li>
                                <li><Link to='/ContactUs'>CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopFooter