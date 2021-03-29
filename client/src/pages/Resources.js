import React, { Component } from "react";
import Card from "../components/Card";

function Resources() {
   
    return (
        
      <div>
        <h1 className="text-center">Adopt A Pet</h1>
        <h3 className="text-center">
          Click on any pet you would like to adopt
        </h3>
        <Card />
        <h1 className="text-center">
          Selected {} pets so far!
        </h1>
      </div>
    );
  }



export default Resources