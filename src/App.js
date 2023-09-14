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

// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour afficher les éléments au fur et à mesure
function showElementsOnScroll() {
  var sections = document.querySelectorAll('.section');
  
  sections.forEach(function(section) {
      if (isElementInViewport(section)) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
      }
  });
}

// Écoutez l'événement de défilement de la page
window.addEventListener('scroll', showElementsOnScroll);
window.addEventListener('resize', showElementsOnScroll);

// Appelez la fonction pour afficher initialement les éléments visibles
showElementsOnScroll();
