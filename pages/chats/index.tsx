import { NextPage } from "next";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px] ">
        {[1, 2, 3, 4].map((_, i) => (
          <div className="flex my-1 px-4 py-3">
            <div className="h-10  w-10 bg-slate-300 rounded-full" />
            <div className="flex flex-col justify-center items-start ml-2 cursor-pointer">
              <p className=" font-medium text-gray-700 ">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">See you soon!</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
