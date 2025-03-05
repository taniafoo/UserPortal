import React, { Component } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "../../../assets/css/animate.css";
import EventIMFG2 from "../../../assets/images/event/ev-md2.png";


class EventCard extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    // Scroll to top function
    scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    render() {
        const { location, title, wowDelay, wowDuration } = this.props;

        return (
            <div
                className="col-lg-4 col-md-6 wow fadeInUp animated"
                data-wow-delay={wowDelay}
                data-wow-duration={wowDuration}>
                <div className="event-card-md">
                    <div className="event-thumb">
                        <img src={EventIMFG2} alt="Imgs" />
                        <div className="event-lavel">
                            <i className="bi bi-bag-dash"></i>
                            <span>15 credits</span>
                        </div>
                    </div>
                    <div className="event-content">
                        <div className="event-info">

                            <div className="event-location">
                                <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="bi bi-geo-alt" /> {location}
                                </Link>
                            </div>
                        </div>
                        <h5 className="event-title">
                            <Link
                                onClick={this.scrollTop}
                                to={`${process.env.PUBLIC_URL}/event-details`}>
                                {title}
                            </Link>
                        </h5>
                        <div className="event-bottom">
                            <div className="event-readme">
                                <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/event-details`}>
                                    Book Now
                                </Link>
                            </div>
                            <div className="event-share-icons">
                                <ul className="share-options">
                                    <li>
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={this.scrollTop} to={"#"}>
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                </ul>
                                <div className="share-btn">
                                    <i className="bi bi-share" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default EventCard;