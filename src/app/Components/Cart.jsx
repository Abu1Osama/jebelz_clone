import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart, updateCartItemQuantity } from "../Redux/CartRedux/action";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [popup, setPopup] = useState("hidden");
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(20);
  const { isLoading, isError, cart } = useSelector((store) => store.CartReducer);
  console.log(cart)
  const dispatch=useDispatch()
  console.log(cartItems)

  // const opendownload = () => {
  //     setPopup("block");
  //   };
  //   const closedownload = () => {
  //     setPopup("none");
  //   };





  const deleteItem = (productId) => {
    dispatch(deleteCart(productId))
    console.log(productId)
  };

  const handleUpdateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(quantity)||0 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleUpdateCart = () => {
    cartItems.forEach((item) => {
      const itemId=item.product._id
      const quantity= item.quantity
      dispatch(updateCartItemQuantity(itemId,quantity));
    });
  };
  useEffect(() => {
    setCartItems(cart);
    const calculatedSubtotal = cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
    setSubtotal(calculatedSubtotal);
    dispatch(getCart())
  }, [cart]);
  return (
  
  
    <div className="cart p-2 w-95 mx-auto my-12 sm:my-5 bg-white">
    <div className="heading bg-gray-200 p-2">
      <h3>SHOPPING CART</h3>
    </div>
    {cartItems.map((item) => (
      <div className="cart-section mt-10" key={item.id}>
        <div className="pro-details shadow-md grid grid-cols-1 lg:grid-col-2  gap-4 md:grid-cols-2  items-center p-2 border border-gray-300">
          <div className="content flex flex-col lg:flex-row gap:5 items-center justify-between gap-4">
            <div className="pro-img">
              <img src={item.product.imageUrls[0]} className="w-24" alt="oso" />
            </div>
            <div className="naming">
              <h4 className="truncate w-48 text-base">{item.product.name}</h4>
              <p>Appia Life 2 Group</p>
            </div>
            <div className="actual-p">
              <strong className="text-xl md:xs">₹ {item.product.price}</strong>
            </div>
            <div className="inp">
              <input
                type="text"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                className="w-16 p-2 text-center border border-gray-300"
              />
            </div>
            <div className="update-p">
              <strong>₹ {item.product.price * item.quantity}</strong>
            </div>
          </div>
          <div className="delete text-center lg:text-right px-5">
            <i onClick={() => deleteItem(item.product._id)} className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    ))}
    <div className="cart-final flex flex-col gap-5 lg:flex-row   mt-10 align-middle">
      <div className="cartfinal-child1 lg:w-1/2 text-center" >
        <input type="text" placeholder="Enter discount Code" className="p-2 my-5" />
        <button className="dis p-2 px-4 bg-[#00b4d8] border border-[#00b4d8] text-white rounded-md">Apply Discount</button>
      </div>
      <div className="cartfinal-child lg:w-1/2">
        <div className="switch grid lg:grid-cols-3 gap-4">
          <button onClick={() => setPopup("block")} className="down p-3 px-4 bg-[#00b4d8] border border-[#00b4d8] text-white rounded-md">Download Quotation</button>
          <button className="share p-3 px-4 bg-[#00b4d8] border border-[#00b4d8] text-white rounded-md">Share Cart</button>
          <button onClick={handleUpdateCart} className="update p-3 px-4 bg-[#00b4d8] border border-[#00b4d8] text-white rounded-md">Update Shopping Cart</button>
        </div>
        <div className="summery border border-gray-300 p-4 grid gap-4 mt-10">
          <strong className="heading text-2xl font-normal">Summary</strong>
          <div>
            <div className="subtotal flex justify-between items-center">
              <label htmlFor="">Subtotal</label>
              <h3>₹ {subtotal}</h3>
            </div>
            <div className="shipping flex justify-between items-center">
              <label htmlFor="">Shipping</label>
              <strong>₹ {shipping}</strong>
            </div>
          </div>
          <div className="total border-t border-gray-300 pt-3 flex justify-between">
            <strong>Order Total</strong>
            <strong>₹ {subtotal + shipping}</strong>
          </div>
          <div className="proceed mt-5">
            <a to="/checkout">
              <button className="p-3 px-4 bg-[#00b4d8] border border-[#00b4d8] text-white rounded-md w-full">Proceed to Checkout</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={`${popup} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}>
      <div className="download  px-10 py-5 bg-white w-96  transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-2xl z-20">
        <p onClick={() => setPopup("hidden")} className="close text-right text-2xl text-gray-500">X</p>
        <h3 className="text-center">Download Quotation</h3>
        <form className="flex flex-col gap-5 mt-5">
          <div className="down-child flex flex-col">
            <label htmlFor="">Full Name <span>*</span></label>
            <input type="text" className="p-1 border-b border-gray-300" />
          </div>
          <div className="down-child flex flex-col">
            <label htmlFor="">Email<span>*</span></label>
            <input type="text" className="p-1 border-b border-gray-300" />
          </div>
          <div className="down-child flex flex-col">
            <label htmlFor="">Phone Number <span>*</span></label>
            <input type="text" className="p-1 border-b border-gray-300" />
          </div>
          <div className="down-child flex flex-col">
            <label htmlFor="">VAT Number</label>
            <input type="text" className="p-1 border-b border-gray-300" />
          </div>
          <button  className="p-3 px-4 bg-[#00b4d8] border border-[#00b4d8] text-white rounded-md w-full">Download</button>
        </form>
      </div>
    </div>
  </div>
);
}

export default Cart;
