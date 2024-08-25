import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const cartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //add to cart
  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (item) => item.id !== product.id
    );
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};
