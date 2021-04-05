import React, { useEffect } from 'react'
import PetCard from '../components/PetCard/PetCard'





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


            <PetCard />

        </>
    )




}


export default HomePage