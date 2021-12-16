import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";

import { GlobalContext } from "./components/GlobalContext";

import Home from "./pages/Home";
import { useState } from "react";
import About from "./pages/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen((prev) => !prev);
    console.log("menu clicked");
  }

  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={{ menuOpen, handleMenuClick }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
