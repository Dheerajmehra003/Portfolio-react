import "./App.css";
import EcommerceProject from "./components/EcommerceProject";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projectfigma from "./components/projectfigma";
import Projecthtml from "./components/Projecthtml";
import Projectreact from "./components/Projectreact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/projecthtml" element={<Projecthtml />} />
          <Route path="/projectreact" element={<Projectreact />} />
          <Route path="/projectfigma" element={<Projectfigma />} />
          <Route path="/projectecommerce" element={<EcommerceProject />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
