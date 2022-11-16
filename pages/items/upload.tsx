import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16 space-y-6">
      {/* upload */}
      <div>
        <label className="flex justify-center items-center border-dashed border-gray-400 border-2 h-48 rounded-md w-full text-gray-600 hover:text-orange-600 cursor-pointer">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input type="file" className="hidden" />
        </label>
      </div>

      {/* setting price */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Price</label>
        <div className="relative flex justify-between">
          <div className="absolute left-0 pl-3 pt-2 text-gray-500">
            <span>$</span>
          </div>
          <input
            type="text"
            placeholder="0.00"
            className="px-7 w-full rounded-md text-gray-400 focus:border-orange-500 appearance-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="flex items-center pl-2">
            <span>USD</span>
          </div>
        </div>
      </div>

      {/* writting Description */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Description</label>
        <textarea
          rows={4}
          className="w-full rounded-md text-gray-400 focus:border-orange-500 appearance-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-y-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Upload product
      </button>
    </div>
  );
};

export default Upload;