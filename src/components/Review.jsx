import React from 'react';

const testimonials = [
  {
    body: 'The Maui Wildfire Recovery website has been a lifeline for me. The blog posts provide crucial updates on recovery efforts, and the event planner has helped me reconnect with my neighbors through local community events.',
    author: {
      name: 'Leslie Alexander',
      handle: 'alexlesi',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'As a small business owner, the resources shared on Miami Strong have been invaluable. The event planner has allowed me to attend community meetings that have helped me rebuild my business stronger than ever.',
    author: {
      name: 'James Rodriguez',
      handle: 'jarosd',
      imageUrl:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  {
    body: 'Maui Strong has been a beacon of hope during tough times. The informative blog articles and the well-organized events have kept my family informed and engaged in the recovery process',
    author: {
      name: 'Emily Davis',
      handle: 'edavis98',
      imageUrl:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  {
    body: 'I found out about volunteer opportunities through the event planner on the Maui Wildfire Recovery site. Its given me a way to contribute to my community and make a difference',
    author: {
      name: 'Michael Lee',
      handle: 'leematichal',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  {
    body: 'The Maui Wildfire Recovery websites blog has kept me updated on the latest recovery efforts and relief resources. The event planner has also helped me find and attend support group meetings, which have been incredibly helpful.',
    author: {
      name: 'Aisha Patel',
      handle: 'apatel76',
      imageUrl:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  {
    body: 'Thanks to Maui Strong, I discovered several local initiatives aimed at rebuilding our community. The events listed have allowed me to network with others in the same situation and find collaborative solutions.',
    author: {
      name: 'Tom Nguyen',
      handle: 'nguyenert',
      imageUrl:
        'https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  // More testimonials...
]

export default function Review() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
