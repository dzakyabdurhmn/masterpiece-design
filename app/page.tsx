import AuthForm from "./auth-form";

// for add data lib string
import { HeroText } from "./components/Hero/MainHero";
import { DeskHeroText } from "./components/Hero/MainHero";
import { Welcome } from "./components/Authdesk/AuthText";
import { WelcomeDesk } from "./components/Authdesk/AuthText";

// import Routes
import LinkApp from "./Routes/Link_app";
import NavLink from "./Routes/NavLink_app";

// import CSS
import "./page.css";
import "./section/style/Hero.css";
// Landing Page
export default function Home() {
  return (
    <>
      {/* start for landing */}
      <div className="Header-navbar flex justify-between items-center mt-10">
        <h3 className="text-2xl Archivo font-semibold">Whatever</h3>
        <NavLink />
      </div>

      {/* hero section */}
      <div className="p-14 mt-20 border rounded-xl">
        <div className=" flex items-start justify-between">
          <div>
            <div className="text-gray-200 text-8xl text-start Archivo font-semibold">{HeroText}</div>
            <p className="text-sm mt-3 w-[360px] text-gray-200 leading-7">{DeskHeroText}</p>
          </div>
          <LinkApp />
        </div>
        <div className="mt-10">
          <div className="flex text-sm justify-center gap-3 items-center">
            <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e]" href="#">
              About
            </a>
            <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e]" href="#">
              Services
            </a>
            <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e]" href="#">
              Support
            </a>
            <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e]" href="#">
              Technology
            </a>
            <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 hover:bg-[#3fcf8e]" href="#">
              Guestbook
            </a>
            <a className="py-2 Archivo px-4 transition-all rounded-full duration-300 text-black font-normal bg-[#3fcf8e]" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-20 justify-between">
        <div className="col-6">
          <h1 className="header text-2xl font-medium">{Welcome}</h1>
          <p className="description mt-3 text-sm leading-7">{WelcomeDesk}</p>
        </div>
        <div id="authForm" className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
