import React from "react";



function PetProfile() {
return (
    <>
    {/* This is the modal for the card click */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <div class="card mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskeYNmVMeGZdNiI6ahm2z647C65saNNF4Fw&usqp=CAU" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>








                    <div class="card bg-dark text-white">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskeYNmVMeGZdNiI6ahm2z647C65saNNF4Fw&usqp=CAU" class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                    ...
                </div>
                <div class="modal-footer">
                    {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                </div>
            </div>
        </div>
    </div>



    </>

)
 }

export default PetProfile;