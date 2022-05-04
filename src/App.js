import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from './pages/Inicio'
import Trabajos from './pages/Trabajos'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

import Nav from "./components/Nav"

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Agro agua</h1>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="trabajos" element={<Trabajos />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App