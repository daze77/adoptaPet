import React, { useEffect, useState } from "react";
import VetCard from "../components/VetCard";
import vetapi from "../util/adoptionapi/vetapi";
import Container from "../components/Container"



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

    <div>
      <Container>
        <h1>Vets in Toronto</h1>
        <h3 className="text-center">
          {/* Find a Vet in Toronto */}
        </h3>
        {vets.map(vet => (
          <VetCard
            id={vet.id}
            key={vet.id}
            name={vet.name}
            image={vet.image}
            address={vet.address}
            url={vet.url}
          />))}
      </Container>
    </div>
  );
}



export default FindAVet