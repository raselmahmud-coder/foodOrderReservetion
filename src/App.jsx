import React from "react";
import HomePage from "./pages/HomePage";
import FooterSection from "./components/ShareComponents/FooterSection";
import ErrorPage from "./components/ShareComponents/ErrorPage";
import EvenCoOrdinatorPage from "./pages/EvenCoOrdinatorPage";
import { Route, Routes } from "react-router-dom";
import CateringPage from "./pages/CateringPage";
import PrivateEventPage from "./pages/PrivateEventPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/ShareComponents/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<EvenCoOrdinatorPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/private-dining" element={<PrivateEventPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* Footer is separated component */}
      <FooterSection />
    </>
  );
}

export default App;
