import { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <div className="py-10  space-y-4 divide-y-2">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div className="pt-4 px-4">
          <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
          <h3 className="mt-2 text-lg">brandnew kickBoards</h3>
        </div>
      ))}

      <button className="fixed bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors border-transparent text-white w-14 h-14 bottom-10 right-10 flex justify-center items-center rounded-full shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Stream;
