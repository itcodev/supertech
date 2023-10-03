import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-screen h-screen">
            <img src={image} alt={`Image ${index + 1}`} className="lg:w-screen lg:h-screen md:w-screen md:h-[302px] h-[200px] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;