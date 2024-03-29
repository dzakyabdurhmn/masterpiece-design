import "./style/GridContent.css";

function GridContent() {
  return (
    <>
      <div className="mb-40">
        <div className="md:grid md:justify-center lg:grid lg:justify-center xl:flex items-center justify-between">
          <div>
            <h3 className="text-4xl leading-[50px] Archivo font-bold">A very rare but interesting feature.</h3>
            <p className=" mt-3 col-8 leading-8">We create features that are very rarely used but still interesting to be featured in some of our designs. not only that, our features provide many interesting content options and components.</p>
            <div className=" md:flex lg:flex xl:flex gap-16 items-end">
              <div className="grid gap-4 mt-8">
                <ul className="flex items-center gap-3">
                  <img src="https://res.cloudinary.com/ddy7p8yrj/image/upload/v1711742091/vjijdavd3sal4lm2ozrj.png" alt="" width={20} height={20} />
                  <p className="Archivo">Hover effect</p>
                </ul>
                <ul className="flex items-center gap-3">
                  <img src="https://res.cloudinary.com/ddy7p8yrj/image/upload/v1711742091/vjijdavd3sal4lm2ozrj.png" alt="" width={20} height={20} />
                  <p className="Archivo">Animation effect</p>
                </ul>
                <ul className="flex items-center gap-3">
                  <img src="https://res.cloudinary.com/ddy7p8yrj/image/upload/v1711742091/vjijdavd3sal4lm2ozrj.png" alt="" width={20} height={20} />
                  <p className="Archivo">Responsive Design</p>
                </ul>
                <ul className="flex items-center gap-3">
                  <img src="https://res.cloudinary.com/ddy7p8yrj/image/upload/v1711742091/vjijdavd3sal4lm2ozrj.png" alt="" width={20} height={20} />
                  <p className="Archivo">Support Lunacy</p>
                </ul>
              </div>
              <div className="mt-5 md:mt-5 card-see-design">
                <a href="">
                  <button className="py-3 w-60 font-medium bg-[#3fcf8e] hover:bg-[#34b27b] hover:scale-95 duration-100">See Design</button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid md:flex lg:flex xl:flex mt-10 md:mt-10 lg:mt-10 gap-7 lg:justify-center xl:mt-0 items-center">
            <div className="border h-80 rounded-xl w-60"></div>
            <div className="border h-80 rounded-xl w-60"></div>
            <div className="border h-80 rounded-xl w-60"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridContent;
