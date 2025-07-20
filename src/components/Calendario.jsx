// src/pages/Calendario.jsx
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

import TaskList from '../components/TaskList';
import ModalAdicionarTarefa from '../components/ModalAdicionarTarefa';
import './Calendario.css';

const Calendario = () => {
  const [calendarEvents, setCalendarEvents] = useState([
    { id: 'a', title: 'Reunião de Equipe', start: '2025-07-21T14:00:00', className: 'bg-primary' },
  ]);

  const [unscheduledTasks, setUnscheduledTasks] = useState([
    { id: 't1', title: 'Revisar Proposta', className: 'bg-info' },
    { id: 't2', title: 'Ligar para Cliente B', className: 'bg-success' },
    { id: 't3', title: 'Planejar Sprint', className: 'bg-warning text-dark' }
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // --- Funções de Manipulação ---
  const handleShowModal = (task = null) => {
    setEditingTask(task);
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      // Editando uma tarefa existente
      setUnscheduledTasks(unscheduledTasks.map(t => t.id === taskData.id ? taskData : t));
    } else {
      // Adicionando uma nova tarefa
      setUnscheduledTasks([...unscheduledTasks, taskData]);
    }
    handleCloseModal();
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      setUnscheduledTasks(unscheduledTasks.filter(t => t.id !== taskId));
    }
  };
  
  const handleEventReceive = (info) => {
    const { title, className } = info.event;
    setCalendarEvents(prev => [...prev, { id: `evt-${Date.now()}`, title, start: info.event.start, className }]);
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Tem certeza que deseja excluir o evento '${clickInfo.event.title}' do calendário?`)) {
        clickInfo.event.remove(); // Remove do DOM
        setCalendarEvents(prev => prev.filter(event => event.id !== clickInfo.event.id)); // Remove do estado
    }
  }

  return (
    <>
      <div className="row g-3">
        {/* Coluna da Lista de Tarefas */}
        <div className="col-lg-8">
          <TaskList tasks={unscheduledTasks} onEdit={handleShowModal} onDelete={handleDeleteTask} />
          <div className="d-grid p-2">
             <Button variant="primary" onClick={() => handleShowModal()}>
                <FaPlus className="me-2" /> Adicionar Tarefa
             </Button>
          </div>
        </div>

        {/* Coluna do Calendário */}
        <div className="col-lg-20">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
                themeSystem='bootstrap5'
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,dayGridWeek,dayGridDay'
                }}
                initialView="dayGridMonth"
                events={calendarEvents}
                editable={true}
                droppable={true}
                eventReceive={handleEventReceive}
                eventClick={handleEventClick} // Adicionado para exclusão de eventos
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      
      <ModalAdicionarTarefa
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveTask}
        task={editingTask}
      />
    </>
  );
};

export default Calendario;