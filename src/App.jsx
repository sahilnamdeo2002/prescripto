import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Doctors from './pages/Doctors.jsx';
import Login from './pages/Login';
import About from './pages/About.jsx';
import Navbar from "./components/Navbar";

import Appointments from './pages/Appointments.jsx';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">


      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointments />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App;
