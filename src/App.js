import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Hero/Intro";
import Projects from "./components/MyWork/projects";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Progress from "./components/SkillBars/progress";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Email from "./components/EmailMe/Email";

function App() {
  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div id="preloader">
          <h2 className="name-load  animate-charcter">l O A D I N G</h2>
        </div>
        <div className="homepage">
          <Navbar />
          <Home />
        </div>
        <AboutMe />
        <Services />
        <Progress />
        <Projects />
        <ContactMe />
        <Email />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
