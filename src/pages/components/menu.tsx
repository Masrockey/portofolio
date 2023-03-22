import React from 'react';

const Menu = () => {
  return (
<div
x-data="{
  triggerNavItem(id) {
      $scroll(id)
  },
  triggerMobileNavItem(id) {
      mobileMenu = false;
      this.triggerNavItem(id)
  }
}">
{/* NavBar Start*/}
<div className="absolute top-0 z-50 w-full py-3 sm:py-5">
<div className="container flex items-center justify-between">
<div>
  <a href="/">
    <img src="/img/logo.svg" className="w-24 lg:w-48" alt="logo image" />
  </a>
</div>
<div className="hidden lg:block">
  <ul className="flex items-center">
    
    <li className="pl-6 group">
      
      <span click="triggerNavItem('#about')"
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
      
      <span
        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
      ></span>
    </li>
    
    <li className="pl-6 group">
      
      <span
        click="triggerNavItem('#services')"
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        >Services</span
      >
      
      <span
        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
      ></span>
    </li>
    
    <li className="pl-6 group">
      
      <span
        click="triggerNavItem('#portfolio')"
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        >Portfolio</span>
      
      <span
        className='block h-0.5 w-full bg-transparent group-hover:bg-yellow'>
      </span>
    </li>
    
    <li className="pl-6 group">
      
      <span
        click="triggerNavItem('#clients')"
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        >Clients</span>
      
      <span
        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
      ></span>
    </li>
    
    <li className="pl-6 group">
      
      <span
        click="triggerNavItem('#work')"
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        >Work</span>
      
      <span
        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
      ></span>
    </li>
    
    <li class="group pl-6">
      
      <span
        click="triggerNavItem('#statistics')"
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        >Statistics</span>
      
      <span
        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
      ></span>
    </li>
    
    <li className="pl-6 group">
      
      <span
        click="triggerNavItem('#blog')"
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        >Blog</span>
      
      <span
        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
      ></span>
    </li>
    
    <li className="pl-6 group">
      
      <span
        click="triggerNavItem('#contact')"
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        >Contact</span>
      
      <span
        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
      ></span>
    </li>
    
  </ul>
</div>
<div className="block lg:hidden">
  <button click="mobileMenu = true">
    <i className="text-4xl text-white bx bx-menu"></i>
  </button>
</div>
</div>
</div>
</div>
<div className="{ 'opacity-100 pointer-events-auto': mobileMenu } pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
<div className="absolute right-0 w-2/3 min-h-screen px-8 py-4 shadow bg-primary md:w-1/3" >
<button
className="absolute top-0 right-0 mt-4 mr-4"
click="mobileMenu = false"
>
<img src="/img/icon-close.svg" class="h-10 w-auto" alt="" />
</button>

<ul className="flex flex-col mt-8">

<li className="py-2">

<span
click="triggerMobileNavItem('#about')"
className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
>About</span>

</li>

<li className="py-2">

<span
click="triggerMobileNavItem('#services')"
className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
>Services</span>

</li>

<li class="py-2">

<span
click="triggerMobileNavItem('#portfolio')"
className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
>Portfolio</span>

</li>

<li className="py-2">

<span
click="triggerMobileNavItem('#clients')"
className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
>Clients</span>

</li>

<li className="py-2">

<span
click="triggerMobileNavItem('#work')"
class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
>Work</span>

</li>

<li className="py-2">

<span
click="triggerMobileNavItem('#statistics')"
className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
>Statistics</span>

</li>

<li className="py-2">

<span
click="triggerMobileNavItem('#blog')"
class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
>Blog</span>

</li>

<li className="py-2">

<span
click="triggerMobileNavItem('#contact')"
className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
>Contact</span>

</li>

</ul>
</div>
</div>
{/* NavBar End*/}
  );
};

export default Menu;
