import React from "react";
import NavBar from "../components/HomePageComponents/NavBar";
import SwiperCarousel from "../components/HomePageComponents/Carousel/SwiperCarousel";
import ProductShowcase from "../components/HomePageComponents/ProductShowcase";
import MakeReservation from "../components/HomePageComponents/MakeReservation";
import CallToAction from "../components/HomePageComponents/CallToAction";
const HomePage = () => {
  return (
    <>
      <NavBar />
          <div className="my-20">
          <SwiperCarousel/>
      </div>
      <ProductShowcase />
      <MakeReservation />
      <CallToAction/>
    </>
  );
};

export default HomePage;
