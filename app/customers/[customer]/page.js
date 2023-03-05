import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Customer = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/order?id=${params.customer}`);
  const data = await res.json();
  const { userName, userImage, lastOrdered, totalMoney, totalItems } = data;
  return (
    <section className="container p-5 ">
      <div>
        <Image
          src={userImage}
          width="500"
          height={500}
          alt={userName}
          className="w-2/4 max-w-md mx-auto  shadow-lg  mask mask-squircle"
          priority
        />
        <h1 className="text-center text-lg capitalize font-semibold mt-3">
          {userName}
        </h1>
        <div className="flex justify-center space-x-2">
          <AiOutlineMail className="text-xl hover:scale-105 transition-transform cursor-pointer" />
          <AiOutlinePhone className="text-xl hover:scale-105 transition-transform cursor-pointer" />
        </div>
      </div>
      <div className="grid gap-3 grid-cols-fluid mt-5">
        <div className="p-3 bg-white text-center space-y-2 shadow rounded border border-borderGray">
          <h2 className="text-lg font-semibold">Total Paid</h2>
          <h2>{totalMoney}</h2>
        </div>
        <div className="p-3 bg-white text-center space-y-2 shadow rounded border border-borderGray">
          <h2 className="text-lg font-semibold">Ordered Items</h2>
          <h2>{totalItems}</h2>
        </div>
      </div>
    </section>
  );
};

export default Customer;
