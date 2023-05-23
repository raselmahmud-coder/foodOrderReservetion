import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CustomSpinner from "./components/ShareComponents/CustomSpinner";
import NavBar from "./components/ShareComponents/NavBar";
import FooterSection from "./components/ShareComponents/FooterSection";
import FakeNavbar from "./components/ShareComponents/FakeNavbar";
// Lazy load your page components
const HomePage = lazy(() => import("./pages/HomePage"));
const ErrorPage = lazy(() => import("./components/ShareComponents/ErrorPage"));
const EvenCoOrdinatorPage = lazy(() => import("./pages/EvenCoOrdinatorPage"));
const CateringPage = lazy(() => import("./pages/CateringPage"));
const PrivateEventPage = lazy(() => import("./pages/PrivateEventPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  return (
    <>
      <NavBar />
      {/* <FakeNavbar/> */}
      <Suspense fallback={<CustomSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<EvenCoOrdinatorPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/private-dining" element={<PrivateEventPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      {/* Footer is separated component */}
      <FooterSection />
    </>
  );
}

export default App;
