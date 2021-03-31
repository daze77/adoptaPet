import React from "react";
import './style.css'


function Card(props) {
  console.log(props)
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.image} className="card-img-top" alt={props.name} />
        </div>
        <div className="col-md-8">
          <div className="content">
            <ul>
              <li><strong>Name: </strong>{props.name}</li>
              <li><strong>Address: </strong>{props.address}</li>
              <a href={props.url}><strong>website: </strong>{props.name}</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;