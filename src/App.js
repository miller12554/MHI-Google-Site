import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import Home from "./components/homepage/Home";
import Navigation from "./components/navbar/navigation";
import Contact from "./components/pages/Contact-Us/Contact";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
