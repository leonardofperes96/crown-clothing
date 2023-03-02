import { Footer, Navbar, Sidebar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Home,
  Products,
  Cart,
  Login,
  SingleProduct,
} from "./pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Login />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
