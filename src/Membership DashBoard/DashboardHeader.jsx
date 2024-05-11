export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="bg-zinc-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Total Customers: 235</h2>
        <p className="text-sm text-zinc-600">Current gym members</p>
      </div>
      <button className="text-zinc-500 hover:text-zinc-700">
        <span className="text-xl">×</span>
      </button>
    </div>
  );
}
