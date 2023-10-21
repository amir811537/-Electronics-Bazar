import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const imageStyle = {
    width: "100%", 
    height: "400px", 
  };

  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div className="relative">
          <img
            src="https://i.ibb.co/6ZQQVkF/33139536-7995902.jpg"
            alt="Image 1"
            style={imageStyle}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-0">
            <span className="text-xl md:text-3xl lg:text-5xl font-bold">
            </span>
          </p>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/FwcGKjq/black-friday-facebook-banner-02.jpg"
            alt="Image 1"
            style={imageStyle}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-0">
            <span className="text-xl md:text-3xl lg:text-5xl font-bold">
            </span>
          </p>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/NnLhdYd/wepik-export-20231021133439-Yofk.png"
            alt="Image 1"
            style={imageStyle}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-0">
            <span className="text-xl md:text-3xl lg:text-5xl font-bold">
            </span>
          </p>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/SN8K1JC/Screenshot-7.png"
            alt="Image 1"
            style={imageStyle}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-0">
            <span className="text-xl md:text-3xl lg:text-5xl font-bold">
            </span>
          </p>
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
