import React from "react";
import PASSWORD from "./../media/Password.png";
import CSSCHALLENGE from "./../media/CSSChallenge.png";
import CCPHOTOGRAPHIE from "./../media/CCPhotographie.png";
import DICEGAME from "./../media/DiceGame.png";
import FAKEBACK from "./../media/Fakeback.png";
import CLICKRUSH from "./../media/ClickRush.png";
import VPGARAGE from "./../media/VPGarage.png";
import FRAMEUSE from "./../media/FrameUse.png";
import CPROT from "./../media/CProt.png";

import Scroll from "./../media/choix.png";

import PROJET from "./../media/gestion-de-projet.png";

const projects = [
  {
    title: "Password generator",
    imageSrc: PASSWORD,
    alt: "Capture d'écran du site Password generator",
    description: "À un moment donné, j'ai cherché à créer un nouveau mot de passe plus sécurisé. J'ai donc décidé de concevoir mon propre générateur de mots de passe sécurisés en utilisant JavaScript.",
    link: "https://florianllimos.fr/password/"
  },
  {
    title: "Challenge CSS",
    imageSrc: CSSCHALLENGE,
    alt: "Capture d'écran du site CSS Challenge",
    description: "J'ai ressenti l'envie de mettre mes compétences en CSS à l'épreuve, alors j'ai décidé de relever des défis CSS sur un site web. J'ai choisi de m'attaquer à quelques-uns d'entre eux pour tester mes compétences.",
    link: "https://florianllimos.fr/challenge/"
  },
  {
    title: "CCPhotographie",
    imageSrc: CCPHOTOGRAPHIE,
    alt: "Capture d'écran du site CCPhotographie",
    description: "Pendant mon parcours scolaire, j'ai eu l'occasion d'apprendre plusieurs frameworks JavaScript, notamment ReactJS. Inspiré par cette expérience, j'ai eu l'idée de concevoir un site vitrine pour un photographe. J'ai opté pour ReactJS en raison de sa simplicité, de sa grande flexibilité et de son caractère hautement dynamique, ce qui le rend idéal pour répondre aux besoins d'un site web adaptatif.",
    link: "https://ccphotographie.netlify.app/"
  },
  {
    title: "DiceGame",
    imageSrc: DICEGAME,
    alt: "Capture d'écran du site DiceGame",
    description: "J'ai entrepris un projet excitant consistant à créer un jeu de dés dans le navigateur. Pour ce faire, j'ai choisi d'utiliser du JavaScript pur. J'ai élaboré des fonctions pour gérer différentes aspects du jeu, notamment le changement de joueur et l'ajout de points au joueur actif. Cette approche m'a permis de créer une expérience interactive et divertissante pour les joueurs.",
    link: "https://florianllimos.fr/dicegame/"
  },
  {
    title: "Fakeback",
    imageSrc: FAKEBACK,
    alt: "Capture d'écran du site Fakeback",
    description: "Fakeback est un réseau social axé sur l'amitié, où chaque utilisateur inscrit sur le site peut accéder à vos publications, consulter votre profil et même lire vos messages dans la conversation générale. C'est un espace qui encourage la transparence et la connexion entre les amis en ligne.",
    link: "https://fakeback.alwaysdata.net/"
  },
  {
    title: "ClickRush",
    imageSrc: CLICKRUSH,
    alt: "Capture d'écran du site ClickRush",
    description: "J'ai décidé de me lancer dans un défi passionnant : créer un jeu de clics avec un système de classement. Chaque joueur doit créer un compte et se connecter pour participer. L'objectif est simple : cliquer autant que possible et envoyer son score. Le but ultime ? Être en tête du classement et devenir le meilleur joueur !",
    link: "https://florianllimos.fr/clickrush"
  },
  {
    title: "VPGarage",
    imageSrc: VPGARAGE,
    alt: "Capture d'écran du site VPGarage",
    description: "Pour mon Évaluation des Compétences Finale (ECF) de fin de formation, j'ai dû concevoir un site web pour un garage. Sur ce site, les visiteurs peuvent trouver une liste de véhicules en vente, ainsi qu'une page dédiée aux services de réparation proposés. J'ai également mis en place une base de données qui permet de modifier l'intégralité du site web directement depuis un panneau de contrôle. Cette approche offre une gestion facile et efficace du contenu du site.",
    link: "https://llimosf.alwaysdata.net/"
  },
  {
    title: "FrameUse",
    imageSrc: FRAMEUSE,
    alt: "Capture d'écran du site FrameUse",
    description: "Pendant ma formation, j'ai ressenti le désir de développer mon propre framework CSS. J'ai donc créé mon framework personnel, un fichier CSS regorgeant de règles CSS variées qui permettent de personnaliser rapidement son site web. En outre, j'ai élaboré un site vitrine explicatif qui guide les utilisateurs sur la manière d'utiliser Frameuse, mon framework CSS fait maison. Cette démarche vise à simplifier et accélérer le processus de personnalisation des sites web.",
    link: "https://frameuse.netlify.app/"
  },
  {
    title: "CProt",
    imageSrc: CPROT,
    alt: "Capture d'écran du site CProt",
    description: "En tant que travailleur indépendant, j'ai eu l'opportunité de développer un site web en utilisant WordPress afin de fournir une plateforme complète pour présenter une variété d'informations essentielles concernant le cabinet de ma cliente. Mon objectif était de créer un site web professionnel et fonctionnel qui met en valeur les services et les atouts du cabinet tout en offrant une expérience utilisateur optimale.",
    link: "https://catherineprot.fr/"
  }
];

export default function Project() {
  return (
    <div className="">
      <div className="bloc-title section" id="project">
        <h2 className="title-section">Projets</h2>
        <img src={PROJET} alt="" className="img-title"/>
      </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project section" key={index}>
            <h2>{project.title}</h2>
            <img src={project.imageSrc} className="img-project" alt={project.alt} />
            <p className="description-project">{project.description}</p>
            <a href={project.link} target="_blank"><button className="link-btn">Site web</button></a>
          </div>
        ))}
      </div>
      <div className="scroll">
        <a href="#cv"><img src={Scroll} alt="Image de souris cliquable pour scroll vers le bas" className="img-scroll" /></a>
      </div>
    </div>
  );
}
