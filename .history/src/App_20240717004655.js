import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { FAQ } from "./pages/FAQ/FAQ";
import { Registration } from "./pages/Registration/Registration";
import { Contact } from "./pages/ContactPage/Contact";
import { Sponsors } from "./pages/Sponsors/Sponsors";
import ScrollToTop from "./scrollToTop";
import About from "./pages/About/About";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/faq" element={<FAQ />} />{" "}
        <Route path="/registration" element={<Registration />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/sponsors" element={<Sponsors />} />{" "}
        <Route path="/about" element={<About />} />{" "}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
