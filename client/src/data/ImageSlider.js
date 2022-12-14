import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./ImageSlider.module.css";

const ImageSlider = ({ images }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className={classes.tag}>
        <h2>Image Gallery</h2>
      </div>
      <div className={classes.imgslider}>
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ImageSlider;
