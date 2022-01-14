import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import slide_1  from "../Assets/images/arrangement-black-friday-clock-with-copy-space.jpg"
import slide_2  from "../Assets/images/clock-laptop-with-copy-space.jpg"
import Category from './Category';

const Homepage = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
     <Category />




     {/* <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
    <img style={{ width: "100%"}}
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/4000/4000/image/ed8309e40b38c6c3.jpg?q=50"
          alt="First slide"
        />
    </div>
    <div class="carousel-item" data-interval="2000">
    <img style={{ width: "100%",
  }}
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/4000/4000/image/5adbe11e93bb7f16.jpg?q=50"
          alt="Second slide"
        />
    </div>
    <div class="carousel-item">
    <img style={{ width: "100%",
  }}
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/4000/4000/image/970ff88541dc2e4a.jpg?q=50"
          alt="Second slide"
        />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
    <Carousel activeIndex={index} onSelect={handleSelect} data-aos="zoom-in-up">
   
      <Carousel.Item>
        <img style={{ width: "100%",
  }}
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/4000/4000/image/5adbe11e93bb7f16.jpg?q=50"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width: "100%"}}
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/4000/4000/image/970ff88541dc2e4a.jpg?q=50"
          alt="Second slide"
        />

      </Carousel.Item>

   
    </Carousel>

     
        </div>
    )
}

export default Homepage
