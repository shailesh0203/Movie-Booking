import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useLocation } from 'react-router-dom'
import Layout from './pages/admin/Layout'
import DashBoard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'


function App() {
  const isAdminRoute=useLocation().pathname.startsWith('/admin')
  return (
   <>
    {!isAdminRoute && <Navbar/>}
    <Toaster position="top-center" />
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/movies/:id' element={<MovieDetails/>}/>
    <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
    <Route path='/my-bookings' element={<MyBookings/>}/>
    <Route path='/favourite' element={<Favorite/>}/>
    <Route path='/admin/*' element={<Layout/>}>
    <Route index element={<DashBoard/>}/>
    <Route path="add-shows" element={<AddShows/>}/>
    <Route path="list-shows" element={<ListShows/>}/>
    <Route path="list-bookings" element={<ListBookings/>}/>
    </Route>
   </Routes>
   {!isAdminRoute && <Footer/>}
   </>
  )
}

export default App