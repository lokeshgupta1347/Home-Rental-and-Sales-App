import React, { useEffect, useState } from 'react'
import { assets } from '../assets/data'
import Navbar from './Navbar'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {

  const [active,setActive]=useState(false)
  const [menuOpened,setmenuOpened]=useState(false)
  const [showSearch, setshowSearch] = useState(false)
  const location =useLocation()

  useEffect(()=>{
    const handleScroll=()=>{
      if(location.pathname==='/')
      {
        setActive(window.scrollY>10)
      }
      else{
        setActive(true) //always stay active on other pages
      }
    }

    window.addEventListener("scroll",handleScroll)
    // run once to set initial active state
    handleScroll()


    return ()=>{
      window.removeEventListener("scroll",handleScroll)

    }

  },[location.pathname])


  return (
    <header className={`${active ? "bg-white py-3 shadow-mid" : "py-4"} fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}>
    <div className='max-padd-container'>
      {/*container*/}
      <div className='flexBetween'>
        {/*LOgo */}
        <div className=' flex flex-1'>
          <Link to={'/'}>
             <img src={assets.logoImg} alt="logo" className={`${!active && "invert"} h-11`} />

          </Link>
        </div>
        {/*Navbar */}
        <Navbar 
        active={active}
        setmenuOpened={setmenuOpened}
        containerStyles={`${
        menuOpened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-50"
        : "hidden lg:flex gap-x-5 xl:gap-x-1 medium-15 p-1"
        
        } ${!menuOpened && !active ? "text-white" : ""}`}

        />
        {/* buttons & profile */}
        <div className='flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8'>
          {/* searchbar */}
          <div>
            searchbar
          </div>
          {/* menu toggle */}
          <>
            menubtn
          </>
          {/* userprofile */}
          <div>
          {/* user  */}
          <div>
            <div>
              <button className='btn-secondary flexCenter gap-2 rounded-full'>
              Login
              <img src={assets.user} alt="userIcon" />
              </button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>


    </header>
  )
}

export default Header