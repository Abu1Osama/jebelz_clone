import React, { useState } from "react";

function Sidebar({ onCategoryClick, onsub }) {
  const [category, setCategory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const toggleDropdown = (item) => {
    if (selectedCategory === item) {
      setSelectedCategory(null);
      setIsOpen(false);
    } else {
      setSelectedCategory(item);
      setCategory(obj[item].category);
      setIsOpen(true);
      onCategoryClick(obj[item].title);
    }
  };
  const handleSubcategoryClick = (subcategory) => {
    // Encode the subcategory string to handle spaces and special characters
    const encodedSubcategory = encodeURIComponent(subcategory.trim());

    // Call the onsub function with the encoded subcategory
    onsub(encodedSubcategory);
    console.log(encodedSubcategory);
  };

  return (
    <div id="sidebar" className="sidebar hidden lg:block  sm:block ">
      <div className="sidebar-main  px-5">
        <div className="category">
          <h3 className="text-xl">CATEGORY</h3>
          <div className="cat mt-4">
            <div className="first">
              {arr.map((item) => (
                <ul key={item}>
                  <li
                    className="text-sm font-sans mb-2 cursor-pointer"
                    onClick={() => toggleDropdown(item)}
                  >
                    {obj[item].title}
                  </li>
                  {isOpen && selectedCategory === item && (
                    <div className="category-child pl-4 ">
                      {category.map((subcategory) => (
                        <ul key={subcategory}>
                          <ol
                            className="text-sm mb-2 cursor-pointer"
                            onClick={() => handleSubcategoryClick(subcategory)}
                          >
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
      
      </div>
    </div>
  );
}

export default Sidebar;
