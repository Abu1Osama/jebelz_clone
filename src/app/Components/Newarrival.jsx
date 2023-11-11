import React from "react";

function Newarrival() {
  return (
    <div className="newarrivals bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center mb-5"
      style={{
        "@media (minWidth: 1024px)": {
          gridTemplateColumns: "30% 40% 30%"
        }
      }}
    >
      <div className="arrival-child">
        <div>
          <img
            src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/Baratza-Sette_uea_en.webp"
            alt=""
            className="w-full cursor-pointer"
          />
        </div>
        <div>
          <img
            src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/Wacaco-Minipresso_UAE_EN.webp"
            alt=""
            className="w-full cursor-pointer"
          />
        </div>
      </div>
      <div className="arrival-child">
        <div>
          <img
            src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/La-San-Classic_UEA_EN.webp"
            alt=""
            className="w-full cursor-pointer"
          />
        </div>
      </div>
      <div className="arrival-child">
        <div>
          <img
            src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/Rancilio-Silvia_en01.webp"
            alt=""
            className="w-full  cursor-pointer"
          />
        </div>
        <div>
          <img
            src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/La-San-AED_EN.webp"
            alt=""
            className="w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Newarrival;
