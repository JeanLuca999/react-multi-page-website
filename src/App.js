import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import { GlobalContext } from "./components/GlobalContext";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

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
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/testimonial" element={<Testimonial />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </GlobalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
