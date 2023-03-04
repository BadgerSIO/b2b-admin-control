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
    </main>
  );
}
