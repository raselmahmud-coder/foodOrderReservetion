import React from "react";
import SwiperCarousel from "../components/HomePageComponents/Carousel/SwiperCarousel";
import ProductShowcase from "../components/HomePageComponents/ProductShowcase";
import MakeReservation from "../components/HomePageComponents/MakeReservation";
import CallToAction from "../components/HomePageComponents/CallToAction";
import bgPattern from "../assets/Pattern.png";

const HomePage = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${bgPattern})`,
          width: "100%",
          zIndex: "-1",
          position: "relative",
          top:"-88px"
        }}>
        <section className="container mx-auto py-32">
          <SwiperCarousel />
          <ProductShowcase />
          <MakeReservation />
          <CallToAction />
        </section>
      </main>
    </>
  );
};

export default HomePage;
