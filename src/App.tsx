/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Manufacturing } from "./pages/Manufacturing";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";
import { Certificates } from "./pages/Certificates";
import { Testimonials } from "./pages/Testimonials";
import { AboutUs } from "./pages/AboutUs";
import { Gallery } from "./pages/Gallery";
import { HindiHome } from "./pages/HindiHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hindi" element={<HindiHome />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
