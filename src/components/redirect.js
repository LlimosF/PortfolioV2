import React from "react";
import Flèche from "./../media/fleche.png";

export default function Redirect () {
  return (
    <div className="redirect">
      <a href="#home"><img src={Flèche} className="redirect-logo" alt="Flèche permettant de revenir en haut de la page" /></a>
    </div>
  )
}