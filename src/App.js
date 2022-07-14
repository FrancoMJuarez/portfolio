import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Proyects from "./components/Proyects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Proyects />
      {/* <Projects /> */}
      <About/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
