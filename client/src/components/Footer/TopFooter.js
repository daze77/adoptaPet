import React from "react"


function TopFooter(){

 
    return (
        <>  
            <div  class="row row-cols-1 row-cols-md-2">
                <div id="footerleft" class="col-md-4">
                    The world's most comprehensive site for finding pets new forever homes
                </div>
                <div id="footerright" class="col-md-8">
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col-md-6">
                            <span class='footerContact'> Contact</span>
                            <span> 123 Lost Puppy Lane</span>
                            <span> Somewhere in GTA, ON</span>
                            <span> Canada</span>
                            <span> +1.555.555.5555</span>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>ABOUT US</li>
                                <li>PRIVACY POLICY</li>
                                <li>CONTACT US</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopFooter