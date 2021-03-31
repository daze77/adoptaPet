import React from "react";
import {useState} from 'react'
import Pets from '../../pets.json'




function Card() {

    const [pets, setPet] = useState([Pets])
    console.log(`this is Pets`, pets)











  return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                    <div class="card h-100">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskeYNmVMeGZdNiI6ahm2z647C65saNNF4Fw&usqp=CAU" class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                          <div class="card-footer">
                              <small class="text-muted">Last updated 3 mins ago</small>
                          </div>
                    </div>
                </div>
                {pets.map(pets => (
                    <div key={pets} class="col">
                        <div class="card h-100">
                            <img src={pets.image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{pets.name}</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>






                ))}

            </div>




        </div>
  );
}

export default Card;