import React, {useRef, useState} from "react";

import PickMeBtn from './PickMeBtn'
import PetRequisition from './PetRequisition'
import PetProfile from './PetProfile'
import './PetCard.css'

import Pets from '../../pets.json'


function PetCard(props) {
    //     const buttonValue = useRef()

    // console.log(`this is Pets pulled from the JSON`, Pets)
    // const [pets, setPets] = [Pets]
    // console.log(`this is pets from new const`, ...pets)
    // const [id, setId] = useState()
    // const [name, setName] = useState()
    // const [image, setImage] = useState()
    // console.log(`set name name`, name)










    // const [petID, setPetID] = useState()


    
    // const petPicked = [{id: id, name: name}]
    // console.log(`huh`, petPicked)
    
    

    // const ChosenPet = (e) => {
    //     console.log("ChosenPet:", e.target.value)
    //     setId(e.target.value)
    //     const name2 = e.target.getAttribute("data-value")


    //     console.log(`this is name2`, name2)

    //     // console.log(`the button was pushed`)

    //     // console.log(`this is the button Vlaue`, e)
    //     // setPetID(e.target.value)
    //     // console.log(`pet id:`, petID)
    //     // setId(id.current.value)
    //     // console.log(`wow I got it`, id)
    //     // setName(name)
    //     // console.log(`set name name`, name)
    //     // console.log(`set id: `, id)


           

    // }


    


  return (
    
    <>
       

                    
        <div key={props.id} class="col" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
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