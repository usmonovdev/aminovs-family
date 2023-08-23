import axios from "../config/axios-config";
import React, { useEffect, useState } from "react";
import drink from "../image/drink1.png";
import star from "../image/icons/star.svg";
import eye from "../image/icons/eye.svg";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("products/product-list");
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="custom-container mb-10">
      {product.length == 0 ? (
        <p className="text-center">Mahsulot topilmadi!</p>
      ) : isLoading ? (
        <p className="text-center">Yuklanmoqda...</p>
      ) : (
        <>
          <div className="products-card">
            {product.map((product) => {
              return (
                <div
                  key={product.id}
                  className="product relative rounded-xl flex flex-row gap-3 p-4 items-center"
                >
                  <img
                    src={product.image}
                    className="h-full object-cover w-[120px]"
                    alt="drink"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-[22px]">
                      {product.name == null ? "Fructis" : product.name}
                    </p>
                    <p className="text-[#50A211]">{product.price} so'm</p>
                    <div className="flex flex-row gap-3">
                      <img src={star} className="w-[22px]" />
                      <img src={star} className="w-[22px]" />
                      <img src={star} className="w-[22px]" />
                      <img src={star} className="w-[22px]" />
                      <img src={star} className="w-[22px]" />
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                      <img src={eye} className="w-[35px]" alt="eye" />
                      <p>326</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
