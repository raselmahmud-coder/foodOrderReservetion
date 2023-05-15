import React from "react";
import NavBar from "../components/HomePageComponents/NavBar";
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
          height: "760vh",
          zIndex: "-1",
        }}>
      <section className="container mx-auto">
      <NavBar />
          <div className="my-20">
          <SwiperCarousel/>
      </div>
      <ProductShowcase />
      <MakeReservation />
      <CallToAction/>
      </section>
      </main>
    </>
  );
};

export default HomePage;
