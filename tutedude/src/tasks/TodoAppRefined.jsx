import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
  Navbar,
  Alert
} from 'react-bootstrap';

const TodoAppRefined = () => {
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

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>React Bootstrap To-Do App</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="shadow">
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter a task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <div className="d-grid mb-3">
                  <Button variant="primary" onClick={handleAdd}>
                    Add
                  </Button>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}

                <ListGroup>
                  {todos.map((todo, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {todo}
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TodoAppRefined;
