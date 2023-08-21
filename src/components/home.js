import React from "react";
import Typed from "react-typed";
import Choix from "./../media/choix.png";

export default function Home () {
  return (
    <div className="home" id="home">
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
        <a href="#about"><img src={Choix} className="scroll-img" alt=""></img></a>
      </div>
    </div>
  )
}