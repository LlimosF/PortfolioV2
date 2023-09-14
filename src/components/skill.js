import React from "react";

import HTML from "./../media/html.png";
import CSS from "./../media/css.png";
import JS from "./../media/js.png";
import BOOTSTRAP from "./../media/bootstrap.png";
import PHP from "./../media/php.png";
import WORDPRESS from "./../media/wordpress.png";
import SQL from "./../media/mysql.png";
import BLENDER from "./../media/blender.png";
import GITHUB from "./../media/github.png";
import REACT from "./../media/react.png";
import PAINT from "./../media/paint.png";
import FIGMA from "./../media/figma.png";

import Scroll from "./../media/choix.png";

import SKILL from "./../media/life-skills.png";

const skillsData = [
  { name: "Html", imgSrc: HTML, alt: "Logo HTML rouge" },
  { name: "Css", imgSrc: CSS, alt: "Logo CSS rouge" },
  { name: "JavaScript", imgSrc: JS, alt: "Logo JS rouge" },
  { name: "Bootstrap", imgSrc: BOOTSTRAP, alt: "Logo BOOTSTRAP rouge" },
  { name: "Php", imgSrc: PHP, alt: "Logo PHP rouge" },
  { name: "Wordpress", imgSrc: WORDPRESS, alt: "Logo WORDPRESS rouge" },
  { name: "MySql", imgSrc: SQL, alt: "Logo MYSQL rouge" },
  { name: "Github", imgSrc: GITHUB, alt: "Logo GITHUB rouge" },
  { name: "React", imgSrc: REACT, alt: "Logo REACT rouge" },
  { name: "Blender", imgSrc: BLENDER, alt: "Logo BLENDER rouge" },
  { name: "Paint 3d", imgSrc: PAINT, alt: "Logo PAINT rouge" },
  { name: "Figma", imgSrc: FIGMA, alt: "Logo FIGMA rouge" },
];

export default function Skill() {
  return (
    <div>
      <div className="bloc-title" id="skill">
        <h2 className="title-section">Compétences</h2>
      </div>
      <div className="skill-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card section" key={index}>
            <h3 className="title-card">{skill.name}</h3>
            <img src={skill.imgSrc} alt="" className="img-skill" />
          </div>
        ))}
      </div>
      <div className="scroll">
        <a href="#project"><img src={Scroll} alt="Image de souris cliquable pour scroll vers le bas" className="img-scroll" /></a>
      </div>
    </div>  
  )
}
