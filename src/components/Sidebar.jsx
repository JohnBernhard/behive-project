// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaBoxOpen, 
  FaShoppingCart, 
  FaUsers, 
  FaChartLine, 
  FaSignOutAlt, 
  FaHive // Novo ícone para a marca
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav id="sidebar" className="d-flex flex-column p-0">
      <div className="sidebar-header text-center">
        <FaHive size="2em" /> {/* Ícone da marca */}
        <h3 className="mt-2">BeHive</h3>
      </div>

      <ul className="nav flex-column flex-grow-1">
        <li className="nav-item">
          <NavLink to="/" className={getNavLinkClass}>
            <FaTachometerAlt size="1.5em" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Devolucao" className={getNavLinkClass}>
            <FaBoxOpen size="1.5em" />
            <span>Devolução</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/JornadaLiquida" className={getNavLinkClass}>
            <FaUsers size="1.5em" />
            <span>Jornada Líquida</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Produtividade" className={getNavLinkClass}>
            <FaShoppingCart size="1.5em" />
            <span>Produtividade</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Relatos" className={getNavLinkClass}>
            <FaChartLine size="1.5em" />
            <span>Relatos</span>
          </NavLink>
        </li>
        <li className="nav-item mt-auto">
          <NavLink to="/sair" className={getNavLinkClass}>
            <FaSignOutAlt size="1.5em" />
            <span>Sair</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;