import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const ProductCards = ({ order }) => {
  const { userName, userImage, lastOrdered, totalMoney, totalItems } = order;
  const timestamp = lastOrdered;
  const date = new Date(timestamp * 1000); // convert Unix timestamp to JavaScript Date object
  const humanized = formatDistance(date, new Date(), { addSuffix: true });
  return (
    <div className="grid grid-cols-4 gap-3 border-b border-borderGray py-3">
      <div className="col-span-1">
        <Image
          src={userImage}
          width="200"
          height="200"
          className="w-full rounded-full"
        />
      </div>
      <div className="col-span-2 p-2 space-y-1">
        <h2 className="font-semibold">{userName}</h2>
        <h3 className="text-xs font-semibold text-gray-700">{humanized}</h3>
        <div className="flex justify-start  items-center">
          <h3 className="text-xs font-semibold text-gray-700 border-r border-borderGray pr-3 mr-3">
            {totalMoney}
          </h3>

          <h3 className="text-xs font-semibold text-gray-700">
            {totalItems} items
          </h3>
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
  );
};

export default ProductCards;
