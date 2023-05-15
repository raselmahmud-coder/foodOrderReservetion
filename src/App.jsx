import React from "react";
import HomePage from "./pages/HomePage";
import FooterSection from "./components/ShareComponents/FooterSection";
import ErrorPage from "./components/ShareComponents/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <>
        <RouterProvider router={router} />
      
      
      <FooterSection/>
    </>
  );
}

export default App;
