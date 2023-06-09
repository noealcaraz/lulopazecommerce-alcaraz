import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import AboutPage from './components/pages/About'
import ContactPage from './components/pages/Contacto'
import ItemListContainer from './components/Cards/ItemListContainer'
import ItemDetailContainer from './components/Cards/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const App = () => {
  return (
    <div className='jejox'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App