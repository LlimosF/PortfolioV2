import React from "react";
import Typed from "react-typed";
import Astronaute from "./../media/astronaute.png";

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
    </div>
  )
}