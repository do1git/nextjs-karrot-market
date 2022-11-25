import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../components/floating-button";
import Item from "../components/item";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Homme" hasTabBar>
      <div className="px-4 divide-y-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          // <Link href={`/items/1`} key={i}>
          //   <div
          //     key={i}
          //     className="flex justify-between py-2 border-gray-200 w-full"
          //   >
          //     <div className="flex">
          //       <div className="w-20 h-20 bg-gray-400 rounded-md mr-4" />
          //       <div className="flex flex-col space-y-1 justify-center">
          //         <h3 className="text-sm">New iPhone 14</h3>
          //         <span className="text-xs text-gray-500">Black</span>
          //         <span className="text-sm font-medium">$95</span>
          //       </div>
          //     </div>

          //     <div className="flex justify-end items-end space-x-2">
          //       <div className="flex items-center text-xs text-gray-600">
          //         <svg
          //           className="w-4 h-4"
          //           fill="none"
          //           stroke="currentColor"
          //           viewBox="0 0 24 24"
          //           xmlns="http://www.w3.org/2000/svg"
          //         >
          //           <path
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             strokeWidth="2"
          //             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          //           ></path>
          //         </svg>
          //         <span>1</span>
          //       </div>

          //       <div className="flex items-center text-xs text-gray-600">
          //         <svg
          //           className="w-4 h-4"
          //           fill="none"
          //           stroke="currentColor"
          //           viewBox="0 0 24 24"
          //           xmlns="http://www.w3.org/2000/svg"
          //         >
          //           <path
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             strokeWidth="2"
          //             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          //           ></path>
          //         </svg>
          //         <span>1</span>
          //       </div>
          //     </div>
          //   </div>
          // </Link>
          <Item
            id={i}
            title="iphone19"
            price={99}
            comments={1}
            hearts={2}
            key={i}
          />
        ))}

        <FloatingButton href="/items/upload">
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
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
