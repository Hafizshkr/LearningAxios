import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "./LoadingAnimation";
import useStore from "./store";

const FetchData = () => {
  const { data: Data, setData } = useStore(); // variable for store in zustand.

  const url = "https://dummyjson.com/products";

  const getData = async () => {
    const res = await axios.get(url);
    const fetchedData = res.data;
    setData(fetchedData); // storing data in useStore;
    console.log(res.data);
    return fetchedData;
  };

  //setup useQuery using tanstack
  const { isFetching, data, error } = useQuery({
    queryKey: ["FetchData"],
    queryFn: getData,
  });

  if (isFetching) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <span className="flex justify-center items-center pt-20">
        Error:{error.message}
      </span>
    );
  }

  return;
  <></>;
};

export default FetchData;
