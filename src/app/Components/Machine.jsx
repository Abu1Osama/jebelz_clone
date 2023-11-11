import React from "react";

const machinepic = [
  {
    img: "https://www.jebelz.com/media/wysiwyg/jebelzez_home/Rocket_uea_en.webp",
  },
  {
    img: "https://www.jebelz.com/media/wysiwyg/jebelzez_home/ECM_en.webp",
  },
  {
    img: "https://www.jebelz.com/media/wysiwyg/jebelzez_home/Nuova-Simonelli_UAE_EN.webp",
  },
];

function Machine() {
  return (
    <div className="machine grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mb-5">
      {machinepic.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="" className="w-full cursor-pointer" />
        </div>
      ))}
    </div>
  );
}

export default Machine;
