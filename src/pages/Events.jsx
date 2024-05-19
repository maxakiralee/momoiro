import React from 'react';
import Drop from '../components/Drop';
import { Link } from 'react-router-dom';

const people = [
  {
    name: 'Mindful Mornings: Yoga & Meditation at Sunrise',
    role: 'May 24th, 2024',
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
  },
  {
    name: 'Maui Movie Nights: Films for Thought and Healing',
    role: 'May 29th, 2024',
    imageUrl:
      'https://images.unsplash.com/photo-1540266908617-307d8bdaacbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdmllJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D',
   
  },
  {
    name: 'Family Fun Day: Games and Wellness Activities',
    role: 'June 3rd, 2024',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661677680531-e045f65191b7?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Rhythms of Recovery: A Drum Circle Experience',
    role: 'June 2nd, 2024',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661370180690-9d1cc8db7890?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Culinary Healing: A Healthy Cooking Class Series',
    role: 'June 15th, 2024',
    imageUrl:
      'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dGRvb3IlMjBjb29raW5nfGVufDB8fDB8fHww',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Paddle for Peace: A Unique Kayaking Journey',
    role: 'June 17th, 2024',
    imageUrl:
      'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF1aXxlbnwwfHwwfHx8MA%3D%3D',
    xUrl: '#',
    linkedinUrl: '#',
  },
]

export default function Events() {
  return (
    <div className="bg-white py-14 sm:py-10">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Events</h2>
          <div className=" flex justify-between items-center ">
             <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to our Events Page—connect, share your story, and discover  < br /> community support and services, all in one place! 
          </p>
          <Drop />
          
        </div>

        <div className=" flex justify-end">
        <Link to="/newevent">
      <button className="bg-zinc-900 px-4 py-2 text-white font-semibold">
        Create New Event
      </button>
    </Link>
        </div>
  
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
            
                <li>
                <button className="  bg-indigo-900 px-4 py-2 text-white font-semibold hover:bg-blue-600">
                    RSVP
                  </button>
                                  </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
