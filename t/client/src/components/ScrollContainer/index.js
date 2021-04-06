import React from 'react'
import "./style.css"

function ScrollContainer(props) {
    return <div className="container" id="scroll" style={props.style}>{props.children}</div>;
  }
  
  export default ScrollContainer;