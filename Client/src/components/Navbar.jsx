import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (setmenuOpened,containerStyles) => {

  const navLinks=[
    {path:'/',title:'Listing'},
    {path:'/listing',title:'Listing'},
    {path:'/blog',title:'Blog'},
    {path:'/contact',title:'Contact'}
  ];


  return (
    <nav className={`${containerStyles}`} >
      {navLinks.map((link)=>{
        <NavLink key={link.title}>
        {link.title}

        </NavLink>


      })}
    </nav>
  )
}

export default Navbar