import React, { useRef } from "react";
import BrowseCard from "./BrowseCard";
import { IMG_API } from "../../store/api";

const BrowseSlider = ({ products, title }) => {
  const containerRef = useRef(null);

  if (!products || products.length === 0) return null;

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -600 });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 600  });
  };

  return (
    <section className="mb-20 overflow-hidden">
       <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="bg-gray-300 p-2 rounded hover:bg-gray-400">
            &#10094;
          </button>
          <button onClick={scrollRight} className="bg-gray-300 p-2 rounded hover:bg-gray-400">
            &#10095;
          </button>
        </div>
      </div>

       <div
        ref={containerRef}
        className="flex gap-4"
        style={{ overflowX: "hidden" }}   
      >
        {products.map((item) => (
          <div key={item.id} className="shrink-0 w-74">
            <BrowseCard
              image={item.image ? `${IMG_API.replace(/\/$/, "")}/images/${item.image}` : "/default.png"}
              title={item.productName || "No Name"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(BrowseSlider);
