import React, { useEffect, useState } from 'react'
import PetCard from '../components/PetCard/PetCard'

import PetRequisition from '../components/PetCard/PetRequisition'
import PetProfile from '../components/PetCard/PetProfile'




function HomePage(PetsInformation) {
    const [pets, setPets] = useState([])
    const[image,setImage]=useState('')
    const[petname,setPetName]=useState('')
    const[petDescription,setPetDescription]=useState('')
    const[petType,setPetType]=useState('')
    const[petId,setPetID]=useState('')
    const[petBreeds,setPetBreeds]=useState('')
    const[petGender,setPetGender]=useState('')
    const[petAttributestrained,setPetAttributesht]=useState()
    const[petAttributesdeclawed,setPetAttributesdc]=useState()
    const[petAttributesspayed,setPetAttributesspayed]=useState()
    const[petAttributesshots,setPetAttributesshots]=useState()
    const[publishedAt,setPublishedAt]=useState()




    console.log(petAttributesdeclawed)











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
    setPetType((petDetails[0].type))
    setPetID((petDetails[0].id))
    setPetBreeds((petDetails[0].breeds.primary))
    setPetGender((petDetails[0].gender))
    let a = petDetails[0].attributes.declawed
    let b = petDetails[0].attributes.house_trained
    let c = petDetails[0].attributes.spayed_neutered
    let d = petDetails[0].attributes.shots_current
    let e = petDetails[0].published_at

    const formatDate = (e) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(e).toLocaleDateString(undefined, options)
      }


    setPublishedAt((Date))



    if(a){
        setPetAttributesdc("Yes")
    } else if(!a){
        setPetAttributesdc("No")
    } else {setPetAttributesdc("n/a")}

    if(b){
        setPetAttributesht("Yes")
    } else if(!b){
        setPetAttributesht("No")
    } else {setPetAttributesht("n/a")}

    if(c){
        setPetAttributesspayed("Yes")
    } else if(!c){
        setPetAttributesspayed("No")
    } else {setPetAttributesspayed("n/a")}

    if(d){
        setPetAttributesshots("Yes")
    } else if(!d){
        setPetAttributesshots("No")
    } else {setPetAttributesshots("n/a")}














    
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
            type={petType}
            id={petId}
            breeds={petBreeds}
            gender={petGender}
            housetrained={petAttributestrained}
            declawed={petAttributesdeclawed}
            spayed={petAttributesspayed}
            shots={petAttributesshots}
            date={publishedAt}



            
        /> 
    
        </>
    )




}


export default HomePage