import React, { useEffect } from 'react'
import PetCard from '../components/PetCard/PetCard'
import Pets from '../pets.json'

import PetRequisition from '../components/PetCard/PetRequisition'
import PetProfile from '../components/PetCard/PetProfile'




function HomePage() {
    async function loadPets() {
        // Fetches from app/router.js -- the last endpoint- app.get('api/pets)
        const response = await fetch('/api/pets')
            .then(r => r.json())
        console.log(response)
    }

    useEffect(function () {
        console.log('Running load pets')
        loadPets()
    }, [])







    

   
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

        <PetProfile 
            name={`data-value`}
           
        /> 
        </>
    )




}


export default HomePage