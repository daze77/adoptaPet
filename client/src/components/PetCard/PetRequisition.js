import React, {useRef, useEffect} from "react";
import fetchJSON from '../../util/API'


function PetRequisition() {


    useEffect( function(){
        // if remembered email, insert
        inputName.current.value = localStorage.name || ""
        inputLastName.current.value = localStorage.lastname || ""
        inputEmail.current.value = localStorage.email || ""
        inputAddress1.current.value = localStorage.address1 || ""
        inputAddress2.current.value = localStorage.address2 || ""
        inputCity.current.value = localStorage.city || ""
        inputPostal.current.value = localStorage.postal || ""
        inputProvince.current.value = localStorage.province || ""
    }, [] )
    
    const inputName = useRef()
    const inputLastName = useRef()
    const inputEmail = useRef()
    const inputAddress1 = useRef()
    const inputAddress2 = useRef()
    const inputCity = useRef()
    const inputPostal = useRef()
    const inputProvince = useRef()
    const reqForm = useRef()

    async function submitRequisition(e){
        console.log(`submit req button clicked`)
        e.preventDefault()

        if( !reqForm.current.checkValidity() ){            
            reqForm.current.classList.add('was-validated')
            return
        }

        const reqData = {
            name: inputName.current.value.trim(),
            lastname: inputLastName.current.value.trim(),
            email: inputEmail.current.value.trim(),
            address1: inputAddress1.current.value.trim(),
            address2: inputAddress2.current.value.trim(),
            city: inputCity.current.value.trim(),
            postal: inputPostal.current.value.trim(),
            province: inputProvince.current.value.trim()
        }
        console.log(`this is data from the requisition form`, reqData)

        // just to make sure the browser validation worked, we double-check
        if( reqData.name.length<2 || 
            reqData.lastname.length<2 || 
            reqData.email.indexOf('@')<2 ||
            reqData.address1.length<5 || 
            reqData.city.length<5 || 
            reqData.postal.length<6 ||
            reqData.province.length<2 
            ){
            inputName.current.focus()
            return 
        }

        const { status, session}= await fetchJSON( '/api/users/requisition', 'post', reqData )
        if( !status ){
            // clear any session
            localStorage.session = ''

            return
        }


        // notify user message; set user session/data
        localStorage.session = session

    }
   

  return (
    <>
        {/* This is the Modal for the Requisition Form*/}
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdrop">Pet Adoption Requisition Form</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <form ref={reqForm} class="row g-3">
                            <div class="form-floating col-md-6 ">
                                <input ref={inputName} type="firstname" class="form-control" id="floatingInput" placeholder="First Name"/>
                                <label for="floatingInput" >First Name</label>
                            </div>
                            <div class="form-floating col-md-6">
                                <input ref={inputLastName}  type="lastname" class="form-control" id="floatingInput" placeholder="Last Name"/>
                                <label for="floatingInput" >Last Name</label>
                            </div>

                            <div class="form-floating col-md-6">
                                <input ref={inputEmail}  type="email" class="form-control" id="inputEmail4"/>
                                <label for="inputEmail4" class="form-label">Email</label>
                            </div>
                            <div class="form-floating col-12">
                                <input ref={inputAddress1}  type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                <label for="inputAddress" class="form-label">Address</label>
                            </div>
                            <div class="form-floating col-12">
                                <input ref={inputAddress2}  type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                <label for="inputAddress2" class="form-label">Address 2</label>
                            </div>
                            <div class="form-floating col-md-5">
                                <input ref={inputCity}  type="text" class="form-control" id="inputCity"placeholder="City"/>
                                <label for="inputCity" class="form-label">City</label>
                            </div>
                            <div class="form-floating col-md-4">
                                <select ref={inputProvince}  id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>AB</option>
                                <option>BC</option>
                                <option>MB</option>
                                <option>NB</option>
                                <option>NL</option>
                                <option>NT</option>
                                <option>NS</option>
                                <option>NU</option>
                                <option>ON</option>
                                <option>PE</option>
                                <option>QC</option>
                                <option>SK</option>
                                <option>YT</option>
                                </select>
                                <label for="inputState" class="form-label">Province</label>
                            </div>
                            <div class="form-floating col-md-3">
                                <input ref={inputPostal} type="text" class="form-control" id="inputZip" placeholder="Postal Code"/>
                                <label for="inputZip" class="form-label">Postal</label>

                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                    {/* <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label> */}
                                </div>
                            </div>
                        </form>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button  onClick={submitRequisition}type="button" class="btn btn-primary">Submit Requisition</button>
                    </div>
                </div>
            </div>
        </div>


    </>

  )
 }

export default PetRequisition;