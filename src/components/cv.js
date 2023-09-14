import React from "react";
import CV from "./../media/CV.png";

import CV1 from "./../media/cv1.png";

export default function Cv () {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/CV.pdf";
    link.download = "CV.pdf";
    link.click();
  }

  return (
    <div className="cv" id="cv">
      <div className="bloc-title section">
        <h2 className="title-section">Cv</h2>
        <img src={CV1} alt="" className="img-title"/>
      </div>
      <div className="cv-container section">
        <button className="download" onClick={handleDownload}>Télécharger</button>
        <img src={CV} alt="" className="img-cv" />
      </div>
    </div>
  )
}