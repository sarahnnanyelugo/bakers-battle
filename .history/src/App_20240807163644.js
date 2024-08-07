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
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { FaArrowUpLong } from "react-icons/fa6";
import { Dashboard } from "@material-ui/icons";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import { DashboardLayout } from "./pages/DashboardLayout";

function App() {
  return (
    <>
      <div id="top" />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/faq" element={<FAQ />} />{" "}
        <Route path="/registration" element={<Registration />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/sponsors" element={<Sponsors />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/payment" element={<PaymentPage />} />{" "}
        <Route path="dashboard" element={<AdminDashboard />} />{" "}
        <Route path="dashboard-layout/*" element={<DashboardLayout />} />{" "}
      </Routes>
      <Footer />
      <div className="offset-md-11 top-icon offset-9">
        {" "}
        <center>
          <a href="#top">
            <FaArrowUpLong style={{ color: "#fff" }} title="back to top" />
          </a>
        </center>
      </div>
    </>
  );
}

export default App;
