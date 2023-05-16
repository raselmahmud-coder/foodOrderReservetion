import React from "react";
import CateringSwiperCarousel from "../components/CateringComponents/CateringCarousel/CateringSwiperCarousel";
import Pattern from "../assets/Pattern.png";
import CateringMenu from "../components/CateringComponents/CateringMenu";

const CateringPage = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pattern})`,
          width: "100%",
          zIndex: "-1",
          position: "relative",
          top: "-88px",
        }}>
        <div className="container mx-auto">
          <CateringSwiperCarousel />
          <CateringMenu />
        </div>
      </section>
    </>
  );
};

export default CateringPage;
