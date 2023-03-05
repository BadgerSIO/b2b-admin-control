import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomerCard = ({ order }) => {
  const { userName, userImage, totalItems, _id } = order;

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
        <h3 className="text-xs font-semibold text-gray-700">
          <span className="text-base">{totalItems}</span> Orders
        </h3>
      </div>
      <div className="col-span-1  justify-self-end place-self-center ">
        <Link
          href={`/customers/${_id}`}
          className="btn btn-xs btn-outline capitalize border-borderGray "
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default CustomerCard;
