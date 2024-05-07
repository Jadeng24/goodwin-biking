import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";
import ItemDetails from "./pages/item-details/ItemDetails";
import Checkout from "./pages/checkout/Checkout";
import Confirmation from "./pages/checkout/Confirmation";
import Navbar from "./pages/global/Navbar";
import CartMenu from "./pages/global/cart-menu/CartMenu";
import Footer from "./pages/global/footer/Footer";
import TermsAndConditions from "./pages/company-policies/TermsAndConditions";
import RefundsAndReturns from "./pages/company-policies/RefundsAndReturns";
import AboutUs from "./pages/about-us/AboutUs";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="returns" element={<RefundsAndReturns />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
