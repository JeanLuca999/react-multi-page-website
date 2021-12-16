import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
