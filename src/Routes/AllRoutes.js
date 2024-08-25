import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/cart" element={<CartPage></CartPage>}></Route>
    </Routes>
  );
};
