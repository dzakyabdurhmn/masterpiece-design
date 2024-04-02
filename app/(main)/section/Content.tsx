import React from "react";
import "./style/Content.css";

function Content() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center w-full mb-10 lg:flex-row">
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
            <div className="flex items-center space-x-3">
              <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
              <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-2/5">
              <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-32">
              <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
