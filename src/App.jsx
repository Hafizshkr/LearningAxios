import axios from "axios";
import Home from "./component/Home.jsx";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./component/LoadingSpinner.jsx";
import useProductStore from "./component/ProductStore.jsx";


const App = () => {
  //useQuery from tanstack to fetch API.
  const url = "https://dummyjson.com/products";
  const fetchData = async () => {
    const res = await axios.get(url);
    return res.data;
  };
  const { isFetching, data, error } = useQuery({
    queryKey: ["App"],
    queryFn: fetchData,
  });

  if (isFetching) {
    return (
      <span>
        <div role="status">
          <LoadingSpinner/>
        </div>
      </span>
    );
  }

  if (error) {
    return <span>Error:{error.message}</span>;
  }

  //set data to the zustand store.
  useProductStore((state) => state.setProductList(data?.products || []));

  return (
    <>
      <Home/>
    </>
  );
};

export default App;
