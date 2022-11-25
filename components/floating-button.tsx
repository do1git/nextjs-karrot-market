import Link from "next/link";
import React from "react";

interface IFloatingButton {
  children: React.ReactNode;
  href: string;
}

function FloatingButton({ children, href }: IFloatingButton) {
  return (
    <Link
      href={href}
      className="fixed bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors text-white w-10 h-10 bottom-24 right-10 flex justify-center items-center rounded-full shadow-md"
    >
      {children}
    </Link>
  );
}

export default FloatingButton;
