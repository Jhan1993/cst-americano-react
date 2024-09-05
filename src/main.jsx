import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importamos el router y las rutas
import App from './App.jsx';
import Home from './components/Home.jsx'; // Importamos la página Home
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Página de login */}
        <Route path="/home" element={<Home />} /> {/* Página Home */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
