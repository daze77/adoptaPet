import React from "react";
import './style.css'


function VetCard(props) {

  return (
    <div class="col">
      <div className="card mb-3" id="VetCard">
        <div className="row">
          <div className="col-md-4">
            <img src={props.image} className="card-img" alt={props.name} />
          </div>
          <div className="col-md-8">
            <div className="content" id="content">
              <ul>
                <li><strong>Name: </strong>{props.name}</li>
                <li><strong>Address: </strong>{props.address}</li>
                <a href={props.url} target="-blank"><strong>website: </strong>{props.name}</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VetCard;