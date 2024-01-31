// Home.jsx
import Card from "../component/Card";
import CategoryFilter from "../component/CategoryFilter";
import { useState } from "react";
import Search from "../component/Search";
import useProducts from "../hooks/useProducts.jsx";
import LoadingAnimation from "../component/LoadingAnimation.jsx";

const Home = () => {
  // const { data } = useStore();
  const { isFetching, error, products } = useProducts();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectorCategory] = useState("");

  const handleCategory = (category) => {
    setSelectorCategory(category);
  };

  return (
    <>
      <div className="relative px-2 py-2 flex w-full flex-wrap align-center justify-center">
        <Search setSearch={setSearch} />
      </div>
      <div className="main-body flex justify-center item-center flex-row">
        <div className="left-side w-full md:w-1/2 lg:w-1/5 md-hidden">
          {/* passing state to categoryFilter */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            handleCategory={handleCategory}
          />
        </div>
        {isFetching ? (
          <LoadingAnimation />
        ) : (
          <div className="right-side w-full md:w-3/4 lg:w-4/5">
            <div className="flex justify-center flex-wrap mt-5">
              {products &&
                products
                  .filter(
                    (product) =>
                      (selectedCategory === "" ||
                        product.category === selectedCategory) &&
                      product.title.toLowerCase().includes(search.toLowerCase())
                  )

                  .map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
            </div>
          </div>
        )}
        {error !== null ? (
          <span className="flex justify-center items-center pt-20">
            Error:{error.message}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default Home;
