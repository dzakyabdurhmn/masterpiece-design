import AuthForm from "./auth-form";
import HeroSection from './section/HeroSection'

// for add data lib string
import { HeroText } from "./components/Hero/MainHero";

// import CSS
import "./page.css";
import './section/style/Hero.css'
// Landing Page
export default function Home() {
  return (
    <>
      {/* start for landing */}
      <div className="Header-navbar mt-10">
        <h3 className="text-3xl font-semibold">Whatever</h3>
        <ul className="list-nav-link">
          <a className="login-button" href="#authForm">
            Login for See Design
          </a>
          <a className="documentation-link" href="#">
            Documentation
          </a>
          <a className="github-button-link" target="_blank" href="https://github.com/dzakyabdurhmn/masterpiece-design">
            GitHub
          </a>
        </ul>
      </div>

      {/* hero section */}
      <div className="mt-20">
        <div className="text-gray-200 text-8xl text-center Archivo font-semibold">{HeroText}</div>
        <div></div>
      </div>

      <div className="flex items-center mt-20 justify-between">
        <div className="col-6">
          <h1 className="header text-2xl font-medium">Hello, Welcomeback to Whatever UIkit</h1>
          <p className="description mt-3">we provide many different types of UIkit section Website. if you are confident with our application, lets login in the forum on the right by entering a Gmail or Email account.</p>
        </div>
        <div id="authForm" className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
