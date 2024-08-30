import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="bg-slate-600 flex justify-between ">
        
          <span className="text-xl flex items-center mx-3 text-bold">MERN</span>
        
            <ul className="justify-end flex space-x-10 px-28 py-4">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          
        
      </nav>
    </>
  );
};

export default Nav;
