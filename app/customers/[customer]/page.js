import { formatDistance } from "date-fns";
import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Customer = async ({ params }) => {
  const res = await fetch(
    `https://product-management-server-omega.vercel.app/order?id=${params.customer}`
  );
  const data = await res.json();
  const { userName, userImage, lastOrdered, totalMoney, totalItems } = data;
  const timestamp = lastOrdered;
  const date = new Date(timestamp * 1000); // convert Unix timestamp to JavaScript Date object
  const humanized = formatDistance(date, new Date(), { addSuffix: true });
  return (
    <section className="container p-5 max-w-lg  ">
      <div className="text-center">
        <Image
          src={userImage}
          width="500"
          height={500}
          alt={userName}
          className="w-2/4 max-w-md mx-auto  shadow-lg  mask mask-squircle"
          priority
        />
        <h1 className="text-center text-lg capitalize font-semibold mt-3 lg:text-3xl">
          {userName}
        </h1>
        <h2 className="text-xs lg:text-base">last ordered{humanized}</h2>
        <div className="flex justify-center space-x-2">
          <AiOutlineMail className="text-xl hover:scale-105 transition-transform cursor-pointer" />
          <AiOutlinePhone className="text-xl hover:scale-105 transition-transform cursor-pointer" />
        </div>
      </div>
      <div className="grid gap-3 grid-cols-fluid mt-5">
        <div className="p-3 bg-white text-center space-y-2  rounded border border-borderGray lg:p-5">
          <h2 className="text-lg lg:text-2xl font-semibold">Total Paid</h2>
          <h2>{totalMoney}</h2>
        </div>
        <div className="p-3 bg-white text-center space-y-2  rounded border border-borderGray lg:p-5">
          <h2 className="text-lg lg:text-2xl font-semibold">Ordered Items</h2>
          <h2>{totalItems}</h2>
        </div>
      </div>
    </section>
  );
};

export default Customer;
