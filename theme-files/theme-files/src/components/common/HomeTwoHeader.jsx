import $ from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import LogoV2 from "../../assets/images/logo-v2.png";
import Logo from "../../assets/images/logo.png";
import SpeakerSidebarIMG1 from "../../assets/images/speaker/sb-s1.png";
import SpeakerSidebarIMG2 from "../../assets/images/speaker/sb-s2.png";

class HomeTwoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {
    this.ScrtiptInit();
  }
// all jquery script 
  ScrtiptInit() {
    $(document).ready(function () {
      // header active class
      $(".main-nav ul li a").click(function () {
        $("li a").removeClass("active");
        $(this).addClass("active");
      });
      $(".main-nav ul li.has-child-menu ul.sub-menu li a").click(function () {
        $(this)
          .parent()
          .parent()
          .parent()
          .find("a.has-child-menu-item")
          .addClass("active");
      });
      // header active class end

      /***** Mobile Menu Js *****/
      $(".hamburger").on("click", function (event) {
        $(this).toggleClass("h-active");
        $(".main-nav").toggleClass("slidenav");
      });

      $(".header-home .main-nav ul li  a").on("click", function (event) {
        $(".hamburger").removeClass("h-active");
        $(".main-nav").removeClass("slidenav");
      });

      $(".main-nav .fl").on("click", function (event) {
        var $fl = $(this);
        $(this).parent().siblings().find(".sub-menu").slideUp();
        $(this)
          .parent()
          .siblings()
          .find(".fl")
          .addClass("flaticon-plus")
          .text("+");
        if ($fl.hasClass("flaticon-plus")) {
          $fl.removeClass("flaticon-plus").addClass("flaticon-minus").text("-");
        } else {
          $fl.removeClass("flaticon-minus").addClass("flaticon-plus").text("+");
        }
        $fl.next(".sub-menu").slideToggle();
      });
           /***** Mobile Menu Js end *****/
      /****** schedule-sidebar JS ******/
      document.querySelectorAll(".sidebar-style-two i").forEach((element) => {
        element.addEventListener("click", () => {
          document
            .querySelectorAll(".schedule-sidebar")
            .forEach((element) => element.classList.add("sb-active"));
        });
      });
      document.querySelectorAll(".sb-toggle-icon").forEach((element) => {
        element.addEventListener("click", () => {
          document
            .querySelectorAll(".schedule-sidebar")
            .forEach((element) => element.classList.remove("sb-active"));
        });
      });
      /****** schedule-sidebar JS  end******/
      /****** custom Cursor  JS  end******/
      var cursor = document.querySelector(".cursor");
      var cursorinner = document.querySelector(".cursor2");
      var a = document.querySelectorAll("a");

      document.addEventListener("mousemove", function (e) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      });

      document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + "px";
        cursorinner.style.top = y + "px";
      });

      document.addEventListener("mousedown", function () {
        cursor.classList.add("click");
        cursorinner.classList.add("cursorinnerhover");
      });

      document.addEventListener("mouseup", function () {
        cursor.classList.remove("click");
        cursorinner.classList.remove("cursorinnerhover");
      });

      a.forEach((item) => {
        item.addEventListener("mouseover", () => {
          cursor.classList.add("hover");
        });
        item.addEventListener("mouseleave", () => {
          cursor.classList.remove("hover");
        });
      });
      // ccustom cursor end
      /****** Sticky Navber Js ******/
      $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
          $(".header-area").addClass("sticky");
        } else {
          $(".header-area").removeClass("sticky");
        }
      });
      /****** Sticky Navber Js end ******/
      // preloader
      $(".preloader").delay(100).fadeOut("slow");
      // preloader end
    });
  }

  // // smooth scroll
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {

    const sidebarSlider = {
      slidesPerView: 3,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 15000,
      },
      pagination: {
        el: ".speaker-sb-pagination",
      },
    };
    return (
      <>
        {/* schedule-sidebar Area  start*/}
        <div className="schedule-sidebar">
          <div className="schedule-sidebar-wrapper">
            <div className="sb-toggle-icon">
              <i className="bi bi-x-lg" />
            </div>
            <div className="sb-next-event">
              <h3>Next Event</h3>
              <div className="sb-next-event-wrap" id="timer">
                <div className="sb-single-count">
                  <h3 id="days">308</h3>
                  <p>Days</p>
                </div>
                <div className="sb-single-count">
                  <h3 id="hours">10</h3>
                  <p>Hour</p>
                </div>
                <div className="sb-single-count">
                  <h3 id="minutes">37</h3>
                  <p>Miniute</p>
                </div>
                <div className="sb-single-count">
                  <h3 id="seconds">14</h3>
                  <p>Secoend</p>
                </div>
              </div>
            </div>
            <div className="sb-speakers-wrap">
              <h3>Our Honorable Speaker</h3>
              <div className="sb-speakers-slider swiper">
                <Swiper {...sidebarSlider} className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="sb-speaker-card">
                      <div className="sb-speaker-thumb">
                        <img src={SpeakerSidebarIMG1} alt="Imgs" />
                      </div>
                      <div className="sb-speaker-content">
                        <h4>Santiago Axel</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="sb-speaker-card">
                      <div className="sb-speaker-thumb">
                        <img src={SpeakerSidebarIMG2} alt="Imgs" />
                      </div>
                      <div className="sb-speaker-content">
                        <h4>Easton Cooper</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="sb-speaker-card">
                      <div className="sb-speaker-thumb">
                        <img src={SpeakerSidebarIMG2} alt="Imgs" />
                      </div>
                      <div className="sb-speaker-content">
                        <h4>Sloio Axel</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="speaker-sb-pagination d-lg-flex d-none" />
              </div>
            </div>
            <div className="sb-about">
              <div className="footer-logo">
                <img src={Logo} alt="Imgs" />
              </div>
              <p>
                Cras semper, massa vel aliquam luctus, eros odio tempor turpis,
                ac placerat metus tortor eget magna. Donec mattis posuere
                pharetra Donec vestibulum.
              </p>
              <ul className="footer-social-icon d-flex">
                <li>
                  <Link to={"#"}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="fab fa-whatsapp" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* schedule-sidebar Area  end*/}
        {/* ===============  topbar area start  =============== */}
        <div className="topbar-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 d-lg-block d-none">
                <ul className="topbar-contact-wrap">
                  <li>
                    <Link to={"#"}>
                      <i className="bi bi-geo-alt" /> 1356 Broadway, New York
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:6719251352587">
                      <i className="bi bi-telephone-plus" /> (671) 925-1352587
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@example.com">
                      <i className="bi bi-envelope-open" /> info@example.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <ul
                  className="
                topbar-social-links
                justify-content-lg-end justify-content-center
              "
                >
                  <li>
                    <Link to={"#"}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fab fa-whatsapp" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  topbar area end  =============== */}
        {/* ===============  header style two start =============== */}
        <header>
          <div className="header-area header-style-two">
            <div className="container">
              <div className="row">
                <div
                  className="
                col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12
                d-xl-flex
                align-items-center
              "
                >
                  <div className="logo d-flex align-items-center justify-content-between">
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      <img src={Logo} alt="logo" />
                    </Link>
                    <div className="mobile-menu d-flex">
                      <Link to={"#"} className="hamburger d-block d-xl-none">
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                  <nav className="main-nav">
                    <div className="inner-logo d-xl-none">
                      <Link to={"#"}>
                        <img src={LogoV2} alt="Imgs" />
                      </Link>
                    </div>
                    <ul>
                      {/* <li><Link to={`${process.env.PUBLIC_URL}/`} class="active">Home <span>01</span> </Link></li>  */}
                      <li className="has-child-menu">
                        <Link to={""} className="active">
                          Home <span>02</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/`}
                              onClick={this.scrollTop}
                            >
                              Home One
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/home-page-2`}
                              onClick={this.scrollTop}
                            >
                              Home Two
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/about`}
                          onClick={this.scrollTop}
                        >
                          About <span>01</span>
                        </Link>
                      </li>
                      <li className="has-child-menu">
                        <Link to={""}>
                          Events <span>03</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/event`}
                              onClick={this.scrollTop}
                            >
                              Event Grid
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/event-sidebar`}
                              onClick={this.scrollTop}
                            >
                              Event Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/event-details`}
                              onClick={this.scrollTop}
                            >
                              Event Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu">
                        <Link to={""}>
                          Spekars <span>03</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/speaker`}
                              onClick={this.scrollTop}
                            >
                              Speaker Grid
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/speaker-topbar`}
                              onClick={this.scrollTop}
                            >
                              Speaker Topbar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/speaker-details`}
                              onClick={this.scrollTop}
                            >
                              Speaker Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu">
                        <Link to={""}>
                          Pages <span>05</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/schedule`}
                              onClick={this.scrollTop}
                            >
                              Schedule
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/gallary`}
                              onClick={this.scrollTop}
                            >
                              Gallary
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/pricing`}
                              onClick={this.scrollTop}
                            >
                              Pricing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/faq`}
                              onClick={this.scrollTop}
                            >
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/error`}
                              onClick={this.scrollTop}
                            >
                              404
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu">
                        <Link to={"#"} className="has-child-menu-item">
                          Blog Grid <span>04</span>
                        </Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog`}
                              onClick={this.scrollTop}
                            >
                              Blog Grid
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                              onClick={this.scrollTop}
                            >
                              Blog Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}blog-standard`}
                              onClick={this.scrollTop}
                            >
                              Blog Standard
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}blog-details`}
                              onClick={this.scrollTop}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}contact`}
                          onClick={this.scrollTop}
                        >
                          Contact <span>01</span>
                        </Link>
                      </li>
                    </ul>
                    <div className="inner-contact-wrap d-lg-none">
                      <div className="innter-contact-box">
                        <Link to={"#"}>
                          <i className="bi bi-geo-alt" /> 1356 Broadway, New
                          York
                        </Link>
                      </div>
                      <div className="innter-contact-box">
                        <Link to={"#"}>
                          <i className="bi bi-telephone-plus" /> (671)
                          925-1352587
                        </Link>
                      </div>
                      <div className="innter-contact-box">
                        <Link to={"#"}>
                          <i className="bi bi-envelope-open" /> info@example.com
                        </Link>
                      </div>
                    </div>
                    <div className="inner-btn d-xl-none">
                      <Link
                        to={`${process.env.PUBLIC_URL}/event-details`}
                        onClick={this.scrollTop}
                        className="primary-btn-fill"
                      >
                        Get Ticket
                      </Link>
                    </div>
                  </nav>
                </div>
                <div className="col-xl-3 col-2 d-none d-xl-block">
                  <div
                    className="
                  nav-right
                  h-100
                  d-flex
                  align-items-center
                  justify-content-end
                "
                  >
                    <ul className="d-flex align-items-center nav-right-list">
                      <li className="nav-btn">
                        <Link
                          className="primary-btn-fill"
                          to={`${process.env.PUBLIC_URL}/event-details`}
                        >
                          Get Ticket
                        </Link>
                      </li>
                      <li className="sidebar-style-two">
                        <Link to={"#"}>
                          <i className="bi bi-columns-gap" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* ===============  header style two end =============== */}
        {/* <!-- Custom Cursor --> */}
        <div className="cursor"></div>
        <div className="cursor2"></div>
        {/* Custom Cursor End  */}
      </>
    );
  }
}

export default HomeTwoHeader;
