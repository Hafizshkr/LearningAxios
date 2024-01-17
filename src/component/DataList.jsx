import React, { useState } from "react";
import axios from "axios";

const DataList = ({ listOfItem }) => {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectorCategory] = useState("");

  const handleCategory = (category) => {
    setSelectorCategory(category);
  };

  return (
    <>
      <div className="  relative px-2 py-2 flex w-full flex-wrap align-center justify-center">
        <input
          className="border bg-white border-gray-400 rounded-full  shadow-xl flex justify-center item-center text-center py-2 mt-5  static"
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div className="main-body flex  justify-center item-center flex-row">
        <div className="left-side w-full md:w-1/2 lg:w-1/5  md-hidden ">
          <div className="flex sm:pl-1 lg:pl-3 xl:pl-5 md:pl-5g mt-6 lg:ml-[150px] md:ml-[100px] sm:ml-[50px]  border rounded-xl h-[300px] py-5 px-3 shadow-xl ">
            <form action="">
              <div className="flex flex-col ">
                <h1 className="pb-3 text-xl bold">Categories</h1>
                <label>
                  <input
                    type="radio"
                    id="All"
                    name="radio"
                    checked={selectedCategory === ""}
                    onChange={() => handleCategory("")}
                  />
                  <span className="ml-2">All</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="smartphone"
                    name="radio"
                    checked={selectedCategory === "smartphones"}
                    onChange={() => handleCategory("smartphones")}
                  />
                  <span className="ml-2">Smartphone</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="laptop"
                    name="radio"
                    checked={selectedCategory === "laptops"}
                    onChange={() => handleCategory("laptops")}
                  />
                  <span className="ml-2">Laptop</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="skincare"
                    name="radio"
                    checked={selectedCategory === "skincare"}
                    onChange={() => handleCategory("skincare")}
                  />
                  <span className="ml-2">Skincare</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="grocery"
                    name="radio"
                    checked={selectedCategory === "groceries"}
                    onChange={() => handleCategory("groceries")}
                  />
                  <span className="ml-2">Grocery</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="homedeco"
                    name="radio"
                    checked={selectedCategory === "home-decoration"}
                    onChange={() => handleCategory("home-decoration")}
                  />
                  <span className="ml-2">Home-decoraction</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="fragrance"
                    name="radio"
                    checked={selectedCategory === "fragrances"}
                    onChange={() => handleCategory("fragrances")}
                  />
                  <span className="ml-2">Fragrance</span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="right-side w-full md:w-3/4 lg:w-4/5">
          <div className="w flex justify-center  flex-wrap  mt-5">
            {listOfItem
              .filter((products) =>
                (selectedCategory === "" || products.category === selectedCategory) && products.title.toLowerCase().includes(search.toLowerCase())
                )
              .map((products) => (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg text-black mx-2 my-2"
                  key={products.id}
                >
                  <img className="w-full" src={products.thumbnail} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {products.title}
                    </div>
                    <div className="font-semibold text-xl mb-2">
                      RM {products.price}
                    </div>
                    <p className="text-black-700 text-base">
                      {products.description}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {products.category}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataList;
