import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Nav from "./components/nav";
import Footer from "./components/footer"
function App() {
  return  <>
          <Router>
          <Nav/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
          </Router>
           </>
    
  
}

export default App;
