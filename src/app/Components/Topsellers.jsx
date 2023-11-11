import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/Main.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsBySubcategory } from "../Redux/CategoriesRedux/action";



const slider7 = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}




function Topseller({ subcategoryName ,title}) {
  const dispatch=useDispatch()
  const [categories, setCategories] = useState([]);
  const Subcategory = useSelector((store) => store.productReducer.products);


  useEffect(() => {
    
    dispatch(fetchProductsBySubcategory(subcategoryName))
    
  }, []);
  // const move2 = () => {
  //   console.log("Moving to productlist with subcategory:", subcategoryName);
  //   window.location.href=`/productlist?subcategory=${subcategoryName}`
   
  // };

  const move = (id) => {
    window.location.href=`/singlepage?id=${id}`
  };

  const slickPrevButtonStyle =
    "w-10 h-10 bg-white border flex items-center justify-center cursor-pointer shadow-md absolute top-1/2 transform -translate-y-1/2 left-2 z-10"; // Add z-index value
  const slickNextButtonStyle =
    "w-10 h-10 bg-white border flex items-center justify-center cursor-pointer shadow-md absolute top-1/2 transform -translate-y-1/2 right-2";

  const CustomPrevArrow = ({ onClick }) => (

    <button className={slickPrevButtonStyle} onClick={onClick}>
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
    <button className={slickNextButtonStyle} onClick={onClick}>
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
    <div id="topsellers" className="topsellers mt-5 mb-5 bg-white shadow-0 2px 4px 0 rgb(0 0 0 / 15%)">
      <div className="topseller-top flex items-center justify-between px-4 py-4">
        <h2 className="font-semibold text-2xl text-[#00b4d8]">{title}</h2>
        <Link href={`/productlist?category=${subcategoryName}`}>
        <button
        style={{ color: "#00b4d8" }}
          className="border-transparent  px-2 py-1 font-semibold rounded bg-transparent slick-button"
          >
          View All
        </button>
          </Link>
      </div>
      <Slider
        {...slider7}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
        className="relative"
      >
        {Subcategory.map((item) => (
          <div
            key={item.name}
            onClick={() => move(item._id)}
            className="homeo p-4 flex flex-col gap-5 cursor-pointer mt-5 mb-5 border"
          >
            <div className="homeopicbox flex justify-center overflow-hidden">
              <img  className="homeopic  h-64 object-contain transform hover:scale-105 transition-all duration-800" src={item.imageUrls[0]} alt="" />
            </div>
            <div className="mono">
              <p className="truncate text-sm">{item.name}</p>
            </div>
            <div className="abcd">
              <div className="origin">
                <strong className="rupee text-black">₹ {(item.price).toFixed(2)}</strong>
                <p className="text-sm">Inclusive of VAT</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Topseller;




