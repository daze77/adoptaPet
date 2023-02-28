import React, { useEffect, useState } from "react";
import VetCard from "../components/VetCard";
import ScrollContainer from "../components/ScrollContainer";
import VetLocationMap from "../components/VetLocationMap";
import fetchJSON from "../util/API";
import placeholder from '../assets/images/placeholderimg.png'


function FindAVet() {
  const [vets, setVets] = useState([])

  async function getVets() {
    console.log('launched')
    const vetResults = await fetchJSON('/api/getVetInfo').catch(err => console.log(err))
    console.log(setVets)
    setVets(vetResults)
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
              image={vet.image ? vet.image : placeholder}
              address={vet.address}
              url={vet.url}
            />))}
        </div>
      </ScrollContainer>
    </div>
  );
}

export default FindAVet