import React from "react";
import "./style/Content.css";

function Content() {
  return (
    <>
      <div className="flex flex-col ml-16 items-center justify-center w-full lg:flex-row">
        <div className="mb-16">
          <div className=" mb-6">
            <div>
              <p className="inline-block text-sm font-semibold tracking-wider Archivo uppercase rounded-full">Brand new</p>
            </div>
            <h2 className="mt-8 Archivo text-5xl font-bold tracking-tight leading-tight text-gray-200 mb-6">
              Everything you can <br /> imagine is real
            </h2>
            <p className="text-gray-300 Archivo text-sm text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
              accusantium doloremque laudantium, totam rem aperiam, <br /> eaque ipsa quae. explicabo.
            </p>
          </div>
          <div className="flex items-center mt-16 space-x-3">
            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
          </div>
        </div>
        <div className=" -mt-36 py-16 mx-auto lg:block lg:flex-col md:px-8">
          <div className="z-0 flex justify-center h-full overflow-hidden lg:pt-24 l lg:pr-8 xl:pr-0 lg:bottom-0 lg:left-0 lg:items-center">
            <img src="https://kitwind.io/assets/kometa/laptop.png" className="object-cover max-w-4xl h-auto lg:w-auto lg:h-full" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
