import Products from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { ShoppingCartProvider } from "./components/Contexts/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>

  )
}

export default App;