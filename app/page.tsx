import AuthForm from "./auth-form";
import { Welcome } from "./(main)/components/Authdesk/AuthText";
import { WelcomeDesk } from "./(main)/components/Authdesk/AuthText";
// import CSS //
import "./page.css";
import "./(main)/section/style/Hero.css";
// Landing Page

export default function Home() {
  return (
    <>
      {/* for auth Forms */}
      <div className="grid md:gird lg:flex xl:flex items-center mt-40 mb-24 justify-between">
        <div className="col-6">
          <h1 className="header text-2xl font-medium">{Welcome}</h1>
          <p className="description mt-3 Archivo text-sm leading-7">{WelcomeDesk}</p>
        </div>
        <div id="authForm" className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
