import React from "react";

import PickMeBtn from './PickMeBtn'

import './PetCard.css'


function PetCard(props) {
  return (
    <>           
        <div key={props.id} class="col" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-value={props.index} onClick={props.pictureClick} >
            <div class="card h-100" id="petcardformat">
                <img src={props.image}  class="card-img-top" alt={props.name}/>
                <div class="card-body">
                    <h5 class="card-title" >{props.name} </h5>
                    <p class="card-text">{props.description}</p>
                </div>
                <div class="card-footer">
                    <PickMeBtn />
                </div>
            </div>
        </div>
     
    </>
  );
}

export default PetCard;