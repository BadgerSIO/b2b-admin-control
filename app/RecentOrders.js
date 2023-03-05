import OrderCard from "./orders/OrderCard";

const RecentOrders = async () => {
  const res = await fetch(
    "https://product-management-server-omega.vercel.app/orders"
  );
  const data = await res.json();
  return (
    <div className="grid grid-cols-fluid2 gap-3 lg:gap-5 ">
      {data?.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
};

export default RecentOrders;
