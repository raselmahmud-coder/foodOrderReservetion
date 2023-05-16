import React from "react";
import PrivateEventDining from "../components/CateringComponents/PrivateEventComponents/PrivateEventDining";
import Pattern from "../assets/Pattern.png";

const PrivateEventPage = () => {
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
          <PrivateEventDining />
        </div>
      </section>
    </>
  );
};

export default PrivateEventPage;
