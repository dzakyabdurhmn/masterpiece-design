function NavLink_app() {
  return (
    <>
      <div>
        <ul className="list-nav-link flex text-sm font-normal items-center gap-10 text-center">
          <a className="github-button-link text-gray-300 hover:text-white transition-all duration-200" target="_blank" href="https://github.com/dzakyabdurhmn/masterpiece-design">
            GitHub
          </a>
          <a className="login-button text-gray-300 hover:text-white transition-all duration-200" href="#authForm">
            Login for See Design
          </a>
          <a className="documentation-link text-gray-300 hover:text-white transition-all duration-200" href="#">
            Documentation
          </a>
        </ul>
      </div>
    </>
  );
}

export default NavLink_app;
