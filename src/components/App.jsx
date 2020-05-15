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
      <Home id="home" />
      <About id="about" />
      <Resume id="resume" />
      <Contact id="contacts" />
      <Footer />
    </div>
  );
}

export default App;
