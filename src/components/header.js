import React from "react";
import Menu from "../media/menu.png";

export default function Header () {
  return (
    <div className="header">
      <nav className="navbar container">
        <a href="/"><h1>L.F</h1></a>
        <input type="checkbox" id="toggler" />
        <label for="toggler"><img src={Menu} className="burger" alt="Image permettant d'ouvrir le menu de navigation sur mobile"></img></label>
        <div className="menu">
          <ul className="list">
            <li className="LiNavTop"><a href="#home" className="link-top">Accueil</a></li>
            <li className="LiNavTop"><a href="#about" className="link-top">à propos</a></li>
            <li className="LiNavTop"><a href="#project" className="link-top">Projets</a></li>
            <li className="LiNavTop"><a href="#cv" className="link-top">Cv</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}