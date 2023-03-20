import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className='inset-y-0 left-0 flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full '>
      <img
        className="object-cover w-full h-full rounded-full"
        src="/img/profile.jpg"
        alt="Profile photo"
        width={150}
        height={150}
      />
      </div>
      <h2 className="mt-4 text-xl font-semibold">Gerry Geofani</h2>
      <p className="text-gray-600">Web Dev Enthusiast</p>
      <nav className="mt-6">
        <ul>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-black">Home</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-black">About</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-black">Portfolio</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
