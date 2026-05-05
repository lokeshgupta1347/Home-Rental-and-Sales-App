import React, { createContext,useState, useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import {dummyProperties} from '../assets/data'
import { useUser } from '@clerk/react'

const AppContext =createContext()


export const AppContextProvider = ({children}) => {
  const currency=import.meta.env.VITE_CURRENCY

  const navigate=useNavigate()
  const [properties,setProperties]=useState([])
    const {user}=useUser()
  const [showAgencyReg, setshowAgencyReg] = useState(false)

  const getProperties=()=>{
    setProperties(dummyProperties)
  }
  
  useEffect(()=>{
    getProperties()
  },[])

  const value={
    navigate,properties,currency,user,showAgencyReg,setshowAgencyReg

  }


  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext=()=>useContext(AppContext)



