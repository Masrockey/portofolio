import React from 'react';

const Main = () => {
  return (
<div>
  <div>
  <div
    className="absolute inset-0 z-20 bg-center bg-no-repeat bg-cover bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to"
  ></div>

  <div
    className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48"
  >
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <div className="border-8 rounded-full shadow-xl border-primary">
        <img
          src="/img/profile.jpg"
          className="h-48 rounded-full sm:h-56"
          alt="author"
        />
      </div>
      <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
        <h1 className="text-4xl text-center text-white font-header sm:text-left sm:text-5xl md:text-6xl">
          Hello I'm Gerry Geofani
        </h1>
        <div
          className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
        >
          <div
            className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
          >
            <p className="text-lg text-white uppercase font-body">Let's connect</p>
            <div className="hidden sm:block">
              <i className="text-3xl bx bx-chevron-right text-yellow"></i>
            </div>
          </div>
          <div
            className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
          >
            <a href="/">
              <i
                className="text-2xl text-white bx bxl-facebook-square hover:text-yellow"
              ></i>
            </a>
            <a href="/" className="pl-4">
              <i
                className="text-2xl text-white bx bxl-twitter hover:text-yellow"
              ></i>
            </a>
            <a href="/" className="pl-4">
              <i
                className="text-2xl text-white bx bxl-dribbble hover:text-yellow"
              ></i>
            </a>
            <a href="/" className="pl-4">
              <i
                className="text-2xl text-white bx bxl-linkedin hover:text-yellow"
              ></i>
            </a>
            <a href="/" className="pl-4">
              <i
                className="text-2xl text-white bx bxl-instagram hover:text-yellow"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div> 
  );
};

export default Main;
