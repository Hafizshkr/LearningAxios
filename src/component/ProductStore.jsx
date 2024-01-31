import { create } from "zustand";

const useProductStore = create((set) => ({
  productList: [],
  setProductList: (data) => set({ productList: data }),
}));


export default useProductStore