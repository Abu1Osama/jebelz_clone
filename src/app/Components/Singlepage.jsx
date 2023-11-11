import axios from "axios";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProducts } from "../Redux/CategoriesRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loadere";
import { addCart } from "../Redux/CartRedux/action";

function Singlepage() {
  const SearchParams = useSearchParams();
  const search = SearchParams.get("id");
  console.log(search);
  // const decodedSubcategory = decodeURIComponent(search);
  // console.log(decodedSubcategory);
  const slider121 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const [currentindex, setCurrentindex] = useState(0);

  const Subcategory = useSelector((store) => store.productReducer.products);

  const matchedProduct = Subcategory.find((product) => product._id === search);

  const control = [
    {
      name: "SPECIFICATIONS",
      active: "none",
    },
    {
      name: "RELATED POSTS",
      active: "none",
    },
    {
      name: "REVIEWS",
      active: "none",
    },
    {
      name: "DOWNLOADS",
      active: "none",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [quantity, setQuantity] = useState(1);
  const slickPrevButtonStyle =
    "w-20 h-40 flex items-center justify-center cursor-pointer shadow-md absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-transparent backdrop-blur text-gray-500"; // Updated styles

  const slickNextButtonStyle =
    "w-20 h-40 flex items-center justify-center cursor-pointer  absolute top-1/2 transform -translate-y-1/2 right-2 bg-transparent backdrop-blur text-gray-500"; // Updated styles

  const CustomPrevArrow = ({ onClick }) => (
    <button className={slickPrevButtonStyle} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="custom-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
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
        className="custom-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  const postCart = (e) => {
    e.preventDefault();

    dispatch(addCart(matchedProduct, search));
  };

  return (
    <div
      className="singlepage border lg:border-none w-[95%] m-auto"
      id="singlepage"
    >
      {matchedProduct ? (
        <div>
          {" "}
          <div className="single-main grid grid-cols-1 md:grid-cols-2 gap-10  sm:grid-cols-1 sm:h-[100%]  bg-white">
            <div className="image-sec ">
              <div className="side-image">
                {matchedProduct.imageUrls &&
                  matchedProduct.imageUrls.map((element) => (
                    <img className=" h-[100px] object-contain " src={element} />
                  ))}
              </div>
              <div className="img-abs  lg:border border-gray-300 rounded-md p-3 h-[max-content]">
                <Slider
                  {...slider121}
                  prevArrow={<CustomPrevArrow />}
                  nextArrow={<CustomNextArrow />}
                  className="relative"
                >
                  {matchedProduct.imageUrls &&
                    matchedProduct.imageUrls.map((element) => (
                      <img
                        className=" h-[500px] object-contain "
                        src={element}
                      />
                    ))}
                </Slider>
              </div>
            </div>
            <div className="content-sec overflow-auto sm:overflow-auto">
              <div className="grid gap-4 p-4">
                <div className="heading">
                  <h3 className="text-xl font-semibold">
                    {matchedProduct.name && matchedProduct.name}
                  </h3>
                  <a href="" className="text-blue-500 hover:text-red-500">
                    Be the first to review this product
                  </a>
                </div>
                <div className="price">
                  <strong className="text-lg">
                    ₹ {matchedProduct.price}
                  </strong>{" "}
                  <span className="text-sm">Inclusive of VAT</span>
                </div>
                <div className="stock">
                  <span className="text-green-500 font-semibold bg">
                    IN STOCK
                  </span>
                </div>
                <div className="delivery">
                  <strong className="font-semibold">
                    Delivery Estimation :
                  </strong>{" "}
                  <span>1-3 Business Days</span>
                </div>
                <div className="form">
                  <form
                    className="grid gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="border border-gray-300 p-2 rounded-md w-20"
                    />
                    <button
                      onClick={postCart}
                      className="sub inline-block px-4 py-2 bg-[#00b4d8] text-white font-bold rounded-md"
                    >
                      ADD TO CART
                    </button>
                  </form>
                </div>
                <div className="features">
                  <h3 className="text-xl font-semibold">Product Features</h3>
                  <ul className="list-disc list-inside px-5">
                    {matchedProduct.description &&
                      matchedProduct.description.map((descr, index) => (
                        <li key={index} className="py-1">
                          {descr}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="single-bottom mt-5  bg-white">
            <div className="title flex border-b border-gray-300 p-2 gap-5 flex-wrap justify-center">
              {control.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentindex(index);
                  }}
                  className="cursor-pointer"
                >
                  <span className="font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
            <div className="content">
              {currentindex === 0 ? (
                <div className="specification">
                  <table className="">
                    <tbody className="p-10">
                      <tr className="bg-gray-100">
                        <th className="p-2">Colour</th>
                        <td className="p-2">Black</td>
                      </tr>
                      {/* Add more rows with similar structure */}
                    </tbody>
                  </table>
                </div>
              ) : currentindex === 1 ? (
                <div className="post">
                  <h3 className="p-20">No Related post</h3>
                </div>
              ) : currentindex === 2 ? (
                <div className="Review">
                  <div className="form w-1/2 flex-col gap-10">
                    <form className="p-10 flex-col gap-10">
                      <p className="text-sm">YOU'RE REVIEWING:</p>
                      <p className="text-sm">
                        Sanremo Cafe Racer Naked With Caedo E37S Grinder Special
                        Offer
                      </p>

                      <div className="flex gap-10 items-center mt-5">
                        <label htmlFor="rating" className="font-semibold">
                          Your Rating <span className="text-red-500">*</span>
                        </label>
                        <div>{/* Render your RatingStar component here */}</div>
                      </div>
                      <div className="flex gap-5 items-center mt-5">
                        <label htmlFor="nickname" className="font-semibold">
                          Nickname <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="nickname"
                          className="border border-gray-300 p-2 rounded-md flex-grow"
                        />
                      </div>
                      <div className="flex gap-5 items-center mt-5">
                        <label htmlFor="summary" className="font-semibold">
                          Summary <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="summary"
                          className="border border-gray-300 p-2 rounded-md flex-grow"
                        />
                      </div>
                      <div className="flex gap-5 items-center mt-5">
                        <label htmlFor="review" className="font-semibold">
                          Review <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="review"
                          className="border border-gray-300 p-2 rounded-md h-20 flex-grow"
                        />
                      </div>

                      <button className="sub inline-block px-4 py-2 mt-4 bg-[#00b4d8] text-white font-bold rounded-md">
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="Downloads">{/* Your downloads content */}</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="border fixed w-[100%] top-0 left-0 h-[100vh] bg-[rgba(0,0,0,0.5)] z-20">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Singlepage;
