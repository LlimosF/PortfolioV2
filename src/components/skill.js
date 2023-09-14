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

export default function Skill () {
  return (
    <div className="">
      <hr className="separator" />
      <h2 className="title-section">Compétences</h2>
      <hr className="separator" />
      <div className="skill-container" id="skill">
        <div className="skill-card">
          <h3 className="title-card">Html</h3>
          <img src={HTML} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">Css</h3>
          <img src={CSS} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">JavaScript</h3>
          <img src={JS} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">Bootstrap</h3>
          <img src={BOOTSTRAP} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">Php</h3>
          <img src={PHP} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">Wordpress</h3>
          <img src={WORDPRESS} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">MySql</h3>
          <img src={SQL} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">Github</h3>
          <img src={GITHUB} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">React</h3>
          <img src={REACT} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">Blender</h3>
          <img src={BLENDER} alt="" className="img-skill" />
        </div>
        <div className="skill-card">
          <h3 className="title-card">Paint 3d</h3>
          <img src={PAINT} alt="" className="img-skill" />
        </div>
      </div>
    </div>  
  )
}