import { dummyProducts } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl sm:text-3xl font-medium">Best Seller</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-10 mt-6">
        <ProductCard product={products[0]} />
      </div>
    </div>
  );
};

export default BestSeller;
