import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout title="물건 상세" canGoBack hasTabBar>
      <div className="px-4">
        <div>
          {/* //제품사진 */}
          <div className="h-96 bg-slate-500" />

          <div className="flex my-1 py-3 border-b">
            <div className="h-10  w-10 bg-slate-500 rounded-full" />
            <div className="flex flex-col justify-center items-start ml-2 cursor-pointer">
              <p className="text-sm font-medium text-gray-700 ">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>

          <div className="py-4 mt-5">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <span className="text-3xl block mt-3 text-gray-900">$140</span>
            <p className="text-base my-6 text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>

            <div className="flex items-center justify-between space-x-4">
              {/* <button className="flex-1 bg-orange-500 text-white py-3 rounded-md shadow-sm font-md focus:ring-orange-500 focus:ring-offset-2 focus:ring-2 hover:bg-orange-600">
                Talk to seller
              </button> */}
              <Button text="Talk to seller" large />
              <button className="flex items-center justify-center">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold my-1">Similar items</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i} className="mb-2">
                <div className="h-56 w-full bg-slate-400" />
                <h3 className="text-gray-700 mt-2">Galaxy S60</h3>
                <p className="text-bold text-sm">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
