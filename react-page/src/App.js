import carrito from './assets/img/carrito.png'
import './App.css';
import CompShowBlogs from './componentes/paginaPrincipal.js';
import CompCreateBlog from './componentes/crearComponente.js';
import CompEditBlog from './componentes/editarComponente';
import { Formulario } from './componentes/inicio.js';
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [user, setUser] = useState([])
  const handleLogout = () =>{
    setUser([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={carrito} className="App-logo" alt="logo" />
        <h3 className='text-black fw-bold mb-3'>Market Full Stack</h3>
      </header>
      {
        !user.length > 0
        ? <Formulario setUser={setUser} />
        :<BrowserRouter>
        <div className='d-grid gap-2 d-md-flex justify-content-center'>
        <button className='text-light fw-bold btn btn-danger mt-3 m-5 mb-3 me-md-2 border border-2 border-black' type='buttom' onClick={handleLogout}>Cerrar sesion</button>
        </div>
        <Routes>
          <Route path='/' element={<CompShowBlogs />} />
          <Route path='/create' element={<CompCreateBlog />} />
          <Route path='/edit/:id' element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
