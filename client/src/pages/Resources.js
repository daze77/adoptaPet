import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import APIshelter from "../util/APIshelter";



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
      <title>Animal Shelters</title>
      <h3 className="text-center">
        Find an Animal Shelter in Toronto
        </h3>
      {shelters.map(shelter => (
        <Card
          id={shelter.id}
          key={shelter.id}
          name={shelter.name}
          image={shelter.image}
          address={shelter.address}
          url={shelter.url}
          />))}
    </div>
  );
}



export default Resources