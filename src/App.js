import Navbar from "./navbar/Navbar"
import Home from "./home/Home"
import About from "./About/About"
import Experience from "./experience/Experience"
import Contact from "./Contact/Contact"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Experience/>
     <Contact/>
    </div>
  );
}

export default App;
