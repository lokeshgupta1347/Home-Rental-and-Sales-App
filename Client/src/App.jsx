import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Listing from './pages/Listing'
import Footer from './pages/Footer'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import MyBooking from './pages/MyBooking'
import AgencyReg from './components/AgencyReg'
import { useAppContext } from './context/AppContext'
import Sidebar from './components/owner/Sidebar'
import Dashboard from './pages/owner/Dashboard'
import AddProperty from './pages/owner/AddProperty'
import ListProperty from './pages/owner/ListProperty'

const App = () => {
  const {showAgencyReg}=useAppContext()
  const location =useLocation()
  const isOwnerPath=location.pathname.includes('owner')

  


  return (
    <main>
    {!isOwnerPath && <Header/>}
    {showAgencyReg && <AgencyReg></AgencyReg>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/listing/:id' element={<PropertyDetails/>}/>

        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-bookings' element={<MyBooking/>}/>
        <Route path='owner' element={<Sidebar></Sidebar>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='/owner/add-property' element={<AddProperty></AddProperty>}></Route>
          <Route path='/owner/list-property' element={<ListProperty></ListProperty>}></Route>

        </Route>

       

      </Routes>
      {!isOwnerPath && <Footer/>}
    </main>
  )
}

export default App


