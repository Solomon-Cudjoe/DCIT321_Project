import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Register from "pages/Auth/register";
import Login from "pages/Auth/login";
import Dinner from "pages/Categories/dinner";
import Lunch from "pages/Categories/lunch";
import Drink from "pages/Categories/drink";
import Dessert from "pages/Categories/dessert.";
const Homepage = React.lazy(() => import("pages/Homepage"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const Contact = React.lazy(() => import("pages/Contact"));
const Reservation = React.lazy(() => import("pages/Reservation"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Menu = React.lazy(() => import("pages/Menu"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/drink" element={<Drink />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
