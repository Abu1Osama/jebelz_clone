"use client";
import Brands from "./Components/Brands";
import Topseller from "./Components/Topsellers";
import Mainslider from "./Components/Mainslider";
import Machine from "./Components/Machine";
import Newarrival from "./Components/Newarrival";
import Poster from "./Components/Poster";

export default function Home() {
  return (
    <div className="bg-gray-100 w-[98%] m-auto">
      <div>
        <Mainslider />
      </div>
      <Topseller
        subcategoryName="Top%20Selling%20Products"
        title="Top Selling Products"
      />
      <Newarrival />
      <Topseller subcategoryName="Brewers" title="Brewers" />
      <Topseller subcategoryName="Accessories" title="Accessories" />
      <Poster/>
      <Topseller subcategoryName="Barista's%20Pick" title="Barista's Pick" />
      <Topseller subcategoryName="Coffee%20Corner" title="Coffee Corner" />
      <Brands />
      <Machine />
    </div>
  );
}
