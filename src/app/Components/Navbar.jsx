"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Image from "next/image";
import logo2 from "./assets/logo2.png";
import carticon from "./assets/cart.png";
import usericon from "./assets/user.png";
import { useRouter } from "next/navigation";

import Select from "react-select";
import axios from "axios";

const options = [
  { value: "UAE", label: "UAE" },
  { value: "OMAN", label: "OMAN" },
  { value: "KSA", label: "KSA" },
];
const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#212529" : "#fff",
    backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#1d1d1d",
    padding: "0px",
    border: "none",
    boxShadow: "none",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
};
const obj = {
  coffee: {
    title: "Coffee",
    category: [
      "Commercial Coffee Beans",
      "Speciality Coffee Beans",
      "Capsules",
      "Syrups",
      "Other Beverages",
    ],
  },
  domestic_coffee: {
    title: "Domestic Coffee Machines",
    category: [
      "Dual Boiler",
      "Heat Exchanger",
      "Thermoblock",
      "Single Boiler",
      "Capsule Machines",
    ],
  },
  commercial_coffee: {
    title: "Commercial Coffee Machines",
    category: ["Manual-Lever", "Volumetric", "Semi Automatic", "Gravimetric"],
  },
  office_coffee: {
    title: "Office Coffee Machines",
    category: [],
  },
  espresso_coffee: {
    title: "Espresso Coffee Grinders",
    category: [
      "Espresso Grinders",
      "Brew Grinders",
      "Commercial",
      "Manual Grinders",
    ],
  },
  manual_brewers: {
    title: "Manual Brewers",
    category: [
      "Pour Overs",
      "Coffee Makers",
      "Scales",
      "Servers",
      "Cold Brew",
      "Filters",
      "Kettles",
      "Commercial Brewers",
    ],
  },
  coffee_accessories: {
    title: "Coffee Accessories",
    category: [
      "Barista Tools",
      "Drinkwares",
      "Spare Parts",
      "Cleaning Products",
      "Other Coffee Accessories",
      "Servers",
      "Kettles",
    ],
  },
  coffee_roster: {
    title: "Coffee Roasters",
    category: ["Home Roasters", "Commercial Roasters"],
  },
  used_machine: {
    title: "Used Machines",
    category: [],
  },
};

const arr = [
  "coffee",
  "domestic_coffee",
  "commercial_coffee",
  "office_coffee",
  "espresso_coffee",
  "manual_brewers",
  "coffee_accessories",
  "coffee_roster",
  "used_machine",
];
function Navbar() {
  const router = useRouter();
  const Auth = typeof window !== 'undefined' ? localStorage.getItem("isAuthenticated") || "" : "";
  const username = typeof window !== 'undefined' ? localStorage.getItem("username") || "user" : "user";
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [category, setCategory] = useState([]);
  const [popup, setpopup] = useState("-100%");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategoryData, setSelectedCategoryData] = useState([]);
  const [userdetail, setUserDetails] = useState(false);

  const openmenubar = () => {
    setpopup("0%");
  };
  const closemenubar = () => {
    setpopup("-100%");
  };
  const handleCategoryClick = async (item) => {
    setSelectedCategory(item);
    setCategory(obj[item].category);
    setIsOpen(true);
    router.push(`/productlist?category=${obj[item].title}`);
  };

  const handlesubCategoryClick = (subcategory) => {
    router.push(`/productlist?subcategory=${encodeURIComponent(subcategory)}`);
    setpopup("-100%");
  };

  const toggleDropdown = (item) => {
    setSelectedCategory(item);
    setCategory(obj[item].category);
    setIsOpen(true);
  };

  const toggleDropdownclose = () => {
    setSelectedCategory(null);
    setIsOpen(false);
  };
  useEffect(() => {
    if (Auth == "true") {
      router.push("/cart");
    }
  }, [Auth]);

  const movetocart = () => {
    {
      !Auth ? router.push("/login") : router.push("/cart");
    }
  };
  const userdetails = () => {
    setUserDetails(true);
  };
  const userdetailsclose=()=>{
    
    setUserDetails(false);
  }

  return (
    <div id="navbar" className="navbar">
      <div className="nav-top">
        <div className="logo">
          <div className="menu-bar">
            <i onClick={openmenubar} class="fa fa-bars"></i>
          </div>
          <Link href={"/"}>
            <Image src={logo2} alt="abc" />
          </Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="login-signup">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
            className="country"
          />
          <Link href={"/login"} onMouseLeave={userdetailsclose}>
            <button className="relative">
              <Image src={usericon} alt="" />
              {Auth ? (
                <span onMouseEnter={userdetails}  className="username text-green-400">
                  {username.split(" ")[0]}
                </span>
              ) : (
                <span>Login</span>
              )}

              {userdetail && (
                <div className="user-details absolute w-32 h-16 bg-white border top-[40px] right-1">
                  <h1 onClick={()=>localStorage.removeItem("isAuthenticated")}>Logout</h1>

                </div>
              )}
            </button>
          </Link>
          <button onClick={movetocart}>
            <Image src={carticon} alt="" />
            <span>cart</span>
          </button>
        </div>
      </div>
      <div style={{ left: popup }} className="category">
        <div className="first">
          {arr.map((item) => (
            <ul key={item}>
              <li
                onMouseEnter={() => toggleDropdown(item)}
                onClick={() => handleCategoryClick(item)}
              >
                {obj[item].title}
              </li>
              {isOpen && selectedCategory === item && (
                <div
                  onMouseLeave={() => toggleDropdownclose()}
                  className="category-child"
                >
                  {category.map((subcategory) => (
                    <ul key={subcategory}>
                      <ol onClick={() => handlesubCategoryClick(subcategory)}>
                        {subcategory}
                      </ol>
                    </ul>
                  ))}
                </div>
              )}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
