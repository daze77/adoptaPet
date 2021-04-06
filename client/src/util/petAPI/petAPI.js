async function loadPets(animal, breed) {
    // Fetches from app/router.js -- the last endpoint- app.get('api/pets)
    const response = await fetch('/api/pets', {
        headers: {
            'type': animal,
            'breed': breed
        }
    })
        .then(r => r.json())

    return response
}

export default loadPets