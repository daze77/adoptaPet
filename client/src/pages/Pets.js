import React from 'react'
import PetCard from '../components/PetCard/PetCard'
import Pets from '../pets.json'

import PetRequisition from '../components/PetCard/PetRequisition'
import PetProfile from '../components/PetCard/PetProfile'




function HomePage(){

    return (
        <>
        <h1> Pets</h1>

        <div  class="row row-cols-1 row-cols-md-3 g-4"  >
            {Pets.map(petsinfo =>(
            
            <PetCard
                id={petsinfo.id}
                key={petsinfo.id}
                name={petsinfo.name}
                image={petsinfo.image}
            />
            ))} 
        </div>

        <PetRequisition />  

        <PetProfile /> 
        </>
    )




}


export default HomePage