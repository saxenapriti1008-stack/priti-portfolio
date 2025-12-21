
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
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
        <Experience/>
        <Education/>
        <Skills />
        <Projects />
        <Contact />
         <Footer />
        
      </main> 
      
    </div>
  );
}


  

export default App;
