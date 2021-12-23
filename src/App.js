import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";

import { GlobalContext } from "./components/GlobalContext";

import Home from "./pages/Home";
import { useState } from "react";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen((prev) => !prev);
    console.log("menu clicked");
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <GlobalContext.Provider value={{ menuOpen, handleMenuClick }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Service />}></Route>
          </Routes>
        </GlobalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
