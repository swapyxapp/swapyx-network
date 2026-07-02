export default function SwapWidget() {
  return (
    <section className="max-w-xl mx-auto py-16">
      <div className="border rounded-xl p-8">
        <h2 className="text-2xl font-bold">
          Token Swap
        </h2>

        <input
          className="border w-full mt-6 p-3 rounded"
          placeholder="From Token"
        />

        <input
          className="border w-full mt-4 p-3 rounded"
          placeholder="To Token"
        />

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg">
          Get Best Route
        </button>
      </div>
    </section>
  );
}
