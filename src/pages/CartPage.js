import React from "react";
import { CartCard } from "../components/CartCard";
import { useCart } from "../context/CartContext";

export const CartPage = () => {
  const { cartList } = useCart();

  return (
    <main className="max-w-7xl mx-auto min-h-[90vh]">
      <h1 className="mt-5 text-4xl font-bold text-center">
        Cart Items: {cartList.length} / $29
      </h1>
      <div className="mt-6 flex flex-col items-stretch gap-6">
        {cartList.map((product) => {
          return <CartCard key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
};
