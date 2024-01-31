import React from "react";

const Search = ({ setSearch }) => {
  return (
    <>
      <input
        className="border bg-white border-gray-400 rounded-full  shadow-xl flex justify-center item-center text-center py-2 mt-5  static"
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </>
  );
};

export default Search;
