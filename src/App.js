import Navbar from './components/Navbar/navbar.js';
import Intro from './components/Intro/intro.js';
import About from './components/Skills/about.js';
import Project from './components/Project/project.js';
import Contact from './components/Contact/contact.js';
import Footer from './components/Footer/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
