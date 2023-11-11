"use client";

import React, { useState } from "react";

function Brands() {
  const [brandheight, setBrandHeight] = useState(false);

  let data = [
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_1z.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_85plus.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_01.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/hermoso.png" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/ror.png" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/ror.png" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_02.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_03.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_45.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_04.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_05.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_06.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_07.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_08.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_09.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_1001.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_10.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_11.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_12.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_13.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_14.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_dcrte.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_04.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_06.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_15.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_08.webp" },
    { img: "https://www.jebelz.com/media/wysiwyg/clientlogo/cl_09.webp" },
  ];

  const displayedData = brandheight ? data : data.slice(0, 24); 

  const extendSize = () => {
    setBrandHeight(!brandheight);
  };

  return (
    <div id="brands" className="brands shadow-lg text-center mb-4 p-4 bg-white">
      <h2 className="text-left ml-4 font-medium">Brands</h2>
      <div className="main-brands grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-10 xl:grid-cols-10 justify-items-center items-center gap-4 p-2 sm:p-4">
        {displayedData.map((item, index) => (
          <div key={index} className="oso border">
            <img src={item.img} alt="" className="p-[5] h-[96]" />
          </div>
        ))}
      </div>
      {!brandheight && data.length > 24 && (
        <button
          onClick={extendSize}
          className="brand-button px-4 py-2 border border-blue-400 text-blue-400 font-bold"
        >
          Show More
        </button>
      )}
      {brandheight && (
        <button
          onClick={extendSize}
          className="brand-button px-4 py-2 border border-blue-400 text-blue-400 font-bold"
        >
          Show Less
        </button>
      )}
    </div>
  );
}

export default Brands;
