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

  return (
    <div>
      <img src={calendar} alt="Example" className={styles.pic} style={{ width: '400px', height: '200px' }} />
      <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{eventName}</h3>
      <p className="text-base leading-7 text-gray-600">{formattedDate}</p>
    </div>
  );
}
