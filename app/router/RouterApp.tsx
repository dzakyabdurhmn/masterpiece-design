import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Contact from "../page/Contact";
import About from "../page/About";
import Services from "../page/Services";

function RouterApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/services" Component={Services} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
