import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Events from "./components/Events/Events";
import Prices from "./components/Prices/Prices";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Gallery />
        <Events />
        <Prices />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
