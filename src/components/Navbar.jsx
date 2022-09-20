import React from 'react'
import { Fragment } from 'react'
import logo from  '/Users/mac1/Desktop/Colibri/website/NFT-Market/prototipo4/client/src/images/Colibri-Logo-Final.png';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'



const NavbarItem = ({ title, classProps}) => {
    return (
      <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
      </li>
    );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
        <div className="shadow-md w-full pb-2 fixed gradient-bg-welcome">
            <div className="md:flex items-center justify-between py-2">
                <div>
                    <img src={logo} className="ml-3 pt-3 w-40" alt="Colibri Logo" />
                </div>  
                <form className="pl-12 pt-4 items-center w-3/4">   
                      <label for="simple-search" class="sr-only">Search</label>
                      <div class="relative w-full">
                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0  20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                          </div>
                          <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                      </div>      
                </form>
                <ul className="scale-75 pt-4 menu-elements md:flex hiddent list-none flex-row justify-between items-center flex-initial">
                    {["Explorar", "Stats"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                    ))}
                  <div className="pl-4">
                      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                      <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false"></button>
                  </div>  
                  <div>    
                  </div>   
                </ul>
            </div>
        </div>  
  )
}

export default Navbar