import AuthForm from "./auth-form";
import "./page.css";
// Landing Page
export default function Home() {
  return (
    <>
      {/* start for landing */}
      <div className="Header-navbar">
        <h3 className="text-lg">Whatever</h3>
        <ul className="list-nav-link">
          <a className="login-button" href="#">
            Login for See Design
          </a>
          <a className="documentation-link" href="#">
            Documentation
          </a>
          <a className="github-button-link" href="#">
            see GitHub
          </a>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <h1 className="header">Hello, Welcomeback to Whatever UIkit</h1>
          <p className="description">we provide many different types of UIkit section Website. if you are confident with our application, lets login in the forum on the right by entering a Gmail or Email account.</p>
        </div>
        <div className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
