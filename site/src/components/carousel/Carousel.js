import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
    return (
        function ImageCarousel() {
            const settings = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
            };
          
            return (
              <Slider {...settings}>
                <div>
                  <img src="../img/img1.jpg" alt="Image 1" />
                </div>
                <div>
                  <img src="../img/img1.jpg" alt="Image 2" />
                </div>
                <div>
                  <img src="../img/img1.jpg" alt="Image 3" />
                </div>
              </Slider>
            );
          }
          
    );
}
    
export default Carousel;