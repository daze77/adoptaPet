import React from "react";

import PickMeBtn from './PickMeBtn'
import PetRequisition from './PetRequisition'
import PetProfile from './PetProfile'
import './PetCard.css'

import Pets from '../../pets.json'


function PetCard() {
    
    console.log(`this is Pets pulled from the JSON`, Pets)

 

  return (
    <>
        <div>
            <div  class="row row-cols-1 row-cols-md-3 g-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                {Pets.map(petsinfo => (
                    <div key={petsinfo.id} class="col">
                        <div class="card h-100" id="petcardformat">
                            <img src={petsinfo.image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{petsinfo.name}</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer">
                                    <PickMeBtn />
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <PetRequisition />  

        <PetProfile /> 

    </>
  );

}

export default PetCard;