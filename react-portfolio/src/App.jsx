
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {

  return (

    <div className="app-layout">
      <Navbar />

      <main className="main-content">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
      </main>

      <Footer />
      
    </div>
  );
}


  

export default App;
