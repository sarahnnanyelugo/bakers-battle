import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
  return (
 <>  <Routes>
        <Route path="/" element={<Home />} />{" "}</Route></>
  );
}

export default App;
