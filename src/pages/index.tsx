import React from 'react';
import Sidebar from './components/sidebar';

const IndexPage = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-200">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="mb-4 text-4xl font-bold">Welcome to my website!</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lectus ut
          justo lobortis, ut commodo nunc vehicula. Donec convallis enim non neque commodo,
          vel pharetra velit tempus. Donec dictum semper augue in porta.
        </p>
      </main>
    </div>
  );
};

export default IndexPage;
