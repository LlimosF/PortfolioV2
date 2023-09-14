import React from "react";
import Typed from "react-typed";
import Scroll from "./../media/choix.png";

export default function Home () {
  return (
    <div className="home-container" id="home">
      <div className="typing">
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
      </div>
      <div className="scroll">
        <a href="#about"><img src={Scroll} alt="Image de souris cliquable pour scroll vers le bas" className="img-scroll" /></a>
      </div>
    </div>
  )
}