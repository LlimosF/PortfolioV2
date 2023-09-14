import React from "react";
import Typed from "react-typed";
import Scroll from "./../media/choix.png";

export default function Home () {
  return (
    <div className="home-container" id="home">
      <div className="typing">
        <a href="https://www.google.com/search?q=florian+llimos&rlz=1C1UEAD_frFR1025FR1025&oq=florian+llimos&aqs=chrome.0.69i59l2j69i65j69i60j69i61.2001j0j7&sourceid=chrome&ie=UTF-8" target="_blank">
          <Typed
            strings={[
              "Développeur web",
              "Développeur front-end",
              "Développeur back-end",
              "Développeur full stack"
            ]}
            typeSpeed={30}
            backSpeed={60}
            loop
          />
        </a>
      </div>
      <div className="scroll">
        <a href="#about"><img src={Scroll} alt="Image de souris cliquable pour scroll vers le bas" className="img-scroll" /></a>
      </div>
    </div>
  )
}