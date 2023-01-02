import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/client/utils";

interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  children: React.ReactNode;
  canGoBack?: boolean;
}

export default function Layout({
  title,
  hasTabBar,
  children,
  canGoBack,
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <>
      {/* nav bar */}
      <div
        className={`bg-white max-w-xl w-full text-lg font-medium px-3 py-3 fixed
       text-gray-700 border-b top-0 flex ${
         canGoBack ? "justify-between" : "justify-center"
       } items-center`}
      >
        {canGoBack ? <button onClick={onClick}>&larr;</button> : null}
        {title ?? <span>{title}</span>}
        {canGoBack ? (
          <div className="text-transparent select-none">&rarr;</div>
        ) : null}
      </div>

      <div
        className={cls(
          "pt-16",
          "w-full",
          "max-w-xl, px-4",
          hasTabBar ? "pb-24" : ""
        )}
      >
        {children}
      </div>

      {/* tab bar */}
      {hasTabBar ? (
        <nav className=" bg-white text-gray-800 border-gray-400 border-t-[1.3px] fixed bottom-0 pb-2 pt-3 flex justify-around max-w-xl w-full">
          <Link href="/">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>home</span>
            </div>
          </Link>

          <Link href="/community">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/community"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
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
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <span>동네생활</span>
            </div>
          </Link>
          <Link href="/chats">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/chats"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
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
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <span>채팅</span>
            </div>
          </Link>
          <Link href="/live">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/live"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
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
              <span>라이브</span>
            </div>
          </Link>
          <Link href="/profile">
            <div
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/profile"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span>나의 당근</span>
            </div>
          </Link>
        </nav>
      ) : null}
    </>
  );
}

// import React from "react";
// import Link from "next/link";
// import { cls } from "../libs/utils";
// import { useRouter } from "next/router";

// interface LayoutProps {
//   title?: string;
//   canGoBack?: boolean;
//   hasTabBar?: boolean;
//   children: React.ReactNode;
// }

// export default function Layout({
//   title,
//   canGoBack,
//   hasTabBar,
//   children,
// }: LayoutProps) {
//   const router = useRouter();
//   const onClick = () => {
//     router.back();
//   };
//   return (
//     <div>
//       <div
//         className={cls(
//           !canGoBack ? "justify-center" : "",
//           "bg-green-300 w-full max-w-xl text-lg px-10 font-medium py-3 fixed text-gray-800 border-b top-0  flex items-center"
//         )}
//       >
//         {canGoBack ? (
//           <button onClick={onClick}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 19l-7-7 7-7"
//               ></path>
//             </svg>
//           </button>
//         ) : null}
//         {title ? <span>{title}</span> : null}
//       </div>

//       <div className={cls("pt-12", hasTabBar ? "pb-24" : "", "bg-yellow-200")}>
//         {children}
//       </div>
//       {hasTabBar ? (
//         <nav className="bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between text-xs">
//           <Link href="/">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                 ></path>
//               </svg>
//               <span>홈</span>
//             </span>
//           </Link>
//           <Link href="/community">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
//                 ></path>
//               </svg>
//               <span>동내생활</span>
//             </span>
//           </Link>
//           <Link href="/chats">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                 ></path>
//               </svg>
//               <span>채팅</span>
//             </span>
//           </Link>
//           <Link href="/live">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//                 ></path>
//               </svg>
//               <span>라이브</span>
//             </span>
//           </Link>
//           <Link href="/profile">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                 ></path>
//               </svg>
//               <span>나의 캐럿</span>
//             </span>
//           </Link>
//         </nav>
//       ) : null}
//     </div>
//   );
// }

// import React from "react";
// import Link from "next/link";
// import { cls } from "../libs/utils";
// import { useRouter } from "next/router";

// interface LayoutProps {
//   title?: string;
//   canGoBack?: boolean;
//   hasTabBar?: boolean;
//   children: React.ReactNode;
// }

// export default function Layout({
//   title,
//   canGoBack,
//   hasTabBar,
//   children,
// }: LayoutProps) {
//   const router = useRouter();
//   const onClick = () => {
//     router.back();
//   };
//   return (
//     <div>
//       <div
//         className={cls(
//           !canGoBack ? "justify-center" : "",
//           "bg-white w-full max-w-xl text-lg px-10 font-medium py-3 fixed text-gray-800 border-b top-0  flex items-center"
//         )}
//       >
//         {canGoBack ? (
//           <button onClick={onClick}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 19l-7-7 7-7"
//               ></path>
//             </svg>
//           </button>
//         ) : null}
//         {title ? <span>{title}</span> : null}
//       </div>
//       <div className={cls("pt-12", hasTabBar ? "pb-24" : "")}>{children}</div>
//       {hasTabBar ? (
//         <nav className="bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between text-xs">
//           <Link href="/">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                 ></path>
//               </svg>
//               <span>홈</span>
//             </span>
//           </Link>
//           <Link href="/community">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
//                 ></path>
//               </svg>
//               <span>동내생활</span>
//             </span>
//           </Link>
//           <Link href="/chats">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                 ></path>
//               </svg>
//               <span>채팅</span>
//             </span>
//           </Link>
//           <Link href="/live">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//                 ></path>
//               </svg>
//               <span>라이브</span>
//             </span>
//           </Link>
//           <Link href="/profile">
//             <span className="flex flex-col items-center space-y-2">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                 ></path>
//               </svg>
//               <span>나의 캐럿</span>
//             </span>
//           </Link>
//         </nav>
//       ) : null}
//     </div>
//   );
// }
