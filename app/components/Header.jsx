import * as React from "react";
import Image from "@node_modules/next/image";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white">
      <div className="flex items-center">
      <Image
             src="/Logo.png"
             width={50}
             height={50}
             alt="Picture of the author"
              />  
      </div>
      <button
        className="text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Logout"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
