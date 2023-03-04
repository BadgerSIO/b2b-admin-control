import Image from "next/image";
import Link from "next/link";

const ProductCards = ({ product }) => {
  const { name, shortDescription, price, image } = product;

  return (
    <>
      <div className="grid grid-cols-6 gap-3 border-b border-borderGray py-3">
        <div className="col-span-2">
          <Image
            src={image}
            width="200"
            height="200"
            className="w-full rounded border border-borderGray"
          />
        </div>
        <div className="col-span-3 p-2 space-y-1">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-xs font-semibold text-gray-700">
            {shortDescription.slice(0, 22)}
          </p>
          <div className="flex justify-start  items-center">
            <h3 className="text-xs font-semibold text-gray-700 ">{price}</h3>
          </div>
        </div>
        <div className="col-span-1  justify-self-end place-self-center ">
          <Link
            href={`/`}
            className="btn btn-xs btn-outline capitalize border-borderGray "
          >
            View
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
