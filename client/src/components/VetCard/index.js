import React from "react";
import './style.css'


function VetCard(props) {

  return (
    <div class="col">
      <div className="card mb-3 " id="VetCard">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.image} className="img-fluid rounded-start vetImage" alt={props.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body " id="">
              <div className='card-title'>{props.name}</div>
                <p class="card-text">{props.address}</p>
                <p class="card-text"><small class="text-muted"><a href={props.url} target="-blank">Website</a></small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VetCard;