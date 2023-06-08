import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



const App = () => {
  return (
    <div className='jejox'>
      <BrowserRouter>
      <NavBar/>
      <ItemListContainer />
      </BrowserRouter>
    </div>
  )

}

export default App