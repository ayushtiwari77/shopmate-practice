import { useCart } from "../context/CartContext";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="cardhai flex items-center justify-between p-2 rounded-md">
      <img src={product.image} alt="meritasveer" className="h-36" />
      <p className="text-xl font-medium">{product.name}</p>
      <p className="text-xl font-medium">${product.price}</p>
      <button
        onClick={() => removeFromCart(product)}
        className="p-1 bg-red-600 text-white border-none rounded-md"
      >
        remove item
      </button>
    </div>
  );
};
