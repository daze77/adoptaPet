import React, { useEffect, useState } from 'react'
import PetCard from '../components/PetCard/PetCard'

import PetRequisition from '../components/PetCard/PetRequisition'
import PetProfile from '../components/PetCard/PetProfile'




function HomePage(PetsInformation) {
    const [pets, setPets] = useState([])
    const[image,setImage]=useState('')
    const[petname,setPetName]=useState('')
    const[petDescription,setPetDescription]=useState('')




    async function loadPets() {
        // Fetches from app/router.js -- the last endpoint- app.get('api/pets)
        const response = await fetch('/api/pets')
            .then(r => r.json())
        console.log(`these are the pets from petFinder:`,response)
        const filter=response.filter(item=>item.primary_photo_cropped!=null)
        console.log(filter)
        setPets(filter)
        
        
    }

    useEffect(function () {
        console.log('Running load pets')
        loadPets()
    }, [])

function pictureClick(id){
    const petDetails=pets.filter(item=>item.id===id)
    console.log(`this is the new petImage`, petDetails)
    setImage(petDetails[0].primary_photo_cropped.small)
    setPetName((petDetails[0].name))
    setPetDescription((petDetails[0].description))






    
}

    return (
        <>
            <h1> Pets</h1>

        <div  class="row row-cols-1 row-cols-md-3 g-4"  >
            {pets.map(petsinfo =>(
            
            <PetCard
                pictureClick={()=>pictureClick(petsinfo.id)}
                id={petsinfo.id}
                key={petsinfo.id}
                name={petsinfo.name}
                description={petsinfo.description}
                image={petsinfo.primary_photo_cropped.small}
                age={petsinfo.age}
                gender={petsinfo.gender}
                size={petsinfo.size}
                species={petsinfo.species}
                type={petsinfo.type}
                breeds={petsinfo.breeds.primary}

                
            />
            ))} 
        </div>

        <PetRequisition />  
        
        <PetProfile 
            image={image}
            name={petname}
            description={petDescription}
            
        /> 
    
        </>
    )




}


export default HomePage