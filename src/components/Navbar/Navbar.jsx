import "./Navbar.css";
import $ from "jquery";
import { Link } from "react-router-dom";

// hambager menu
$(document).ready(function () {
  $(".menuBtn").click(function () {
    $(this).toggleClass("act");
    if ($(this).hasClass("act")) {
      $(".mainMenu").addClass("act");
    } else {
      $(".mainMenu").removeClass("act");
    }
  });
});

// click scroll
$(document).ready(function () {
  $(".mainMenu li a").click(function (e) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top,
      },
      1000
    );
    $(".mainMenu").removeClass("act");

    if ($(this).hasClass("act")) {
      $(".menuBtn").addClass("act");
    } else {
      $(".menuBtn").removeClass("act");
    }

    e.preventDefault();
  });
});

// change navbar color on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbur");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// toggle light and dark theme
$(window).on("load", function () {
  $(".toggle").on("click", () => {
    $("body").toggleClass("light");
  });
});

const Navbar = () => {
  return (
    <>
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header" className="fixed-top ">
        <div className="container-fluid  navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center lefty">
              <h5 className="ld-flex mr-auto devman">DevMan</h5>
              <nav className="nav-menu  mainMenu">
                <ul>
                  <li className="active">
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>

                  <li>
                    <a href="#work">My Work</a>
                  </li>

                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>

              <div className="left-btns">
                <div class=" " id="theme-button2">
                  <input id="toggle" class="toggle" type="checkbox"></input>
                </div>
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="CvMe"
                  >
                    <button className="my-cv">Resume</button>
                  </a>
                </div>

                <div className=" " id="theme-button">
                  <Link to="#" class="menuBtn">
                    <span class="lines"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
