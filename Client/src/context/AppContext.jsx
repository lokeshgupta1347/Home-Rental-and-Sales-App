import React, { createContext,useState, useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import {dummyProperties} from '../assets/data'

const AppContext =createContext()


export const AppContextProvider = ({children}) => {

  const navigate=useNavigate()
  const [properties,setProperties]=useState([])

  const getProperties=()=>{
    setProperties(dummyProperties)
  }
  
  useEffect(()=>{
    getProperties()
  },[])

  const value={
    navigate,properties

  }


  return (
    <AppContextProvider value={value}>
      {children}
    </AppContextProvider>
   
  )
}

export const useAppContext=()=>useContext(AppContext)



