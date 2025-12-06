import React, { useRef, useState, useEffect } from "react";
import Card from "../components/Card";
import { IMG_API } from "../store/api";
 
const ProductPage = ({ products, title, discountEnd }) => {
 


  const containerRef = useRef(null);
  
     const scrollLeft = () => {
      containerRef.current.scrollBy({ left: -600, behavior: "smooth" });
    };
  
    const scrollRight = () => {
      containerRef.current.scrollBy({ left: 600, behavior: "smooth" });
    };
  



  const [now, setNow] = useState(Date.now());

   useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

    
   
   
 
   const diff = Math.max(new Date(discountEnd || "2025-12-05T23:59:59") - now, 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return (
    <section className="mb-10 max-w-7xl">
       <div className="flex justify-center gap-4 mb-6 text-center">
        {[
          ["Days", days],
          ["Hours", hours],
          ["Minutes", minutes],
          ["Seconds", seconds]
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col px-4 py-2 rounded">
            <span className="text-xs">{label}</span>
            <span className="text-2xl font-bold">{value}</span>
          </div>
        ))}
      </div>

       <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>

         <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="bg-gray-50 w-10 h-10 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
          >
            &#10094;
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-50 w-10 h-10 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
          >
            &#10095;
          </button>
        </div>
      </div>

       <div
        ref={containerRef}
        className="flex gap-10" style={{ overflowX: "hidden" }}>
        {products.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[280px]  snap-start">
            <Card
              type="product"
              id={item.id}
              title={item.productName}
              price={item.price}
              discount={item.hasDiscount ? item.discountPrice : 0}
              image={
                  `${IMG_API}/images/${item.image}`
                     }
            />
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default React.memo(ProductPage);
