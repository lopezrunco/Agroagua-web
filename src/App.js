import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from './pages/Inicio'
import Trabajos from './pages/Trabajos'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

import Nav from "./components/Nav"
import Bottom from "./components/Bottom"
import Footer from "./components/Footer"

import './App.scss'

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="trabajos" element={<Trabajos />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Bottom />
      <Footer />
    </div>
  );
}

export default App