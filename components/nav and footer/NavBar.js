import React, { use } from 'react'
import { useState } from 'react'

export default function NavBar() {
  const [usermenu,setUsermenu] = useState(false)
  const [isuser,setIsuser] = useState(false)
  const [mobile,setMobile] = useState(false)

  return (
    <div>
      
<nav class=" border-gray-200 px-2 sm:px-4 py-1 bg-gray-700">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Riaz Ameer</span>
  </a>
  <div class="flex items-center md:order-2">
    {isuser ? <button type="button" onClick={()=>usermenu ? setUsermenu(false):setUsermenu(true)} class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-10 h-10 rounded-full" src="/navbar.jpg" alt="user photo"/>
      </button>: <>
      <button class="bg-transparent hover:bg-gray-600 text-white hover:text-white py-1.5 text-sm px-4 border border-gray-400 hover:border-transparent rounded-full ">
  Sign Up
</button>
<button class="bg-transparent ml-4 hover:bg-gray-600 text-white hover:text-white py-1.5 px-4 text-sm border border-gray-400 hover:border-transparent rounded-full ">
  Sign In
</button>
      </>}
      
      
      
      <button data-collapse-toggle="mobile-menu-2" onClick={()=>mobile? setMobile(false):setMobile(true)} type="button" class="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className={`items-center ${mobile? '':'hidden'} justify-between w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
    <ul class="flex flex-col p-4 mt-4 border  rounded-l md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-700 md:bg-gray-700 border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 rounded  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 rounded  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 rounded  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
{usermenu && <>
  <div className='flex'>
<div class="z-50 relative w-32 ml-auto mr-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>

    </div>
</>}
    </div>
  )
}
