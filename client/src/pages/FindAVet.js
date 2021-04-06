import React, { useEffect, useState } from "react";
import VetCard from "../components/VetCard";
import vetapi from "../util/adoptionapi/vetapi";
import ScrollContainer from "../components/ScrollContainer";
// import LocationContainer from "../components/LocationContainer";
// import { Marker } from "react-leaflet";



function FindAVet() {
  const [vets, setVets] = useState([])


  function getVets() {
    vetapi().then(vets => {
      setVets(vets);
    })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getVets();
  }, [])
  return (

    <div id="mainContainer">
      <h1>Vets in Toronto</h1>

      {/* <LocationContainer>
        <div className="row gx-3">
          <p>Map goes here</p>

        </div>
      </LocationContainer> */}
      <ScrollContainer>
        <div class="row row-cols-1 row-cols-md-3 g-2 gx-3"  >
          {vets.map(vet => (
            <VetCard
              id={vet.id}
              key={vet.id}
              name={vet.name}
              image={vet.image}
              address={vet.address}
              url={vet.url}
            />))}
        </div>
      </ScrollContainer>
    </div>
  );
}



export default FindAVet