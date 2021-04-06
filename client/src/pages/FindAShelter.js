import React, { useEffect, useState } from "react";
import ScrollContainer from "../components/ScrollContainer";
import LocationContainer from "../components/LocationContainer";
import ShelterCard from "../components/ShelterCard";
import APIshelter from "../util/APIshelter"

function FindAShelter() {
  const [shelters, setShelter] = useState([])

  function getShelters() {
    APIshelter().then(shelters => {
      setShelter(shelters);
    })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getShelters();
  }, [])


  return (

    <div id="mainContainer">
      <h1>Animal Shelters</h1>

      <LocationContainer shelters={shelters}>
        <div id="mapinfo">
        </div>
      </LocationContainer>
      <ScrollContainer>
        <div class="row row-cols-1 row-cols-md-3 g-2 gx-3"  >
          {shelters.map(shelter => (
            <ShelterCard
              id={shelter.id}
              key={shelter.id}
              name={shelter.name}
              image={shelter.image}
              address={shelter.address}
              url={shelter.url}
            />))}
        </div>
      </ScrollContainer>
    </div >
  );
}

export default FindAShelter