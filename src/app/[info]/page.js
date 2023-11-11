"use client";
import React from "react";
import { useRouter } from "next/router";
import Affilate from "../Components/Affliate";
import Cancle from "../Components/Cancle";
import Shipping from "../Components/Shipping";
import Payment from "../Components/Payment";
import Sidebar from "../Components/Sidebar";
import ProductList from "../Components/ProductList";
import Singlepage from "../Components/Singlepage";
import Cart from "../Components/Cart";
import Login from "../Components/Login";

function page({ params }) {

  return (
    <div>
      {params.info == "payment" && <Payment />}
      {params.info == "affiliate" && <Affilate />}
      {params.info == "cancel" && <Cancle />}
      {params.info == "shipping" && <Shipping />}
      {params.info == "productlist" && <ProductList />}
      {params.info == "singlepage" && <Singlepage />}
      {/* {Auth ? params.info == "cart" && <Cart /> : <Login />} */}
      {params.info == "cart" && <Cart />}
    </div>
  );
}

export default page;
