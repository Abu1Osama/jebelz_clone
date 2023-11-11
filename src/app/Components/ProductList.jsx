import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, fetchProductsBySubcategory } from "../Redux/CategoriesRedux/action";

function ProductList() {
  const product=useSelector((store) => store.productReducer.products)
  const [subcategory, setSubcategory] = useState(null);
  const SearchParams = useSearchParams();
  const search = SearchParams.get('category')
  const decodedSubcategory = decodeURIComponent(search);
  const SearchParams2 = useSearchParams();
  const search2 = SearchParams2.get('subcategory')
  const decodedSubcategory2 = decodeURIComponent(search2);
  
  // const fetchCategoryData = async (categoryTitle) => {
  //   try {
  //     const response = await axios.get(
  //       `https://jebelz-nextjs.onrender.com/products/category/${categoryTitle}`
  //     );

  //     setProduct(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchData = async (selectedcategory = decodedSubcategory) => {
    try {
      const response = await axios.get(
        `https://jebelz-nextjs.onrender.com/products/category/${selectedcategory}`
      );

      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // const fetchSubcategoryData = async (selectedSubcategory) => {
  //   try {
  //     const response = await axios.get(
  //       `https://jebelz-nextjs.onrender.com/products/subcategory/${selectedSubcategory}`
  //     );

  //     setProduct(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchSubcategoryData = async (selectedSubcategory=decodedSubcategory2) => {
    try {
      const response = await axios.get(
        `https://jebelz-nextjs.onrender.com/products/subcategory/${(selectedSubcategory)}`
      );
  
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchProductsByCategory(search))
  
    // fetchData()
    // fetchSubcategoryData();
  }, [search]);
  useEffect(() => {
  
    dispatch(fetchProductsBySubcategory(search2))
    // fetchData()
    // fetchSubcategoryData();
  }, [search2]);
  return (
   
    <div className="product-list  mx-5">
      <div className="bg-gray-100 py-2 px-5">
        <h3 className="text-xl font-semibold">{search2}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 items-center py-2 px-5 ">
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold">Ice Makers</h3>
        </div>
        <div className="flex justify-between md:col-span-4 border-b py-2" >
          <div>{product.length} items</div>
          <div className="flex items-center">
            <label htmlFor="sortOption" className="mr-2">
              Sort By
            </label>
            <select id="sortOption" className="py-1 px-2 border rounded">
            <option value="">position</option>
            </select>
          </div>
        </div>
      </div>

      <div className=" productlist">
      {/* <div className=" productlist grid grid-cols-1 md:grid-cols-5 gap-5 lg:grid-cols-2"> */}
        <div className=" productlist-left border">
        {/* <div className=" productlist-left md:col-span-1"> */}
          <Sidebar onCategoryClick={fetchData}  onsub={fetchSubcategoryData}/>
        </div>

        <div className=" productlist-right">
          <div className="productlist-content">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5"> */}
            {product.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
