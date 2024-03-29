import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex text-sm text-gray-200 justify-center gap-3 items-center">
        <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e] hover:text-white" href="#About">
          About
        </a>
        <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e] hover:text-white" href="#">
          Our team
        </a>
        <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e] hover:text-white" href="#">
          Support
        </a>
        <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e] hover:text-white" href="#">
          Guestbook
        </a>
        <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e] hover:text-white" href="#">
          Technology
        </a>
        <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e] hover:text-white" href="#">
          Contact
        </a>
      </div>
    </>
  );
}

export default Navbar;
