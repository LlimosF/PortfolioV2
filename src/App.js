import './App.css';

import Header from './components/header';
import Home from './components/home';
import BackgroundFixed from './components/background-fixed';
import About from './components/about';
import Skill from './components/skill';
import Project from './components/project';
import Cv from './components/cv';
import Footer from './components/footer';

function App() {
  return (
    <div className="content-container">
      <BackgroundFixed />
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Cv />
      <Footer />
    </div>
  )
}

export default App;