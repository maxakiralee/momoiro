import React from 'react';
import Drop from '../components/Drop';


const events = [
  {
    name: 'Mindful Mornings: Yoga & Meditation at Sunrise',
    date: 'May 1',
    time: '5am',
    role: 'Co-Founder / CEO',
    imageUrl:
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Art Heals: A Creative Escape Workshop',
    date: 'May 13',
    time: '3pm',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Echoes of Maui: Storytelling Under the Stars',
    date: 'May 13',
    time: '3pm',
        role: 'Business Relations',
    imageUrl:
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D',
    lastSeen: null,
  },
  {
    name: 'Family Fun Day: Games and Wellness Activities',
    date: 'May 13',
    time: '3pm',
    role: 'Front-end Developer',
    imageUrl:
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Maui Movie Nights: Films for Thought and Healing',
    date: 'May 13',
    time: '3pm',
   role: 'Designer',
    imageUrl:
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  
]

export default function Events() {
  return (
    <div>
      <div className="flex justify-between items-center"> {/* Flex container to align items horizontally */}
        <h1 className="p-10" >Sign up for new events today! </h1>
        <div className="p-10">
  <Drop />
</div>

      </div>
      <ul role="list" className="divide-y divide-gray-200 p-10">
        {events.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-4xl font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-lg leading-5 text-gray-500">{person.date}, 2024 {person.time} </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-xl leading-6 text-gray-900">{person.role}</p>
      
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}