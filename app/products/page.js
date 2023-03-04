import { HiPlus } from "react-icons/hi";
import ProductCards from "./ProductCards";

const Products = async () => {
  const res = await fetch(
    "https://product-management-server-omega.vercel.app/orders"
  );
  const data = await res.json();
  return (
    <section className="w-full px-5">
      <div className="flex justify-between my-5">
        <h1 className="text-2xl capitalize font-semibold">My Products</h1>
        <button className="btn btn-outline btn-sm border-borderGray">
          <HiPlus />
        </button>
      </div>
      <div className="grid grid-cols-1 ">
        {data?.map((order) => (
          <ProductCards key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default Products;
