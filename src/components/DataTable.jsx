// src/components/DataTable.jsx
import React from 'react';

const DataTable = () => {
  // Dados de exemplo que viriam de uma API
  const orders = [
    { id: '#1024', product: 'Laptop Pro', customer: 'João Silva', status: 'Enviado', statusClass: 'success' },
    { id: '#1025', product: 'Mouse Gamer', customer: 'Maria Oliveira', status: 'Pendente', statusClass: 'warning text-dark' },
    { id: '#1026', product: 'Teclado Mecânico', customer: 'Carlos Pereira', status: 'Enviado', statusClass: 'success' },
    { id: '#1027', product: 'Monitor 4K', customer: 'Ana Costa', status: 'Cancelado', statusClass: 'danger' },
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <i className="fas fa-table me-1"></i>
        Últimos Pedidos
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Cliente</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.customer}</td>
                  <td><span className={`badge bg-${order.statusClass}`}>{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;