import { NextPage } from "next";

const Edit: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center justify-start space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-400" />
        <label
          htmlFor="pics"
          className="cursor-pointer p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-offset-2"
        >
          Change photo
          <input type="file" id="pics" className="hidden" accept="image/*" />
        </label>
      </div>

      <div className="space-y-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="emailInput"
        >
          Email address
        </label>
        <input
          id="emailInput"
          type="email"
          required
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="space-y-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="phoneInput"
        >
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center text-sm px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none">
            +82
          </span>
          <input
            id="phoneInput"
            type="number"
            required
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <button className="mt-6 bg-orange-500 w-full hover:bg-orange-600 text-white py-2 px-4 border border-y-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Update profile
      </button>
    </div>
  );
};

export default Edit;
