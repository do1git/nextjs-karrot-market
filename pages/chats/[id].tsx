import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-8">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400 " />
        <div className="w-1/2 text-gray-700 border border-gray-700 text-sm p-2 rounded-md">
          Hi how much are you selling them for?
        </div>
      </div>

      <div className="flex flex-row-reverse items-start space-x-reverse space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400 " />
        <div className="w-1/2 text-gray-700 border border-gray-700 text-sm p-2 rounded-md">
          I want ￦20,000
        </div>
      </div>

      <div className="flex flex-row-reverse items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400 " />
        <div className="w-1/2 text-gray-700 border border-gray-700 text-sm p-2 rounded-md">
          미쳤엉
        </div>
      </div>

      <div className="fixed w-full mx-auto max-w-md bottom-0 inset-x-0">
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

export default ChatDetail;
