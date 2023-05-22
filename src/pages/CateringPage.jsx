import React from "react";
import CateringSwiperCarousel from "../components/CateringComponents/CateringCarousel/CateringSwiperCarousel";
import Pattern from "../assets/Pattern.png";
import CateringMenu from "../components/CateringComponents/CateringMenu";
import usePageTitle from "../Hooks/usePageTitle";

const CateringPage = () => {
  usePageTitle("Catering Page");

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pattern})`,
          width: "100%",
          zIndex: "-1",
          marginTop: "-88px",
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
