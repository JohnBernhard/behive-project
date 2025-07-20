// src/components/ModalAdicionarTarefa.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalAdicionarTarefa = ({ show, handleClose, handleSave, task }) => {
  const [title, setTitle] = useState('');
  const [criticality, setCriticality] = useState('bg-info'); // Cor padrão

  // useEffect para preencher o formulário quando estiver editando uma tarefa
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setCriticality(task.className);
    } else {
      // Limpa o formulário quando estiver adicionando uma nova tarefa
      setTitle('');
      setCriticality('bg-info');
    }
  }, [task, show]);

  const onSave = () => {
    if (!title) {
      alert('Por favor, insira um título para a tarefa.');
      return;
    }
    handleSave({
      // Se for uma edição, mantém o id original. Se não, gera um novo.
      id: task ? task.id : `task-${Date.now()}`,
      title,
      className: criticality
    });
  };

  const criticalityOptions = [
    { label: 'Baixa', value: 'bg-info' },
    { label: 'Média', value: 'bg-success' },
    { label: 'Alta', value: 'bg-warning text-dark' },
    { label: 'Urgente', value: 'bg-danger' }
  ];

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{task ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formTaskTitle">
            <Form.Label>Título da Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTaskCriticality">
            <Form.Label>Criticidade</Form.Label>
            <Form.Select
              value={criticality}
              onChange={(e) => setCriticality(e.target.value)}
            >
              {criticalityOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={onSave}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAdicionarTarefa;