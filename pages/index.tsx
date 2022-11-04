export default function Home() {
  return (
    <>
      <div className="bg-slate-400 py-20 px-20 flex flex-col space-y-5 min-h-screen ">
        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <span className="font-semibold text-3xl">Select Item</span>
          <ul>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex justify-between my-2 first:bg-blue-50 last:bg-blue-50"
              >
                <span className="text-gray-500">Grey chair</span>
                <span className="font-semibold">$39</span>
              </div>
            ))}
            {/* 
            <div className="flex justify-between my-2">
              <span className="text-gray-500">Grey chair</span>
              <span className="font-semibold">$39</span>
            </div>

            <div className="flex justify-between my-2">
              <span className="text-gray-500">Tooly table</span>
              <span className="font-semibold">$19</span>
            </div> */}
          </ul>

          <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
            <span>Total</span>
            <span className="font-semibold">$99</span>
          </div>
          <button className="mt-5 hover:bg-teal-500 active:bg-blue-400 focus:text-red-500 bg-blue-400 text-white p-3 text-center rounded-xl w-1/2 mx-auto">
            checkout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden ">
          <div className="bg-rose-300 p-6 pb-14">
            <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-2xl bg-white relative -top-5 p-6 group transition">
            <div className="flex items-end justify-between relative -top-16">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="h-24 w-24 bg-red-400 rounded-full flex justify-center items-center text-4xl group-hover:bg-purple-400">
                👩‍🦰
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400">Spent</span>
                <span className="font-medium">$2,310</span>
              </div>
            </div>
            <div className="relative -mt-16 flex flex-col items-center">
              <span className="text-lg font-medium">TONY</span>
              <span className="text-sm text-gray-500">Sanfrancisco, USA</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-5">
            <span>&larr;</span>
            <div className="space-x-4">
              <span>⭐ 4.9</span>
              <span className="shadow-xl p-2 rounded-md">❤</span>
            </div>
          </div>
          <div className=" max-w-full mb-5 flex justify-center items-center">
            <div className="bg-zinc-400 h-72 w-72"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-xl">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="mt-2 mb-5 flex justify-between items-center">
              <div className="space-x-3">
                <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
                <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
                <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
              </div>
              <div className="flex items-center space-x-5">
                <button className="p-2 bg-blue-200 flex rounded-lg justify-center items-center aspect-square w-10 font-medium text-xl text-gray-500">
                  -
                </button>
                <span>1</span>
                <button className="p-2 bg-blue-200 flex rounded-lg justify-center items-center aspect-square w-10 font-medium text-xl text-gray-500">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-2xl">$460</span>
              <button className="bg-blue-500 text-center text-white rounded-lg p-4">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <form className="flex flex-col space-y-2 bg-blue-400 p-3 focus-within:bg-blue-100">
            <input
              type="text"
              required
              placeholder="userNm"
              className="required:border-2 border-red-600"
            />
            <input type="password" required placeholder="userPw" />
            <input
              type="submit"
              required
              value="login 하기"
              className="border-2"
            />
          </form>
        </div>
      </div>
    </>
  );
}
