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
                    <h5 class="modal-title" id="exampleModalLabel">{props.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card mb-3" >
                        <img src={props.image}class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{}</h5>
                            <p class="card-text">{props.description}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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