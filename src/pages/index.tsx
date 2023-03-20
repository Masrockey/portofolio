import React from 'react';
import Sidebar from './components/sidebar';
import Main from './components/main';

const Index = () => {
  return (
    <div className="grid h-screen grid-cols-12 bg-gray-200">
      <div className="flex items-center justify-center col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9">
      <Main />
      </div>
    </div>
  );
};

export default Index;
