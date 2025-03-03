import React, { Component } from "react";
import { Link } from "react-router-dom";
// image import
import iconsIMG2 from "../../../assets/images/icons/c-massege.png";
import iconsIMG from "../../../assets/images/icons/c-phone.png";
import cornarShape1 from "../../../assets/images/shapes/cornoer-shape1.png";
import cornarShape2 from "../../../assets/images/shapes/cornoer-shape2.png";
class ContactPage extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <div className="page-outlined-text">
                    <h1>Contact Us</h1>
                  </div>
                  <h2 className="page-title">Contact Us</h2>
                  <ul className="page-switcher">
                    <li>
                      <Link
                        onClick={this.scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}>
                        Home <i className="bi bi-caret-right" />
                      </Link>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Contact wrapper start =============== */}
        <div className="contact-wrapper overflow-hidden">
          <div className="container pt-120 position-relative">
            <div className="background-title text-style-one">
              <h2>Contact Now</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-card mt-0">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1}  alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2}  alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG}  alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">Location</h3>
                    <Link onClick={this.scrollTop} to={"#"}>
                      Digital Agency Network 20 Eastbourne Terrace, London
                    </Link>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1}  alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2}  alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG}  alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">Phone</h3>
                    <Link onClick={this.scrollTop} to={"#"}>
                      +012 3456 789102
                    </Link>
                    <Link onClick={this.scrollTop} to={"#"}>
                      +012 3456 789102
                    </Link>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-box-corner1">
                    <img src={cornarShape1}  alt="Imgs" />
                  </div>
                  <div className="contact-box-corner2">
                    <img src={cornarShape2}  alt="Imgs" />
                  </div>
                  <div className="contact-icon">
                    <img src={iconsIMG2}  alt="Imgs" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">Email</h3>
                    <Link onClick={this.scrollTop} to={"#"}>
                      info@example.com{" "}
                    </Link>
                    <Link onClick={this.scrollTop} to={"#"}>
                      support@example.com{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form action="#" id="contact-form">
                  <div className="contact-form-wrapper">
                    <h4 className="contact-form-title">Write a Message</h4>
                    <div className="primary-input-group">
                      <input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="primary-input-group">
                      <input type="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="primary-input-group">
                      <input type="tel" id="phone" placeholder="Your Phone" />
                    </div>
                    <div className="primary-input-group">
                      <input type="text" id="subject" placeholder="Subject" />
                    </div>
                    <div className="primary-input-group">
                      <textarea
                        name="massege"
                        id="message"
                        cols={30}
                        rows={7}
                        placeholder="Write Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="submit-btn">
                      <button type="submit" className="primary-submit">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-map-wrap mt-120">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="Video"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"
                    />
                    <Link
                      onClick={this.scrollTop}
                      to={"https://123movies-to.org"}
                    />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Contact wrapper end =============== */}
      </>
    );
  }
}

export default ContactPage;
