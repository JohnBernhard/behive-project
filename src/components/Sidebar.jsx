// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // 1. Importe o NavLink
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaUsers, FaChartLine, FaSignOutAlt, FaCogs, FaCalendar, FaCalendarDay } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  // 3. Função para definir a classe do link ativo
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav id="sidebar" className="d-flex flex-column p-0">
      <div className="sidebar-header text-center">
        <h3><FaCogs className="me-2" />Meu Painel</h3>
      </div>

      <ul className="nav flex-column flex-grow-1">
        {/* 2. Substitua <a> por <NavLink> e href por to */}
        <li className="nav-item">
          <NavLink to="/" className={getNavLinkClass}><FaTachometerAlt /> Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Devolucao" className={getNavLinkClass}><FaBoxOpen /> Devolução</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/JornadaLiquida" className={getNavLinkClass}><FaUsers /> Jornada Líquida</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Produtividade" className={getNavLinkClass}><FaShoppingCart /> Produtividade</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Relatos" className={getNavLinkClass}><FaChartLine /> Relatos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Calendario" className={getNavLinkClass}><FaCalendarDay /> Calendário</NavLink>
        </li>
        <li className="nav-item mt-auto">
          <NavLink to="/sair" className={getNavLinkClass}><FaSignOutAlt /> Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;