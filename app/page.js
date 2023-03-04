import RecentOrders from "./RecentOrders";

export default function Home() {
  return (
    <main className="w-full px-5 py-5">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Welecome {"Airpul"} 👋</h1>
        <select className="select select-bordered w-36 ">
          <option value={"today"}>Today</option>
          <option value={"yesterday"}>Yesterday</option>
          <option value={"lastMonth"}>Last Month</option>
        </select>
      </div>
      <div className="grid grid-cols-fluid gap-3 my-5">
        <div className="p-3 bg-white space-y-2 shadow rounded-md">
          <h3 className="text-sm uppercase">Orders</h3>
          <h4 className="text-xl font-bold">239</h4>
        </div>
        <div className="p-3 bg-white space-y-2 shadow rounded-md">
          <h3 className="text-sm uppercase">Total sales</h3>
          <h4 className="text-xl font-bold">239,876 BDT</h4>
        </div>
        <div className="p-3 bg-white space-y-2 shadow rounded-md">
          <h3 className="text-sm uppercase">Store views</h3>
          <h4 className="text-xl font-bold">32,876</h4>
        </div>
        <div className="p-3 bg-white space-y-2 shadow rounded-md">
          <h3 className="text-sm uppercase">Product views</h3>
          <h4 className="text-xl font-bold">52,876</h4>
        </div>
      </div>
      <div>
        <h2>Recent Orders</h2>
        <RecentOrders />
      </div>
    </main>
  );
}
