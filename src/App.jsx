import React from "react";
import HomePage from "./pages/HomePage";
import FooterSection from "./components/ShareComponents/FooterSection";
import ErrorPage from "./components/ShareComponents/ErrorPage";
import CateringPage from "./pages/CateringPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catering" element={<CateringPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
