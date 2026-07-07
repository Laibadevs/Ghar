import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div className="flex items-center justify-center h-64 font-serif text-3xl">Coming soon</div>} />
      </Routes>
    </div>
  )
}