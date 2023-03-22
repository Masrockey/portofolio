import React from 'react';
import Head from './components/head';
import Menu from './components/menu';
import Main from './components/main';

const Index = () => {
  return (
    <div id="main" className="relative">
        <Head />
        <Menu />
      <div className='className=" bg-[url(/img/bg-hero.jpg)] relative py-8 bg-center bg-no-repeat bg-cover"'>
        <Main />
      </div>
    </div>
  );
};

export default Index;
