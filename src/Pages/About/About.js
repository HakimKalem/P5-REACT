import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import List from "../../Components/List/List";
import Footer from "../../Components/Footer/Footer";
import "./About.scss";

const aboutImage = require("../../about-banner.png");

const About = () => {
  return (
    <div>
      <div className="main">
        <div>
          <Header />
        </div>
        <div>
          <Banner backgroundImage={aboutImage} hideText={true} />
        </div>
        <div className="labels-about">
          <List
            title="Fiabilite"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <List
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <List
            title="Service"
            content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          />
          <List
            title="Securite"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
