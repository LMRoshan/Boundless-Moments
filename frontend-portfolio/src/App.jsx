import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Gallery from '../pages/Gallery'
import MainExperience from '../pages/MainExperience';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Add from './components/Add';
import Dashboard from './components/Dashboard';
import UnderConstruction from './components/UnderConstruction';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/experience" element={<MainExperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<Add />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/construction" element={<UnderConstruction />} />
      </Routes>
    </>
  )
}

export default App
