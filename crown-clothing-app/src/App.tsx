import { Footer, Navbar, Sidebar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Home,
  Products,
  Cart,
  SingleProduct,
  Checkout,
} from "./pages/index";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          {isAuthenticated && <Route path="/checkout" element={<Checkout />} />}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
