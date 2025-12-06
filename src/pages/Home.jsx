import React, { useEffect, useState } from "react";
import { axiosRequest } from "../store/api";
import Banner from "../components/Banner";
import ProductPage from "../components/ProductPage";
import MusicPromo from "../components/MusicPromo";
import BrowseSlider from "../components/Browse/Browse";
import SellingPage from "../components/SellingPage/Selling";
import Explore from "../components/Explore/Explore";
import Arrival from "../components/Arrival/Arrival"
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await axiosRequest.get("Product/get-products", {
          params: { PageNumber: 1, PageSize: 20 },
        });
        setProducts(res.data.data.products || []);
      } catch (err) {
        console.error("Ошибка загрузки товаров:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Banner />

      {loading && <p className="text-center text-gray-500 my-10">Loading...</p>}

      <div className="flex-1 mt-10">
   <div className="flex items-center gap-3 mb-4">
    <button className="w-5 h-8 bg-red-500 text-red-500  ll flex items-center justify-center text-sm font-bold">
    </button>
    <h2 className="text-red-500 text-xl font-semibold">Today’s</h2>
  </div>

          <ProductPage products={products} title="Flash Sales" />
</div>


      <div className="flex-1 mt-10">
   <div className="flex items-center gap-3 mb-4">
    <button className="w-5 h-8 bg-red-500 text-red-500  ll flex items-center justify-center text-sm font-bold">
    </button>
    <h2 className="text-red-500 text-xl font-semibold">Categories</h2>
  </div>

   <BrowseSlider products={products} title="Browse By Category" />
</div>



<div className="flex-1 mt-10">
   <div className="flex items-center gap-3 mb-4">
    <button className="w-5 h-8 bg-red-500 text-red-500  ll flex items-center justify-center text-sm font-bold">
    </button>
    <h2 className="text-red-500 text-xl font-semibold">This Month
</h2>
  </div>

          <SellingPage products={products} title=" Best Selling Products" />
</div>
 
 
      <MusicPromo />

<div className="flex-1 mt-20">
   <div className="flex items-center gap-3 mb-4">
    <button className="w-5 h-8 bg-red-500 text-red-500  ll flex items-center justify-center text-sm font-bold">
    </button>
    <h2 className="text-red-500 text-xl font-semibold">Our Products
</h2>
  </div>
<h1 className="text-3xl font-bold p-3 mb-5">Explore Our Products</h1>

          <ColorSlider products={fetchColors} title=" tjytjtjt  " />
</div>



 



<Arrival />

         
    </div>
  );
};

export default Home;
 