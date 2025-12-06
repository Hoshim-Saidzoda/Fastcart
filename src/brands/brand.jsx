import { apiInstance, IMG_API } from "../store/api";
import React, { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      const { data } = await apiInstance.get("Brand/get-brands", {
        params: {
          BrandName: "",
          BrandId: 0,
          PageNumber: 1,
          PageSize: 20,
          image: [],
        },
      });

      console.log(data);
      setBrands(data.data);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div>
      {brands.map(b => (
        <div key={b.id}>
          <h3>{b.brandName}</h3>
           <img src={`${IMG_API}/images/${b.image}`} alt={b.id} width={120} />
        </div>
      ))}
    </div>
  );
}

export default Brands;
