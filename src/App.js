import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Redirect from './components/redirect';
import About from "./components/about";
import Home from './components/home';
import Project from './components/project';

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <About />
      <Project />
      <Redirect />
      <Footer />
    </div>
  )
}

export default App;