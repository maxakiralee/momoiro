import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


export default function Example() {
  const [formData, setFormData] = useState({
    eventName: '',
    organizer: '',
    hour: 0, // Default hour as 0
    day: 1, // Default day as 1
    month: 'January', // Default month as January
    year: 2024, // Default year as 2024
    location: '',
    description: '',
    websiteURL: ''
  });

  const navigate = useNavigate(); // Instantiate useNavigate


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adjust hour to match the database schema as integer
    const adjustedData = {
      ...formData,
      hour: parseInt(formData.hour.split(':')[0]), // Convert hour format to integer
      month: new Date(Date.parse(formData.month +" 1, 2021")).getMonth()+1, // Convert month name to month number
    };

    const event = {
      eventName: adjustedData.eventName,
      organizer: adjustedData.organizer,
      hour: adjustedData.hour,
      day: adjustedData.day,
      month: adjustedData.month,
      year: adjustedData.year,
      location: adjustedData.location,
      description: adjustedData.description,
      websiteURL: adjustedData.websiteURL
    };
    
    fetch('http://localhost:5174/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
    
    navigate('/events'); // Navigate to '/events' page after form submission

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 p-20">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="organizer" className="block text-sm font-medium leading-6 text-gray-900">
                Your name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="organizer"
                  id="organizer"
                  autoComplete="given-name"
                  value={formData.organizer}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Event Details</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="eventName" className="block text-sm font-medium leading-6 text-gray-900">
                Event Name
              </label>
              <div className="mt-2">
                <textarea
                  id="eventName"
                  name="eventName"
                  rows={1}
                  value={formData.eventName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="hour" className="block text-sm font-medium leading-6 text-gray-900">
                Hour
              </label>
              <div className="mt-2">
                <select
                  id="hour"
                  name="hour"
                  value={formData.hour}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {[...Array(24).keys()].map(hour => (
                    <option key={hour} value={hour < 10 ? `0${hour}:00` : `${hour}:00`}>{hour < 10 ? `0${hour}:00` : `${hour}:00`}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="day" className="block text-sm font-medium leading-6 text-gray-900">
                Day
              </label>
              <div className="mt-2">
                <select
                  id="day"
                  name="day"
                  value={formData.day}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {[...Array(31).keys()].map(day => (
                    <option key={day + 1} value={day + 1}>{day + 1}</option>
                  ))}
                </select>

                </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="month" className="block text-sm font-medium leading-6 text-gray-900">
                Month
              </label>
              <div className="mt-2">
                <select
                  id="month"
                  name="month"
                  value={formData.month}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                Year
              </label>
              <div className="mt-2">
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {[2024, 2025, 2026].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <textarea
                  id="location"
                  name="location"
                  rows={1}
                  value={formData.location}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Give a detailed description of the event you're proposing.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="websiteURL" className="block text-sm font-medium leading-6 text-gray-900">
                RSVP Link
              </label>
              <div className="mt-2">
                <textarea
                  id="websiteURL"
                  name="websiteURL"
                  rows={1}
                  value={formData.websiteURL}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </div>
   
      </form>
)}
