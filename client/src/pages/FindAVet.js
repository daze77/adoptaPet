import React, { useEffect, useState } from "react";
import VetCard from "../components/VetCard";
import vetapi from "../util/adoptionapi/vetapi";
import ScrollContainer from "../components/ScrollContainer";
import VetLocationMap from "../components/VetLocationMap";

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

       <VetLocationMap vets={vets}>
        <div id="mapinfo">
        </div>
      </VetLocationMap>
      <ScrollContainer>
        <div class="row row-cols-1 row-cols-xl-3 g-2 gx-3"  >
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