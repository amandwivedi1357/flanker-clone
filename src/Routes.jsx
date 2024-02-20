import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AboutusOne = React.lazy(() => import("pages/AboutusOne"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const Contactform = React.lazy(() => import("pages/Contactform"));
const Services = React.lazy(() => import("pages/Services"));
const ServicesOne = React.lazy(() => import("pages/ServicesOne"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/servicesone" element={<ServicesOne />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactform" element={<Contactform />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/aboutusone" element={<AboutusOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
