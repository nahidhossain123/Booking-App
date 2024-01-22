import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SigninPage } from "./pages/signin/SigninPage";
import { SignUpPage } from "./pages/signup/SignUpPage";
import Navbar from "./componets/navbar/Navbar";
import { Hotels } from "./pages/hotels/Hotels.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
