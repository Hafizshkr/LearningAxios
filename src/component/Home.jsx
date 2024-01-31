import React, { useState } from "react";
import Search from "./Search";
import useProductStore from "./ProductStore";
import Card from "./Card";  // Import the Card component

const Home = ({ listOfItem }) => {
  const productList = useProductStore((state) => state.productList);
  const [selectedCategory, setSelectorCategory] = useState("");

  const handleCategory = (category) => {
    setSelectorCategory(category);
  };

  return (
    <>
      <Search />
      <div className="main-body flex justify-center items-center flex-row">
        <div className="left-side w-full md:w-1/2 lg:w-1/5  md-hidden ">
          <div className="flex sm:pl-1 lg:pl-3 xl:pl-5 md:pl-5 mt-6 lg:ml-[150px] md:ml-[100px] sm:ml-[50px]  border rounded-xl h-[300px] py-5 px-3 shadow-xl ">
            <form action="">
              <div className="flex flex-col ">
              </div>
            </form>
          </div>
        </div>
        <div className="right-side w-full md:w-3/4 lg:w-4/5">
          <div className="flex justify-center  flex-wrap  mt-5">
            <Card products={listOfItem.filter((product) => 
              (selectedCategory === "" || product.category === selectedCategory)
            )} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
