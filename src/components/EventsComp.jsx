import React from "react";
import calendar from '../pages/calender.png'; 
import styles from '../styling/EventsComp.module.css';

const getFormattedDate = (day, month, year) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // handles 11th to 20th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const monthName = monthNames[month - 1]; // convert month number to name
  const ordinalSuffix = getOrdinalSuffix(day);
  return `${monthName} ${day}${ordinalSuffix}, ${year}`;
};

export default function EventsComp({eventName, hour, day, month, year, location, description}) {
  const formattedDate = getFormattedDate(day, month, year);

  const handleButtonClick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSe6wikAQLjmWv0vIufJC4GOoeoc3tp64XmGN-NvMn_-1ghq6w/viewform";
  };

  return (
    <div>
      <img src={calendar} alt="Example" className={styles.pic} style={{ width: '400px', height: '200px' }} />
      <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{eventName}</h3>
      <p className="text-base leading-7 text-gray-600">{formattedDate}</p>

      <ul role="list" className="mt-6 flex gap-x-6">
        <li>
          <button 
            className="bg-indigo-900 px-4 py-2 text-white font-semibold hover:bg-blue-600"
            onClick={handleButtonClick}
          >
            RSVP
          </button>
        </li>
      </ul>
    </div>
  );
}
