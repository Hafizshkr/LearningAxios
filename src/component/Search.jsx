import React from "react";
import useProductStore from "./ProductStore";
import Card from "./Card";

const Search = () => {
  const productList = useProductStore((state) => state.productList);
  const [search, setSearch] = useState("");

  //filter function
  const filteredProduct = productList
    .filter((products) =>
      products.title.toLowerCase().includes(search.toLowerCase())
    )
    .map((filteredProduct) => <div id={filteredProduct.id}></div>);
  return (
    <div className="  relative px-2 py-2 flex w-full flex-wrap align-center justify-center">
      <input
        className="border bg-white border-gray-400 rounded-full  shadow-xl flex justify-center item-center text-center py-2 mt-5  static"
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Card products={filteredProduct}/>
    </div>
  );
};

export default Search;
