import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Cart from "./views/Cart";
import Menu from "./views/Menu";
import Status from "./views/Status";
import Error from "./views/Error";

function App() {
  const [menu, setMenu] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/beans");
      const data = await response.json();

      setMenu(data.menu);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/menu" element={<Menu data={menu} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/status" element={<Status />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
