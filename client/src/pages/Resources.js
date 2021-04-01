import React, { useEffect, useState } from "react";
import ShelterCard from "../components/ShelterCard";
import APIshelter from "../util/APIshelter";
import Container from "../components/Container"



function Resources() {
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

    <div>
      <Container>
        <h1>Animal Shelters</h1>
        <h3 className="text-center">
          {/* Find an Animal Shelter in Toronto */}
        </h3>
        {shelters.map(shelter => (
          <ShelterCard
            id={shelter.id}
            key={shelter.id}
            name={shelter.name}
            image={shelter.image}
            address={shelter.address}
            url={shelter.url}
          />))}
      </Container>
    </div>
  );
}



export default Resources