import React from "react";
import CateringSwiperCarousel from "../components/CateringComponents/CateringCarousel/CateringSwiperCarousel";
import Pattern from "../assets/Pattern.png";
import CateringMenu from "../components/CateringComponents/CateringMenu";
import usePageTitle from "../Hooks/usePageTitle";
import { Slide } from "react-reveal";

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
        <div className="container mx-auto py-16">
          <Slide right duration={1500}>
            <CateringSwiperCarousel />
          </Slide>
          <CateringMenu />
        </div>
      </section>
    </>
  );
};

export default CateringPage;
