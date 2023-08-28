import axios from "../config/axios-config";
import React, { useEffect, useMemo, useState } from "react";
import star from "../image/icons/star.svg";
import eye from "../image/icons/eye.svg";
import { Filtering } from "../ui";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState("all");
  console.log(selected);

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

  function getFiltered() {
    if (selected == "all") {
      return product
    }
    return product.filter((e) => e.type.type == selected)
  }

  var filteredData = useMemo(getFiltered, [selected, product])
  console.log(filteredData);

  return (
    <>
      <Filtering selected={selected} setSelected={setSelected} />
      <div className="custom-container pt-8 mb-10" data-aos="fade-up">
        {isLoading ? (
          <p className="text-center">Yuklanmoqda...</p>
        ) : filteredData.length == 0 ? (
          <p className="text-center">Mahsulot topilmadi!</p>
        ) : (
          <>
            <div className="products-card">
              {filteredData.map((product) => {
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
                      <div className="flex flex-row gap-2 items-center">
                        <img src={eye} className="w-[25px]" alt="eye" />
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
    </>
  );
};

export default Products;
