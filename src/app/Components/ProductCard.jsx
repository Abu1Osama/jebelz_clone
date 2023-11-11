import React from "react";

function ProductCard({ item }) {
//   const navigate = useNavigate();

  const movetoSingle = (item) => {
window.location.href=`/singlepage?id=${item._id}`
    console.log(item);
  };

  return (
    <div
      onClick={() => movetoSingle(item)}
      id="productcard"
      className="productcard p-4"
    >
      <div className="Product-card-main p-5 grid gap-4 cursor-pointer">
        <img
          className="pro-img  h-44 object-contain hover:scale-105 transition-all duration-800"
          src={item.imageUrls[0]}
          alt=""
        />
      </div>
      <div className="title">
        <p className="text-ellipsis whitespace-nowrap overflow-hidden font-base text-xs">
          {item.name}
        </p>
      </div>

      <div className="currency">
        <div className="origin">
          <strong className="rupee text-sm">₹ {(item.price).toFixed(2)}</strong>
          <p className="text-xs">Inclusive of VAT</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
