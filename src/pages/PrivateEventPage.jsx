import React from "react";
import PrivateEventDining from "../components/CateringComponents/PrivateEventComponents/PrivateEventDining";
import Pattern from "../assets/Pattern.png";
import NavBar from "../components/ShareComponents/NavBar";

const PrivateEventPage = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pattern})`,
          width: "100%",
          zIndex: "-1",
        }}>
        <div className="container mx-auto">
          <NavBar />
          <PrivateEventDining />
        </div>
      </section>
    </>
  );
};

export default PrivateEventPage;
