import React from "react";
import ContactForm from "../components/CoOrdinateComponents/ContactForm";
import Pattern from "../assets/Pattern.png";
import NavBar from "../components/ShareComponents/NavBar";

const EvenCoOrdinatorPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${Pattern})`,
        width: "100%",
        height: "360vh",
        zIndex: "-1",
      }}>
          <div className="container mx-auto">
      <NavBar />
      <ContactForm />
              
      </div>
    </section>
  );
};

export default EvenCoOrdinatorPage;
