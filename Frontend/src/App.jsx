import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandinPage from './Pages/LandingPage';
import Admin from './Pages/Admin';

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandinPage></LandinPage>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
