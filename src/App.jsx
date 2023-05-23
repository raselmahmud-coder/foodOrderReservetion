import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomSpinner from "./components/ShareComponents/CustomSpinner";
import NavBar from "./components/ShareComponents/NavBar";
import FooterSection from "./components/ShareComponents/FooterSection";
// Pages imported
import HomePage from "./pages/HomePage";
import ErrorPage from "./components/ShareComponents/ErrorPage";
import EvenCoOrdinatorPage from "./pages/EvenCoOrdinatorPage";
import CateringPage from "./pages/CateringPage";
import PrivateEventPage from "./pages/PrivateEventPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const WrappedHomePage = CustomSpinner(HomePage);
  const WrappedEvenCoOrdinatorPage = CustomSpinner(EvenCoOrdinatorPage);
  const WrappedCateringPage = CustomSpinner(CateringPage);
  const WrappedPrivateEventPage = CustomSpinner(PrivateEventPage);
  const WrappedAboutPage = CustomSpinner(AboutPage);
  const WrappedAErrorPage = CustomSpinner(ErrorPage);
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<WrappedHomePage />} />
        <Route path="/careers" element={<WrappedEvenCoOrdinatorPage />} />
        <Route path="/catering" element={<WrappedCateringPage />} />
        <Route path="/private-dining" element={<WrappedPrivateEventPage />} />
        <Route path="/about" element={< WrappedAboutPage/>} />
        {/* Error Page */}
        <Route path="*" element={<WrappedAErrorPage />} />
      </Routes>

      {/* Footer is separated component */}
      <FooterSection />
    </>
  );
}

export default App;
