import React from "react";

import FLORIAN from "./../media/patron.png";
import DIPLOME from "./../media/diplome.png";
import PASSION from "./../media/passion.png";
import PROJET from "./../media/projet.png";
import RECHERCHE from "./../media/recherche.png";

import Scroll from "./../media/choix.png";

export default function About () {
  return (
    <div>
      <div className="bloc-title section" id="about">
        <h2 className="title-section">à propos</h2>
        <img src={FLORIAN} alt="" className="img-title"/>
      </div>
      <div className="about-container">
        <div className="bloc-about section">
          <img src={FLORIAN} alt="" className="img-picture" />
          <p className="text-about">
            Je m'appelle Florian, j'ai 23 ans, et je suis un développeur web passionné basé près de Toulouse. 
            Mon voyage dans le monde du développement web a commencé il y a quelques années, et depuis lors, 
            j'ai travaillé dur pour acquérir des compétences techniques solides et une profonde compréhension des technologies web modernes.
          </p>
        </div>
        <div className="bloc-about section">
          <img src={DIPLOME} alt="" className="img-picture" />
          <p className="text-about">
            Après avoir découvert ma passion pour la programmation web, j'ai entrepris une formation en développement web 
            qui m'a permis de maîtriser les langages et les outils essentiels tels que HTML, CSS, JavaScript, et PHP. J'ai également 
            acquis de l'expérience dans la création de sites web réactifs et conviviaux, en utilisant des frameworks tels que React et Angular.
          </p>
        </div>
        <div className="bloc-about section">
          <img src={PASSION} alt="" className="img-picture" />
          <p className="text-about">
            Ce qui me motive le plus dans le développement web, c'est la possibilité de créer des expériences en ligne exceptionnelles qui répondent aux besoins des utilisateurs. 
            J'aime résoudre des problèmes complexes, concevoir des interfaces utilisateur intuitives et rendre le web plus accessible pour tous.
          </p>
        </div>
        <div className="bloc-about section">
          <img src={PROJET} alt="" className="img-picture" />
          <p className="text-about">
            Au fil des ans, j'ai eu l'opportunité de travailler sur divers projets passionnants, allant de sites web d'entreprises à des applications web interactives. 
            Chacun de ces projets a été l'occasion d'apprendre et de grandir en tant que développeur. Je suis fier de partager certains de ces projets dans mon portfolio.
          </p>
        </div>
        <div className="bloc-about section">
        <img src={RECHERCHE} alt="" className="img-picture" />
        <p className="text-about">
          Actuellement, je suis ouvert à de nouvelles opportunités professionnelles dans le domaine du développement web. Je suis enthousiaste à l'idée de contribuer à 
          des projets innovants, de collaborer avec d'autres passionnés de technologie, et de continuer à développer mes compétences.
        </p>
        </div>
      </div>
      <div className="scroll">
        <a href="#skill"><img src={Scroll} alt="Image de souris cliquable pour scroll vers le bas" className="img-scroll" /></a>
      </div>
    </div>
  )
}