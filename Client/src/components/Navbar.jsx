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
        <NavLink onClick={()=>{setmenuOpened(false);scrollTo(0,0);}} key={link.title} to={link.path} className={({isActive})=>`${isActive ? "active-link" : ""}px-3 py rounded-full uppercase text-sm font-bold`}>
        {link.title}

        </NavLink>


      })}
    </nav>
  )
}

export default Navbar



   


