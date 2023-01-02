import { cls } from "../libs/client/utils";

interface IMessage {
  message: string;
  reversed?: boolean;
}

export default function Message({ message, reversed = false }: IMessage) {
  return (
    <>
      {/* {!reversed ? (
        <div className="flex items-start space-x-2 ">
          <div className="w-8 h-8 rounded-full bg-slate-400 " />
          <div className="w-1/2 text-gray-700 border border-gray-700 text-sm p-2 rounded-md">
            {message}
          </div>
        </div>
      ) : (
        <div className="flex items-start space-x-2 space-x-reverse flex-row-reverse  ">
          <div className="w-8 h-8 rounded-full bg-slate-400 " />
          <div className="w-1/2 text-gray-700 border border-gray-700 text-sm p-2 rounded-md">
            {message}
          </div>
        </div>
      )} */}
      <div
        className={cls(
          "flex items-start space-x-2",
          reversed ? "space-x-reverse flex-row-reverse" : ""
        )}
      >
        <div className="w-8 h-8 rounded-full bg-slate-400 " />
        <div className="w-1/2 text-gray-700 border border-gray-700 text-sm p-2 rounded-md">
          {message}
        </div>
      </div>
    </>
  );
}
