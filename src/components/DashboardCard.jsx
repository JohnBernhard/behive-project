// src/components/DashboardCard.jsx
import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className={`card text-white bg-${color} h-100`}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <div className="h5">{title}</div>
            <div className="h2 fw-bold">{value}</div>
          </div>
          <Icon className="fa-3x opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;