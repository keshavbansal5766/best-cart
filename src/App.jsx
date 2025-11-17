import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useAppContext } from "./context/AppContext";
import AllProducts from "./pages/AllProducts";
import ProductCategories from "./pages/ProductCategories";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import AddAddress from "./components/AddAddress";
import MyOrders from "./components/MyOrders";
const App = () => {
  const { showUserLogin } = useAppContext();
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div>
      <Toaster />
      {!isSellerPath && <Navbar />}
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategories />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
      {showUserLogin ? <Login /> : null}
    </div>
  );
};

export default App;
