import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const url = "https://dummyjson.com/products";

  const getData = async () => {
    const res = await axios.get(url);
    const fetchedData = res.data;
    console.log(fetchedData);
    return fetchedData;
  };

  //setup useQuery using tanstack
  const { isFetching, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });

  //   if (isFetching) {
  //     return <LoadingAnimation />;
  //   }

  //   if (error) {
  //     return (
  //       <span className="flex justify-center items-center pt-20">
  //         Error:{error.message}
  //       </span>
  //     );
  //   }

  const products = data && data.products ? data.products : [];

  return { isFetching, error, products };
};

export default useProducts;
