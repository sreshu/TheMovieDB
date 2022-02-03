import React from 'react';
import Logo from "../logo.png"
import {Link} from 'react-router-dom'

function NavBar() {
  return <>
  <div className="border pl-12 flex space-x-8 items-center py-4 ">
    <img className="w-[40px] md:w-[50px]" src={Logo}></img>
    <Link to="/" className="text-blue-400 font-bold text-x1 md:text-3x1">Movies</Link>
    <Link to="favourites" className="text-blue-400 font-bold text-x1 md:text-3x1">Favourites</Link>
  </div>
  </>
}

export default NavBar;
