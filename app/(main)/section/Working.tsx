function Working() {
  return (
    <>
      <div className="bg-[#121212] h-[1000px] rounded-3xl">
        <div className="px-4 p-30 max-w-7xl pb-60 pt-20 mx-auto rounded-2xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-200 leading-tight sm:text-4xl lg:text-4xl">How does it work?</h2>
            <p className="max-w-lg mx-auto mt-4 leading-8 text-gray-300">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#3fcf8e] rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-200"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-200 text-gray-200 md:mt-10">Create a free account</h3>
                <p className="mt-4 text-base text-gray-300 leading-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#3fcf8e] 0 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-200"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-200 md:mt-10">Build your website</h3>
                <p className="mt-4 text-base text-gray-300 leading-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#3fcf8e]  rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-200"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-200md:mt-10">Release & Launch</h3>
                <p className="mt-4 text-base text-gray-300 leading-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
