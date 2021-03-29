import React from "react";


function CardBtn(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={`card-btn ${props["data-value"]}`} 
      data-value={props["data-value"]} 
    />
  );
}

export default CardBtn;