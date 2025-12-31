import React, { useState } from "react";
import Header from "./components/Layout/Header";
import HeroSection from "./components/HeroSection";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Header onShowCart={() => setShowCart(true)} />
      <HeroSection />
      <AvailableMeals />
    </CartProvider>
  );
};

export default App;
