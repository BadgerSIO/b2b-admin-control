import Link from "next/link";
import { HiPlus } from "react-icons/hi";
import ProductCards from "./ProductCards";

const Products = async () => {
  const res = await fetch(
    "https://product-management-server-omega.vercel.app/b2bproducts",
    { next: { revalidate: 0 } }
  );
  const data = await res.json();
  return (
    <section className="w-full px-5">
      <div className="flex justify-between my-5">
        <h1 className="text-2xl capitalize font-semibold">My Products</h1>
        <Link
          href={`/addproduct`}
          className="btn btn-outline btn-sm border-borderGray"
        >
          <HiPlus />
        </Link>
      </div>
      <div className="grid grid-cols-1 ">
        {data?.map((product) => (
          <ProductCards key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
