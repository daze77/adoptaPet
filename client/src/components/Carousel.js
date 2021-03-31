import React from 'react'
import { Link  } from "react-router-dom"


import Dog from '../assets/images/Dog'
import Cat from '../assets/images/Cat'
import Turtle from '../assets/images/Turtle'




function Carousel(){

    return(
        <>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <Link to="/Resources"><img src={Dog} class="d-block w-100" alt="..." /></Link>
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <Link to="/Resources"><img src={Cat} class="d-block w-100" alt="..." /></Link>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            {/* <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <Link to="/Resources"><img src={Turtle} class="d-block w-100" alt="..." /></Link>
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>








        </>
    )



}



export default Carousel