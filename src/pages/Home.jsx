import React, { useEffect, useState } from "react";
import { axiosRequest } from "../store/api";
import Banner from "../components/Banner";
import ProductPage from "../components/ProductPage";
import MusicPromo from "../components/MusicPromo";
import BrowseSlider from "../components/Browse/Browse";

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

      {loading && <p className="text-center text-gray-500 my-10"> </p>}

      <div className="flex gap-4 items-start mt-10">
        <div className="flex-1">
          <ProductPage products={products} title="Products" />
        </div>
      </div>

      <MusicPromo />

      <div className="flex-1 mt-10">
        <BrowseSlider products={products} title="Browse Products" />
      </div>
    </div>
  );
};

export default Home;
