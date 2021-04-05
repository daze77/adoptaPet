import React, {useRef, useState} from "react";

import PickMeBtn from './PickMeBtn'
import PetRequisition from './PetRequisition'
import PetProfile from './PetProfile'
import './PetCard.css'

import Pets from '../../pets.json'


function PetCard() {
    
    console.log(`this is Pets pulled from the JSON`, Pets)

    const id = useRef()
    const image = useRef()
    const name = useRef()
    const buttonValue = useRef()


    const [petID, setPetID] = useState()


    
    const petPicked = [{id: id.value, image: image, name: name.value}]
    console.log(`huh`, petPicked)
    
    

    const ChosenPet = (e) => {
        console.log(`this is the button Vlaue`, e)
        setPetID(e.target.value)
        console.log(`pet id:`, petID)

    

        let bill = {
         
            id:petID,
            name:name.current.value
        }
        console.log(bill)
        let name2 = name.current.value
        console.log(name2)
        
       




    }


  return (
    <>
        <div>
            <div  class="row row-cols-1 row-cols-md-3 g-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                {Pets.map(petsinfo => (
                    <div onClick={ChosenPet}  key={petsinfo.id} value={petsinfo._id}  ref={buttonValue}  class="col">
                        <div class="card h-100" id="petcardformat">
                            <img src={petsinfo.image} ref={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" ref={name}>{petsinfo.name} </h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer">
                                    <PickMeBtn />
                                </div>
                        </div>
                    </div>
                ))}
            </div >
        </div>

        <PetRequisition />  

        <PetProfile /> 

    </>
  );

}

export default PetCard;