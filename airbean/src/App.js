import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Cart from "./views/Cart";
import Menu from "./views/Menu";
import Status from "./views/Status";
import Error from "./views/Error";
import DevNav from "./components/DevNav";

function App() {
  const [menu, setMenu] = useState({});
  const [store, setStore] = useState({ data: "" });

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/beans");
      const data = await response.json();

      setMenu(data.menu);
      // console.log(menu);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function clickHandler(data) {
    setStore((prev) => ({
      data: [...prev.data, data],
    }));
    console.log(store);
  }
  return (
    <div className="App">
      <DevNav />
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
