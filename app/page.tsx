import AuthForm from "./auth-form";
import './page.css'

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Hello, Welcomeback to Whatever UIkit</h1>
        <p className="description">we provide many different types of UIkit section Website. if you are confident with our application, lets login in the forum on the right by entering a Gmail or Email account.</p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  );
}
