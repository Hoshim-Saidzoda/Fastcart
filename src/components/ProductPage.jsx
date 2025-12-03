import React, { useRef, useState, useEffect } from "react";
import Card from "../components/Card";
import { IMG_API } from "../store/api";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductPage = ({ products, title, discountEnd }) => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [now, setNow] = useState(Date.now());

  // Таймер обновляется каждую секунду
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Проверка доступности скролла
  const checkScrollButtons = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 3);
  };

  useEffect(() => {
    checkScrollButtons();
  }, [products]);

  const handleScroll = () => checkScrollButtons();

  const scrollStep = 180 * 3; // 3 карточки
  const scrollLeft = () => sliderRef.current?.scrollBy({ left: -scrollStep, behavior: "smooth" });
  const scrollRight = () => sliderRef.current?.scrollBy({ left: scrollStep, behavior: "smooth" });

  if (!products?.length) return null;

  // Таймер
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

        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              canScrollLeft
                ? "bg-white hover:bg-gray-100 text-black"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              canScrollRight
                ? "bg-white hover:bg-gray-100 text-black"
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
          <div key={item.id} className="flex-shrink-0 w-[280px] snap-start">
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

      
    </section>
  );
};

export default React.memo(ProductPage);
