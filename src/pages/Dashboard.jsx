// src/pages/Dashboard.jsx
import React from 'react';
import DashboardCard from '../components/DashboardCard';
import BarChart from '../components/BarChart';
import DataTable from '../components/DataTable';
import { FaShoppingCart, FaDollarSign, FaUsers, FaExclamationTriangle } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <>
      <h1 className="h2 mb-4">Dashboard</h1>
      <div className="row">
        <DashboardCard title="Vendas" value="1,250" icon={FaShoppingCart} color="primary" />
        <DashboardCard title="Lucro" value="R$ 8,320" icon={FaDollarSign} color="success" />
        <DashboardCard title="Novos Clientes" value="78" icon={FaUsers} color="warning" />
        <DashboardCard title="Pendentes" value="12" icon={FaExclamationTriangle} color="danger" />
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 mb-4">
          <BarChart />
        </div>
        <div className="col-lg-5 mb-4">
          <DataTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;