// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Devolucao from './pages/Devolucao';
import JornadaLiquida from './pages/JornadaLiquida';
import Produtividade from './pages/Produtividade';
import Relatos from './pages/Relatos';
import Calendario from './components/Calendario';
import './App.css';


function App() {
  return (
    <div className="main-layout">
      <Sidebar />
      <main id="content">
        <Routes> {/* O <Routes> define a área onde o conteúdo da página será trocado */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/Devolucao" element={<Devolucao />} />
          <Route path="/JornadaLiquida" element={<JornadaLiquida />} />
          <Route path="/Produtividade" element={<Produtividade />} />
          <Route path="/Relatos" element={<Relatos />} />
          <Route path="/Calendario" element={<Calendario />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;