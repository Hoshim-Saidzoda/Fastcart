import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrowseCard from "./BrowseCard";
import { IMG_API } from "../../store/api";
import { fetchCategories } from "../../store/browseSlice";

const BrowseSlider = ({ title }) => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories?.items || []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const scrollLeft = () => containerRef.current.scrollBy({ left: -600, behavior: "smooth" });
  const scrollRight = () => containerRef.current.scrollBy({ left: 600, behavior: "smooth" });

  return (
    <section className="mb-20 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="bg-gray-50 w-10 h-10 rounded-full hover:bg-gray-400">&#10094;</button>
          <button onClick={scrollRight} className="bg-gray-200 w-10 h-10 rounded-full hover:bg-gray-400">&#10095;</button>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-4" style={{ overflowX: "hidden" }}>
        {categories.map((item) => (
          <div key={item.id} className="shrink-0  ">
            <BrowseCard
              image={`${IMG_API}/images/${item.categoryImage}`}
              title={item.categoryName || "No Name"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseSlider;
