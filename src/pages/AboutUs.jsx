import React from 'react';
import '../styling/AboutUs.css';
 import maui from './maui.jpg';
import wordcloud from './word-cloud.png';

function AboutUs() {
  const handleButtonClick = () => {
    window.location.href = 'https://www.epa.gov/maui-wildfires';
  };
  const handleContactButtonClick = () => {
    window.location.href = 'https://healoneworld.org/Contact-copy';
  };

  return (
    <div className="heading">
      <h1>OUR MISSION IS SIMPLE</h1>
      <div className="goal">
        <p>"Relief and Recovery"</p>
        <div className="about-image">
            <img 
              src={maui} 
              alt="Heal One World"
            />
          </div>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-content">
            <h2>Disaster Strikes</h2>
            <p>
              In early August 2023, a series of wildfires broke out in the U.S. state of Hawaii, predominantly on the island of Maui. The wind-driven fires prompted evacuations and caused widespread damage, killing at least 101 people and leaving two persons missing in the town of Lahaina on Maui's northwest coast.
            </p>
            <div className="button-container">
                <button onClick={handleButtonClick} className="button-link">Read More</button>
            </div>
          </div>
        </section>
      </div>
      <div className="meditate">
        <h2>Our Resources</h2>
        <form className="checkbox-form">
          <label>
            <input type="checkbox" name="realtime-blog" />
            Real-Time Blog
          </label>
          <label>
            <input type="checkbox" name="dynamic-event-planner" />
            Dynamic Event Planner
          </label>
          <label>
            <input type="checkbox" name="up-to-date-info" />
            Up to Date Information/News
          </label>
        </form>
        <div className="word-cloud">
            <img 
              src={wordcloud} 
              alt="Resources"
            />
        </div>
        
        <div className="contact-button-container">
          <button onClick={handleContactButtonClick} className="button-link">Contact Us!</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
