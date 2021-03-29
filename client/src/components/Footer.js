import React from "react"






function Footer(){

    function getFullYear(){
        let date = new Date();
        let year = date.getFullYear();
        console.log((year));
        return year

    }
    return (

        <>  
            <hr />
            <div id="footer-padding"></div>
            <div id="footer">&copy; {getFullYear()} Lakesideleisure Inc.</div>
        </>
    )
}

export default Footer