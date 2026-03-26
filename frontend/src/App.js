import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import LabourLaws from "@/pages/LabourLaws";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Clients from "@/pages/Clients";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import PaymentPortals from "@/pages/PaymentPortals";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/labour-laws" element={<LabourLaws />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment-portals" element={<PaymentPortals />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
