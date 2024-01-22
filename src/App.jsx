import axios from "axios";
import Home from "./component/Home.jsx"
import { useQuery } from "@tanstack/react-query";

const App = () => {
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
    return <span>Loading....</span>;
  }

  if (error) {
    return <span>Error:{error.message}</span>;
  }

  return (
    <>
      <Home listOfItem={data.products} />
    </>
  );
};

export default App;
