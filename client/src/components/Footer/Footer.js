import React from "react"
import SubFooter from './SubFooter'
import  './Footer.css'

function Footer(){


    
    return (

        <>  

            <hr />
            <div id="footer-padding"></div>

            <div class="footer-section">
                <div class="container">
                    <div class="flex-row">
                        <div class="col col-lg-48 col-footer-discription">
                            The worl's most comprehensive site for finding pets new forever homes
                        </div>
                        <div class="col col-lg-72 col-footer-bottom">
                            <div class="flex-row d-flex justify-content-start">
                                <div clas="col col-lg-12">
                                    <div class="col">
                                        <span class='footerContact'> Contact</span>
                                        <span> 123 Lost Puppy Lane</span>
                                        <span> Somewhere in GTA, ON</span>

                                        <span> Canada</span>
                                        <span> +1.555.555.5555</span>

                                    </div>
                                    <div class="col"></div>



                                </div>
                            </div>
                            <div class="flex-row d-flex justify-content-end"></div>

                        </div>
                    </div>

                </div>
            </div>

            <SubFooter />
        </>
    )
}

export default Footer