import React from 'react'
import "./style.css"

function ScrollContainer(props) {
    return <div className="container" id="scroll" >{props.children}</div>;
  }
  
  export default ScrollContainer;