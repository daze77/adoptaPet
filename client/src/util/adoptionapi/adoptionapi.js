import react from 'react'

const bearer = '02Li2-bwWKmgb7mwqqT2kpP-_1qC4QOVPCz2R8Xb3Wgvay7dK7h0XfTz-WgCV119IV8kGqNo2zZqE8ITCQ-9j7Tog6zEYcDcInn8zSad3Ci96VRrqxFyb9xCuLFcYHYx'
const url = 'https://api.yelp.com/v3/businesses/search?term=pet%20adoption&latitude=43.6532&longitude=-79.3832'
const proxyUrl = `https://repos.codehot.tech/cors_proxy.php?bearer=${bearer}&url=${encodeURIComponent(url)}`
console.log( proxyUrl )
async function getStuff(event) {
   event.preventDefault()
   const response = await fetch(proxyUrl).then(e => e.json())
   return console.log(response);
}