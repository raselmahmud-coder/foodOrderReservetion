import React from "react";
import HomePage from "./pages/HomePage";
import bgPattern from "./assets/Pattern.png";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <HomePage />
      </div>
      <div
        style={{
          backgroundImage: `url(${bgPattern})`,
          // backgroundSize: "cover",
          width: "100%",
          height: "4400px",
          position: "absolute",
          top: "0",
          zIndex: "-1",
        }}>
      </div>
    </>
  );
}

export default App;
