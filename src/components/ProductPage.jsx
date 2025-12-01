import React from "react";
import Card from "../components/Card";
import { IMG_API } from "../store/api";

const ProductPage = ({ products, title }) => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products && products.length > 0 ? (
          products.map((item) => (
            <Card
              key={item.id}
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
          ))
        ) : (
          <p>Нет продуктов для отображения</p>
        )}
      </div>
    </section>
  );
};

export default React.memo(ProductPage);
