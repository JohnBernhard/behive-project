// src/components/TaskList.jsx
import React, { useEffect, useRef } from 'react';
import { Draggable } from '@fullcalendar/interaction';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import './TaskList.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const containerEl = useRef(null);

  useEffect(() => {
    if (containerEl.current) {
      const draggable = new Draggable(containerEl.current, {
        itemSelector: '.fc-event',
        eventData: (eventEl) => {
          return {
            title: eventEl.dataset.title, // Pega o título do data-attribute
            duration: '01:00',
            className: eventEl.dataset.className
          };
        }
      });
      return () => draggable.destroy();
    }
  }, [tasks]);

  return (
    <div ref={containerEl} id="external-events" className="task-list-container">
      <div className="task-list-header">
        <h4>Tarefas Não Agendadas</h4>
      </div>
      <div className="p-2">
        {tasks.map(task => (
          <div
            className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event task-item ${task.className}`}
            data-title={task.title}
            data-class-name={task.className}
            key={task.id}
          >
            <div className="fc-event-main">{task.title}</div>
            <div className="task-actions">
              <FaPencilAlt className="action-icon" onClick={() => onEdit(task)} />
              <FaTrashAlt className="action-icon" onClick={() => onDelete(task.id)} />
            </div>
          </div>
        ))}
        {tasks.length === 0 && <p className="text-muted text-center mt-2">Nenhuma tarefa pendente.</p>}
      </div>
    </div>
  );
};

export default TaskList;