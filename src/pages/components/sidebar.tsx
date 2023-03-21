import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Sidebar(): JSX.Element {
  return (
    <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
      <div className="sticky hidden h-screen col-span-12 lg:col-span-4 lg:block top-44">
        <div className='w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0'>
          <img src="/img/profile.jpg"
            className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
            alt="about" />
          <div className=' pt-[100px] pb-8'>
            <h2 className=' mt-6 mb-1 text-[26px] font-semibold dark:text-white'>
              Gerry Geofani
            </h2>
            <h3 className='mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6] '>
              Web Developer Enthusias
            </h3>
          </div>
          <div className='p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]'>
            <div className='flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5'>
              <div className='text-left ml-2.5'>
                <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                  Phone
                </p>
                <p className='dark:text-white'>
                  +6285-910-666-7723
                </p>
              </div>
            </div>
            <div className='flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5'>
              <div className='text-left ml-2.5'>
                <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                  Email
                </p>
                <p className='dark:text-white'>
                  gerry@geofani.com
                </p>
              </div>
            </div>
            <div className='flex py-2.5'>
              <div className='text-left ml-2.5'>
                <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                  Location
                </p>
                <p className='dark:text-white'>
                  Indonesia
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-2.5'>
          <button className='inline-flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded rounded-full hover:bg-blue-700'>
            <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
