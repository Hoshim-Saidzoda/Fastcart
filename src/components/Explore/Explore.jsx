import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ExploreSlice";
import { fetchProducts } from "../../store/productSlice";
import { fetchCategories } from "../../store/browseSlice";
import { IMG_API } from "../../store/api";

const Explore = () => {
  const dispatch = useDispatch();
  const { items: products } = useSelector(s => s.products);
  const { items: browseItems } = useSelector(s => s.categories);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const getImage = (item, type) =>
    `${IMG_API}/images/${type === "browse" ? item.categoryImage || item.icon : item.image}`;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="mb-10 flex gap-6 min-w-max overflow-x-auto">
        {products?.slice(0, 12).map(p => (
          <ProductCard
            key={p.id}
            image={getImage(p)}
            title={p.productName || "Без названия"}
            price={p.price || 0}
            oldPrice={p.hasDiscount ? p.discountPrice : null}
            isNew={p.isNew === true}
            rating={4.5}
            reviews={50}
            className="w-72 shrink-0"
          />
        ))}
      </section>

      <section className="mb-20 flex gap-6 min-w-max overflow-x-auto mt-6">
        {browseItems?.map(c => (
          <ProductCard
            key={c.id}
            image={getImage(c, "browse")}
            title={c.categoryName || "Без названия"}
            price={c.price || 0}
            oldPrice={c.hasDiscount ? c.discountPrice : null}
            isNew={c.isNew === true}
            rating={4.5}
            reviews={50}
            className="w-72 shrink-0"
          />
        ))}
      </section>

     
    </div>
  );
};

export default React.memo(Explore);
