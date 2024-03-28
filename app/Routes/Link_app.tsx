function Link_app() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-4 mt-10 mb-20 md:mb-0 md:mt-0 xl:mb-0 xl:mt-2">
          <a className="p-1 bg-gray-700 rounded-full hover:scale-95 transition-all duration-200" href="">
            <img src="https://res.cloudinary.com/ddy7p8yrj/image/upload/v1711484100/nc60wrtwlgxmzjdoszby.svg" alt="insta icons" height={35} width={35} />
          </a>
          <a className="p-1 bg-gray-700 rounded-full hover:scale-95 transition-all duration-200" href="">
            <img src="https://res.cloudinary.com/ddy7p8yrj/image/upload/v1711484100/zyzafoiophxytzusvtnx.svg" alt="pinterest icons" height={35} width={35} />
          </a>
          <a className="p-1 bg-gray-700 rounded-full hover:scale-95 transition-all duration-200" href="">
            <img src="https://res.cloudinary.com/ddy7p8yrj/image/upload/v1711484100/qtpmskgtry7veglquerf.svg" alt="behance icons" height={35} width={35} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Link_app;
