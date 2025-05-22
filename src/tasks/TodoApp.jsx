import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  // Load from localStorage on first render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      setError('Task cannot be empty.');
      return;
    }

    setTodos([...todos, { id: Date.now(), text: trimmedTitle }]);
    setTitle('');
    setError('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      setTodos([]);
    }
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">React To-Do App</h3>

      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Input + Add */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}

      {/* Task List */}
      <ul className="list-group mb-3">
        {filteredTodos.length === 0 ? (
          <li className="list-group-item text-center text-muted">
            No tasks found.
          </li>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
              {todo.text}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Clear All */}
      {todos.length > 0 && (
        <div className="d-grid">
          <button className="btn btn-outline-danger" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
