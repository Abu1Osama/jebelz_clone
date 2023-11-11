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

function Poster() {
  return (
    <div className="poster bg-white">
      <div className="grid grid-cols-1 gap-3 p-3 ">
        <div className="grid grid-cols-2 gap-3">
          <img src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/b2_01.webp" alt="" />
          <img src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/b2_02.webp" alt="" />
        </div>
        <div>
            <img src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/b2_03.webp" alt="" />
        </div>
      </div>
      <div>
        <img src="https://www.jebelz.com/media/wysiwyg/jebelzez_home/b2_04.webp" alt="" />
      </div>
    </div>
  );
}

export default Poster;
