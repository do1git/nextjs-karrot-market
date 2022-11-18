import { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <div className="py-10  px-4 ">
      <div className="pt-4">
        <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
        <h3 className="mt-4 text-2xl text-gray-800 font-semibold">
          brandnew kickBoards
        </h3>
      </div>

      <div className="mt-10 pb-16 px-4 space-y-4 w-full h-[50vh] overflow-y-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
          <div className="flex items-start space-x-2 ">
            <div className="w-8 h-8 rounded-full bg-slate-400 " />
            <div className="w-1/2 text-gray-700 border border-gray-700 text-sm p-2 rounded-md">
              Hi how much are you selling them for?
            </div>
          </div>
        ))}

        <div className="flex flex-row-reverse items-start space-x-reverse space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400 " />
          <div className="w-1/2 text-gray-700 border border-gray-700 text-sm p-2 rounded-md">
            I want ￦20,000
          </div>
        </div>
      </div>

      <div className="fixed w-full mx-auto max-w-md bottom-4 inset-x-0">
        <div className="flex items-center relative">
          <input
            type="text"
            className="shadow-sm rounded-full w-full pr-12 border-gray-300 focus:ring-orange-500 focus:border-orange-500 focus:ring-1 focus:outline-none"
          />
          <button className="absolute right-4 bottom-2.5 bg-green-300 hover:bg-green-400 cursor-pointer p-1 rounded-full w-6 h-6 flex justify-center items-center">
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreamDetail;
