import React from "react";
import MainNav from "./Navbar";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <MainNav />
      <Home />
      <About id="about" />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
