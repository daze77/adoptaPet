import React from "react"


function SubFooter(){

    function getFullYear(){
        let date = new Date();
        let year = date.getFullYear();
        console.log((year));
        return year

    }
    return (

        <>  
            <div id="subfooter" class="d-flex justify-content-center ">
                <span class="align-self-center">&copy; Copyright {getFullYear()} </span> 
                <strong id="subfooterCo">  Lakesideleisure Inc. </strong>
            </div>
        </>
    )
}

export default SubFooter