import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import MapCard from "../../Components/MapCard/MapCard";
import Footer from "../../Components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="home-body">
        <Header />
        <Banner />
        <MapCard />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
