import React, { Component } from "react";
import AchiveMentCounter from "./AchiveMentCounter";
import BlogArea from "./BlogArea";
import EventTimer from "./EventTimer";
import HeroArea from "./HeroArea";
import PopularEventArea from "./PopularEventArea";
import PricingArea from "./PricingArea";
import RecentSchedule from "./RecentSchedule";
import SpeakerArea from "./SpeakerArea";
import TestimonialArea from "./TestimonialArea";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      price: 50, // Default price
      events: [
        { id: 1, location: 'Singapore', title: 'Proactive transformation requires embrace of technology.', price: 30, wowDelay: '200ms', wowDuration: '1500ms' },
        { id: 2, location: 'Broadway, New York', title: 'Innovative approaches to modernizing industries.', price: 60, wowDelay: '400ms', wowDuration: '1500ms' },
        { id: 3, location: 'Paris, France', title: 'Adapting to changing technologies for success.', price: 50, wowDelay: '200ms', wowDuration: '1500ms' },
        { id: 4, location: 'London, UK', title: 'Embracing change for a brighter future.', price: 40, wowDelay: '200ms', wowDuration: '1500ms' },
        { id: 5, location: 'Berlin, Germany', title: 'Empowering transformation through smart solutions.', price: 70, wowDelay: '200ms', wowDuration: '1500ms' }
      ]
    };
  }

  handleSearchQueryChange = (searchQuery) => {
    this.setState({ searchQuery });
  };

  handlePriceChange = (price) => {
    this.setState({ price });
  };

  filterEvents = () => {
    const { searchQuery, price, events } = this.state;
    return events.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      event.price <= price
    );
  };

  render() {
    const filteredEvents = this.filterEvents();

    return (
      <div className="homepage">
        {/* Preloader */}
        <div className="preloader">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Hero Area with Search & Price Filter */}
        <HeroArea
          searchQuery={this.state.searchQuery}
          price={this.state.price}
          onSearchQueryChange={this.handleSearchQueryChange}
          onPriceChange={this.handlePriceChange}
        />

        {/* Pass Filtered Events to PopularEventArea */}
        <PopularEventArea events={filteredEvents} />

        {/* Other Sections */}
        <RecentSchedule />
        <AchiveMentCounter />
        <SpeakerArea />
        <TestimonialArea />
        <PricingArea />
        <EventTimer />
        <BlogArea />
      </div>
    );
  }
}

export default HomePage;
