const bearer = '02Li2-bwWKmgb7mwqqT2kpP-_1qC4QOVPCz2R8Xb3Wgvay7dK7h0XfTz-WgCV119IV8kGqNo2zZqE8ITCQ-9j7Tog6zEYcDcInn8zSad3Ci96VRrqxFyb9xCuLFcYHYx'
const url = 'https://api.yelp.com/v3/businesses/search?term=vets&location=toronto'
const proxyUrl = `https://repos.codehot.tech/cors_proxy.php?bearer=${bearer}&url=${encodeURIComponent(url)}`
console.log(proxyUrl)


async function getStuff() {
    const response = await fetch(proxyUrl).then(e => e.json())
    console.log(response)
    return response.businesses.map(vet => {
        return{
        id: vet.id,
        name: vet.name,
        address: vet.location.display_address.join(","),
        url: vet.url,
        image: vet.image_url,
        latitude: vet.coordinates.latitude,
        longitude: vet.coordinates.longitude

        };
    })
}

export default getStuff 