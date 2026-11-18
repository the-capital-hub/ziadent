
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AIFloatingButton from "./components/AIButton/AIButton";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import { Route, Routes, useParams, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import ProductsServices from "./Pages/ProductsServices/ProductsServices";

import ProductDetailPage from "./components/products/ProductDetailPage";
import { productsData } from "./data/productsData";
import AboutUs from "./Pages/AboutUs/AboutUs";
import DigitalDentistry from "./Pages/DigitalDentistry/DigitalDentistry";
import WhyZiaDent from "./Pages/WhyZiaDent/WhyZiaDent";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ScheduleCall from "./Pages/ScheduleCall/ScheduleCall";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const ProductDetailRoute = () => {
  const { slug } = useParams();

  const product = productsData[slug];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return <ProductDetailPage product={product} />;
};

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<ProductsServices />}
          />

          <Route
            path="/products/:slug"
            element={<ProductDetailRoute />}
          />
          <Route path="/about" element={<AboutUs />} />
                <Route
  path="/digital-dentistry"
  element={<DigitalDentistry />}
/>
<Route
  path="/why-ziadent"
  element={<WhyZiaDent />}
/>
<Route path="/contact" element={<ContactUs />} />
<Route
  path="/schedule-call"
  element={<ScheduleCall />}
/>
        </Routes>
  
      </main>

      <Footer />

      <AIFloatingButton />
      <WhatsAppButton />
    </>
  );
};

export default App;
