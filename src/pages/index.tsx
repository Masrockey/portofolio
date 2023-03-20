import React from 'react';
  

const Index = () => {
  return (
    <div className='grid grid-cols-12 gap-1'>
      <div className='min-h-screen col-span-3 bg-white '>
        <h1>Sidebar</h1>
      </div>
      <div className='col-span-9 bg-white'>
        <h1>body</h1> 
      </div>
    </div>
  );
}

export default Index
