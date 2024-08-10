import "./App.css";

import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Navigation from "./components/Navigation/Navigation";
import Login from "./pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
