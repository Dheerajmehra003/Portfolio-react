import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <About id="About" />
      <Projects id="Project" />
      <Skills id="Skill" />
      <Contact id="Contact" />
      <Footer />
    </>
  );
}

export default App;
