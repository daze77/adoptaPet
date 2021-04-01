import React from "react";

import PickMeBtn from './PickMeBtn'
import PetRequisition from './PetRequisition'

import Pets from '../../pets.json'


function PetCard() {
    
    console.log(`this is Pets pulled from the JSON`, Pets)

 

  return (
    <>
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                {Pets.map(petsinfo => (
                    <div key={petsinfo.id} class="col">
                        <div class="card h-100">
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





        {/* This is the modal for the card click */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div class="modal-body">
                            ...
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
                

    </>
  );

}

export default PetCard;