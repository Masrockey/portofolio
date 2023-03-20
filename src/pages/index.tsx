import React from 'react';
import Sidebar from './components/sidebar';
import Main from './components/main';

const IndexPage = () => {
  return (
    <div className="flex grid flex-row h-screen grid-cols-12 bg-gray-200">
      <div className="col-span-3 ">
        <Sidebar />
      </div>
      <div className="col-span-9">
      <Main />
      </div>
    </div>
  );
};

export default IndexPage;
