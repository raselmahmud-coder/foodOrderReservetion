import React from "react";
import CateringSwiperCarousel from "../components/CateringComponents/CateringCarousel/CateringSwiperCarousel";
import NavBar from "../components/ShareComponents/NavBar";
import Pattern from "../assets/Pattern.png";
import CateringMenu from "../components/CateringComponents/CateringMenu";

const CateringPage = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pattern})`,
          width: "100%",
          height: "360vh",
          zIndex: "-1",
        }}>
        <div className="container mx-auto">
          <NavBar />
          <div className="my-12">
          <CateringSwiperCarousel />
          </div>
          <CateringMenu/>
        </div>
      </section>
    </>
  );
};

export default CateringPage;
