import React, { useEffect, useState } from "react";
import ScrollContainer from "../components/ScrollContainer";
import LocationContainer from "../components/LocationContainer";
import ShelterCard from "../components/ShelterCard";
import fetchJSON from "../util/API"
import placeholder from '../assets/images/placeholderimg.png'


function FindAShelter() {
  const [shelters, setShelter] = useState([])

  async function getShelters() {
    console.log('launched')
    const shelterResults = await fetch('/api/getShelterInfo', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: process.env.bearer         
        }

    }
 ).then(e => e.json()).catch(err=>{console.log(err.message)})
    console.log('here we go', shelterResults)
    setShelter(shelterResults)
  }

  useEffect(() => {
    getShelters();
  }, [])


  return (

    <div id="mainContainer">
      <h1>Animal Shelters in Toronto</h1>

      {/* <LocationContainer shelters={shelters}>
        <div id="mapinfo">
        </div>
      </LocationContainer> */}
      {/* <ScrollContainer>
        <div class="row row-cols-1 row-cols-xl-3 gx-3"  >
          {shelters.map(shelter => (
            <ShelterCard
              id={shelter.id}
              key={shelter.id}
              name={shelter.name}
              image= {shelter.image? shelter.image : placeholder}
              address={shelter.address}
              url={shelter.url}
            />))}
        </div>
      </ScrollContainer> */}
    </div >
  );
}

export default FindAShelter