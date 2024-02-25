import Navbar from "./navbar/Navbar"
import Home from "./home/Home"
import About from "./About/About"
import Experience from "./experience/Experience"
import Contact from "./Contact/Contact"
import Skills from "./Skills/Skills"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Experience/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
