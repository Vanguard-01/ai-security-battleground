import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MissionPage from './pages/MissionPage'
import Resources from './pages/Resources'
import Capstone from './pages/Capstone'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mission/:id" element={<MissionPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/capstone" element={<Capstone />} />
            {/* optional: 404 */}
            <Route path="*" element={<div className="p-8">Page not found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

