import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const HomeCard = ({ product }) => {
  const { addToCart, cartList, removeFromCart } = useCart();

  const [ispresent, setIsPresent] = useState(false);

  useEffect(() => {
    const temp = cartList.find((elem) => elem.id === product.id);
    setIsPresent(temp);
  }, [cartList]);

  return (
    <div className="cardhai p-3   m-3 flex flex-col justify-center  gap-2 w-96 ">
      <img src={product.image} alt="productimage" className="h-60 " />
      <h1 className="text-xl">{product.name}</h1>
      <div className="flex text-xl items-center justify-between ">
        <h2> ${product.price}</h2>

        {ispresent ? (
          <button
            onClick={() => removeFromCart(product)}
            className="p-1 bg-red-600 text-white border-none rounded-md"
          >
            remove item
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="p-1 bg-blue-500 text-white border-none rounded-md"
          >
            add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
