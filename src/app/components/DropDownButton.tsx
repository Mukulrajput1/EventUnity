import React, { useState } from 'react';

const DropdownButton = ({ items,callBack }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value,setValue] = useState('Login as College')

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleValue = (event:any) =>{
    setValue(event.target.innerText)
    callBack(event.target.innerText)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left z-30">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full text-red-400 rounded-md border border-red-400 px-4 py-2 text-sm leading-5 font-medium shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
      >
        {value}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {items.map((item:any, index:any) => (
              <a key={index} href="#" onClick={toggleValue} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{item}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
