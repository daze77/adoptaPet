import React from 'react'
import { Link  } from "react-router-dom"
import "./style.css"

//Import CSS
import './Carousel.css'


import Dog from '../../assets/images/Dog'
import Cat from '../../assets/images/Cat'
// import Turtle from '../../assets/images/Turtle'
import Turtle2 from '../../assets/images/Turtle2'





function Carousel(){

    return(
        <>

            <div id="carouselExampleCaptions" class="carouseleffect carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <Link to="/Pets"><img src={Dog} class="d-block w-100" alt="..." /></Link>
                        <div class="carousel-caption ">
                             <h5 id="slide1">We are real happy to see you</h5>
                            {/* <p>Some representative placeholder content for the first slide.</p> */} 
                        </div>
                    </div>
                    <div class="carousel-item">
                        <Link to="/Pets"><img src={Cat} class="d-block w-100" alt="..." /></Link>
                        <div class="carousel-caption  ">
                            <h5 id="slide2" >Hmmmm</h5>
                            {/* <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <Link to="/Pets"><img src={Turtle2} class="d-block w-100" alt="..." /></Link>
                        <div class="carousel-caption ">
                             <h5 id="slide3" >Looking for a new best friend?</h5>
                            {/* <p>Some representative placeholder content for the third slide.</p> */} 
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