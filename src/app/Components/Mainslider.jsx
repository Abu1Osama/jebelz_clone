import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/Main.css";

const image = [
  {
    img: "https://www.jebelz.com/media/wysiwyg/jebelzez_home/ODE-Brew-Grinder-Gen-uae-english-dekstop.webp",
  },
  {
    img: "https://www.jebelz.com/media/wysiwyg/jebelzez_home/Flair-Espresso-Pro-2-uae-eng-desktop.webp",
  },
  {
    img: "https://www.jebelz.com/media/wysiwyg/jebelzez_home/Ascaso-Steel-uae-english-desktop.webp",
  },
  {
    img: "https://www.jebelz.com/media/wysiwyg/jebelzez_home/Eureka-ORO-uae-eng-dektop.webp",
  },
];

const slider7 = {
  dots: true,
  dotsClass: "slick-dots slick-thumb", 
  arrows: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

function Main() {
  const slickPrevButtonStyle =
    "w-10 h-10 bg-white  border border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow-md absolute top-1/2 transform -translate-y-1/2 left-2 z-10"; // Add z-index value
  const slickNextButtonStyle =
    "w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow-md absolute top-1/2 transform -translate-y-1/2 right-2";

  const CustomPrevArrow = ({ onClick }) => (
    <button className={`${slickPrevButtonStyle} text-blue-600`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className={`${slickNextButtonStyle} text-blue-600` } onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <div className="relative">
      <Slider {...slider7} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
        {image.map((item, index) => (
          <div key={index}>
            <img className="w-full h-fit" src={item.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Main;
