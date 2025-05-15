import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const handleAdd = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      setError('Task cannot be empty.');
      return;
    }

    setTodos([...todos, trimmedTitle]);
    setTitle('');
    setError('');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">React To-Do App</h3>

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

      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
