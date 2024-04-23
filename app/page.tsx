import AuthForm from "./auth-form";
export default function Home() {
  return (
    <>
      {/* for auth Forms */}
      <div className="grid md:gird lg:flex xl:flex items-center mt-40 mb-24 justify-center">
        <div className="max-w-2xl">
          <h1 className="header text-5xl text-gray-200 font-medium">Whatever</h1>
          <p className="mt-3 text-gray-200 Archivo text-sm leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, omnis dolorem deserunt nam hic possimus eius nobis voluptates reiciendis sed.</p>
        </div>
        <div id="authForm" className="auth-widget">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
