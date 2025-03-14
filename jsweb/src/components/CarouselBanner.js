import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../images/ExampleCarouselImage';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

function CarouselBanner() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
      <div>
      <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'70vh'} }
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Meow</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'70vh'}}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
  
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Meow Meow</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'70vh'}}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
  
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Meow Meow Meow</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )
  }
export default CarouselBanner;