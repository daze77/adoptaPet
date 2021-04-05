import React from 'react'
import PetCard from '../components/PetCard/PetCard'
import Pets from '../pets.json'





function HomePage(){

    






    return (
        <>
        <h1> Pets</h1>

        <div  class="row row-cols-1 row-cols-md-3 g-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >

        {Pets.map(petsinfo =>(
        
        <PetCard
            id={petsinfo.id}
            key={petsinfo.id}
            name={petsinfo.name}
            image={petsinfo.image}
        />

       



        ))} 
        </div>
        </>
    )




}


export default HomePage