import React, { useRef } from "react";
import Card from "../SellingPage/SellingSlice";
import { IMG_API } from "../../store/api";

const SellingPage = ({ products, title }) => {
  const containerRef = useRef(null);

   const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <section className="mb-10 max-w-7xl mx-auto px-4">
       <div className="flex items-center justify-between mb-8">
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
        className="flex gap-4" style={{ overflowX: "hidden" }}>
       
        {products.map((item) => (
          <div key={item.id} className="w-[300px] flex-shrink-0 snap-start ">
            <Card
              id={item.id}
              title={item.productName}
              price={item.price}
              discount={item.hasDiscount ? item.discountPrice : 0}
              image={`${IMG_API}/images/${item.image}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(SellingPage);
