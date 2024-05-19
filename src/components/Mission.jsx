import React from 'react';
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid';

const cards = [
  {
    name: 'Discussion Posts',
    description: 'Start a New Thread, Share an Idea, Give your Output!',
    icon: PhoneIcon,
  },
  {
    name: 'Event Planning',
    description: 'Share Events, Receive Participant Info, Make Successful Meetups Happen',
    icon: LifebuoyIcon,
  },
  {
    name: 'Recovery Information',
    description: 'Access Recovery Help and donate to your Community.',
    icon: NewspaperIcon,
  },
];

export default function Mission() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-r from-blue-300 to-blue-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Maui Strong</h2>
          <p className="mt-6 text-2xl font-semibold leading-8 text-indigo-600">
            Together we are Maui, Together we are Strong
          </p>
        </div>
        <div className="flex justify-center mt-16">
          <div className="inline-block rounded-full bg-white py-4 px-8 shadow-lg">
            <p className="text-3xl font-bold text-gray-700">
              What we offer
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex flex-col items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg transform transition-transform hover:scale-105">
              <card.icon className="h-10 w-10 text-indigo-600" aria-hidden="true" />
              <div className="text-center">
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{card.name}</h3>
                <p className="mt-2 text-lg text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
