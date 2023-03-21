import React from 'react';
import Sidebar from './components/sidebar';
import Main from './components/main';

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-homeBg dark:bg-homeTwoBg-dark md:pb-16">
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
