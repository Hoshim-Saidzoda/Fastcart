import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "../SellingPage/SellingSlice";
import { IMG_API } from "../../store/api";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SellingPage = ({ products, title }) => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Проверка доступности скролла
  const checkScrollButtons = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScrollButtons();
  }, [products]);

   const handleScroll = () => checkScrollButtons();

   const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <section className="mb-10 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>

         <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition ${
              canScrollLeft
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition ${
              canScrollRight
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

       <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory"
      >
        {products.map((item) => (
          <div key={item.id} className="  w-[300px] snap-start">
            <Card
              type="product"
              id={item.id}
              title={item.productName}
              price={item.price}
              discount={item.hasDiscount ? item.discountPrice : 0}
              image={
                item.image
                  ? `${IMG_API.replace(/\/$/, "")}/images/${item.image}`
                  : "/default.png"
              }
            />
          </div>
        ))}
      </div>

       <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default React.memo(SellingPage);
