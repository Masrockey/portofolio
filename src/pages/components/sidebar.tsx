import React from 'react';

const Sidebar = () => {
  return (
  <div className="flex flex-col">
      <div className="col-span-3">
      <div className="relative mx-auto">
        <div className="left-0 flex items-center justify-center bg-gray-200 rounded-full inset-y-1 w-52 h-52">
          <img
            src="/img/profile.jpg"
            alt="profile Pictures"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
      </div>
      <div className='#'>
        <h2 className="mt-4 text-xl font-semibold">Gerry Geofani</h2>
        <p className="text-gray-600">Web Dev Enthusiast</p>
        <nav className="mt-6">
          <ul>
            <li className="mb-2">
              <a href="/" className="text-gray-600 transition-opacity hover:text-black">Home</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-gray-600 transition-opacity hover:text-black=">About</a>
            </li>
            <li className="mb-2">
              <a href="/portfolio" className="text-gray-600 transition-opacity hover:text-black">Portfolio</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 transition-opacity hover:text-black">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
