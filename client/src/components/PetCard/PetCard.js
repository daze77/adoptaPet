import React from "react";

import PickMeBtn from './PickMeBtn'

import './PetCard.css'


function PetCard(props) {

    
    // function setName(){
    //     const [name, setName] = useState()
    
   
    
    
    //     }





  return (
    <>
                 
        <div key={props.id} class="col" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
            <div class="card h-100" id="petcardformat">
                <img src={props.image} class="card-img-top" alt={props.name}/>
                <div class="card-body">
                    <h5 class="card-title"  data-value={props.name} >{props.name} </h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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