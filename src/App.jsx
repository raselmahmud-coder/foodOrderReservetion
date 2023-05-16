import React from "react";
import HomePage from "./pages/HomePage";
import FooterSection from "./components/ShareComponents/FooterSection";
import ErrorPage from "./components/ShareComponents/ErrorPage";
import EvenCoOrdinatorPage from "./pages/EvenCoOrdinatorPage";
import { Route, Routes } from "react-router-dom";
import CateringPage from "./pages/CateringPage";
import PrivateEventPage from "./pages/PrivateEventPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<EvenCoOrdinatorPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/private-dining" element={<PrivateEventPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
