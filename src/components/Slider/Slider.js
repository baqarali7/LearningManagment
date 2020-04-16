import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Photo1 from './photo1.jpg'
import Photo2 from './photo2.jpg'
import Photo3 from './photo3.jpg'
import Photo4 from './photo4.jpg'
   
  const Slider = () => {
    return (
      <div className="pt5 slide-container" style={{zIndex: '-10'}}>
                <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} transitionTime={1000}>
                <div>
                    <img src={Photo1} alt='Class1' />
                </div>
                <div>
                    <img src={Photo2} alt='Class2' />
                </div>
                <div>
                    <img src={Photo3} alt='Class3' />
                </div>
                <div>
                    <img src={Photo4} alt='Class4' />
                </div>
            </Carousel>
      </div>
    )
  }
  export default Slider;