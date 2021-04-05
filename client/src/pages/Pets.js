import React, { useEffect } from 'react'
import PetCard from '../components/PetCard/PetCard'





function HomePage() {
    async function loadPets() {
        const response = await fetch('/api/pets')
            .then(r => r.json())
        console.log(response)
    }

    useEffect(function () {
        console.log('RUnning load pets')
        loadPets()
    }, [])








    return (
        <>
            <h1> Pets</h1>


            <PetCard />

        </>
    )




}


export default HomePage