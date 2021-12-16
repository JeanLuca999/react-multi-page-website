import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";

import { GlobalContext } from "./components/GlobalContext";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { useState } from "react";

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
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
