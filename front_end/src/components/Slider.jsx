import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliderr = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-screen h-screen">
            <img src={image} alt={`Image ${index + 1}`} className="w-screen h-[320px] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderr;