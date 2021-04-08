import React from "react";


function PetProfile(props) {
    console.log(`props on petProfile`, props.id)
return (
    <>
    {/* This is the modal for the card click */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">{props.name}</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card mb-3" >
                        <img src={props.image}class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{}</h5>
                            <p class="card-text">{props.description}</p>
                            <div class="row row-cols-2">
                                <div class="col">
                                <small class="text-muted"><strong>Id:  </strong>{props.id}</small><br/>
                                <small class="text-muted"><strong>Type:  </strong>{props.type}</small><br/>
                                <small class="text-muted"><strong>Breed:  </strong>{props.breeds}</small><br/>
                                <small class="text-muted"><strong>Gender:  </strong>{props.gender}</small><br/>
                                </div>
                                <div class="col">

                                <small class="text-muted"><strong>Declawed:  </strong>{props.declawed}</small><br/>
                                <small class="text-muted"><strong>House Trained:  </strong>{props.housetrained}</small><br/>
                                <small class="text-muted"><strong>Spayed/Neutered:  </strong>{props.spayed}</small><br/>
                                <small class="text-muted"><strong>Shots Current:  </strong>{props.shots}</small><br/>
                                </div>
                            </div>
                            
                            <hr/>
                            <p class="card-text"><small class="text-muted">Last updated:   {props.date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </>

)
 }

export default PetProfile;