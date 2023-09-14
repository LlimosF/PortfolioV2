import React from "react";
import CV from "./../media/CV.png";

export default function Cv () {
  return (
    <div className="cv" id="cv">
      <hr className="separator" />
      <h2 className="title-section">Cv</h2>
      <hr className="separator" />
      <div className="cv-container">
        <button className="download">Télécharger</button>
        <img src={CV} alt="" className="img-cv" />
      </div>
    </div>
  )
}