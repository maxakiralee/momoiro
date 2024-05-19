import React from 'react';
const posts = [
    {
      id: 1,
      title: 'Sunset Serenity Yoga at Lahaina Beach',
      href: '#',
      description:
        'Come refresh your mind and practice yoga at Lahaina Beach. Free Classes and refreshments available!',
      imageUrl:
        'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'May 28, 2024',
      datetime: '2020-03-16',
      category: { title: 'Wellness', href: '#' },
      author: {
        name: 'Leilani Makana',
        role: 'Fitness Instructor',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
        id: 2,
        title: 'Hiking Waimoku Falls',
        href: '#',
        description:
          'Come hiking with fellow Maui Residents amongst the waterfalls of Waimoku Falls. Trail is moderate difficulty so come prepared!',
        imageUrl:
          'https://images.unsplash.com/photo-1463694023725-91c761715d21?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'June 2, 2024',
        datetime: '2020-03-16',
        category: { title: 'Activity', href: '#' },
        author: {
          name: 'David Johnson',
          role: 'Hiker/Nature Activist',
          href: '#',
          imageUrl:
            'https://plus.unsplash.com/premium_photo-1670986947556-384ad35d643e?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      }, 
      {
        id: 3,
        title: 'Kahalui Food Drive',
        href: '#',
        description:
          'Come volunteer at our weekly Kahalui Food Drive to help displaced and under-priviledged Maui Residents!.',
        imageUrl:
          'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'May 25, 2024',
        datetime: '2020-03-16',
        category: { title: 'Volunteering', href: '#' },
        author: {
          name: 'Peggy Foster',
          role: 'Charity CEO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      }, ]
  
  export default function Latest() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Discover Recent Events</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">

              Learn about the most recent and up-to-date events in your Area
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  